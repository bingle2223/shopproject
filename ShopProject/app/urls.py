from django.conf.urls import url

from app import views, viewa

urlpatterns = [
    url(r'^index/$',views.index,name='index'),
#     注册
    url(r'^reg/$',views.reg,name='reg'),
#     登陆
    url(r'^login/$',views.login,name='login'),
#     退出登陆
    url(r'^logout/$',views.logout,name='logout'),
#     手机验证码
    url(r'^getcode/$',views.getcode,name='getcode'),
#     账户设置修改密码
    url(r'^userset/$',views.userset,name='userset'),
    # 修改邮箱
    url(r'^changemail/$',views.changemail,name='changemail'),
    # 商品详情
    url(r'^gooddetail/(\d+)/$',viewa.gooddetail,name='gooddetail')

]