from django.conf.urls import url

from App import views
from App.views import index

urlpatterns =[
    url(r'^index/$',views.index),
    url(r'^discover/$',views.discover),
    url(r'^article/$',views.article),
    url(r'^article_add/$',views.article_add),
    url(r'^things/$',views.things),
    url(r'^shop/$',views.shop),
    url(r'^shop_goods_detail/$',views.shop_goods_detail),
    url(r'^categories_diannao_posts/$',views.categories_diannao_posts),
    url(r'^categories_gehu_posts/$',views.categories_gehu_posts),
    url(r'^categories_gerenpeishi_posts/$',views.categories_gerenpeishi_posts),
    url(r'^categories_jiankang_posts/$',views.categories_jiankang_posts),
    url(r'^categories_lvxingyundong_posts/$',views.categories_lvxingyundong_posts),
    url(r'^categories_shenghuo_posts/$',views.categories_shenghuo_posts),
    url(r'^categories_sheying_posts/$',views.categories_sheying_posts),
    url(r'^categories_shoujitongxin_posts/$',views.categories_shoujitongxin_posts),
    url(r'^categories_wanju_posts/$',views.categories_wanju_posts),
    url(r'^categories_wenju_posts/$',views.categories_wenju_posts),
    url(r'^categories_yinshi_posts/$',views.categories_yinshi_posts),
    url(r'^categories_yinyue_posts/$',views.categories_yinyue_posts),
    url(r'^categories_youxi_posts/$',views.categories_youxi_posts),
]