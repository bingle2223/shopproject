

from django.conf.urls import url

from Bankground import views
urlpatterns = [
    # 测试
    url(r'^index/',views.index,name='index'),
    # 登录
    url(r'^login/',views.login,name='login'),
    url(r'^getcode/', views.get_code, name='getcode'),#获取验证码
    # 改密
    url(r'^resetpwd/',views.resetpwd,name='resetpwd'),
    # 退出
    url(r'^logout/',views.logout,name='logout'),
    # 后台主功能页
    url(r'^main/',views.main,name='main'),

    # 管理员管理
    url(r'^user/$', views.user, name='user'),
    url(r'^user/(\d+)/$',views.user,name='user'),
    url(r'^userupdate/(\d+)/$',views.userupdate,name='userupdate'),
    url(r'^getmsgcode/',views.getcode,name='getmsgcode'),
    url(r'^useradd/',views.useradd,name='useradd'),

    # 公共管理
    url(r'^banner/',views.banner,name='banner'),
    url(r'^banneradd/', views.banneradd, name='banneradd'),

    url(r'^opinion/',views.opinion,name='opinion'),

    # vip管理
    url(r'^vip/',views.vip,name='vip'),
    url(r'^vipadd2/', views.vipadd2, name='vipadd2'),
    url(r'^vipadd/', views.vipadd, name='vipadd'),
    url(r'^vipreset/', views.vipreset, name='vipreset'),


    # 话题管理
    url(r'^topic/',views.topic,name='topic'),
    url(r'^topicadd/', views.topicadd, name='topicadd'),
    url(r'^topiupdata/', views.topicupdata, name='topicupdata'),

    # 订单管理
    url(r'^appointment/',views.appointment,name='appointment'),

    # 收支管理
    url(r'^balance/',views.balance,name='balance'),


    # 系统设置
    url(r'^changepwd/',views.changepwd,name='changepwd'),
    url(r'^log/',views.log,name='log'),


#     文章首页
    url(r'^article/$',views.article1,name='article'),
    url(r'^article/(\d+)/$',views.article1,name='article1'),
#     插入文章
    url(r'^article_add/$',views.article_add,name='article_add'),
#     个人主页
    url(r'^member_index/(\w+)/$',views.member_index,name='member_index'),
# 展示写文章页面
    url(r'^showarticleadd/$',views.showarticleadd,name='showarticleadd'),








]

