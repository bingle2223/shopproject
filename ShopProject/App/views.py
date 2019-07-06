from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from App.models import AppGoodstype


def index(request):
    return render(request,'index.html')


def discover(request):
    return render(request,'discover.html')


def article(request):
    return render(request,'article.html')


def things(request):
    return render(request,'things.html')


def shop(request):
    return render(request,'shop.html')


def shop_goods_detail(request):
    return render(request,'shop_goods_detail.html')


def article_add(request):
    return render(request,'article_add.html')


def categories_diannao_posts(request):
    return render(request,'categories_diannao_posts.html')


def categories_gehu_posts(request):
    return render(request,'categories_gehu_posts.html')


def categories_gerenpeishi_posts(request):
    return render(request,'categories_gerenpeishi_posts.html')


def categories_jiankang_posts(request):
    return render(request,'categories_jiankang_posts.html')


def categories_lvxingyundong_posts(request):
    return render(request,'categories_lvxingyundong_posts.html')


def categories_shenghuo_posts(request):
    return render(request,'categories_shenghuo_posts.html')


def categories_sheying_posts(request):
    return render(request,'categories_sheying_posts.html')


def categories_shoujitongxin_posts(request):
    return render(request,'categories_shoujitongxin_posts.html')


def categories_wanju_posts(request):
    return render(request,'categories_wanju_posts.html')


def categories_wenju_posts(request):
    return render(request,'categories_wenju_posts.html')


def categories_yinshi_posts(request):
    return render(request,'categories_yinshi_posts.html')


def categories_yinyue_posts(request):
    return render(request,'categories_yinyue_posts.html')


def categories_youxi_posts(request):
    return render(request,'categories_youxi_posts.html')


