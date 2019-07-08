import datetime

from django.shortcuts import render, redirect
from django.urls import reverse

from App.models import AppGoods, AppCart

# 加入购物车
def addcart(request,goodid):
    good = list(AppCart.objects.filter(gid_id = goodid))[0]
    # nowcarts = list(AppCart.objects.filter(uid_id=int(request.session['id'])))
    AppCart(cartnum=good.g_price, good_count=1, gid_id=goodid, uid_id=request.session['id']).save()
    return redirect(reverse('app:showcart'))


# 展示购物车
def showcart(request):
    carts = list(AppCart.objects.filter(uid_id=request.session['id']))
    goodlist = []
    allmoney = 0
    for cart in carts:
        good = list(AppGoods.objects.filter(pk=cart.gid_id))[0]
        money = cart.good_count*cart.cartnum
        good.money = money
        goodlist.append(good)
        allmoney += money

    return render(request, 'cart.html', context={'carts': carts, 'goodlist': goodlist,'allmoney':allmoney})

