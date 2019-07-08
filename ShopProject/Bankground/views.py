import hashlib
import os
import io
import uuid
from datetime import datetime
import random

from PIL import Image, ImageDraw, ImageFont
from django.core.paginator import Paginator
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect


# Create your views here.
from django.urls import reverse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from werkzeug.exceptions import abort

from Bankground.forms import GoodsAdd, UseraddForm
from Bankground.models import AppGoodstype, AppGoods, AppUser
from Bankground.send_sms import send_sms
from ShopProject.settings import ADMIN, MEDIA_ROOT, ALLOWED_FILEEXTS, MEDIA_ROOT_GOODS, SMSCONFIG


def index(request):

    return render(request,'admins/main.html')






def get_code(request):


    image_size = (100, 50)

    background = get_color()

    # 画布构建
    image = Image.new("RGB", image_size, background)

    # 画笔
    image_draw = ImageDraw.Draw(image, "RGB")

    for i in range(10):
        image_draw.line((random.randrange(100), random.randrange(50)), fill=get_color())

    code = generate_code()

    for i in range(len(code)):
        # 绘制
        image_draw.text((20 * i +random.randrange(25), random.randrange(15)), code[i], font=get_font(), fill=get_color())

    # 内存流
    buffer = io.BytesIO()
    #
    image.save(buffer, "png")

    request.session["code"] = code
    print(code)

    return HttpResponse(buffer.getvalue(), content_type="image/png")

# 获取颜色
def get_color():
    red = random.randrange(256)
    green = random.randrange(256)
    blue = random.randrange(256)

    return red, green, blue

# 字体
def get_font():
    font = ImageFont.truetype(font="/home/rock/python1904/ShopProject/static/fonts/ADOBEARABIC-BOLDITALIC.OTF" ,size=random.randrange(30, 50))
    return font

# 验证码
def generate_code():
    source_code = "1234567890abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRESUVWXYZ"
    dest = ""
    for i in range(4):
        dest += random.choice(source_code)

    return dest

#后台登录
def login(request):
    title = '后台登录'
    if request.method == 'POST':
        username = request.POST.get('username')
        password =request.POST.get('password').encode('utf8')
        # 密码加密
        password= hashlib.sha1(password).hexdigest()
        code = request.session.get("code")
        verify_code = request.POST.get("verify_code")
        print(code,verify_code)
        res = AppUser.objects.filter(u_username=username)
        print(username,password,res)

        if res.exists() and verify_code and code:
            if res[0].u_username == username and res[0].u_password_has == password and res[0].u_type == ADMIN:
                if code.lower() == verify_code.lower():
                    title = '后台主页'
                    request.session.flush()
                    request.session['username'] = username
                    request.session['title'] = title

                    return redirect(reverse('bankground:main'))
                else:
                    return HttpResponse('验证码输入错误')
            else:
                return HttpResponse('用户名或密码错误')

        else:
            return HttpResponse('用户名不存在')

    return render(request,'admins/login.html',context={'title':title})

# 超级管理员重置密码
def resetpwd(request):


    return HttpResponse('ok')

# 超级管理员退出
def logout(request):
    request.session.flush()
    return redirect(reverse('bankground:login'))

# 首页
def main(request):

    if request.META['REMOTE_ADDR'] == '192.168.140.132':
        username = request.session.get('username')
        title = request.session.get('title')

        return render(request,'admins/main.html',locals())
    return redirect(reverse('app:index'))

# 管理员管理
def user(request,page=1):
    adminusers = AppUser.objects.filter(u_type=ADMIN).all()

    # 分页器对象
    paginator = Paginator(adminusers,5)
    # 创建分页对象
    page = int(page)

    pagination = paginator.page(page)
    # 3 自定义页码范围
    if paginator.num_pages > 10:
        # 如果当前页码-5小于0
        if page - 5 <= 0:
            customRange = range(1, 11)
        elif page + 4 > paginator.num_pages:
            customRange = range(paginator.num_pages - 9, paginator.num_pages + 1)
        else:
            customRange = range(page - 5, page + 5)
    else:  # 页码总数小于10
        customRange = paginator.page_range

    return render(request,'admins/user.html',locals())


def getcode(request):
    num = random.randint(100000, 999999)
    print(num)
    request.session['smscode'] = str(num)
    request.session.set_expiry(60)
    phone = request.GET.get('phone')
    send_sms(phone, {'code': str(num)}, **SMSCONFIG)
    data = {'status': 201, 'message': '发送成功'}
    return JsonResponse(data)
    # return redirect(reverse('bankground:useradd'))
def useradd(request):

    form = UseraddForm()
    if request.method == 'POST':
        form = UseraddForm(request.POST)
        print(request.POST)
        if form.is_valid():
            print('验证过了')
            code = request.POST.get('msgcode')
            veriycode = request.session.get('smscode')
            if code != veriycode or code == None:
                msg = '验证码输入有误'
                return render(request,'admins/useradd.html',context={
                    'form':form,
                    'msg':msg
                })
            # 删除确认密码
            del form.cleaned_data['chkpassword']
            # 密码加密
            value = form.cleaned_data['password']
            u_password_has = hashlib.sha1(value.encode('utf8')).hexdigest()
            u_username = form.cleaned_data['username']
            u_icon = ''
            u_phone = form.cleaned_data['phone']
            u_sex = form.cleaned_data['sex']
            u_email = form.cleaned_data['email']
            u_register_time = datetime.now()
            u_type = ADMIN
            u_credits = 0
            u_area = '北京'
            u_description = '管理员%d'%random.randint(1,1000)


            # 创建对象
            AppUser.objects.create(u_username=u_username,u_password_has=u_password_has,u_icon=u_icon,u_phone=u_phone,u_sex=u_sex,u_email=u_email,u_register_time=u_register_time,u_type=u_type,u_credits=u_credits,u_area=u_area,u_description=u_description)
            return redirect(reverse('bankground:user'))
    return render(request,'admins/useradd.html',context={'form':form})

def userupdate(request):
    if request.method == 'POST':
        pass


    return render(request, 'admins/userupdate.html')


# 广告管理
def banner(request):
    return render(request,'admins/banner.html')

#意见管理
def opinion(request):
    return render(request,'admins/opinion.html')

#会员管理
def vip(request):
    return render(request,'admins/vip.html')

#帖子管理
def topic(request):
    return render(request,'admins/topic.html')

# 订单管理
def appointment(request):
    return render(request,'admins/appointment.html')

# 收支管理
def balance(request):
    return render(request,'admins/balance.html')

# 改密
def changepwd(request):
    return render(request,'admins/changepwd.html')

# 退出
def log(request):
    request.session.flush()

    return redirect(reverse('bankground:login'))

# 添加或修改商品
def banneradd(request):
    title = '添加商品'
    # form = GoodsAdd()
    if request.method == 'POST':
        # form = GoodsAdd(request.POST)
        # if form.is_valid():
        #     print(form.cleaned_data)
        gimage=[]
        g_name = request.POST.get('gname')
        g_description = request.POST.get('gdescription')

        g_hot = request.POST.get('ghot')
        g_number = request.POST.get('gnumber')
        g_price = request.POST.get('gprice')
        g_discount = request.POST.get('gdiscount')
        g_credits = request.POST.get('gcredits')
        typeid = request.POST.get('gtype')

        gimage.append(request.FILES.get('photo'))
        gimage.append(request.FILES.get('photo1'))


        # 遍历图片列表
        g_image = []
        for file in gimage:
            # print(file)
            # 文件路径
            path = os.path.join(MEDIA_ROOT_GOODS, file.name)
            # 文件类型过滤
            ext = os.path.splitext(file.name)
            # print(ext[1])
            if len(ext) < 1 or not ext[1] in ALLOWED_FILEEXTS:

                return HttpResponse('提交失败，文件格式不正确')

            # 解决文件重名
            if os.path.exists(path):

                # 商品名称目录
                # unique = uuid.uuid4()
                dir = os.path.join(MEDIA_ROOT_GOODS, str(g_name))
                if not os.path.exists(dir):
                    os.makedirs(dir)  # 递归创建目录

                # 图片绝对路径
                file_name = ext[0] + datetime.today().strftime("%Y%m%d%H%M%S") + str(random.randint(1, 1000)) + ext[1] if len(ext) > 0 else ''
                path = os.path.join(dir, file_name)
                # print(path)

            # 创建新文件
            with open(path, 'wb') as fp:
                # 如果文件超过2.5M,则分块读写
                if file.multiple_chunks():
                    for block1 in file.chunks():
                        fp.write(block1)
                else:
                    fp.write(file.read())
            g_image.append(path)

        typeid = AppGoodstype.objects.filter(id=typeid).first()
        # print(g_type,type(g_type))

        appgoods = AppGoods(g_name=g_name,g_description=g_description,g_hot=g_hot,g_number=g_number,g_image=g_image,typeid=typeid,g_credits=g_credits,g_price=g_price,g_discount=g_discount)
        print(appgoods.save())
        if not appgoods.save():
            data = {
                "msg": "保存失败",
                "status": 400
            }

            return HttpResponse('保存失败，请重新提交')


        return HttpResponse('提交成功')



    return render(request,'banneradd.html',context={'title':title})


# 删除商品
def bannerdel(request):


    data = {
        'status':204,
        'message':'删除成功'
    }
    return JsonResponse(data)
# 会员管理
def vipadd2(request):

    return render(request,'vipadd2.html')

# 话题和管理
def topicadd(request):
    return render(request,'topicadd.html')

#话题编辑
def topicupdata(request):
    return render(request,'topicupdate.html')



# vip添加
def vipadd(request):
    return render(request,'vipadd.html')

#vip改密
def vipreset(request):
    return render(request,'vipreset.html')


