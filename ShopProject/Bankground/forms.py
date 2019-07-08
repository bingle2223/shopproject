import re

from django import forms
from django.core.exceptions import ValidationError
from django.db.models import Q

from Bankground.models import AppGoodstype, AppUser


class GoodsAdd(forms.Form):
    g_name = forms.CharField(label='商品名', min_length=1, max_length=100,
                               error_messages={
                                   'required': '必填',
                                   'min_length': '最少1个字符',
                                   'max_length': '最多100字符',
                               })
    g_description = forms.CharField(label='商品描述',min_length=1, max_length=256,
                                     error_messages={
            'required': '必填',
            'min_length': '最少1个字符',
            'max_length': '最多128字符',
        })
    # g_image = forms.CharField(label='商品图片', min_length=1, max_length=256,
    #                                    error_messages={
    #                                        'required': '必填'
    #                                    })
    # 商品类别
    goodstypes = AppGoodstype.objects.all()
    choice = [(goodstype.id,goodstype.typename) for goodstype in goodstypes ]
    typeid = forms.ChoiceField(label='商品类别', choices=choice, initial=1, widget=forms.RadioSelect,
                            required=True,error_messages={
            'required': '必填',
            'min_length': '最少1个字符',
            'max_length': '最多256字符',
        })

    g_number = forms.IntegerField(label='商品数量',initial=1,localize=False,min_value=1,required=True,error_messages={
    'required': '必填',
            'min_value': '最少1个商品',
    }
    )

    g_hot = forms.IntegerField(label='热门商品', initial=0,localize=False,min_value=0,max_value=1,error_messages={
        'required': '必填',
        'invalid':'只能选0或1'
    })
    g_price = forms.FloatField(label='商品价格',localize=False ,error_messages={
        'required': '必填'
    })
    g_discount = forms.FloatField(label='是否打折', required=False, initial=0,min_value=0,max_value=1,error_messages={
        'min_value':0,
        'max_value':1,

    })
    g_credits = forms.IntegerField(label='积分商品', min_value=0, error_messages={
        'min_value': '至少为1'
    })




# 添加管理员
class UseraddForm(forms.Form):
    username = forms.CharField(label='管理员账号',min_length=3,max_length=30,error_messages={
        'require':'必填',
        'min_length':'最少6个字符',
        'max_length':'最少30个字符'
    } )
    sex = forms.ChoiceField(label='性别', choices=[(0, '女'), (1, '男'), (2, '保密')], initial=1, widget=forms.RadioSelect,required=False)
    password = forms.CharField(label='管理员密码', min_length=3, max_length=30,widget=forms.PasswordInput(),
                               error_messages={
        'required': '必填',
        'min_length': '最少3个字符',
        'max_length': '最少30个字符',

    })
    chkpassword = forms.CharField(label='确认密码', min_length=3, max_length=30, widget=forms.PasswordInput(),
                          error_messages={
                              'required': '必填',
                              'min_length': '最少3个字符',
                              'max_length': '最少30个字符',

                          })

    phone = forms.CharField(label='管理员电话',min_length=11,error_messages={
        'min_length': '手机号为11位',
        'required': '必填',

    })
    email = forms.EmailField(label='管理员邮箱',error_messages={
        'invalid': '邮箱格式不对',
        'required': '必填',
    })

    msgcode = forms.IntegerField(label='短信验证码',min_value=100000,max_value=999999,error_messages={
        'required':'必填',
        'invalid':'验证码输入错误'

    })

    def clean(self):

        password1 = self.cleaned_data.get("password")

        password2 = self.cleaned_data.get("chkpassword")
        if password1 != password2:
            raise ValidationError({'chkpassword':"两次密码不一致"})
        else:
            return self.cleaned_data


    def clean_phone(self):
        value = self.cleaned_data.get('phone')

        if not re.match(r"^1[35678]\d{9}$", value):
            raise ValidationError("手机号码不正确,请重新填写")
        else:
            return value

    def clean_password(self):
        value = self.cleaned_data.get('password')
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
        value = self.cleaned_data.get('username')
        name = AppUser.objects.filter(u_username=value).all()
        if len(name)!=0:
            raise ValidationError('用户名已存在')
        else:
            return value


