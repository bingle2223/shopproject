import datetime
import time
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django_redis.serializers import json
from App.models import AppGoods, Reply, AppUser


# 商品详情
def gooddetail(request,uid):
    good = list(AppGoods.objects.filter(id = uid))
    good = good[0]
    goodreplys = list(Reply.objects.filter(g_goodsid = uid))
    hotlist = list(AppGoods.objects.filter(g_hot = 1))
    timelist = []
    timedict = {}
    if len(goodreplys)>0:
        for reply in goodreplys:
            user = list(AppUser.objects.filter(id = reply.g_userid))[0]
            reply.user = user
            time = str(reply.g_replytime)
            front = time.split(' ')[0]
            behind = time.split(' ')[1][0:8]
            fbehind = behind +'+08:00'
            timelist.append(front)
            timelist.append(behind)
            timelist.append(fbehind)
            timedict[reply.id] = timelist
            timelist = []
            print(timedict)
        return render(request,'discover_detail.html',context={'good':good,'replys':goodreplys,'timedict':timedict,
                                                         'hotlist':hotlist})
    return render(request, 'discover_detail.html',context={'good': good})




# 回复点赞
def replyalikeadd(request,replyid):
    reply =  Reply.objects.filter(pk = replyid)
    reply.g_replygalike += 1
    reply.save()
    return HttpResponse(json.dumps({
                'replyid':replyid,
                'alike':reply.g_replygalike
            }))

# 书写测评
def writereply(request,uid):
    if request.method == 'POST':
        content = request.POST.get('replyioncontent')
        userid = request.session['id']
        goodid = uid
        Reply(g_goodsid=goodid,g_userid=userid,g_star=0,g_reply=content,
              g_replytime=datetime.datetime.now(),g_replygalike=0,g_parentid=0,
              g_comment=' ',g_comgalike=0,g_type=0).save()
        print('1111111111111111111111112222')
        print(reverse('app:gooddetail',args=[goodid]))
        return redirect(reverse('app:gooddetail',args=[goodid]))