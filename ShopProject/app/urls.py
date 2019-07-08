from django.conf.urls import url

from app import views, viewa, viewb

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
    url(r'^gooddetail/(\w+)/$',viewa.gooddetail,name='gooddetail'),
    # 书写产品评测
    url(r'^writereply/(\d+)/$',viewa.writereply,name='writereply'),
    # 评测点赞
    url(r'^replyalikeadd/(?P<replyid>\d+)/$',viewa.replyalikeadd,name='replyalikeadd'),
    # 加入购物车
    url(r'^addcart/(?P<goodid>\d+)/$',viewb.addcart,name='addcart'),
    # 展示购物车
    url(r'^showcart/$',viewb.showcart,name='showcart'),
    # url(r'^deletgoods/$',viewb.deletgoods,)



]