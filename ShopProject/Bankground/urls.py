

from django.conf.urls import url

from Bankground import views

urlpatterns = [
    url(r'^index/',views.index,name='index'),
    url(r'^login/',views.login,name='login'),
    url(r'^resetpwd/',views.resetpwd,name='resetpwd'),
    url(r'^logout/',views.logout,name='logout'),
    url(r'^main/',views.main,name='main'),
    url(r'^user/',views.user,name='user'),
    url(r'^banner/',views.banner,name='banner'),
    url(r'^opinion/',views.opinion,name='opinion'),
    url(r'^vip/',views.vip,name='vip'),
    url(r'^topic/',views.topic,name='topic'),
    url(r'^appointment/',views.appointment,name='appointment'),
    url(r'^balance/',views.balance,name='balance'),
    url(r'^changepwd/',views.changepwd,name='changepwd'),
    url(r'^log/',views.log,name='log'),
    url(r'^banneradd/',views.banneradd,name='banneradd'),


]