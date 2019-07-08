# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class AppCart(models.Model):
    cartnum = models.IntegerField()
    good_count = models.IntegerField()
    gid = models.ForeignKey('AppGoods', models.DO_NOTHING)
    uid = models.ForeignKey('AppUser', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'App_cart'


class AppCollection(models.Model):
    collectnum = models.IntegerField()
    gid = models.ForeignKey('AppGoods', models.DO_NOTHING)
    uid = models.ForeignKey('AppUser', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'App_collection'


class AppGoods(models.Model):
    g_name = models.CharField(max_length=128)
    g_description = models.TextField()
    g_image = models.CharField(max_length=256)
    g_hot = models.IntegerField()
    g_number = models.IntegerField()
    g_price = models.FloatField()
    g_discount = models.FloatField()
    g_credits = models.IntegerField()
    typeid = models.ForeignKey('AppGoodstype', models.DO_NOTHING, db_column='typeid')

    class Meta:
        managed = False
        db_table = 'App_goods'


class AppGoodstype(models.Model):
    typename = models.CharField(max_length=32)

    class Meta:
        managed = False
        db_table = 'App_goodstype'


class AppListgoods(models.Model):
    listnum = models.IntegerField()
    gid = models.ForeignKey(AppGoods, models.DO_NOTHING)
    uid = models.ForeignKey('AppUser', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'App_listgoods'


class AppOrderlist(models.Model):
    o_username = models.CharField(db_column='O_username', unique=True, max_length=30)  # Field name made lowercase.
    o_goodid = models.IntegerField(db_column='O_goodid', blank=True, null=True)  # Field name made lowercase.
    o_ordertitle = models.CharField(db_column='O_ordertitle', max_length=12)  # Field name made lowercase.
    o_paystate = models.IntegerField(db_column='O_paystate')  # Field name made lowercase.
    o_logisticsstate = models.CharField(db_column='O_logisticsstate', max_length=120)  # Field name made lowercase.
    o_goodcount = models.IntegerField(db_column='O_goodcount')  # Field name made lowercase.
    o_totalprice = models.IntegerField(db_column='O_totalprice')  # Field name made lowercase.
    o_address = models.CharField(db_column='O_address', max_length=128)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'App_orderlist'


class AppUser(models.Model):
    u_username = models.CharField(unique=True, max_length=32)
    u_password_has = models.CharField(max_length=128)
    u_icon = models.CharField(max_length=100)
    u_phone = models.CharField(max_length=11)
    u_sex = models.IntegerField()
    u_area = models.CharField(max_length=128)
    u_email = models.CharField(unique=True, max_length=64)
    u_description = models.TextField(blank=True, null=True)
    u_register_time = models.DateTimeField()
    u_type = models.IntegerField()
    u_credits = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'App_user'


class AppUseraddress(models.Model):
    ua_name = models.CharField(max_length=128)
    userid = models.ForeignKey(AppUser, models.DO_NOTHING, db_column='userid')

    class Meta:
        managed = False
        db_table = 'App_useraddress'


class Article(models.Model):
    a_title = models.CharField(max_length=64)
    a_content = models.TextField(blank=True, null=True)
    a_image = models.CharField(max_length=256)
    a_read_count = models.IntegerField()
    a_publish_time = models.DateTimeField()
    a_is_delete = models.IntegerField()
    a_hot = models.IntegerField()
    a_type = models.CharField(max_length=128)
    a_bord = models.CharField(max_length=64)
    a_goods = models.ForeignKey(AppGoods, models.DO_NOTHING, unique=True)
    uid = models.ForeignKey(AppUser, models.DO_NOTHING, db_column='uid')

    class Meta:
        managed = False
        db_table = 'article'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Commentreply(models.Model):
    c_userid = models.IntegerField(db_column='C_userid')  # Field name made lowercase.
    c_reply = models.CharField(db_column='C_reply', max_length=1000)  # Field name made lowercase.
    c_replytime = models.DateTimeField(db_column='C_replytime')  # Field name made lowercase.
    user = models.ForeignKey('Reply', models.DO_NOTHING, db_column='user')

    class Meta:
        managed = False
        db_table = 'commentreply'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Focuson(models.Model):
    f_focus = models.CharField(db_column='F_focus', max_length=100)  # Field name made lowercase.
    f_userid = models.IntegerField(db_column='F_userid')  # Field name made lowercase.
    f_message = models.CharField(db_column='F_message', max_length=1000)  # Field name made lowercase.
    f_parentid = models.IntegerField(db_column='F_parentid')  # Field name made lowercase.
    f_type = models.IntegerField(db_column='F_type')  # Field name made lowercase.
    f_time = models.DateTimeField(db_column='F_time')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'focuson'


class Picturelink(models.Model):
    p_link = models.CharField(db_column='P_link', max_length=500)  # Field name made lowercase.
    goodsid = models.ForeignKey(AppGoods, models.DO_NOTHING, db_column='goodsid')

    class Meta:
        managed = False
        db_table = 'picturelink'


class Reply(models.Model):
    g_goodsid = models.IntegerField(db_column='G_goodsid')  # Field name made lowercase.
    g_userid = models.IntegerField(db_column='G_userid')  # Field name made lowercase.
    g_star = models.IntegerField(db_column='G_star')  # Field name made lowercase.
    g_reply = models.CharField(db_column='G_reply', max_length=1000)  # Field name made lowercase.
    g_replytime = models.DateTimeField(db_column='G_replytime')  # Field name made lowercase.
    g_replygalike = models.IntegerField(db_column='G_replygalike')  # Field name made lowercase.
    g_parentid = models.IntegerField(db_column='G_parentid')  # Field name made lowercase.
    g_link = models.CharField(db_column='G_link', max_length=100)  # Field name made lowercase.
    g_comment = models.CharField(db_column='G_comment', max_length=1000)  # Field name made lowercase.
    g_comgalike = models.IntegerField(db_column='G_comgalike')  # Field name made lowercase.
    g_type = models.IntegerField(db_column='G_type')  # Field name made lowercase.
    def __str__(self):
        return self.g_reply
    class Meta:
        managed = False
        db_table = 'reply'
