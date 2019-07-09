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
from ShopProject.settings import ADMIN, MEDIA_ROOT, ALLOWED_FILEEXTS, MEDIA_ROOT_GOODS, SMSCONFIG, SUPER


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
                    print(res[0])
                    request.session['user'] = {'u_username':res[0].u_username,'u_type':res[0].u_type}
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

    # if request.META['REMOTE_ADDR'] == '10.0.113.226':
    username = request.session.get('username')
    title = request.session.get('title')

    return render(request,'admins/main.html',locals())
    # return redirect(reverse('app:index'))

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

    # 控制权限


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

def userupdate(request,uid):
    user = AppUser.objects.get(pk=uid)
    username = request.session.get('username')
    print(username)
    # 当前登录的用户和超级管理员有修改权限

    # if user.u_type != SUPER or
    if request.method == 'POST':

        return HttpResponse('ok')


    return render(request, 'admins/userupdate.html',context={'uid':uid,'user':user})


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

# 文章首页
def article1(request, page=1):
    article_obj = models.Article.objects.first()
    article_obj_uid = article_obj.uid.u_username
    article_obj1_uid = article_obj.uid.u_icon
    article_obj2_uid = article_obj.uid.id
    article_obj1_g_image = article_obj.a_goods.g_image
    # typeid=AppGoods.objects.filter(g_image=article_obj1_g_image)
    a_title = Article.objects.filter(uid=article_obj2_uid)
    a = a_title[0].a_title
    a_publish_time = Article.objects.filter(uid=article_obj2_uid)
    b = a_publish_time[0].a_publish_time
    a_goods_id = Article.objects.filter(uid=article_obj2_uid)
    c = a_goods_id[0].a_goods_id
    g_replygalike = Reply.objects.filter(g_goodsid=c)
    d = g_replygalike[0].g_replygalike
    e = Reply.objects.filter(g_goodsid=c).values('g_reply').count()
    ti = str(b)
    front = ti.split(' ')[0]
    behind1 = ti.split(' ')[1]
    behind2 = behind1.split('+')[0]
    behind = behind1.split('+')[0] + "+08:00"
    data = Article.objects.all()
    paginator = Paginator(data, 8)
    page = int(page)
    pagination = paginator.page(page)
    if paginator.num_pages > 10:
        if page - 5 <= 0:
            customRange = range(1, 11)
        elif page + 4 > paginator.num_pages:
            customRange = range(paginator.num_pages - 9, paginator.num_pages + 1)
        else:
            customRange = range(page - 5, page + 5)
    else:
        customRange = paginator.page_range
    return render(request, 'article.html', context={
        'data': pagination.object_list,
        'pagerange': customRange,
        'pagination': pagination,
        'u_username': article_obj_uid,
        'u_icon': article_obj1_uid,
        'a_title': a,
        'g_replygalike': d,
        'replycount': e,
        'g_image': article_obj1_g_image,
        'front': front,
        'behind': behind,
        'behind2': behind2,

    })


# 插入文章
def article_add(request):
    if request.method=='POST':
        u_username = request.session.get('username')
        id1 = AppUser.objects.filter(u_username=u_username)
        id2=id1[0].id
        gid_id=AppListgoods.objects.filter(uid_id=id2)
        gid_id1=gid_id[0].gid_id
        g_image=AppGoods.objects.filter(id=gid_id).values('g_image')
        # g_image1=g_image[0].g_image
        subject = request.POST.get('subject')
        print(subject)
        content = request.POST.get('content')
        a_publish_time = datetime.datetime.now()
        # print('$$$$$$$$$$$$$')
        # print(g_image)
        Article.objects.create(a_title=subject, a_content=content,a_image=g_image, a_read_count=0, a_publish_time=a_publish_time,
                a_is_delete=0, a_hot=0, a_type=0, a_bord=0, uid=id1[0], a_goods_id=gid_id1)
    return redirect(reverse('App:article'))


# 展示写文章页面
def showarticleadd(request):
    if request.method=='POST':
        u_username = request.session.get('username')
        id1 = AppUser.objects.filter(u_username=u_username)
        id2=id1[0].id
        gid_id=AppListgoods.objects.filter(uid_id=id2)
        gid_id1=gid_id[0].gid_id
        g_image=AppGoods.objects.filter(id=gid_id).values('g_image')
        # g_image1=g_image[0].g_image
        subject = request.POST.get('subject')
        print(subject)
        content = request.POST.get('content')
        a_publish_time = datetime.datetime.now()
        # print('$$$$$$$$$$$$$')
        # print(g_image)
        Article.objects.create(a_title=subject, a_content=content,a_image=g_image, a_read_count=0, a_publish_time=a_publish_time,
                a_is_delete=0, a_hot=0, a_type=0, a_bord=0, uid=id1[0], a_goods_id=gid_id1)
    return render(request,'article_add.html')


# 个人主页
def member_index(request,name):
    id=AppUser.objects.filter(u_username=name)
    id1=id[0].id
    a_title=Article.objects.filter(uid=id)
    a_title1=a_title[0].a_title
    a_publish_time=Article.objects.filter(uid=id)
    a_publish_time1=a_publish_time[0].a_publish_time
    ti2 = str(a_publish_time1)
    a_front = ti2.split(' ')[0]
    a_behind1 = ti2.split(' ')[1]
    a_behind2 = a_behind1.split('+')[0]
    a_behind = a_behind1.split('+')[0] + "+08:00"
    uid_count=Article.objects.filter(uid=id).count()
    uid_collection=AppCollection.objects.filter(uid_id=id).count()
    u_icon=AppUser.objects.filter(u_username=name)
    u_icon1=u_icon[0].u_icon
    u_credits=AppUser.objects.filter(u_username=name)
    u_credits1=u_credits[0].u_credits
    if 50<=u_credits1<150:
        a='lv.0'
        b=u_credits1-50
    elif 150<=u_credits1<250:
        a='lv.1'
        b=u_credits1-50
    elif 250<=u_credits1<350:
        a='lv.2'
        b=u_credits1-50
    else:
        a='lv.3'
        b=u_credits1-50
    c=Focuson.objects.filter(f_type=0,f_userid=id).count()
    f_focus=Focuson.objects.filter(f_type=0)
    list = []
    list1=[]
    for i in f_focus:
        id = AppUser.objects.filter(u_username=name)
        id1=id[0].id
        d=i.f_focus
        f= d.split(" ")[1]
        h=d.split(" ")[0]
        if int(h)==id1:
            f1=d.split(" ")[1]
            u_username=AppUser.objects.filter(id=f1)
            u_username1=u_username[0].u_username
            list1.append(u_username1)
        print(list1)
        if int(f)==id1:
            list.append(f)
    g=len(list)
    gid_id = AppListgoods.objects.filter(uid_id=id)
    gid_id1 = gid_id[0].gid_id
    g_reply=Reply.objects.filter(g_goodsid=gid_id1)
    g_reply1=g_reply[0].g_reply
    g_replytime=Reply.objects.filter(g_goodsid=gid_id1)
    g_replytime1=g_replytime[0].g_replytime
    ti1 = str(g_replytime1)
    g_front = ti1.split(' ')[0]
    g_behind1 = ti1.split(' ')[1]
    g_behind2 = g_behind1.split('+')[0]
    g_behind = g_behind1.split('+')[0] + "+08:00"
    g_name = AppGoods.objects.filter(id=gid_id1)
    g_name1 = g_name[0].g_name
    id = Reply.objects.filter(g_goodsid=gid_id1)
    reply_id1 = id[0].id
    g_star=Reply.objects.filter(g_goodsid=gid_id1)
    g_star1 = g_star[0].g_star
    c_reply = Commentreply.objects.filter(user=reply_id1)
    c_reply1 = c_reply[0].c_reply
    c_replytime = Commentreply.objects.filter(user=reply_id1)
    c_replytime1 = c_replytime[0].c_replytime
    ti = str(c_replytime1)
    front = ti.split(' ')[0]
    behind1 = ti.split(' ')[1]
    behind2 = behind1.split('+')[0]
    behind = behind1.split('+')[0] + "+08:00"
    return render(request,'member_index.html',context={
        'u_username':name,
        'a_title':a_title1,
        'u_icon':u_icon1,
        'u_credits1':a,
        'g_reply':g_reply1,
        'count':b,
        'list1':list1,
        'guanzhu':c,
        'fensi':g,
        'uid_count':uid_count,
        'collections':uid_collection,
        'c_reply':c_reply1,
        'g_name':g_name1,
        ' c_replytime1': c_replytime1,
        'front':front,
        'behind':behind,
        'behind2':behind2,
        'g_front':g_front,
        'g_behind':g_behind,
        'g_behind2':g_behind2,
        'g_star':range(g_star1),
        'a_front':a_front,
        'a_behind':a_behind,
        'a_behind2':a_behind2
    })
