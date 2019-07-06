import hashlib
import re

from django import forms
from django.core.exceptions import ValidationError

from App.models import AppUser

# 注册验证
class UserReg(forms.Form):
    user_name = forms.CharField(label='用户名',min_length=3,max_length=30,error_messages={
        'require':'必填',
        'min_length':'最少6个字符',
        'max_length':'最少30个字符'
    } )
    pwd = forms.CharField(label='密码', min_length=3, max_length=30,widget=forms.PasswordInput(),
                               error_messages={
        'require': '必填',
        'min_length': '最少3个字符',
        'max_length': '最少30个字符',

    })
    cpwd = forms.CharField(label='确认密码', min_length=3, max_length=30, widget=forms.PasswordInput(),
                          error_messages={
                              'require': '必填',
                              'min_length': '最少3个字符',
                              'max_length': '最少30个字符',

                          })

    phone = forms.CharField(label='手机号',min_length=11,required=False,error_messages={
        'min_length': '手机号为11位',
    })
    email = forms.EmailField(label='邮箱',required=False,error_messages={
        'invalid': '邮箱格式不对',
    })


    def clean(self):

        password1 = self.cleaned_data.get("pwd")

        password2 = self.cleaned_data.get("cpwd")
        if password1 != password2:
            raise ValidationError({'cpwd':"两次密码不一致"})
        else:
            return self.cleaned_data


    def clean_phone(self):
        value = self.cleaned_data.get('phone')

        if not re.match(r"^1[35678]\d{9}$", value):
            raise ValidationError("手机号码不正确,请重新填写")
        else:
            return value

    def clean_password(self):
        value = self.cleaned_data.get('pwd')
        if re.match(r'\d+$', value):
            raise ValidationError('密码不能是纯数字')
        else:
            return value

    def clean_email(self):
        value = self.cleaned_data.get('email')
        if not re.match(r"^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$",value):
            raise ValidationError('邮箱格式不合法')
        else:
            return value


    def clean_username(self):
        value = self.cleaned_data.get('user_name')
        name = AppUser.objects.filter(u_username=value).all()
        print('111111111111111111')
        print(name)
        if len(name)!=0:
            raise ValidationError('用户名已存在')
        else:
            return value


# 登陆验证
class UserLogin(forms.Form):
    username = forms.CharField(label='用户名', min_length=3, max_length=30, error_messages={
        'require': '必填',
        'min_length': '最少6个字符',
        'max_length': '最少30个字符'
    })
    pwd = forms.CharField(label='密码', min_length=3, max_length=30, widget=forms.PasswordInput(),
          error_messages={
              'require': '必填',
              'min_length': '最少3个字符',
              'max_length': '最少30个字符',

          })
    def clean(self):
        name = self.cleaned_data.get('username')
        pwd = self.cleaned_data.get('pwd')
        password = hashlib.sha1(pwd.encode('utf8')).hexdigest()
        user = AppUser.objects.filter(u_username=name).values('u_username','id','u_type','u_password_has')
        if not user:
            raise ValidationError({'username':'用户名或者密码错误'})
        else:
            if user[0]['u_password_has'] != password:
                raise ValidationError({'username':'用户名或者密码错误'})
            else:
                return user



