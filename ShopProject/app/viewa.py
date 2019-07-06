from django.shortcuts import render
from App.models import AppGoods, Reply


# 商品详情
def gooddetail(request,uid):
    good = list(AppGoods.objects.filter(id = uid))
    good = good[0]
    goodreplys = list(Reply.objects.filter(g_goodsid = uid))
    print('11111111111111111')
    print(good)
    return render(request,'discover_detail.html',context={'good':good,'replys':goodreplys})