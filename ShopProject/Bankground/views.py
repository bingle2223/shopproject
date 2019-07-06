import os
import uuid
from datetime import datetime
from random import randint

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect


# Create your views here.
from django.urls import reverse


from Bankground.models import AppGoodstype, AppGoods, AppUser
from ShopProject.settings import ADMIN, MEDIA_ROOT, ALLOWED_FILEEXTS, MEDIA_ROOT_GOODS



def index(request):

    return render(request,'adminlogin.html')


def login(request):
    title = '后台登录'
    if request.method == 'POST':
        username = request.POST.get('username')
        password =request.POST.get('password')

        res = AppUser.objects.filter(u_username=username)
        print(username,password,res)
        if res.exists():
            if res[0].u_username == username and res[0].u_password_has == password and res[0].u_type == ADMIN:
                title = '后台主页'
                request.session.flush()
                request.session['username'] = username
                request.session['title'] = title

                return redirect(reverse('bankground:main'))
            else:
                return HttpResponse('用户名或密码错误')

        else:
            return HttpResponse('用户名不存在')

    return render(request,'login.html',context={'title':title})

# 超级管理员重置密码
def resetpwd(request):


    return HttpResponse('ok')

# 超级管理员退出
def logout(request):

    return redirect(reverse('bankground:login'))

# 首页
def main(request):

    username = request.session.get('username')
    title = request.session.get('title')

    return render(request,'main.html',locals())

# 管理员管理
def user(request):

    return render(request,'user.html')

# 广告管理
def banner(request):
    return render(request,'banner.html')

#意见管理
def opinion(request):
    return render(request,'opinion.html')

#会员管理
def vip(request):
    return render(request,'vip.html')

#帖子管理
def topic(request):
    return render(request,'topic.html')

# 订单管理
def appointment(request):
    return render(request,'appointment.html')

# 收支管理
def balance(request):
    return render(request,'balance.html')

# 改密
def changepwd(request):
    return render(request,'changepwd.html')

# 退出
def log(request):
    request.session.flush()

    return redirect(reverse('bankground:login'))

# 添加或修改商品
def banneradd(request):
    title = '添加商品'
    if request.method == 'POST':
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
        gimagelist = []
        # 遍历图片列表
        g_image = []
        for file in gimage:
            print(file)
            # 文件路径
            path = os.path.join(MEDIA_ROOT_GOODS, file.name)
            # 文件类型过滤
            ext = os.path.splitext(file.name)
            print(ext[1])
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
                file_name = ext[0] + datetime.today().strftime("%Y%m%d%H%M%S") + str(randint(1, 1000)) + ext[1] if len(ext) > 0 else ''
                path = os.path.join(dir, file_name)
                imagepath = '/static/goodsimg/'+str(g_name)+'/'+file_name
                gimagelist.append(imagepath)
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
        AppGoods(g_name=g_name,g_description=g_description,g_hot=g_hot,g_number=g_number,g_image=gimagelist[0],typeid=typeid,g_credits=g_credits,g_price=g_price,g_discount=g_discount).save()
        return HttpResponse('提交成功')
    return render(request,'banneradd.html',context={'title':title})

# 删除商品
def bannerdel(request):


    data = {
        'status':204,
        'message':'删除成功'
    }
    return JsonResponse(data)