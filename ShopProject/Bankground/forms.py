# from django import forms
#
# """
#     g_name = models.CharField(max_length=128)
#     g_description = models.TextField()
#     g_image = models.CharField(max_length=256)
#     g_hot = models.IntegerField()
#     g_number = models.IntegerField()
#     g_price = models.FloatField()
#     g_discount = models.FloatField()
#     g_credits = models.IntegerField()
#     typeid = models.ForeignKey('AppGoodstype', models.DO_NOTHING, db_column='typeid')
#
#     validators=[check_password]
# """
#
#
#
# class GoodsAdd(forms.Form):
#     g_name = forms.CharField(label='商品名', min_length=1, max_length=100,
#                                error_messages={
#                                    'required': '必填',
#                                    'min_length': '最少1个字符',
#                                    'max_length': '最多100字符',
#                                })
#     g_description = forms.CharField(label='商品描述',min_length=1, max_length=256,
#                                     widget=forms.PasswordInput(), error_messages={
#             'required': '必填',
#             'min_length': '最少6个字符',
#             'max_length': '最多128字符',
#         })
#     confirm_password = forms.CharField(label='确认密码', min_length=6, max_length=128, widget=forms.PasswordInput(),
#                                        error_messages={
#                                            'required': '必填',
#                                            'min_length': '最少6个字符',
#                                            'max_length': '最多128字符',
#                                        })
#     sex = forms.ChoiceField(label='性别', choices=[(0, '女'), (1, '男'), (2, '保密')], initial=1, widget=forms.RadioSelect,
#                             required=False)
#     address = forms.ChoiceField(label='家庭住址', choices=[(1, '北京'), (2, '上海'), (3, '广州'), (4, '深圳')])
#     email = forms.EmailField(label='邮箱', required=False, error_messages={
#         'invalid': "邮箱格式无效"
#     })
#     phone = forms.CharField(label='电话', min_length=11, required=False, error_messages={
#         'min_length': '至少11位'
#     })
#     regtime = forms.DateField(label='注册日期', required=False, error_messages={
#         'invalid': '日期格式错误'
#     })
#     usertype = forms.ChoiceField(label='用户类型', choices=[(1, '普通用户'), (2, '管理员')], required=False, initial=1)
#
#     # 验证单个字段
#     def clean_phone(self):
#         value = self.cleaned_data.get('phone')
#
#         if not re.match(r"^1[35678]\d{9}$", value):
#             raise ValidationError("手机号码不正确,请重新填写")
#         else:
#             return value
#
#     # 验证两次密码不一致
#     def clean(self):
#
#         password1 = self.cleaned_data.get("password_hash")
#
#         password2 = self.cleaned_data.get("confirm_password")
#         print(password1, password2)
#         if password1 != password2:
#             raise ValidationError({'confirm_password': "两次密码不一致"})
#         else:
#             return self.cleaned_data
#
#
# class Example(forms.Form):
#     username = forms.CharField(label='用户名', min_length=3, max_length=30,
#                                error_messages={
#                                    'required': '必填',
#                                    'min_length': '最少3个字符',
#                                    'max_length': '最多30字符',
#                                })