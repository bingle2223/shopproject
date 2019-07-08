import datetime
import hashlib
import re
from random import randint
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from ShopProject.settings import SMSCONFIG
from app.models import AppUser, AppGoodstype, AppGoods, Reply
# Create your views here.
from app.forms import UserReg, UserLogin
from app.sms import send_sms

def index(request):
    goodstypes = list(AppGoodstype.objects.all())
    print(goodstypes)
    gooddict = {}
    for res in goodstypes:
        goods = list(AppGoods.objects.filter(typeid=res.id)[0:5])
        gooddict[res.id] = goods
    users = list(AppUser.objects.all())
    goods = AppGoods.objects.filter(g_hot=1)[2:7]
    replys = list(Reply.objects.all())
    return render(request, 'index.html',context={'dict':gooddict,'users':users,'goods':goods,'replys':replys})


# 注册
def reg(request):
    res = UserReg()
    if request.method == 'POST':
        res = UserReg(request.POST)
        if res.is_valid():
            code = request.POST.get('msgcode')
            if code != request.session.get('smscode'):
                return render(request, 'register.html', context={'user': res,'codeer':'验证码错误'})
            else:
                request.session.flush()
                phone = request.POST.get('phone')
                email = request.POST.get('email')
                username = request.POST.get('user_name')
                password = request.POST.get('pwd')
                auser = AppUser()
                auser.u_username = username
                auser.u_password_has = hashlib.sha1(password.encode('utf8')).hexdigest()
                auser.u_email = email
                auser.u_phone = phone
                auser.u_sex = True
                auser.u_register_time = datetime.datetime.now()
                auser.u_type = 0
                auser.u_credits = 50
                auser.save()
                return redirect(reverse('app:login'))
        return render(request, 'register.html', context={'user': res})
    return render(request,'register.html',context={'user': res})

# 登陆
def login(request):
    res = UserLogin()
    if request.method == 'POST':
        res = UserLogin(request.POST)
        if res.is_valid():
            username = request.POST.get('username')
            res = AppUser.objects.filter(u_username=username).all()
            request.session['username'] = res[0].u_username
            request.session['type'] = res[0].u_type
            request.session['id'] = res[0].id
            request.session['image'] = res[0].u_icon
            return redirect(reverse('app:index'))
        return render(request, 'login.html', context={'user': res})
    return render(request, 'login.html', context={'user': res})

#退出
@csrf_exempt
def logout(request):
    request.session.flush()
    return redirect(reverse('app:index'))

# 发送手机验证码
def getcode(request):
    if request.method == 'POST':
        num = randint(100000, 999999)
        request.session['smscode'] = str(num)
        request.session.set_expiry(300)
        phone = request.POST.get('phone')
        send_sms(phone, {'code': str(num)}, **SMSCONFIG)
        return JsonResponse({'code': 1, 'msg': 'ok'})
    return redirect(reverse('app:index'))

# 修改密码
def userset(request):
    email = AppUser.objects.filter(u_username=request.session.get('username')).values('u_email')
    email = email if email.exists() else ''
    if request.method == 'POST':
        # 数据库中的密码
        username = request.session.get('username')
        user = AppUser.objects.filter(u_username=username).first()
        u_password = user.u_password_has
        # 输入的現用密码
        usercurrent = request.POST.get('usercurrent_password')
        usercurrenthx = hashlib.sha1(usercurrent.encode('utf8')).hexdigest()
        # 输入的修改密码
        userpassword = request.POST.get('userpassword')
        userpasswordhx = hashlib.sha1(userpassword.encode('utf8')).hexdigest()
        # 确认密码
        confirmation = request.POST.get('userpassword_confirmation')
        if u_password == usercurrenthx:
            if not re.match(r'\d+$', userpassword) and userpassword == confirmation:
                u_password = userpasswordhx
                user.save()
                error = '密码修改失败'
                return render(request, 'member_account.html', context={'email': email,'error':error})
    else:
        error = ''
        return render(request, 'member_account.html', context={'email': email,'error':error})

# 修改邮箱
def changemail(request):
    if request.method == 'POST':
        email = request.POST.get('useremail')
        user = AppUser.objects.filter(u_username=request.session.get('username')).first()
        user.u_email = email
        user.save()
        error = ''
        email = email
        return render(request, 'member_account.html', context={'email': email,'error':error})

