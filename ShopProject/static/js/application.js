function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
(function() {
    !function(t) {
        t.Making = {Models: {}, Collections: {}, Views: {}, Routers: {}, Pages: {}}, t.$document = $(document), t.$window = $(window), t.$html = $("html"), t.$docbody = $("body")
    }(this)
}).call(this), function() {
    window.Making = function(t) {
        return window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")), t.getScrollbarWidth = function() {
            var t, e, n, i;
            return t = document.createElement("p"), t.style.width = "100%", t.style.height = "200px", e = document.createElement("div"), e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.visibility = "hidden", e.style.width = "200px", e.style.height = "150px", e.style.overflow = "hidden", e.appendChild(t), document.body.appendChild(e), n = t.offsetWidth, e.style.overflow = "scroll", i = t.offsetWidth, n === i && (i = e.clientWidth), document.body.removeChild(e), n - i + "px"
        }, t.convertSearchToJSON = function() {
            return JSON.parse('{"' + decodeURI(window.location.search.substring(1).replace(/"/g, '\\"').replace(/&/g, '","').replace(RegExp("=", "g"), '":"')) + '"}')
        }, t.getParameterByKey = function(t) {
            var e, n;
            return t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), e = new RegExp("[\\?&]" + t + "=([^&#]*)"), n = e.exec(location.search), null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
        }, t.readMore = function(t) {
            var e, n, i;
            return e = $(t), n = e.next(".more"), i = parseInt(e.css("maxHeight")) - 1, e.height() < i && e.removeClass("is_folded").next(".more").remove(), n.on("click", function(t) {
                return t.preventDefault(), $(this).toggleClass("shown").prev(".post_content").toggleClass("is_folded")
            })
        }, t.htmlEntities = function(t) {
            return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }, t.prefixEvent = function(t) {
            var e, n, i, r, o, a;
            for (e = "", a = ["", "webkit", "moz", "MS"], n = function(n) {
                return e += n ? n + t + " " : t.toLowerCase() + " "
            }, i = 0, r = a.length; r > i; i++)
                o = a[i], n(o);
            return e.trim()
        }, t.addParam = function(e, n, i) {
            var r, o, a, s;
            return a = i.split("?"), r = encodeURIComponent(e), s = encodeURIComponent(n), a.length < 2 ? i + "?" + (r + "=" + s) : (o = t.removeParam(e, i), o + (o.lastIndexOf("?") === o.length - 1 ? "" : "&") + (r + "=" + s))
        }, t.removeParam = function(t, e) {
            var n, i, r, o;
            if (o = e.split("?"), o.length < 2)
                return e;
            for (r = encodeURIComponent(t) + "=", i = o[1].split(/[&;]/g), n = i.length; ; )
                if (n -= 1, -1 !== i[n].lastIndexOf(r, 0) && i.splice(n, 1), !n)
                    break;
            return o[0] + "?" + i.join("&")
        }, t
    }(window.Making || {})
}.call(this), function() {
    !function(t) {
        _.extend(t, {FormLink: function(t, e) {
                return $(function() {
                    return $(e).click(function() {
                        var e;
                        return e = $("#check_provider_sync input").prop("checked"), $("<input name='provider_sync' type='hidden' value=" + e + ">").appendTo(t), $(t).submit()
                    })
                })
            }, Editor: function(t, e, n) {
                var i, r, o, a;
                return null == e && (e = !1), null == n && (n = ".editor--deprecated"), r = $(n), i = r.find(".editor--deprecated-content"), a = r.find(".editor--deprecated-toolbar"), o = $(t), i.wysiwyg({dragAndDropImages: !1, toolbarSelector: a[0]}).html(o.val()).fadeIn().on("drop", function(t) {
                    return t.stopPropagation()
                }), a.fadeIn().find(".btn-group > a").tooltip({container: "body"}).end().find(".dropdown-menu input").click(function() {
                    return!1
                }).change(function() {
                    return $(this).parent(".dropdown-menu").siblings(".dropdown-toggle").dropdown("toggle")
                }).end().find('input[type="file"]').each(function() {
                    var t, e;
                    return t = $(this), e = $(t.data("target")), t.css("opacity", 0).css("position", "absolute").attr("title", "\u63d2\u5165\u56fe\u50cf(\u53ef\u4ee5\u62d6\u62fd)").tooltip().offset(e.offset()).width(e.outerWidth()).height(e.outerHeight())
                }), o.closest("form").on("submit", function(t) {
                    var n, r;
                    return e && 0 === i.find("img, iframe, embed, object, video, audio, .knewone-embed").length && i.text().length < 140 ? ($("<p>").addClass("alert alert-danger").text("\u5185\u5bb9\u6709\u70b9\u5c11\uff0c\u5efa\u8bae\u518d\u8be6\u7ec6\u63cf\u8ff0\u4e0b\uff08\u81f3\u5c11 140 \u5b57\uff09\u3002").insertAfter(i), !1) : (n = i.next("p.alert"), n.length && n.remove(), i.find("a").attr("target", "_blank"), r = i.html(), o.val(r.replace(/<!--.*?-->/g, "")))
                })
            }, share: function() {
                var t, e, n;
                return n = function(t) {
                    var e, n, i, r, o;
                    for (e = 0, r = t.val().replace(/http:\/\/[a-z]+\.[^ \u4e00-\u9fa5]+/g, "urlurlhereurlurlhere"), n = 0, i = r.length; i > n; n++)
                        o = r[n], e += /[\x00-\xff]/.test(o) ? .5 : 1;
                    return Math.ceil(e)
                }, e = function(t) {
                    var e;
                    return e = 140 - n(t.find("textarea")), e > 0 ? t.find('input[type="submit"]').removeAttr("disabled") : t.find('input[type="submit"]').attr("disabled", "disabled"), t.find(".words-check").text("\u8fd8\u53ef\u4ee5\u8f93\u5165" + e + "\u5b57")
                }, t = $(".share_modal"), t.on("propertychange input", "textarea", function() {
                    return e($(this).closest(".share_modal"))
                }), t.on("shown", function() {
                    return e($(this))
                }), t.on("submit form", function() {
                    return t.modal("hide")
                })
            }, Comments: function(t) {
                var e;
                return e = $(t), e.data("comments") ? void 0 : ($html.hasClass("topics_show") ? new Making.Views.NewCommentsIndex({el: t, url: e.data("url")}) : new Making.Views.CommentsIndex({el: t, url: e.data("url")}), e.data("comments", !0))
            }})
    }(Making)
}.call(this), function() {
    !function(t, e) {
        return e.url = window.location.origin + window.location.pathname, e.user = {id: $("#user").data("id"), name: $("#user").data("name"), email: $("#user").data("email")}, e.isSignedIn = void 0 !== e.user.id, e.breakpoints = {screenXSMin: "480px", screenXSMax: "767px", screenSMMin: "768px", screenSMMax: "991px", screenMDMin: "992px", screenMDMax: "1199px", screenLGMin: "1200px", screenLGMax: "1919px", screenXLMin: "1920px"}, e.keycode = {ENTER: 13, ESC: 27, TAB: 9, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40}, $html.hasClass("mobile") ? e.device = "mobile" : $html.hasClass("tablet") ? e.device = "tablet" : $html.hasClass("desktop") && (e.device = "desktop"), window.navigator.userAgent.toLowerCase().indexOf("micromessenger") >= 0 && (e.browser = "wechat"), e.infiniteScroll = function(t) {
            var n, i, r, o, a, s, l;
            o = t.container, l = t.url, s = t.page, a = t.data, r = t.callback, n = $(o), null == l && (l = window.location.href), null == s && (s = 1), i = !1, $window.on("scroll.infiniteScroll", function(t) {
                i || $document.height() - $window.scrollTop() - $window.height() > 200 || (a = $.extend({}, a, {page: ++s}), $.ajax({url: l, data: a, dataType: "html", beforeSend: function(t, e) {
                        return i = !0, n.append("<div class='loading-things'><i class='fa fa-spinner fa-spin fa-2x'></i></div>")
                    }}).done(function(t, o, a) {
                    switch (n.children(".loading-things").remove(), o) {
                        case"success":
                            n.append(e.lazyLoadImages({container: t}));
                            break;
                        case"nocontent":
                            n.append('<em class="nomore">\u6ca1\u6709\u66f4\u591a\u4e86\u3002</em>'), $window.off("scroll.infiniteScroll")
                    }
                    return null != r && r.call(n, t, a), i = !1
                }).fail(function(t, e, i) {
                    return n.children(".loading-things").remove().end().append('<em class="nomore">\u51fa\u9519\u4e86\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5\u3002</em>')
                }))
            }), $window.height() >= $docbody.height() && $window.trigger("scroll.infiniteScroll")
        }, e.selectCategories = function(t, e) {
            var n;
            return n = {}, $(t).find(".tags").on("click", "a", function(t) {
                var i, r;
                return i = $(this), r = $.trim($(this).data("slug")), $.ajax({url: "/settings/interests/" + r, method: "patch"}), i.hasClass("is-active") ? void 0 : (n[r] || (n[r] = $.ajax({url: "/things/category/" + r + "?sort_by=fanciers_count", dataType: "html", data: {per: 12}})), n[r].done(function(t, n, i) {
                    return $(e).empty().append(t)
                }))
            })
        }, e.shareOnWechat = function(t) {
            var n, i;
            return null == t && (t = ".js-share"), n = $(t), "wechat" === e.browser && n.length ? (i = $("#wechat-share_tip"), n.removeAttr("data-toggle").attr("href", "#").on("click", function(t) {
                return t.preventDefault(), i.fadeIn("fast")
            }), i.on("click", function(t) {
                return $(this).fadeOut("fast")
            })) : void 0
        }, e.bindWechatShareTip = function() {
            var t, e, n;
            return t = $("#wechat-share_tip"), n = 0, e = 0, $document.on("scroll", function(e) {
                return $document.scrollTop() + $window.height() === $document.height() ? t.fadeIn("fast") : void 0
            }).on("touchstart touchmove", function(i) {
                var r;
                return r = i.originalEvent.changedTouches[0], "touchstart" === i.type ? n = r.clientY : (e = r.clientY, e - n > 0 ? t.fadeOut("fast") : void 0)
            })
        }, e.lazyLoadImages = function(t) {
            var e, n, i, r, o;
            return i = t.container, r = t.event, e = $(i), n = e.find("img.js-lazy"), n.length && (o = {delay: 300, threshold: 200}, null != r && _.extend(o, {event: r}), n.css("visibility", "visible").lazyload(o)), e
        }, e.start = function(t) {
            t.forEach(function(t) {
                return t = Making.Pages[t], _.isFunction(t) && 0 === t.length && t.call(this)
            })
        }, e.isDebugging = function() {
            return Boolean(Making.getParameterByKey("debug"))
        }, e
    }(this, Making)
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["app/channels/channel"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o;
            return t.escapeExpression((o = null != (o = n.value || (null != e ? e.value : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "value", hash: {}, data: r}) : o))
        }, useData: !0}), this.HandlebarsTemplates["app/channels/channel"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["carts/box_item"] = Handlebars.template({1: function(t, e, n, i, r) {
            var o;
            return'<li class="cart_box-item" data-id="' + t.escapeExpression((o = null != (o = n.id || (null != e ? e.id : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "id", hash: {}, data: r}) : o)) + '">\n  <img src="' + t.escapeExpression((o = null != (o = n.cover_url || (null != e ? e.cover_url : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "cover_url", hash: {}, data: r}) : o)) + '" alt="' + t.escapeExpression((o = null != (o = n.title || (null != e ? e.title : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "title", hash: {}, data: r}) : o)) + '" class="cart_box-item_image">\n  <div class="cart_box-item_title">\n    <a href="' + t.escapeExpression((o = null != (o = n.thing_url || (null != e ? e.thing_url : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "thing_url", hash: {}, data: r}) : o)) + '" class="cart_box-item_title-link" target="_blank">' + t.escapeExpression((o = null != (o = n.title || (null != e ? e.title : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "title", hash: {}, data: r}) : o)) + '</a>\n    <div class="clearfix">\n      <div class="cart_box-kind">' + t.escapeExpression((o = null != (o = n.kind || (null != e ? e.kind : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "kind", hash: {}, data: r}) : o)) + '</div>\n      <div class="cart_box-price"><i class="fa fa-yen"></i>' + t.escapeExpression((o = null != (o = n.price || (null != e ? e.price : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "price", hash: {}, data: r}) : o)) + '</div>\n    </div>\n  </div>\n  <div class="cart_box-item_remove">\n    <a href="javascript:void(0);" class="dropdown_box_propagate">\u5220\u9664</a>\n  </div>\n</li>\n'
        }, compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o;
            return null != (o = n.each.call(null != e ? e : {}, null != e ? e.items : e, {name: "each", hash: {}, fn: t.program(1, r, 0), inverse: t.noop, data: r})) ? o : ""
        }, useData: !0}), this.HandlebarsTemplates["carts/box_item"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["carts/cart_item"] = Handlebars.template({1: function(t, e, n, i, r) {
            var o;
            return"    <b>" + t.escapeExpression((o = null != (o = n.stage || (null != e ? e.stage : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "stage", hash: {}, data: r}) : o)) + "</b>\n"
        }, compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o, a;
            return'<figure>\n  <div class="cart-item-thing_cover">\n    <a href="' + t.escapeExpression((a = null != (a = n.thing_url || (null != e ? e.thing_url : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "thing_url", hash: {}, data: r}) : a)) + '"><img src="' + t.escapeExpression((a = null != (a = n.cover_url || (null != e ? e.cover_url : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "cover_url", hash: {}, data: r}) : a)) + '" alt="' + t.escapeExpression((a = null != (a = n.title || (null != e ? e.title : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "title", hash: {}, data: r}) : a)) + '"></a>\n  </div>\n</figure>\n<div class="cart-item-title">\n  <a href="' + t.escapeExpression((a = null != (a = n.thing_url || (null != e ? e.thing_url : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "thing_url", hash: {}, data: r}) : a)) + '">' + t.escapeExpression((a = null != (a = n.title || (null != e ? e.title : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "title", hash: {}, data: r}) : a)) + "</a>\n  <span>" + t.escapeExpression((a = null != (a = n.kind_title || (null != e ? e.kind_title : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "kind_title", hash: {}, data: r}) : a)) + "</span>\n" + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.stage : e, {name: "if", hash: {}, fn: t.program(1, r, 0), inverse: t.noop, data: r})) ? o : "") + '</div>\n<div class="cart-item-detail">\n  <div class="cart-item-unit_price cell">\n    <i class="fa fa-yen"></i>\n    ' + t.escapeExpression((a = null != (a = n.unit_price || (null != e ? e.unit_price : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "unit_price", hash: {}, data: r}) : a)) + '\n  </div>\n  <div class="cart-item-quantity cell">\n    <a href="javascript:void(0);" class="c-numberinput-minus mobile-clickable ' + t.escapeExpression((a = null != (a = n.disableMinus || (null != e ? e.disableMinus : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "disableMinus", hash: {}, data: r}) : a)) + '">\n      <i class="fa fa-minus-circle"></i>\n    </a>\n    <input type="text" name="quantity" class="c-numberinput" value="' + t.escapeExpression((a = null != (a = n.quantity || (null != e ? e.quantity : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "quantity", hash: {}, data: r}) : a)) + '" autocomplete="off">\n    <a href="javascript:void(0);" class="c-numberinput-plus mobile-clickable ' + t.escapeExpression((a = null != (a = n.disablePlus || (null != e ? e.disablePlus : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "disablePlus", hash: {}, data: r}) : a)) + '">\n      <i class="fa fa-plus-circle"></i>\n    </a>\n  </div>\n  <div class="cart-item-total_price cell">\n    <i class="fa fa-yen"></i>\n    ' + t.escapeExpression((a = null != (a = n.price || (null != e ? e.price : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "price", hash: {}, data: r}) : a)) + '\n  </div>\n  <div class="cart-item--remove cell">\n    <a class="mobile-clickable" href="javascript:void(0);" title="\u5220\u9664"><i class="fa fa-trash"></i></a>\n  </div>\n</div>'
        }, useData: !0}), this.HandlebarsTemplates["carts/cart_item"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["carts/cart_items"] = Handlebars.template({1: function(t, e, n, i, r) {
            var o;
            return'      <a href="' + t.escapeExpression((o = null != (o = n.merchant_url || (null != e ? e.merchant_url : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "merchant_url", hash: {}, data: r}) : o)) + '" target="_blank">' + t.escapeExpression((o = null != (o = n.merchant_name || (null != e ? e.merchant_name : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "merchant_name", hash: {}, data: r}) : o)) + "</a>\n"
        }, 3: function(t, e, n, i, r) {
            var o;
            return"      " + t.escapeExpression((o = null != (o = n.merchant_name || (null != e ? e.merchant_name : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "merchant_name", hash: {}, data: r}) : o)) + "\n"
        }, compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o;
            return'<ul class="cart-list"></ul>\n<div class="cart-list-merchant">\n  \u4ee5\u4e0a\u5546\u54c1\u7531\n  <span class="cart-list-merchant_name">\n' + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.merchant_url : e, {name: "if", hash: {}, fn: t.program(1, r, 0), inverse: t.program(3, r, 0), data: r})) ? o : "") + "  </span>\n  \u63d0\u4f9b\n</div>"
        }, useData: !0}), this.HandlebarsTemplates["carts/cart_items"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["carts/nothing"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            return'<div class="nothing">\n  <i class="fa fa-shopping-cart"></i>\n  <br>\n  \u8d2d\u7269\u8f66\u662f\u7a7a\u7684\uff01\n  <br>\n  <a  href="shop.html">\u60f3\u8981\u770b\u770b\u54ea\u4e9b\u65b0\u5947\u9177\u4ea7\u54c1\u662f\u53ef\u4ee5\u5728 KnewOne \u8d2d\u4e70\u7684\u5417\uff1f</a>\n</div>'
        }, useData: !0}), this.HandlebarsTemplates["carts/nothing"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["editor/affiliated_editor"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o, a;
            return'<div class="editor-menu">\n  <p class="editor-target"></p>\n  <output>' + t.escapeExpression((a = null != (a = n.status || (null != e ? e.status : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "status", hash: {}, data: r}) : a)) + '</output>\n  <div class="pull-right">\n    <button class="editor-help-toggle" data-target="#editor-help" data-toggle="modal" type="button">\n      <i class="fa fa-question"></i>\u5e2e\u52a9\n    </button>\n    <button class="editor-back" type="button">\u8fd4\u56de</button>\n  </div>\n</div>\n<article class="editor-content article">\n  <div class="body">' + (null != (a = null != (a = n.body || (null != e ? e.body : e)) ? a : n.helperMissing, o = "function" == typeof a ? a.call(null != e ? e : {}, {name: "body", hash: {}, data: r}) : a) ? o : "") + "</div>\n</article>"
        }, useData: !0}), this.HandlebarsTemplates["editor/affiliated_editor"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["editor/draft"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o;
            return"<header>\n  <h5>" + t.escapeExpression((o = null != (o = n.draft_title || (null != e ? e.draft_title : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "draft_title", hash: {}, data: r}) : o)) + "</h5>\n</header>\n<section>\n  <p>" + t.escapeExpression((o = null != (o = n.draft_summary || (null != e ? e.draft_summary : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "draft_summary", hash: {}, data: r}) : o)) + "</p>\n</section>\n<footer>\n  <time>" + t.escapeExpression((o = null != (o = n.draft_timestamp || (null != e ? e.draft_timestamp : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "draft_timestamp", hash: {}, data: r}) : o)) + '</time>\n  <span class="separator">|</span>\n  <a href="' + t.escapeExpression((o = null != (o = n.link || (null != e ? e.link : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "link", hash: {}, data: r}) : o)) + '" target="_blank">\u7f16\u8f91</a>\n  <span class="separator">|</span>\n  <a class="destroy" href="#" data-id="' + t.escapeExpression((o = null != (o = n.id || (null != e ? e.id : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "id", hash: {}, data: r}) : o)) + '">\u5220\u9664</a>\n</footer>'
        }, useData: !0}), this.HandlebarsTemplates["editor/draft"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["editor/review"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o, a;
            return'<header>\n  <input class="title" type="text" value="' + t.escapeExpression((a = null != (a = n.title || (null != e ? e.title : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "title", hash: {}, data: r}) : a)) + '" placeholder="\u6807\u9898">\n</header>\n<div class="body">' + (null != (a = null != (a = n.body || (null != e ? e.body : e)) ? a : n.helperMissing, o = "function" == typeof a ? a.call(null != e ? e : {}, {name: "body", hash: {}, data: r}) : a) ? o : "") + "</div>"
        }, useData: !0}), this.HandlebarsTemplates["editor/review"]
}.call(this), function() {
    Handlebars.registerPartial("fancy/_tag", Handlebars.template({1: function(t, e, n, i, r) {
            return'class="selected"'
        }, compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o, a;
            return"<li " + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.selected : e, {name: "if", hash: {}, fn: t.program(1, r, 0), inverse: t.noop, data: r})) ? o : "") + ">" + t.escapeExpression((a = null != (a = n.name || (null != e ? e.name : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "name", hash: {}, data: r}) : a)) + "</li>"
        }, useData: !0}))
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["fancy/modal"] = Handlebars.template({1: function(t, e, n, i, r) {
            var o;
            return'        <a href="#" class="fancy_modal-cancel_button">\n          ' + (null != (o = (n.ifCond || e && e.ifCond || n.helperMissing).call(null != e ? e : {}, null != e ? e.type : e, "==", "fancy", {name: "ifCond", hash: {}, fn: t.program(2, r, 0), inverse: t.program(4, r, 0), data: r})) ? o : "") + "\n        </a>\n"
        }, 2: function(t, e, n, i, r) {
            return"\u53d6\u6d88\u559c\u6b22"
        }, 4: function(t, e, n, i, r) {
            return"\u53d6\u6d88\u62e5\u6709"
        }, 6: function(t, e, n, i, r) {
            var o;
            return'            <div class="fancy_modal-state">\n              <input type="radio" name="state" value="none" ' + (null != (o = (n.ifCond || e && e.ifCond || n.helperMissing).call(null != e ? e : {}, null != e ? e.state : e, "==", "none", {name: "ifCond", hash: {}, fn: t.program(7, r, 0), inverse: t.noop, data: r})) ? o : "") + '>\n              <label><input type="radio" name="state" value="desired" ' + (null != (o = (n.ifCond || e && e.ifCond || n.helperMissing).call(null != e ? e : {}, null != e ? e.state : e, "==", "desired", {name: "ifCond", hash: {}, fn: t.program(7, r, 0), inverse: t.noop, data: r})) ? o : "") + '>\u60f3\u8981</label>\n              <label><input type="radio" name="state" value="owned" ' + (null != (o = (n.ifCond || e && e.ifCond || n.helperMissing).call(null != e ? e : {}, null != e ? e.state : e, "==", "owned", {name: "ifCond", hash: {}, fn: t.program(7, r, 0), inverse: t.noop, data: r})) ? o : "") + ">\u62e5\u6709</label>\n            </div>\n"
        }, 7: function(t, e, n, i, r) {
            return"checked"
        }, 9: function(t, e, n, i, r) {
            return'<span class="help-block">\u6bcf\u4e2a\u6807\u7b7e 20 \u4e2a\u5b57\u4ee5\u5185</span>'
        }, 11: function(t, e, n, i, r) {
            var o;
            return'            <section class="fancy_modal-recent_tags">\n              <h6>\u6700\u8fd1</h6>\n              <ul>\n                ' + (null != (o = n.each.call(null != e ? e : {}, null != e ? e.recent_tags : e, {name: "each", hash: {}, fn: t.program(12, r, 0), inverse: t.noop, data: r})) ? o : "") + "\n              </ul>\n            </section>\n"
        }, 12: function(t, e, n, i, r) {
            var o;
            return null != (o = t.invokePartial(i["fancy/_tag"], e, {name: "fancy/_tag", data: r, helpers: n, partials: i, decorators: t.decorators})) ? o : ""
        }, 14: function(t, e, n, i, r) {
            var o;
            return'            <section class="fancy_modal-popular_tags">\n              <h6>\u63a8\u8350</h6>\n              <ul>\n                ' + (null != (o = n.each.call(null != e ? e : {}, null != e ? e.popular_tags : e, {name: "each", hash: {}, fn: t.program(12, r, 0), inverse: t.noop, data: r})) ? o : "") + "\n              </ul>\n            </section>\n"
        }, compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o, a;
            return'<div class="modal-dialog">\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" data-dismiss="modal">X</button>\n\n      <h4>\n        <i class="fa fa-quote-left"></i>\n        ' + t.escapeExpression(t.lambda(null != (o = null != e ? e.thing : e) ? o.title : o, e)) + "\n      </h4>\n\n" + (null != (o = (n.ifCond || e && e.ifCond || n.helperMissing).call(null != e ? e : {}, null != e ? e.type : e, "!=", "edit", {name: "ifCond", hash: {}, fn: t.program(1, r, 0), inverse: t.noop, data: r})) ? o : "") + '    </div>\n\n    <div class="modal-body">\n      <form class="fancy_modal-main_form">\n        <section class="fancy_modal-options">\n' + (null != (o = (n.ifCond || e && e.ifCond || n.helperMissing).call(null != e ? e : {}, null != e ? e.type : e, "!=", "own", {name: "ifCond", hash: {}, fn: t.program(6, r, 0), inverse: t.noop, data: r})) ? o : "") + '\n          <div class="fancy_modal-rating">\n            <input class="range_rating" type="range" name="score" max="5" min="0" value="' + t.escapeExpression((a = null != (a = n.score || (null != e ? e.score : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "score", hash: {}, data: r}) : a)) + '">\n          </div>\n        </section>\n      </form>\n\n      <form class="fancy_modal-tags_form">\n        <input class="form-control" name="tag_names" type="text" placeholder="\u4e3a\u4ea7\u54c1\u6253\u6807\u7b7e\uff0c\u7528 \u201c,\u201d \u9694\u5f00" value="' + t.escapeExpression((a = null != (a = n.tag_names || (null != e ? e.tag_names : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "tag_names", hash: {}, data: r}) : a)) + '">\n        ' + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.tags_too_long : e, {name: "if", hash: {}, fn: t.program(9, r, 0), inverse: t.noop, data: r})) ? o : "") + '\n\n        <div class="fancy_modal-all_tags">\n' + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.recent_tags : e, {name: "if", hash: {}, fn: t.program(11, r, 0), inverse: t.noop, data: r})) ? o : "") + "\n" + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.popular_tags : e, {name: "if", hash: {}, fn: t.program(14, r, 0), inverse: t.noop, data: r})) ? o : "") + '        </div>\n      </form>\n    </div>\n\n    <div class="modal-footer">\n      <button class="btn btn--blue fancy_modal-submit_button" type="button">\u4fdd\u5b58</button>\n    </div>\n  </div>\n</div>'
        }, usePartial: !0, useData: !0}), this.HandlebarsTemplates["fancy/modal"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["groups/group"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o;
            return'<img src="' + t.escapeExpression((o = null != (o = n.avatar || (null != e ? e.avatar : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "avatar", hash: {}, data: r}) : o)) + '" height="20" width="20">\n' + t.escapeExpression((o = null != (o = n.value || (null != e ? e.value : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "value", hash: {}, data: r}) : o))
        }, useData: !0}), this.HandlebarsTemplates["groups/group"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["orders/address_item"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o, a;
            return'<li class="order-addresses-item">\n  <label>\n    <span class="order-addresses-item_label"><i class="fa fa-map-marker"></i>\u5bc4\u9001\u81f3</span>\n    <input type="radio" name="address_id" id="address_id_' + t.escapeExpression((a = null != (a = n._id || (null != e ? e._id : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "_id", hash: {}, data: r}) : a)) + '" value="' + t.escapeExpression((a = null != (a = n._id || (null != e ? e._id : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "_id", hash: {}, data: r}) : a)) + '" class="order-address-radio" checked="checked">\n    <span class="order-address-info">\n      <span class="order-address-info_base">' + t.escapeExpression((a = null != (a = n.province || (null != e ? e.province : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "province", hash: {}, data: r}) : a)) + t.escapeExpression((a = null != (a = n.city || (null != e ? e.city : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "city", hash: {}, data: r}) : a)) + t.escapeExpression((a = null != (a = n.district || (null != e ? e.district : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "district", hash: {}, data: r}) : a)) + t.escapeExpression((a = null != (a = n.street || (null != e ? e.street : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "street", hash: {}, data: r}) : a)) + '</span>\n      <span class="order-address-info_name">' + t.escapeExpression((a = null != (a = n.name || (null != e ? e.name : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "name", hash: {}, data: r}) : a)) + '</span>\n      <span class="order-address-info_phone">' + t.escapeExpression((a = null != (a = n.phone || (null != e ? e.phone : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "phone", hash: {}, data: r}) : a)) + "</span>\n    </span>\n  </label>\n  " + (null != (a = null != (a = n.default_html || (null != e ? e.default_html : e)) ? a : n.helperMissing, o = "function" == typeof a ? a.call(null != e ? e : {}, {name: "default_html", hash: {}, data: r}) : a) ? o : "") + '\n  <a class="btn btn--gray btn btn--xs pull-right order-address-update" href="' + t.escapeExpression((a = null != (a = n.edit_link || (null != e ? e.edit_link : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "edit_link", hash: {}, data: r}) : a)) + '">\u4fee\u6539\u5730\u5740</a>\n</li>'
        }, useData: !0}), this.HandlebarsTemplates["orders/address_item"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["photos/photo"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o;
            return'<figure class="uploader_item photo">\n  <img src="' + t.escapeExpression((o = null != (o = n.small_url || (null != e ? e.small_url : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "small_url", hash: {}, data: r}) : o)) + '" height="80" width="80" title="\u62d6\u52a8\u4ee5\u6539\u53d8\u987a\u5e8f">\n  <a class="destroy" title="\u5220\u9664" href="#">\n    <i class="fa fa-times-circle-o"></i>\n  </a>\n</figure>'
        }, useData: !0}), this.HandlebarsTemplates["photos/photo"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["photos/preview"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            return'<figure class="uploader_item photo" data-preview-width="80" data-preview-height="80">\n  <div class="progress progress-striped active">\n    <div class="progress-bar" style="width: 0%;"></div>\n  </div>\n</figure>'
        }, useData: !0}), this.HandlebarsTemplates["photos/preview"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["search/loading"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            return'<div class="search_menu-loading">\n  <p>\u66f4\u591a\u7ed3\u679c\u52a0\u8f7d\u4e2d...</p>\n  <div class="search_menu-progress"></div>\n</div>'
        }, useData: !0}), this.HandlebarsTemplates["search/loading"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["search/suggestions"] = Handlebars.template({1: function(t, e, n, i, r, o, a) {
            var s;
            return'  <h5>\n    <i class="fa fa-eye"></i>\u731c\u4f60\u5728\u627e\n  </h5>\n  <ul>\n' + (null != (s = n.each.call(null != e ? e : {}, null != e ? e.suggestions : e, {name: "each", hash: {}, fn: t.program(2, r, 0, o, a), inverse: t.noop, data: r})) ? s : "") + "  </ul>\n"
        }, 2: function(t, e, n, i, r, o, a) {
            var s;
            return null != (s = n["if"].call(null != e ? e : {}, r && r.index, {name: "if", hash: {}, fn: t.program(3, r, 0, o, a), inverse: t.noop, data: r})) ? s : ""
        }, 3: function(t, e, n, i, r, o, a) {
            var s, l;
            return"        <li" + (null != (s = (n.ifCond || e && e.ifCond || n.helperMissing).call(null != e ? e : {}, r && r.index, "==", null != a[2] ? a[2].selectedIndex : a[2], {name: "ifCond", hash: {}, fn: t.program(4, r, 0, o, a), inverse: t.noop, data: r})) ? s : "") + ' data-index="' + t.escapeExpression((l = null != (l = n.index || r && r.index) ? l : n.helperMissing, "function" == typeof l ? l.call(null != e ? e : {}, {name: "index", hash: {}, data: r}) : l)) + '" data-id="' + t.escapeExpression((l = null != (l = n.slug || (null != e ? e.slug : e)) ? l : n.helperMissing, "function" == typeof l ? l.call(null != e ? e : {}, {name: "slug", hash: {}, data: r}) : l)) + '">' + t.escapeExpression((l = null != (l = n.title || (null != e ? e.title : e)) ? l : n.helperMissing, "function" == typeof l ? l.call(null != e ? e : {}, {name: "title", hash: {}, data: r}) : l)) + "</li>\n"
        }, 4: function(t, e, n, i, r) {
            return' class="selected"'
        }, compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r, o, a) {
            var s;
            return null != (s = (n.ifCond || e && e.ifCond || n.helperMissing).call(null != e ? e : {}, null != (s = null != e ? e.suggestions : e) ? s.length : s, ">", 1, {name: "ifCond", hash: {}, fn: t.program(1, r, 0, o, a), inverse: t.noop, data: r})) ? s : ""
        }, useData: !0, useDepths: !0}), this.HandlebarsTemplates["search/suggestions"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["shared/alert"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o;
            return'<div class="alert alert-' + t.escapeExpression((o = null != (o = n.level || (null != e ? e.level : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "level", hash: {}, data: r}) : o)) + ' alert-dismissable">\n  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n  ' + t.escapeExpression((o = null != (o = n.content || (null != e ? e.content : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "content", hash: {}, data: r}) : o)) + "\n</div>"
        }, useData: !0}), this.HandlebarsTemplates["shared/alert"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["shared/loading"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            return'<div class="spinning">\n  <i class="fa fa-spinner fa-spin fa-3x"></i>\n</div>'
        }, useData: !0}), this.HandlebarsTemplates["shared/loading"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["shared/message_on_top"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o;
            return'<div class="message-on-top">\n  <p class="alert alert-' + t.escapeExpression((o = null != (o = n.type || (null != e ? e.type : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "type", hash: {}, data: r}) : o)) + ' fade in">\n    ' + t.escapeExpression((o = null != (o = n.content || (null != e ? e.content : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "content", hash: {}, data: r}) : o)) + '\n    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n  </p>\n</div>'
        }, useData: !0}), this.HandlebarsTemplates["shared/message_on_top"];
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["thing_lists/add_to_list_modal"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o;
            return'<div class="modal-dialog">\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" data-dismiss="modal">X</button>\n      <h4>\n        <i class="fa fa-list-ul"></i>\n        \u6dfb\u52a0\u5230\u6536\u85cf\u5217\u8868\n        <span class="title">' + t.escapeExpression((o = null != (o = n.title || (null != e ? e.title : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "title", hash: {}, data: r}) : o)) + '</span>\n      </h4>\n    </div>\n\n    <div class="modal-body">\n      <img alt="' + t.escapeExpression((o = null != (o = n.title || (null != e ? e.title : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "title", hash: {}, data: r}) : o)) + '" src="' + t.escapeExpression((o = null != (o = n.photo || (null != e ? e.photo : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "photo", hash: {}, data: r}) : o)) + '">\n\n      <header>\n        <h5>' + t.escapeExpression((o = null != (o = n.title || (null != e ? e.title : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "title", hash: {}, data: r}) : o)) + '</h5>\n      </header>\n\n      <form class="new-thing-list-form form-inline" action="#">\n        <h5>\u8bf7\u9009\u62e9\u8be5\u4ea7\u54c1\u8981\u6dfb\u52a0\u8fdb\u7684\u5217\u8868</h5>\n        <ul class="thing-lists"></ul>\n\n        <fieldset>\n          <div class="input-group">\n            <input class="form-control" name="name" type="text" placeholder="\u6dfb\u52a0\u4e00\u4e2a\u5217\u8868">\n            <span class="input-group-btn">\n              <button class="btn btn--blue disabled" type="submit">\u6dfb\u52a0</button>\n            </span>\n          </div>\n        </fieldset>\n      </form>\n    </div>\n\n    <div class="modal-footer">\n      <form class="new-thing-list-items-form" action="#">\n        <input class="form-control" name="description" type="text" placeholder="\u8bf4\u70b9\u4ec0\u4e48\u5427\uff08140\u5b57\u4ee5\u5185\u54e6\uff09" maxlength=140>\n        <button class="btn btn--blue" type="submit" data-category="thing" data-action="thinglist" data-label="' + t.escapeExpression((o = null != (o = n.title || (null != e ? e.title : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "title", hash: {}, data: r}) : o)) + '">\u5b8c\u6210</button>\n      </form>\n    </div>\n  </div>\n</div>'
        }, useData: !0}), this.HandlebarsTemplates["thing_lists/add_to_list_modal"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["thing_lists/list"] = Handlebars.template({1: function(t, e, n, i, r) {
            return'class="selected"'
        }, 3: function(t, e, n, i, r) {
            return'class="full" title="\u5217\u8868\u5df2\u6ee1"'
        }, 5: function(t, e, n, i, r) {
            var o;
            return"(" + t.escapeExpression((o = null != (o = n.size || (null != e ? e.size : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "size", hash: {}, data: r}) : o)) + ")"
        }, 7: function(t, e, n, i, r) {
            return"checked"
        }, 9: function(t, e, n, i, r) {
            return'<i class="fa fa-fw fa-check"></i>'
        }, compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o, a;
            return"<label " + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.selected : e, {name: "if", hash: {}, fn: t.program(1, r, 0), inverse: t.noop, data: r})) ? o : "") + " " + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.full : e, {name: "if", hash: {}, fn: t.program(3, r, 0), inverse: t.noop, data: r})) ? o : "") + '>\n  <span class="thing-list-name">' + t.escapeExpression((a = null != (a = n.name || (null != e ? e.name : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : {}, {name: "name", hash: {}, data: r}) : a)) + " " + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.size : e, {name: "if", hash: {}, fn: t.program(5, r, 0), inverse: t.noop, data: r})) ? o : "") + '</span>\n  <input type="checkbox" ' + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.selected : e, {name: "if", hash: {}, fn: t.program(7, r, 0), inverse: t.noop, data: r})) ? o : "") + ">\n  " + (null != (o = n["if"].call(null != e ? e : {}, null != e ? e.selected : e, {name: "if", hash: {}, fn: t.program(9, r, 0), inverse: t.noop, data: r})) ? o : "") + "\n</label>"
        }, useData: !0}), this.HandlebarsTemplates["thing_lists/list"]
}.call(this), function() {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["users/user"] = Handlebars.template({compiler: [7, ">= 4.0.0"], main: function(t, e, n, i, r) {
            var o;
            return'<img src="' + t.escapeExpression((o = null != (o = n.avatar || (null != e ? e.avatar : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "avatar", hash: {}, data: r}) : o)) + '" height="20" width="20">\n' + t.escapeExpression((o = null != (o = n.value || (null != e ? e.value : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != e ? e : {}, {name: "value", hash: {}, data: r}) : o))
        }, useData: !0}), this.HandlebarsTemplates["users/user"]
}.call(this), function() {
    !function(t) {
        return t.carousel = function(t) {
            var e;
            return e = this, this.defaults = {element: ".carousel"}, this.options = _.extend({}, this.defaults, t), $(this.options.element).each(function(n) {
                return function(i, r) {
                    var o, a, s, l;
                    return o = $(r), s = o.find(".carousel-control"), a = o.find(".carousel-inner"), a.data("carousel") ? void 0 : (t = {autoplay: !0, autoplaySpeed: 2e3}, $html.hasClass("mobile") ? _.extend(t, {arrows: !1}) : _.extend(t, {prevArrow: s.filter(".left")[0], nextArrow: s.filter(".right")[0]}), a.slick($.extend(t, n.options.slick)), o.data("carousel", a.slick("getSlick")), e.options.isResetItemWidth ? (o.addClass("reset-size"), l = function() {
                        var t, e;
                        return e = o.css("width"), t = o.css("height"), a.find(".item").css({width: e, height: t, lineHeight: t}), arguments.callee
                    }(), $window.on("resize", function() {
                        return e.options.isResetItemWidth ? l() : void 0
                    })) : void 0)
                }
            }(this))
        }, t.extendCarousel = function() {
            return $(".carousel--extend").each(function() {
                var t, e, n, i, r, o, a, s, l, u;
                return t = $(this), e = t.find(".carousel-inner"), i = e.children(".item"), r = t.next(".carousel_overview"), o = r.children(".slideshow_body"), n = r.find(".slideshow_inner"), s = r.find(".slideshow_control"), l = _.min([parseInt(i.css("max-height")), .75 * t.width()]) + "px", $html.hasClass("mobile") || i.css({fontSize: 0, height: l, lineHeight: l}), r.length && Modernizr.mq("(min-width: " + Making.breakpoints.screenSMMin + ")") && o.is(":visible") ? (a = o.find("[data-slide-to]"), a.eq(0).addClass("active"), u = parseInt(n.width() / 70), u = a.length < u ? a.length : u, n.slick({prevArrow: s.filter(".left")[0], nextArrow: s.filter(".right")[0], slidesToShow: u, slidesToScroll: u, fixedWidth: 70 - 10 / a.length, infinite: !1}), n.on("click", "[data-slide-to]", function() {
                    return e.slick("slickGoTo", this.getAttribute("data-slide-to"))
                }), e.on("afterChange", function(t, e, n) {
                    return a.eq(n).addClass("active").siblings().removeClass("active")
                })) : void 0
            })
        }, t
    }(Making)
}.call(this), function() {
    Making.CartItemNew = function() {
        return $(function() {
            var t, e, n, i, r, o, a, s, l, u, c, d;
            return Modernizr.mq("(max-width: " + Making.breakpoints.screenSMMax + ")") ? $("#thing_actions").remove() : Modernizr.mq("(min-width: " + Making.breakpoints.screenMDMin + ")") && $("#thing_actions_compact").remove(), t = $("#new_cart_item"), o = t.find('button[type="submit"]'), i = $("#price"), e = t.find("select#cart_item_kind_id"), r = t.find(".cart_item_quantity").children('input[type="number"]'), d = i.text(), a = !1, u = function(t, e) {
                return e ? i.html('<del class="price_original">' + e + '</del><span class="sale_price">' + t + "</span>") : i.html(t || d)
            }, s = function(t) {
                var e;
                return e = $(".cart_estimated_prompt").hide(), t ? e.find("time").replaceWith(t).end().show() : void 0
            }, c = function(t) {
                var e;
                return e = $(".cart_item_quantity .help-block").hide(), r = $("#cart_item_quantity").attr("max", 100), t > 0 ? e.find("strong").text(t) : e.text("\u6682\u65f6\u7f3a\u8d27"), e.css("display", "inline-block"), r.prop("max", t)
            }, l = function(t) {
                var e;
                (e = $("#thing_photos .carousel")).length && e.data("carousel").slickGoTo(t)
            }, e.change(function() {
                var t;
                return t = $(this).find("option:selected"), t.val() ? (u(t.data("price"), t.data("original-price")), s(t.data("estimated")), c(t.data("max")), l(t.data("photo")), t.val() ? (r.removeAttr("disabled"), o.removeAttr("disabled"), $(this).find("option").filter(function(t) {
                    return 0 === t && "" === this.value && !$(this).attr("disabled")
                }).attr("disabled", !0)) : (r.attr("disabled", !0), o.attr("disabled", !0))) : void 0
            }), $("#mobile_buy_modal").on("show.bs.modal", function(e) {
                var n;
                return t = t.find('button[type="submit"]').remove().end(), n = $("#mobile_buy_modal .modal-body").empty(), t.appendTo(n).removeClass("hidden").show(), $("#mobile_buy_modal .modal-footer .js-buy").one("click", function() {
                    t.trigger("submit"), $("#mobile_buy_modal").modal("hide"), a = $(this).data("directBuy")
                })
            }), t.on("ajax:success", function(t) {
                return a ? window.location.href = "/orders/new" : void 0
            }), n = t.find("option.kind_option:not(.disabled)"), n.length ? n.first().prop("selected", !0) : c(0), e.trigger("change")
        })
    }, Making.CartItemCreate = function(t) {
        var e, n;
        return n = $("#new_cart_item .cart_success").show(), $(".navbar-toggle").is(":visible") ? void 0 : (e = $("#cart_box"), e.popover({content: n[0].outerHTML, trigger: "manual", html: !0, placement: "bottom"}).popover("show"), setTimeout(function() {
            return e.popover("hide")
        }, 3e3), $(".navbar .cart_box .cart_items_count").text(t))
    }
}.call(this), $.fn.datetime = function(t) {
    function e(t, e) {
        var n = new Date(e);
        return new Date(new Date(t).setFullYear(n.getFullYear(), n.getMonth(), n.getDate())).toISOString()
    }
    function n(t, e) {
        var n = new Date(Date.parse("1970/01/01 " + e));
        return new Date(new Date(t).setHours(n.getHours(), n.getMinutes())).toISOString()
    }
    return $.extend($.fn.pickadate.defaults, {format: "yyyy/mm/dd", onClose: function() {
            $(document.activeElement).blur()
        }}), $.extend($.fn.pickatime.defaults, {format: "HH:i", onClose: function() {
            $(document.activeElement).blur()
        }}), this.each(function(i, r) {
        var o = $(r), a = $('<input class="datetime-date" type="date" placeholder="\u65e5\u671f">'), s = $('<input class="datetime-time" type="time" placeholder="\u65f6\u95f4">'), l = null, u = null;
        if (o.after(s).after(a), a.pickadate(t && t.date), s.pickatime(t && t.time), l = a.pickadate("picker"), u = s.pickatime("picker"), !isNaN(Date.parse(o.val()))) {
            var c = new Date(Date.parse(o.val()));
            l.set("select", c, {muted: !0}), u.set("select", [c.getHours(), c.getMinutes()], {muted: !0})
        }
        l.on({set: function() {
                var t = this.get("select", "yyyy/mm/dd");
                "" != t ? o.val(e(o.val(), t)) : (u.clear(), o.val(""))
            }}), u.on({set: function() {
                var t = this.get("select", "HH:i");
                "" != t ? "" == o.val() ? (o.val(n(new Date, t)), l.set("select", Date.parse(o.val()), {muted: !0})) : o.val(n(o.val(), t)) : "" != l.get() && u.set("select", [0, 0])
            }})
    })
}, function() {
    window.DropdownMenu = function(t) {
        var e;
        e = $(t.element), e.find(".dropdown-submenu").length && e.menuAim({activate: function(t) {
                return $(t).addClass("is-active")
            }, deactivate: function(t) {
                return $(t).removeClass("is-active")
            }, enter: function() {
                return e.addClass("is-expand")
            }, exitMenu: function() {
                return e.removeClass("is-expand"), !0
            }})
    }, function(t, e) {
        var n, i, r, o;
        o = '[data-toggle="dropdown_box"]', n = function() {
            function t(t, n) {
                this.$element = e(t), this.$parent = this.$element.closest(".dropdown"), this.$box = this.$element.next(".dropdown_box"), this.options = n, this.$box.on("click", function(t) {
                    return e(t.target).hasClass("dropdown_box_propagate") ? void 0 : t.stopPropagation()
                }).on("mouseenter", function() {
                    return $docbody.trigger("freeze.ko")
                }).on("mouseleave", function() {
                    return $docbody.trigger("unfreeze.ko")
                })
            }
            return t.prototype.toggle = function() {
                return this.$parent.toggleClass("open")
            }, t
        }(), i = function() {
            return e(o).each(function() {
                return e(this).closest(".dropdown").removeClass("open")
            })
        }, r = e.fn.dropdownbox, e.fn.dropdownbox = function(t) {
            return this.each(function() {
                var i, r, o;
                i = e(this), r = i.data("dropdownbox"), o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t), r || i.data("dropdownbox", r = new n(this, o)), "string" == typeof t && r[t]()
            })
        }, e.fn.dropdownbox.Constructor = n, e.fn.dropdownbox.noConflict = function() {
            return e.fn.dropdownbox = r, this
        }, e(document).on("click.dropdownbox.data-api", '[data-toggle="dropdown_box"]', function(t) {
            return e(this).dropdownbox("toggle"), !1
        }).on("click.dropdownbox.data-api", function(t) {
            return e(t.target).hasClass("dropdown_box_propagate") ? void 0 : i()
        })
    }(Making, jQuery)
}.call(this), function() {
    $.fn.editable.defaults.mode = "inline", $.fn.editable.defaults.onblur = "submit", $.fn.editable.defaults.showbuttons = !1, $.fn.editable.defaults.clear = !1, $.fn.editable.defaults.unsavedclass = null
}.call(this), function() {
    window.Making = function(t) {
        return t.EditorCompact = function(t) {
            var e, n, i, r, o, a, s, l, u, c, d, h;
            return o = $(t), r = o.children(".editor_compact"), n = r.find(".editor_content"), a = n.children("textarea"), s = o.children(".uploader"), l = o.find("#photo_image"), u = o.find(".uploader_queue"), i = r.find(".counter"), e = r.find('[type="submit"]'), h = new $.Deferred, c = function(t) {
                return t.done(function() {
                    var t;
                    return r[0].reset(), r.find(".rating > .star").removeClass("selected").end().find('[name*="[photo_ids]"]').remove(), n.removeAttr("style"), 0 !== (t = parseInt(a.data("maxlength"))) && i.text(t), u.removeAttr("style").children("ul").empty(), e.button("reset")
                })
            }, d = function() {
                var t;
                return t = u.outerHeight(), u.css({marginTop: -(70 + t)}), n.css({paddingBottom: t})
            }, o.on("click", ".uploader_button", function() {
                return r.hasClass("uploading") ? void 0 : r.addClass("uploading")
            }).on("fileuploadsubmit", d).on("submit", ".editor_compact", function() {
                return h = new $.Deferred, c(h), o.data("reset", h)
            }), s.on("fail.validation", d), c(h), o.data("reset", h)
        }, t
    }(window.Making || {})
}.call(this), function() {
    !function(t) {
        return t.embedThing = function(t) {
            var e, n, i, r, o, a, s, l, u;
            return e = $(t), n = $("#thing--embed_form"), s = n.find(".js-submit"), o = n.find(".fieldset--photo"), a = o.children("figure"), i = o.children("footer").children("button"), r = o.find('input[type="file"]'), u = "", l = e.attr("data-article-id") || e.find(".article").attr("data-article-id"), e.on("mouseenter.embed", ".thing--embed", function(t) {
                return $(t.currentTarget).append('<button class="knewone-embed-edit" type="button" data-toggle="modal" data-target="#thing--embed_form"><i class="fa fa-pencil"></i></button>')
            }).on("mouseleave.embed", ".thing--embed", function(t) {
                return $(t.currentTarget).children(".knewone-embed-edit").remove()
            }).on("click.embed", ".knewone-embed-edit", function(t) {
                return n.data("embedEditTarget", $(this).parent())
            }), n.on("click", ".js-submit", function(t) {
                var i, r, o, s, l;
                return i = n.data("embedEditTarget"), r = i.closest(".knewone-embed--thing"), o = JSON.parse(r.attr("data-knewone-embed-options") || "{}"), l = Array.isArray(o.photos) ? o.photos : o.photos ? o.photos.split(",") : [], s = i.index(), l[s] = u, o.photos = l.join(","), r.attr("data-knewone-embed-options", JSON.stringify(o)), i.children("a").children("img").attr("src", u + "!middle"), e.trigger("input"), n.modal("hide"), a.empty()
            }), r.fileupload({dataType: "json", dropZone: null, formData: function() {
                    return[{name: "policy", value: r.attr("data-policy")}, {name: "signature", value: r.attr("data-signature")}]
                }, beforeSend: function(t, e) {
                    return i.button("loading")
                }, done: function(t, e) {
                    return u = r.data("domain") + e.jqXHR.responseJSON.url, a.empty().append("<img src=" + u + ">"), i.button("reset"), s.enable()
                }})
        }, t
    }(Making)
}.call(this);
var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value"in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
}();
!function() {
    var t = function() {
        function t(e) {
            _classCallCheck(this, t), _.extend(this, Backbone.Events), this.options = e, this.$menu = null, this.$menuBody = null, this.$relatedTarget = null, this.isLoaded = !1, this.isOpened = !1, this.categories = [], this.positions = [], this.handleEvents()
        }
        return _createClass(t, [{key: "handleEvents", value: function() {
                    this.on("loading.emoji", this.handleLoading).on("loaded.emoji", this.handleLoaded)
                }}, {key: "initElement", value: function() {
                    var t = this;
                    this.$menu.appendTo("body").css("width", parseInt(this.$menu.css("width")) + parseInt(Making.getScrollbarWidth()) + "px").on("mouseenter.emoji mouseleave.emoji", this.handleFreezeWindow.bind(this)).on("click.emoji", ".emoji-category-tab", this.handleScrollToCategory.bind(this)).on("click.emoji", ".emoji-outer", this.handleInsert.bind(this)), this.$menuBody.on("scroll.emoji", function() {
                        for (var e = t.$menuBody.scrollTop(), n = t.positions.length - 1; n >= 0; n--)
                            if (e >= t.positions[n]) {
                                t.activeCategoryTab('[href="#emoji-category--' + t.categories[n] + '"]');
                                break
                            }
                    }), $(document).on("click.emoji", function(e) {
                        var n = $(e.target);
                        t.isOpened && 0 == t.$menu.find(n).length && !n.closest(t.options.toggle).length && t.hide()
                    })
                }}, {key: "handleLoading", value: function() {
                    this.$relatedTarget.addClass("is-loading")
                }}, {key: "handleLoaded", value: function(t) {
                    this.$relatedTarget.removeClass("is-loading"), t && (this.isLoaded = !0)
                }}, {key: "handleInsert", value: function(t) {
                    t.preventDefault();
                    var e = $(t.currentTarget).find(".emoji"), n = e.attr("data-shortname");
                    this.insert(" :" + n + ": "), this.hide()
                }}, {key: "handleScrollToCategory", value: function(t) {
                    t.preventDefault();
                    var e = $(t.currentTarget.getAttribute("href")).attr("data-category");
                    this.activeCategoryTab(t.currentTarget), this.$menuBody.scrollTop(this.positions[this.categories.indexOf(e)])
                }}, {key: "handleFreezeWindow", value: function(t) {
                    switch (t.type) {
                        case"mouseenter":
                            $docbody.trigger("freeze.ko");
                            break;
                        case"mouseleave":
                            $docbody.trigger("unfreeze.ko")
                        }
                }}, {key: "render", value: function(t) {
                    this.$relatedTarget = $(t), this.$textarea = this.$relatedTarget.closest("form").find(this.$relatedTarget.attr("data-emoji-textarea")), this.isLoaded ? this.show() : this.load()
                }}, {key: "load", value: function() {
                    var t = this;
                    this.trigger("loading.emoji"), $.ajax({url: "/emoji_menu", dataType: "html"}).done(function(e) {
                        t.$menu = $(e), t.$menuBody = t.$menu.find(".emoji_menu-body"), t.initElement(), t.show(), t.trigger("loaded.emoji", !0)
                    }).fail(function() {
                        alert("\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\u3002"), t.trigger("loaded.emoji", !1)
                    })
                }}, {key: "show", value: function() {
                    var t = this, e = this.$relatedTarget.offset(), n = e.top + this.$relatedTarget.outerHeight() + 5, i = 0;
                    i = "left" == this.$relatedTarget.attr("data-alignment") ? e.left : e.left + this.$relatedTarget.outerWidth() - this.$menu.outerWidth(), this.$menu.css({left: i, top: n}).addClass("is-opened"), this.$relatedTarget.addClass("is-active"), this.isOpened = !0, 0 == this.positions.length && this.$menu.find(".emoji-category").each(function(e, n) {
                        t.categories.push(n.getAttribute("data-category")), t.positions.push($(n).position().top)
                    })
                }}, {key: "hide", value: function() {
                    this.$menu.removeClass("is-opened"), this.$relatedTarget.removeClass("is-active"), this.isOpened = !1
                }}, {key: "activeCategoryTab", value: function(t) {
                    var e = $(t);
                    e.addClass("is-active").siblings(".emoji-category-tab").removeClass("is-active")
                }}, {key: "insert", value: function(t) {
                    var e = this.$textarea[0], n = e.scrollTop, i = 0, r = e.selectionStart || "0" == e.selectionStart ? "ff" : document.selection ? "ie" : !1;
                    if ("ie" == r) {
                        var o = document.selection.createRange();
                        e.focus(), o.moveStart("character", -e.value.length), i = o.text.length
                    } else
                        "ff" == r && (i = e.selectionStart);
                    var a = e.value.substring(0, i), s = e.value.substring(i, e.value.length);
                    if (e.value = a + t + s, i += t.length, "ie" == r) {
                        var o = document.selection.createRange();
                        e.focus(), o.moveStart("character", -e.value.length), o.moveStart("character", i), o.moveEnd("character", 0), o.select()
                    } else
                        "ff" == r && (e.selectionStart = i, e.selectionEnd = i, e.focus());
                    e.scrollTop = n, this.$textarea.trigger("input")
                }}]), t
    }();
    window.EmojiMenu = t
}(), function() {
    var t, e;
    $(function() {
        var t, e, n;
        return $("body").append('<div id="fancy-modal-container"></div>'), e = new Backbone.Marionette.Region({el: "#fancy-modal-container"}), n = !1, t = function(t, i) {
            var r;
            return r = new Making.Views.FancyModal({model: new Backbone.Model(_.extend(i, t))}), r.on("destroy", function() {
                return n = !1
            }), e.show(r)
        }, $(document).on("click", "a[data-fancy]", function(e) {
            var i, r, o;
            return e.preventDefault(), Making.isSignedIn ? n ? void 0 : (n = !0, i = $(this), r = _.pick(i.data(), "fancied", "state"), o = _.pick(i.data(), "type", "from"), o.thing_id = i.data("fancy"), (i.hasClass("unfancied") || i.hasClass("unowned")) && "thing" !== o.from ? t(r, o) : $.ajax({method: "POST", url: "/things/" + o.thing_id + "/impressions", dateType: "json"}).done(function(e) {
                return t(e, o)
            }).fail(function() {
                return n = !1
            })) : $("#login-modal").modal("show")
        })
    }), t = function(t, e) {
        var n;
        return n = t.find(".humanized_number"), n.length ? n.attr("title", parseInt(n.attr("title")) + e) : t.text(parseInt(t.text()) + e)
    }, e = function(t, e, n, i, r) {
        return null == r && (r = "heartbeat"), t.attr("title", e).removeClass("unfancied fancied desired unowned owned").children(".fa").attr("class", "fa " + i).addClass(r).one(Making.prefixEvent("AnimationEnd"), function() {
            return $(this).removeClass(r), t.addClass(n)
        })
    }, Making.Fancy || (Making.Fancy = {}), Making.Fancy.updateAllTriggers = function(n, i, r) {
        return $("a[data-fancy='" + n + "']").each(function() {
            var n, o, a, s;
            return o = $(this), a = o.data(), n = "fancy" === a.type ? o.find(".fanciers_count") : o.find(".owners_count"), "fancy" === a.type ? !a.fancied && i ? (t(n, 1), s = "desired" === r ? [r, "fa-desire", "swing"] : ["fancied", "fa-heart"], e.apply(this, [o, "\u4fee\u6539\u4ea7\u54c1\u5370\u8c61"].concat(s))) : a.fancied && !i ? (t(n, -1), e(o, "\u559c\u6b22\u6b64\u4ea7\u54c1", "unfancied", "fa-heart-o")) : "desired" !== a.state && "desired" === r ? e(o, "\u4fee\u6539\u4ea7\u54c1\u5370\u8c61", "desired", "fa-desire", "swing") : "desired" === a.state && "desired" !== r && e(o, "\u4fee\u6539\u4ea7\u54c1\u5370\u8c61", "fancied", "fa-heart") : "own" === a.type && ("owned" !== a.state && "owned" === r ? (t(n, 1), e(o, "\u4fee\u6539\u4ea7\u54c1\u5370\u8c61", "owned", "fa-check-circle-o", "flip")) : "owned" === a.state && "owned" !== r && (t(n, -1), e(o, "\u62e5\u6709\u6b64\u4ea7\u54c1", "unowned", "fa-circle-o", "flip"))), o.data({fancied: i, state: r})
        })
    }
}.call(this), function() {
    !function(t, e) {
        t.validator = function(t, n) {
            var i, r, o, a, s;
            return null == t && (t = "form:not(novalidate)"), i = e(t), s = "[required]", r = i.find(s), o = i.find('[type="submit"]'), a = {validator: {identifie: s, error: "is-invalid", isErrorOnParent: !0, method: "validate.manual"}}, n = _.extend({}, a, n), r.attr("data-event", "validate"), i.validator(n.validator), i.on("change keyup focusin focusout", ".form-control", function(t) {
                var n, r;
                switch (n = e(t.currentTarget), r = n.closest(".form-group"), t.type) {
                    case"focusin":
                        return r.addClass("is-focused").removeClass("is-invalid").find("ul.help-block").empty(), i.find(".form-results").addClass("hidden");
                    case"change":
                    case"keyup":
                        return r["" === n.val() ? "removeClass" : "addClass"]("is-filled");
                    case"focusout":
                        return r.removeClass("is-focused")
                    }
            }).on("change keyup focusin", s, function(t) {
                var n, i, r;
                return n = e(t.currentTarget), r = n.data("filled") || !1, i = t.type, ("change" === i && !r || ("keyup" === i || "focusin" === i) && r) && n.trigger("validate.manual"), n.val().trim().length > 0 ? n.data("filled", !0) : void 0
            }), r.on("after:validate", function(t, n) {
                var r, a, s, l, u;
                return r = e(n), a = r.closest(".form-group"), l = a.children("label"), s = a.find("ul.help-block"), a.hasClass("is-invalid") ? (u = "", u = a.hasClass("empty") ? l.text() + "\u4e0d\u80fd\u4e3a\u7a7a" : r.data("message-error"), s.empty().html("<li>" + u + "</li>"), o.disable()) : (s.empty(), 0 === i.find(".is-invalid").length ? o.enable() : void 0)
            })
        }, t.showValidateResults = function(t, n) {
            var i, r, o, a;
            i = e(t);
            for (r in n)
                o = n[r], a = "", o.forEach(function(t) {
                    return a += "<li>" + t + "</li>"
                }), i.find('[name="' + r + '"]').closest(".form-group").addClass("is-invalid").find("ul.help-block").empty().html(a);
            return i.find('[type="submit"]').disable()
        }, t.validatePhone = function(t) {
            return e(t).on("change", function(t) {
                return isNaN(this.value) || 11 !== this.value.length ? (alert("\u8bf7\u586b\u5199\u6709\u6548\u7684\u624b\u673a\u53f7\u7801\u3002"), this.value = "") : void 0
            })
        }
    }(Making, jQuery)
}.call(this), function() {
    Making.UserFuzzy = function(t, e) {
        var n;
        return n = new Bloodhound({datumTokenizer: function(t) {
                return Bloodhound.tokenizers.whitespace(t.value)
            }, queryTokenizer: Bloodhound.tokenizers.whitespace, limit: 10, remote: {url: "/users/fuzzy.json?query=%QUERY"}}), n.initialize(), $(t).typeahead({autoselect: !0, highlight: !0, minLength: 2}, {name: "users", displayKey: "value", source: n.ttAdapter(), templates: {suggestion: HandlebarsTemplates["users/user"], empty: '<em class="tt-no-suggestion">\u6ca1\u6709\u7ed3\u679c</em>'}}).on("typeahead:selected", function(t, n, i) {
            return $(e).val(n.data)
        })
    }, Making.GroupFuzzy = function(t, e, n) {
        var i;
        return null == n && (n = !0), i = new Bloodhound({datumTokenizer: function(t) {
                return Bloodhound.tokenizers.whitespace(t.value)
            }, queryTokenizer: Bloodhound.tokenizers.whitespace, limit: 10, remote: {url: "/groups/fuzzy.json?query=%QUERY&current_user=" + n}}), i.initialize(), $(t).typeahead({autoselect: !0, highlight: !0, minLength: 1}, {name: "groups", displayKey: "value", source: i.ttAdapter(), templates: {suggestion: HandlebarsTemplates["groups/group"], empty: '<em class="tt-no-suggestion">\u6ca1\u6709\u7ed3\u679c</em>'}}).on("typeahead:selected", function(t, n, i) {
            return $(e).val(n.data)
        })
    }, Making.TagFuzzy = function(t, e) {
        var n;
        return n = new Bloodhound({datumTokenizer: function(t) {
                return Bloodhound.tokenizers.whitespace(t.value)
            }, queryTokenizer: Bloodhound.tokenizers.whitespace, limit: 10, remote: {url: "/tags/fuzzy.json?query=%QUERY"}}), n.initialize(), $(t).typeahead({autoselect: !0, highlight: !0, minLength: 2}, {name: "tags", displayKey: "value", source: n.ttAdapter(), templates: {suggestion: HandlebarsTemplates["tags/tag"], empty: '<em class="tt-no-suggestion">\u6ca1\u6709\u7ed3\u679c</em>'}}).on("typeahead:selected", function(t, n, i) {
            return $(e).val(n.data)
        })
    }, Making.atUser = function(t) {
        return $(t).atwho({at: "@", callbacks: {remoteFilter: function(t, e) {
                    t.length > 0 && $.getJSON("/users/fuzzy.json", {query: t}, function(t) {
                        var n;
                        n = [], t.forEach(function(t) {
                            n.push({name: t.value + " "})
                        }), e(n)
                    })
                }}})
    }, Making.AppChannelFuzzy = function(t, e) {
        var n;
        return n = new Bloodhound({datumTokenizer: function(t) {
                return Bloodhound.tokenizers.whitespace(t.value)
            }, queryTokenizer: Bloodhound.tokenizers.whitespace, limit: 10, remote: {url: "/app/channels/fuzzy.json?query=%QUERY"}}), n.initialize(), $(t).typeahead({autoselect: !0, highlight: !0, minLength: 2}, {name: "channels", displayKey: "value", source: n.ttAdapter(), templates: {suggestion: HandlebarsTemplates["app/channels/channel"], empty: '<em class="tt-no-suggestion">\u6ca1\u6709\u7ed3\u679c</em>'}}).on("typeahead:selected", function(t, n, i) {
            return $(e).val(n.data)
        })
    }
}.call(this), function() {
    Handlebars.registerHelper("ifCond", function(t, e, n, i) {
        switch (e) {
            case"==":
                return t === n ? i.fn(this) : i.inverse(this);
            case"!=":
                return t !== n ? i.fn(this) : i.inverse(this);
            case"<":
                return n > t ? i.fn(this) : i.inverse(this);
            case"<=":
                return n >= t ? i.fn(this) : i.inverse(this);
            case">":
                return t > n ? i.fn(this) : i.inverse(this);
            case">=":
                return t >= n ? i.fn(this) : i.inverse(this);
            case"&&":
                return t && n ? i.fn(this) : i.inverse(this);
            case"||":
                return t || n ? i.fn(this) : i.inverse(this);
            default:
                return i.inverse(this)
            }
    })
}.call(this), function() {
    !function(t) {
        return t.imagePicker = function(t) {
            var e;
            return e = $(t.el), e.on("click", ".image_picker-item", function(n) {
                var i, r;
                return i = $(this), r = i.data("url"), n.preventDefault(), i.addClass("is-active").siblings().removeClass("is-active"), t.after ? t.after.call(e, i, r) : void 0
            })
        }, t
    }(Making)
}.call(this), function() {
    var t = {activeClass: "is-active"};
    $.fn.linkedOption = function(e) {
        var n = this, i = $.extend({}, t, e), r = this;
        return r.on("change.linkage", function() {
            n.each(function(t, e) {
                var n = $(e), r = n.attr("data-linkage");
                if (void 0 != r) {
                    var o = $(r);
                    n.is(":checked") ? o.removeAttr("disabled").addClass(i.activeClass) : o.prop("disabled", !0).removeClass(i.activeClass)
                }
            })
        }), this
    }
}(), function() {
    !function(t) {
        return t.loginModal = function() {
            var e, n, i, r, o, a, s;
            return a = $("#login-modal"), i = a.find(".modal-dialog_wrapper"), e = i.find(".modal-dialog--signin"), n = i.find(".modal-dialog--signup"), o = e.find("legend"), r = a.find(".modal-flipper"), s = function() {
                return a.find("img.js-lazy").trigger("lazyload")
            }, r.on("click", function(t) {
                return t.preventDefault(), i.toggleClass("is-flipped"), i.hasClass("is-flipped") ? s() : void 0
            }), a.on("show.bs.modal", function(e) {
                var n, r;
                if ("wechat" === t.browser)
                    return e.preventDefault(), Making.logIntoWechat();
                switch (n = $(e.relatedTarget), r = n.data("action-type") || "signin") {
                    case"signup":
                        return o.text("\u767b\u5f55"), i.addClass("is-flipped"), s();
                    case"signin":
                        return o.text(n.data("signin-legend") || "\u767b\u5f55"), i.removeClass("is-flipped")
                    }
            }), a.find(".button--clear").on("click", function(t) {
                return t.preventDefault(), $(this).closest(".form-group").removeClass("is-filled").children(".form-control").val("").focus()
            }), $("#user_agreement").on("change", function(t) {
                var e, n;
                return n = $(this), e = n.parents("form").find('[type="submit"]'), e[n.prop("checked") === !0 ? "enable" : "disable"]()
            }), t.validator("#signup_form"), t.validator("#signin_form"), t.validator("#find_password_form"), t.lazyLoadImages({container: "#login-modal", event: "lazyload"})
        }
    }(Making)
}.call(this), function() {
    !function() {
        var t;
        t = function() {
            function t(t, e, n) {
                this.$element = $(t), this.$container = $(e), this.$toggle = $(n), this.$close = this.$element.find(".menu-close"), this.$backdrop = $('<div class="menu-backdrop"></div>'), this.activeClass = "menu-open", _.bindAll(this, "show", "hide"), this.$toggle.on("tap click", this.show), this.$close.on("tap click", this.hide)
            }
            return t.prototype.show = function(t) {
                return t.preventDefault(), this.$backdrop.clone().on("tap click", this.hide).addClass("in").appendTo(this.$container), this.$container.addClass(this.activeClass)
            }, t.prototype.hide = function(t) {
                return t.preventDefault(), this.$container.removeClass(this.activeClass).find(".menu-backdrop").remove()
            }, t
        }(), window.Menu = t
    }()
}.call(this), function() {
    Making.ShowMessageOnTop = function(t, e, n) {
        var i;
        return null == e && (e = "success"), null == n && (n = 2e3), i = HandlebarsTemplates["shared/message_on_top"]({content: t, type: e}), $(".message-on-top").replaceWith(i), setTimeout(function() {
            return $(".message-on-top .alert").alert("close")
        }, n)
    }
}.call(this), function() {
    Making.prefillPrivateMessage = function() {
        var t, e, n, i, r, o, a;
        return a = "[data-private-message]", n = $("#new_private_message_modal"), e = n.find(".field-message-receiver"), i = n.find('[name="dialog_user_id"]'), r = n.find('[name="dialog_user_name"]'), t = n.find('[name="dialog_content"]'), o = function() {
            return i.val(""), r.enable().val(""), t.val(""), e.removeClass("is-hidden"), $(".message-receiver--preset").addClass("is-hidden")
        }, $document.on("click", a, function(a) {
            var s, l, u, c, d;
            return a.preventDefault(), Making.isSignedIn ? (l = $(this), c = l.data("message-receiver-id"), d = l.data("message-receiver-name"), u = l.data("message-content"), l.data("directly-send") ? $.ajax({type: "POST", url: "/dialogs", data: {dialog_user_id: c, dialog_content: u}}).done(function() {
                return l.disable()
            }) : (o(), void 0 !== c && (i.val(c), s = $("#message-receiver--preset_" + c), s.length && (e.addClass("is-hidden"), s.removeClass("is-hidden"))), void 0 !== d && r.val(d).disable(), void 0 !== u && t.val(u), n.modal("show"))) : $("#login-modal").modal("show")
        }), n.on("shown.bs.modal", function(e) {
            return"" === r.val() ? r.focus() : t.focus()
        })
    }
}.call(this), function() {
    Making.profilePopovers = function() {
        var t, e, n, i, r;
        return e = function(t, e) {
            var n, i, r, o;
            return i = $(t), n = $(e), o = i.appendTo($("body")).outerWidth(), i.detach(), r = n.offset().left + n.outerWidth(), r + o < $(window).width() ? "right" : n.offset().left > o ? "left" : n.offset().top > o ? "top" : "bottom"
        }, n = function(t) {
            return t.data("bs.popover") ? void 0 : (t.popover({container: "body", content: '<i class="fa fa-spinner fa-spin"></i> \u52a0\u8f7d\u4e2d', html: !0, placement: e, trigger: "manual", template: '<div class="popover profile_popover"><div class="arrow"></div><div class="popover-content"></div></div>'}), t.on("mouseleave", function() {
                return setTimeout(function() {
                    return 0 === $(".popover:hover").length ? t.popover("hide") : void 0
                }, 200)
            }))
        }, r = _.debounce(function(e, n) {
            return $(".popover").remove(), e.is(":hover") ? (e.data("bs.popover").options.content = n, e.popover("show"), $(".popover").on("mouseleave", function() {
                return e.popover("hide")
            }).on("click", ".follow_btn", function() {
                var n;
                return n = e.attr("data-profile-popover"), delete t[n]
            })) : void 0
        }, 200), t = Object.create(null), i = "[data-profile-popover]", $(document).on("mouseenter", i, function(e) {
            var i, o;
            if (!$("html").is(".mobile"))
                return i = $(this), n(i), o = i.attr("data-profile-popover"), t[o] ? r(i, t[o]) : $.get("/users/" + o + "/profile", function(e) {
                    return t[o] = e, r(i, e)
                })
        })
    }
}.call(this), function() {
    var t, e, n;
    n = function() {
        function t(t, e) {
            var n;
            if (this.options = e, this.$elem = $(t), !this.$elem.length)
                throw"Nothing selected";
            this.render(), this.widthInt = 0, null != (n = this.options.initFn) && n.call(this)
        }
        return t.prototype.copyStyleToWrapper = function() {
            var t, e;
            return t = ["float", "display"], e = {}, $.each(t, function(t) {
                return function(n, i) {
                    var r;
                    return r = t.$elem.css(i), e[i] = r
                }
            }(this)), this.$wrapper.css(e)
        }, t.prototype.renderWrapper = function() {
            return this.$elem.wrap('<div class="progressable-wrapper" />'), this.$wrapper = this.$elem.parent(), this.copyStyleToWrapper()
        }, t.prototype.renderProgressBar = function() {
            return this.$progress = $('<div class="progressable-progress-bar" />'), this.$wrapper.append(this.$progress)
        }, t.prototype.renderText = function() {
            return this.$text = $('<div class="progressable-text" />'), this.$text.html("0%"), this.$wrapper.append(this.$text)
        }, t.prototype.render = function() {
            return this.renderWrapper(), this.renderProgressBar(), this.options.withText && this.renderText(), this.options.disabled ? this.$elem.attr("disabled", "disabled") : void 0;
        }, t.prototype.updateText = function(t) {
            var e;
            return null != (e = this.$text) && e.animate({left: t + "%", queue: !1}), this.$text.html(t + "%")
        }, t.prototype.start = function() {
            var t;
            return t = setInterval(function(e) {
                return function() {
                    var n, i;
                    if (parseInt(10 * Math.random()) % 2 !== 0)
                        return 100 === e.widthInt ? clearInterval(t) : (i = 5, n = 100 - e.widthInt, n = n > 40 ? 20 * Math.random() + 20 : n, e.inc(Math.random() * (n - i) + i))
                }
            }(this), this.options.progressInterval)
        }, t.prototype.inc = function(t) {
            return this.set(this.widthInt + parseInt(t))
        }, t.prototype.set = function(t) {
            var e;
            return e = parseInt(t), e > 100 && (e = 100), this.$progress.animate({width: e + "%", queue: !1}, function(t) {
                return function() {
                    switch (e) {
                        case 0:
                            return t.stop();
                        case 100:
                            return t.done()
                        }
                }
            }(this)), this.options.withText && this.updateText(e), this.widthInt = e
        }, t.prototype.stop = function() {
            return this.$elem.trigger("stop:progress", [this]), this.options.stopThenRemove ? this.remove() : void 0
        }, t.prototype.done = function() {
            return this.$elem.trigger("done:progress", [this]), this.options.doneThenRemove ? this.remove() : void 0
        }, t.prototype.remove = function() {
            return this.$progress.fadeOut(300, function(t) {
                return function() {
                    var e;
                    return t.$elem.trigger("remove:progress", [t]), t.$elem.unwrap(), t.$progress.remove(), null != (e = t.$text) && e.remove(), t.$elem.removeData("progressable"), t.options.disabled ? t.$elem.removeAttr("disabled") : void 0
                }
            }(this))
        }, t
    }(), e = function(e) {
        return this.each(function() {
            var i, r, o;
            if (i = $(this), r = i.data("progressable"), "[object String]" === Object.prototype.toString.call(e)) {
                if (r)
                    return null != (o = r[e]) ? o.call(r) : void 0
            } else if (e = $.extend({}, t, e), !r)
                return i.data("progressable", r = new n(this, e))
        })
    }, $.fn.$progress = e, $.fn.$progress.Constructor = n, t = {disabled: !0, stopThenRemove: !0, doneThenRemove: !0, withText: !0, progressInterval: 400}, $.fn.$progress.Default = t, Making.Progressable = function(t, e) {
        return t.$progress(e), [t, t.data("progressable")]
    }
}.call(this), function() {
    !function() {
        return $.fn.rating = function() {
            return this.each(function() {
                var t, e, n, i, r, o, a;
                for (t = $(this), n = $(), a = i = r = parseInt(t.attr("max")); 1 >= r?1 >= i:i >= 1; a = 1 >= r?++i:--i)
                    n = n.add($("<span />").addClass("star").data("val", a));
                return e = $("<div />").addClass("rating").append(n).insertAfter(t).data("score", t.val()).on("click", ".star", function() {
                    var e;
                    return e = $(this), e.hasClass("selected") ? (e.removeClass("selected"), t.val(0), console.log(t)) : (e.addClass("selected").siblings().removeClass("selected"), t.val(e.data("val"))), t.trigger("change"), e.parents(".rating").data("score", t.val())
                }), o = parseInt(t.val()), o > 0 ? e.find(".star").eq(-o).addClass("selected") : void 0
            })
        }, $.fn.score = function() {
            return this.each(function(t, e) {
                var n, i, r, o, a, s;
                if (n = $(e), a = n.data("score"), r = $(), !(n.find(".star").length > 0)) {
                    for (s = o = 5; o >= 1; s = --o)
                        i = $("<span />").addClass("star").data("val", s), i.data("val") <= parseInt(a) && i.addClass("active"), r = r.add(i);
                    return $("<div />").addClass("rate").data("score", a).append(r).appendTo(n)
                }
            })
        }
    }()
}.call(this), function() {
    Making.initSearchForm = function(t) {
        return new Making.Views.SearchForm({el: t})
    }, $("html").hasClass("desktop") && $(function() {
        var t, e, n;
        return t = $("#navbar_search"), n = $("#nav_primary"), e = t.find('input[type="search"]'), 0 !== t.length ? (e.on("focus", function() {
            return n.hide(), t.addClass("focus")
        }).on("blur", function() {
            return Making.isDebugging() ? void 0 : e.data("ignore-blur-event") ? void e.data("ignore-blur-event", !1) : (t.removeClass("focus"), Modernizr.csstransitions ? t.one($.support.transition.end, function() {
                return n.fadeIn()
            }) : n.show())
        }), Making.initSearchForm(t)) : void 0
    })
}.call(this);
var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value"in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
}();
!function() {
    var t = function() {
        function t(e, n) {
            _classCallCheck(this, t), this.options = n, this.$element = $(e), this.$body = $(this.options.body), this.content = this.options.content, this.url = this.options.url, this.cover = this.options.cover, this.images = _.isArray(this.options.images) ? this.options.images : this.collectImages(), this.$element.on("click.socialshare", ".weibo", this.weibo.bind(this)).on("click.socialshare", ".douban", this.douban.bind(this)).on("click.socialshare", ".renren", this.renren.bind(this))
        }
        return _createClass(t, [{key: "collectImages", value: function() {
                    var t = [], e = this.$body.find("img");
                    return t.push(this.cover || ""), e.length && e.each(function(e, n) {
                        var i = n.getAttribute("data-original"), r = n.getAttribute("src");
                        null != i ? t.push(i) : null != r && 0 == r.indexOf("http") && t.push(r)
                    }), t.forEach(function(e, n) {
                        0 != e.indexOf("http") && t.splice(n, 1)
                    }), t
                }}, {key: "set", value: function(t) {
                    this.content = t.content || this.content, this.url = t.url || this.url, null != t.body && (this.$body = $(t.body), this.images = this.collectImages()), this.images = _.isArray(t.images) ? t.images : this.images, null != t.cover && (this.cover = t.cover, this.images[0] != this.cover && this.images.unshift(this.cover))
                }}, {key: "weibo", value: function(t) {
                    t.preventDefault(), window.open("http://service.weibo.com/share/share.php?appkey=" + this.options.consumerKeys.weibo + "&title=" + encodeURIComponent(this.content) + "&url=" + encodeURIComponent(Making.addParam("refer", "weibo", this.url)) + "&pic=" + encodeURIComponent(this.images.slice(0, 20).join("||")))
                }}, {key: "douban", value: function(t) {
                    function e() {
                        window.open(l, "douban", "toolbar=0,resizable=1,scrollbars=yes,status=1,width=" + u + ",height=" + c + ",left=" + (screen.width - u) / 2 + ",top=" + (screen.height - c) / 2) || (location.href = l + "&r=1")
                    }
                    t.preventDefault();
                    var n = document, i = encodeURIComponent, r = window.getSelection, o = n.getSelection, a = n.selection, s = r ? r() : o ? o() : a ? a.createRange().text : "", l = "http://www.douban.com/recommend/?url=" + i(Making.addParam("refer", "douban", this.url)) + "&title=" + i(this.content) + "&sel=" + i(s) + "&v=1", u = 450, c = 330;
                    /Firefox/.test(navigator.userAgent) ? setTimeout(e, 0) : e()
                }}, {key: "renren", value: function(t) {
                    $(t.currentTarget).attr("href", "http://widget.renren.com/dialog/share?link=" + Making.addParam("refer", "renren", this.url))
                }}]), t
    }();
    t.DEFAULTS = {body: "body", content: document.title}, $.fn.socialshare = function(e) {
        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
        return this.each(function(i, r) {
            var o = $(r), a = o.data("socialshare"), s = ["set"];
            if ("string" == typeof e)
                s.indexOf(e) >= 0 && a[e](n);
            else if (!a) {
                var l = $.extend({}, t.DEFAULTS, o.data(), e);
                o.data("socialshare", new t(r, l))
            }
        })
    }, $.fn.socialshare.Constructor = t
}(), function() {
    !function() {
        var t;
        t = function() {
            function t(t) {
                this.$el = $(t), this.$content = $(".stream_content", this.$el), this.$btn_load = $(".stream_more", this.$el), this.$hint = this.$btn_load.find(".fa"), this.page = 1, this.per = this.$content.children().length || 1, this.status = "", _.bindAll(this, "render", "load", "success", "fail"), this.$el.on("click", ".stream_more", this.load)
            }
            return t.prototype.render = function() {
                switch (this.status) {
                    case"success":
                        if (1 === this.page)
                            return this.$btn_load.removeClass("hidden");
                        break;
                    case"nocontent":
                        return 1 === this.page && this.$content.next(".nomore").removeClass("hidden"), this.$btn_load.disable().text("\u6ca1\u6709\u66f4\u591a");
                    case"fail":
                        return this.$btn_load.text("\u51fa\u9519\u4e86\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5\u3002")
                    }
            }, t.prototype.load = function(t) {
                t.preventDefault(), this.$hint.addClass("fa-spin"), $.ajax({url: this.$content.data("url"), data: {page: this.page + 1, per: this.per}, dataType: "html", contentType: "application/x-www-form-urlencoded;charset=UTF-8"}).done(this.success).fail(this.fail)
            }, t.prototype.success = function(t, e, n) {
                return this.status = e, 200 === n.status ? (t.trim() ? this.$content.append(t) : this.status = "nocontent", this.page += 1, this.$hint.removeClass("fa-spin"), this.render()) : void 0
            }, t.prototype.fail = function(t, e, n) {
                return this.status = e, this.render()
            }, t
        }(), window.Stream = t
    }()
}.call(this), function() {
    $(function() {
        var t, e, n, i;
        return t = Object.create(null), n = "[data-add-to-list]", $("body").append('<div id="add-to-list-modal-container"></div>'), e = new Backbone.Marionette.Region({el: "#add-to-list-modal-container"}), i = function(t) {
            var n;
            return n = new Making.Views.AddToListModal({model: new Backbone.Model(t), collection: new Making.Collections.ThingLists}), e.show(n)
        }, $(document).on("click", n, function(e) {
            var n, r;
            return e.preventDefault(), $("#add-to-list-modal").length || (n = $(this), n.is(".fancied")) ? void 0 : (r = n.data("thing-id"), t[r] ? i(t[r]) : $.getJSON("/things/" + r, function(e) {
                return t[r] = e, i(e)
            }))
        })
    })
}.call(this), function() {
    jQuery.timeago.settings.strings["zh-CN"] = jQuery.timeago.settings.strings["zh-Hans-CN"] = {prefixAgo: null, prefixFromNow: null, suffixAgo: null, suffixFromNow: null, seconds: "\u521a\u521a", minute: "\u521a\u521a", minutes: "%d\u5206\u949f\u524d", hour: "1\u5c0f\u65f6\u524d", hours: "%d\u5c0f\u65f6\u524d", day: "1\u5929\u524d", days: "%d\u5929\u524d", month: "1\u4e2a\u6708\u524d", months: "%d\u4e2a\u6708\u524d", year: "1\u5e74\u524d", years: "%d\u5e74\u524d", numbers: [], wordSeparator: ""}, jQuery.timeago.settings.lang = $("html").attr("lang") || "zh-Hans-CN", $(document).on("ajaxComplete", function() {
        return $("time.timeago").timeago()
    })
}.call(this), function() {
    Making.logIntoWechat = function() {
        var t, e;
        return t = window.location.toString(), e = "/users/auth/wechat?state=" + encodeURIComponent(t), window.location = e
    }
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Models.CartItem = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.urlRoot = "/cart_items", n
    }(Backbone.Model)
}.call(this), function() {
    !function(t) {
        return t.Models.Draft = Backbone.Model.extend({urlRoot: "/drafts"})
    }(Making)
}.call(this), function() {
    Making.Models.Editor = Backbone.Model.extend({defaults: {status: "", persisten: null, content: {}, bodyKey: ""}, getContent: function(t) {
            return this.get("content")[t]
        }, setContent: function(t, e) {
            var n;
            n = this.get("content"), n[t] = e, this.set("content", n)
        }, getBody: function() {
            return this.get("content")[this.bodyKey]
        }, setBody: function(t) {
            this.get("content")[this.bodyKey] = t
        }, updateStatus: function(t) {
            switch (t) {
                case"load":
                    return this.set("status", "\u6b63\u5728\u52a0\u8f7d");
                case"edit":
                    return this.set("status", "");
                case"save":
                    return this.set("status", "\u6b63\u5728\u4fdd\u5b58");
                case"drop":
                    return this.set("status", "\u6b63\u5728\u5220\u9664");
                case"submit":
                    return this.set("status", "\u6b63\u5728\u53d1\u5e03");
                case"error":
                    return this.set("status", "\u9047\u5230\u9519\u8bef")
                }
        }})
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Models.Photo = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n
    }(Backbone.Model)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Models.Thing = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n
    }(Backbone.Model)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Models.ThingList = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n
    }(Backbone.Model)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Collections.CartItems = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.model = Making.Models.CartItem, n.prototype.url = "/cart_items.json", n.prototype.parse = function(t) {
            return this.total_count = t.total_count, this.total_price = t.total_price, this.delivery_tip_text = t.delivery_tip_text, t.items
        }, n.prototype.groupByMerchant = function() {
            return this.groupBy(function(t) {
                return t.get("merchant_name") + "," + t.get("stage")
            })
        }, n
    }(Backbone.Collection)
}.call(this), function() {
    !function(t) {
        return t.Collections.Drafts = Backbone.Collection.extend({model: t.Models.Draft, url: "/drafts/"})
    }(Making)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Collections.Photos = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.model = Making.Models.Photo, n.prototype.url = "/photos", n
    }(Backbone.Collection)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Collections.ThingLists = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.url = "/lists", n.prototype.model = Making.Models.ThingList, n.prototype.comparator = function(t, e) {
            var n, i;
            return n = (new Date(t.get("updated_at")) || Date.now()).getTime(), i = (new Date(e.get("updated_at")) || Date.now()).getTime(), t.get("selected") ? e.get("selected") ? n > i ? -1 : 1 : -1 : e.get("selected") ? 1 : n > i ? -1 : 1
        }, n
    }(Backbone.Collection)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Collections.Things = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.model = Making.Models.Thing, n.prototype.url = "/things", n
    }(Backbone.Collection)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Views.DropdownBox = function(e) {
        function n() {
            var t, e;
            n.__super__.constructor.apply(this, arguments), this.namespace && ((t = this.__namespaces)[e = this.namespace] || (t[e] = [])).push(this), Making.Views.DropdownBox.prototype.initialize.call(this)
        }
        return t(n, e), n.prototype.__namespaces = {}, n.prototype.initialize = function() {
            return this.namespace ? this.$el.children("a").bind("click", function(t) {
                return function() {
                    return t.hideDropdowBox()
                }
            }(this)) : void 0
        }, n.prototype.hide = function() {
            return this.isShown() ? this.$el.removeClass("open") : void 0
        }, n.prototype.show = function() {
            return this.isHiden() ? this.$el.addClass("open") : void 0
        }, n.prototype.toggle = function() {
            return this.isShown() ? this.hide() : this.show()
        }, n.prototype.isHiden = function() {
            return!this.isShown()
        }, n.prototype.isShown = function() {
            return this.$el.hasClass("open")
        }, n.prototype.hideDropdowBox = function(t) {
            return null == t && (t = {}), t.all ? this.hideAllDropdownBox(t) : this.namespace ? _.each(this.__namespaces[this.namespace], function(t) {
                return function(e) {
                    return e !== t ? e.hide() : void 0
                }
            }(this)) : void 0
        }, n.prototype.hideAllDropdownBox = function(t) {
            return _.each(this.__namespaces, function(t) {
                return _.each(t, function(t) {
                    return t.hide()
                })
            })
        }, n
    }(Backbone.View)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Views.CartBox = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.el = "#cart_box", n.prototype.namespace = "nav", n.prototype.template = HandlebarsTemplates["carts/box_item"], n.prototype.events = {"click a.user_link": "render", "click .cart_box-item_remove>a": "removeItem", "click .cart_box--clear": "clearCart"}, n.prototype.initialize = function() {
            return this.$section = this.$el.find(".cart_box-section"), this.$counter = this.$el.find(".cart_items_count"), this.reset(), this.progressing = !1
        }, n.prototype.reset = function() {
            return this.$section.html('<div class="spinner"><i class="fa fa-circle-o-notch fa-spin fa-2x"></i></div>')
        }, n.prototype.removeItem = function(t) {
            var e;
            if (!this.progressing)
                return this.progressing = !0, e = $(t.currentTarget).closest(".cart_box-item"), e.addClass("disabled"), $.post("/cart_items/" + e.data("id") + ".json", {_method: "delete"}).done(function(t) {
                    return function(e) {
                        return t.progressing = !1, t.render(), t.$el.trigger("cartUpdated")
                    }
                }(this))
        }, n.prototype.clearCart = function(t) {
            var e, n;
            if (!this.progressing)
                return this.progressing = !0, n = [], e = this.$el.find(".cart_box-item"), $.each(e, function(t, e) {
                    return n.push($(e).data("id"))
                }), n.length ? $.ajax("/cart_items", {type: "DELETE"}).done(function(t) {
                    return function() {
                        return t.progressing = !1, t.render(), t.$el.trigger("cartUpdated")
                    }
                }(this)) : this.progressing = !1
        }, n.prototype.render = function(t) {
            return this.reset(), t && this.isShown() ? void 0 : $.get("/cart_items.json", {who: "box"}).done(function(t) {
                return function(e) {
                    return t.$list = $("<ul />"), t.$section.html(t.$list), t.$counter.html(e.total_count || ""), t.$list.html(t.template(e))
                }
            }(this))
        }, n
    }(Making.Views.DropdownBox)
}.call(this), function() {
    var t, e, n = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var r in e)
            i.call(e, r) && (t[r] = e[r]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, i = {}.hasOwnProperty;
    t = function(t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }
        return n(e, t), e.prototype.tagName = "li", e.prototype.className = "cart-list-item", e.prototype.events = {"click .c-numberinput-plus": "plus", "click .c-numberinput-minus": "minus", "change .c-numberinput": "changeQuantity", "click .cart-item--remove": "remove"}, e.prototype.template = HandlebarsTemplates["carts/cart_item"], e.prototype.initialize = function() {
            return this.listenTo(this.model, "change:quantity", function(t) {
                return function(e, n) {
                    return t.sync()
                }
            }(this))
        }, e.prototype.sync = function() {
            var t;
            return this.syncTimeout && clearTimeout(this.syncTimeout), t = this.model.collection, this.syncTimeout = setTimeout(function(e) {
                return function() {
                    var n;
                    return e.syncTimeout = null, n = e.model.get("quantity") - e.model.previous("quantity"), $.ajax({url: "/cart_items/" + e.model.get("id"), method: "PUT", data: {step: n}}).done(function() {
                        return t.fetch({reset: !0})
                    })
                }
            }(this), 200)
        }, e.prototype.minus = function(t) {
            var e;
            return e = this.model.get("quantity"), 1 !== e ? this.model.set("quantity", e - 1) : void 0
        }, e.prototype.plus = function(t) {
            var e;
            return e = this.model.get("quantity"), e !== this.model.get("max_buyable") ? this.model.set("quantity", e + 1) : void 0
        }, e.prototype.changeQuantity = function(t) {
            var e;
            return e = parseInt(+t.currentTarget.value), e && e > 0 && e <= this.model.get("max_buyable") ? this.model.set("quantity", e) : this.render()
        }, e.prototype.remove = function(t) {
            var e;
            return e = this.model.collection, this.model.destroy({success: function(t) {
                    return e.fetch({reset: !0})
                }})
        }, e.prototype.render = function() {
            return this.$el.html(this.template(_.extend(this.model.toJSON(), {disableMinus: function() {
                    return 1 === this.quantity && "disabled"
                }, disablePlus: function() {
                    return this.quantity === this.max_buyable && "disabled"
                }}))), this.model.get("has_enough_stock") || this.$el.addClass("cart-list-item--disabled"), this
        }, e
    }(Backbone.View), e = function(e) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.className = "cart-list-group", i.prototype.template = HandlebarsTemplates["carts/cart_items"], i.prototype.initialize = function(t) {
            return this.items = t.items, this.merchant_name = t.merchant_name, this.merchant_url = t.merchant_url
        }, i.prototype.render = function() {
            return this.$el.html(this.template({merchant_name: this.merchant_name, merchant_url: this.merchant_url})), this.$cartList = this.$el.find(".cart-list"), _.each(this.items, function(e) {
                return function(n) {
                    var i;
                    return i = new t({model: n}), e.$cartList.append(i.render().el)
                }
            }(this)), this
        }, i
    }(Backbone.View), Making.Views.CartItems = function(t) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }
        return n(i, t), i.prototype.nothingTemplate = HandlebarsTemplates["carts/nothing"], i.prototype.initialize = function() {
            return this.collection = new Making.Collections.CartItems, this.listenTo(this.collection, "reset", function(t) {
                return function() {
                    return t.render()
                }
            }(this)), this.collection.fetch({reset: !0}), this.$window = $(window), this.$cart = $(".cart"), this.$listWrapper = $(".cart-list-wrapper"), this.$totalPrice = $(".cart-total_price"), this.$submitBtn = $(".cart-submit_btn"), this.$footer = $(".cart-footer"), this.isMobile = $("html").hasClass("mobile"), this.$window.on("resize", function(t) {
                return function() {
                    return t.resizeCart()
                }
            }(this))
        }, i.prototype.resizeCart = function() {
            var t, e;
            return e = this.$window.height(), this.$window.width() < 768 ? (this.$listWrapper.css({height: ""}), this.$cart.height() > e - 45 ? this.$footer.css({position: "fixed", bottom: 0}) : this.$footer.css({position: "", bottom: ""})) : (t = 372, this.$footer.css({position: "", bottom: ""}))
        }, i.prototype.render = function() {
            return this.collection.isEmpty() ? this.$cart.html(this.nothingTemplate()) : (this.$el.empty(), _.each(this.collection.groupByMerchant(), function(t) {
                return function(n, i) {
                    var r;
                    return r = new e({items: n, merchant_name: i.split(",")[0], merchant_url: n[0].get("merchant_url")}), t.$el.append(r.render().el)
                }
            }(this)), this.collection.reduce(function(t, e) {
                return e.get("has_enough_stock") && t
            }, !0) ? this.$submitBtn.removeAttr("disabled") : this.$submitBtn.attr("disabled", !0), this.$totalPrice.html('<i class="fa fa-yen"></i> ' + this.collection.total_price)), this.resizeCart()
        }, i
    }(Backbone.View)
}.call(this), function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }, e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var r in e)
            n.call(e, r) && (t[r] = e[r]);
        return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
    }, n = {}.hasOwnProperty;
    Making.Views.CommentsIndex = function(n) {
        function i() {
            return this.jumpTo = t(this.jumpTo, this), this.getCommentId = t(this.getCommentId, this), this.getAnchor = t(this.getAnchor, this), this.prepend = t(this.prepend, this), this.render = t(this.render, this), this.fetch = t(this.fetch, this), i.__super__.constructor.apply(this, arguments)
        }
        return e(i, n), i.prototype.events = {"submit .comment_form": "create", "click .comments_more": "fetch", "click .reply": "reply"}, i.prototype.initialize = function(t) {
            var e;
            return e = t.url, this.url = e, this.anchor = this.getAnchor(), this.commentId = this.getCommentId(), this.render(), this.commentId || this.$el.data("count") > 0 && 0 === this.getCommentsCount() ? (this.$("ul").empty(), this.fetch(this.commentId)) : void 0
        }, i.prototype.fetch = function(t) {
            var e;
            return e = "string" == typeof t ? {from_id: t} : {page: this.getNextPageNumber()}, $.ajax({url: this.url, data: e, beforeSend: function(t) {
                    return function() {
                        return t.$("ul").append(HandlebarsTemplates["shared/loading"])
                    }
                }(this)}).success(function(t) {
                return function(e) {
                    var n;
                    return $(".spinning").remove(), t.$("ul").append(e), t.anchor.length > 0 && (n = $(t.anchor), t.anchor = "", "complete" === document.readyState ? t.jumpTo(n) : $(window).one("load", function() {
                        return t.jumpTo(n)
                    })), !e || t.getCommentsCount() >= t.$el.data("count") ? t.$(".comments_more").remove() : void 0
                }
            }(this))
        }, i.prototype.render = function() {
            return Making.atUser(".comments textarea"), this.$submit = this.$('[type="submit"]'), this
        }, i.prototype.create = function(t) {
            return t.preventDefault(), this.$submit.button("loading").addClass("active"), $.ajax({url: this.url, type: "POST", data: {comment: {content: this.$("textarea").val()}}}).success(function(t) {
                return function(e) {
                    var n, i, r;
                    return t.prepend(e), t.$("textarea").val(""), n = t.$el.parents(".feed_article, .feed-discussion").find(".comments_count, .comments-count"), 0 === n.length && (n = $('<span class="comments_count"></span>'), n.appendTo(t.$el.parents(".feed_article").find(".comments_toggle"))), i = parseInt(n.text()), r = isNaN(i) ? 1 : i + 1, n.text(r), t.$submit.button("reset").removeClass("active")
                }
            }(this))
        }, i.prototype.prepend = function(t) {
            return $(t).hide().prependTo(this.$("ul")).fadeIn()
        }, i.prototype.getCommentsCount = function() {
            return this.$("ul > li").length
        }, i.prototype.getNextPageNumber = function() {
            return Math.floor(this.getCommentsCount() / this.$el.data("per")) + 1
        }, i.prototype.getAnchor = function() {
            var t, e;
            return e = location.hash, -1 === e.indexOf("#comment-") ? "" : (t = e.indexOf("?"), 0 > t ? e : e.slice(0, t))
        }, i.prototype.getCommentId = function() {
            return this.anchor.replace("#comment-", "")
        }, i.prototype.jumpTo = function(t) {
            return(null != t ? t.length : void 0) ? ($window.scrollTop(t.offset().top), t.parent().addClass("is-targeted")) : void 0
        }, i.prototype.reply = function(t) {
            var e, n, i;
            return t.preventDefault(), e = $(t.currentTarget), i = e.siblings(".author_name").text(), n = e.closest(".comments").find(".comment_form textarea"), n.focus().val(n.val() + (" @" + i + " "))
        }, i
    }(Backbone.View)
}.call(this), function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }, e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var r in e)
            n.call(e, r) && (t[r] = e[r]);
        return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
    }, n = {}.hasOwnProperty;
    Making.Views.NewCommentsIndex = function(n) {
        function i() {
            return this.jumpTo = t(this.jumpTo, this), this.getCommentId = t(this.getCommentId, this), this.getAnchor = t(this.getAnchor, this), this.prepend = t(this.prepend, this), this.render = t(this.render, this), this.fetch = t(this.fetch, this), i.__super__.constructor.apply(this, arguments)
        }
        return e(i, n), i.prototype.events = {"click .js-editor-submit": "create", "click .comments_more": "fetch", "click .reply": "reply"}, i.prototype.initialize = function(t) {
            var e;
            return e = t.url, this.url = e, this.anchor = this.getAnchor(), this.commentId = this.getCommentId(), this.$comments = this.$(".comments_list"), this.commentForm = "#" + this.$el.find(".comments-form_wrapper").children(".inline_editor").attr("id"), this.$commentForm = $(this.commentForm), this.$commentFormBody = this.$commentForm.children(".article").children(".body"), this.$submit = this.$commentForm.find(".js-editor-submit"), this.inlineEditor = new Making.Views.InlineEditor({el: this.commentForm, type: "comment", model: new Making.Models.Editor({bodyKey: "comment[content]"}), bodyField: this.$commentForm.find('[name="comment[content]"]'), imageField: this.commentForm + "-image_field", draftType: "local", autoSaveDelay: 500, placeholder: "\u56de\u590d"}), this.render(), this.commentId || this.$el.data("count") > 0 && 0 === this.getCommentsCount() ? (this.$comments.empty(), this.fetch(this.commentId)) : void 0
        }, i.prototype.fetch = function(t) {
            var e;
            return e = "string" == typeof t ? {from_id: t} : {page: this.getNextPageNumber()}, $.ajax({url: this.url, data: e, beforeSend: function(t) {
                    return function() {
                        return t.$comments.append(HandlebarsTemplates["shared/loading"])
                    }
                }(this)}).success(function(t) {
                return function(e) {
                    var n;
                    return $(".spinning").remove(), t.$comments.append(e), t.anchor.length > 0 && (n = $(t.anchor), t.anchor = "", "complete" === document.readyState ? t.jumpTo(n) : $(window).one("load", function() {
                        return t.jumpTo(n)
                    })), !e || t.getCommentsCount() >= t.$el.data("count") ? t.$(".comments_more").remove() : void 0
                }
            }(this))
        }, i.prototype.render = function() {
            return this.inlineEditor.render(), this
        }, i.prototype.create = function(t) {
            return t.preventDefault(), this.inlineEditor.checkContent() ? (this.inlineEditor.$el.trigger("submit.editor"), $.ajax({url: this.url, type: "POST", data: {comment: {content: this.inlineEditor.serialize()["comment[content]"]}}}).success(function(t) {
                return function(e) {
                    var n, i, r;
                    return t.inlineEditor.reset(), t.prepend(e), n = t.$el.parents(".feed_article, .feed-discussion").find(".comments_count, .comments-count"), 0 === n.length && (n = $('<span class="comments_count"></span>'), n.appendTo(t.$el.parents(".feed_article").find(".comments_toggle"))), i = parseInt(n.text()), r = isNaN(i) ? 1 : i + 1, n.text(r), t.$submit.enable()
                }
            }(this))) : void 0
        }, i.prototype.prepend = function(t) {
            return $(t).hide().prependTo(this.$comments).fadeIn()
        }, i.prototype.getCommentsCount = function() {
            return this.$comments.children("li").length
        }, i.prototype.getNextPageNumber = function() {
            return Math.floor(this.getCommentsCount() / this.$el.data("per")) + 1
        }, i.prototype.getAnchor = function() {
            var t, e;
            return e = location.hash, -1 === e.indexOf("#comment-") ? "" : (t = e.indexOf("?"), 0 > t ? e : e.slice(0, t))
        }, i.prototype.getCommentId = function() {
            return this.anchor.replace("#comment-", "")
        }, i.prototype.jumpTo = function(t) {
            return(null != t ? t.length : void 0) ? ($window.scrollTop(t.offset().top), t.parent().addClass("is-targeted")) : void 0
        }, i.prototype.reply = function(t) {
            var e, n;
            return t.preventDefault(), n = $(t.currentTarget).siblings(".author_name").text(), e = this.$commentFormBody.children().last(), $window.scrollTop(this.$commentForm.offset().top - 80), this.inlineEditor.unfold(), e.length && "<p><br></p>" === e[0].outerHTML && e.remove(), this.$commentFormBody.append("<p><span> @" + n + " </span>&nbsp;</p>").trigger("check")
        }, i
    }(Backbone.View)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Views.DiscussionNew = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.events = {"input textarea": "onInput", submit: "onSubmit"}, n.prototype.initialize = function() {
            return this.photo_view = new Making.Views.PhotosUpload, this.$submit = this.$('[type="submit"]'), this.photo_view.render(), this.$submit.disable()
        }, n.prototype.onInput = function(t) {
            t.target.value.trim() ? this.$submit.enable() : this.$submit.disable()
        }, n.prototype.onSubmit = function() {
            var t;
            return this.$submit.button("loading"), t = this.photo_view.$(".uploaded"), _.each(t, function(t) {
                return function(e) {
                    return $("<input>").attr({name: "discussion[photo_ids][]", value: $(e).data("photo-id"), type: "hidden"}).appendTo(t.$el)
                }
            }(this)), this.$el.find('[type="submit"]').disable()
        }, n
    }(Backbone.View)
}.call(this), function() {
    !function(t) {
        return t.Views.Draft = Backbone.View.extend({tagName: "li", template: HandlebarsTemplates["editor/draft"], initialize: function() {
                return this.listenTo(this.model, "destroy", this.destroy)
            }, render: function() {
                return this.$el.html(this.template(this.model.attributes)), this
            }, destroy: function() {
                return this.$el.fadeOut(200, function() {
                    return $(this).remove()
                })
            }}), Handlebars.registerHelper("draft_title", function() {
            var t;
            switch (t = this[this.type + "[title]"], ("" === t || void 0 === t) && (t = "\u65e0\u6807\u9898\u6587\u6863"), this.type) {
                case"review":
                    t = "[\u8bc4\u6d4b] " + t;
                    break;
                case"thing":
                    t = "[\u4ea7\u54c1] " + t;
                    break;
                case"topic":
                    t = "[\u8bdd\u9898] " + t;
                    break;
                case"article":
                    t = "[\u6587\u7ae0] " + t;
                    break;
                case"comment":
                    t = "[\u8bc4\u8bba] " + t
            }
            return t
        }), Handlebars.registerHelper("draft_summary", function() {
            var t, e;
            return t = $("<div>" + this[this.type + "[content]"] + "</div>").text(), e = "", e = t.length > 140 ? t.slice(0, 140) + "......" : t
        }), Handlebars.registerHelper("draft_timestamp", function() {
            return new Date(this.updated_at).toLocaleString()
        })
    }(Making)
}.call(this), function() {
    !function(t) {
        return t.Views.Drafts = Backbone.View.extend({el: ".drafts", events: {"click .destroy": "destroy"}, initialize: function() {
                return this.drafts = new t.Collections.Drafts, this.$nothing = this.$el.next(".nothing"), this.listenTo(this.drafts, "sync", this.render), this.drafts.fetch()
            }, render: function() {
                return this.drafts.length > 0 ? (this.$nothing.addClass("is-hidden"), this.list = [], _.each(this.drafts.models, function(e, n, i) {
                    var r;
                    return r = new t.Views.Draft({model: e}), this.list.push(r.render().el)
                }, this), this.$el.append(this.list)) : this.$nothing.removeClass("is-hidden")
            }, checkList: function() {
                return 0 === this.drafts.length ? this.$nothing.removeClass("is-hidden") : void 0
            }, destroy: function(t) {
                var e;
                return t.preventDefault(), e = $(t.target), this.drafts.findWhere({id: e.data("id")}).destroy({success: function(t) {
                        return function(e, n) {
                            return t.checkList()
                        }
                    }(this)})
            }})
    }(Making)
}.call(this), function() {
    !function(t) {
        var e;
        return e = function() {
            function t() {
                this.selection = window.getSelection(), this.button = document.createElement("button"), this.button.className = "medium-editor-action", this.button.innerHTML = '<i class="fa fa-align-center"></i>', this.button.setAttribute("title", "\u5c45\u4e2d"), this.button.onclick = this.aligncenter.bind(this)
            }
            return t.prototype.getButton = function() {
                return this.button
            }, t.prototype.checkState = function(t) {
                this.isRoot(t) || (t.classList.contains("text-center") ? this.button.classList.add("medium-editor-button-active") : this.button.classList.remove("medium-editor-button-active"))
            }, t.prototype.isRoot = function(t) {
                return t && null !== t.getAttribute("data-medium-element")
            }, t.prototype.aligncenter = function() {
                var t, e;
                switch (t = this.selection.anchorNode, t.nodeType) {
                    case 1:
                        e = t;
                        break;
                    case 3:
                        e = t.parentNode
                }
                return this.isRoot(e) ? void 0 : e.classList.toggle("text-center")
            }, t
        }(), t.Views.Editor = Backbone.View.extend({defaults: {buttons: ["anchor", "bold", "italic", "strikethrough", "quote", "aligncenter"], blocks: ["figure", "iframe", "embed", "object", "video", ".knewone-embed"], bodyField: void 0, excludeField: '[name="utf8"], [name="authenticity_token"], [name="_method"], [name="file"]', imageField: '[name="file"]', imageSize: "review", draftType: !1, autoSaveDelay: 1500}, initialize: function(e) {
                var n;
                if (this.options = _.extend({}, this.defaults, e), this.$body = this.$el.children(".article").children(".body"),
                        this.$bodyField = null != this.options.bodyField ? $(this.options.bodyField) : this.$('[name$="[content]"]'), this.$ctxmenu = this.$(".editor-ctxmenu"), this.$imageField = $(this.options.imageField), this.$help = $(".editor-help"), this.$helpToggle = this.$(".editor-help-toggle"), this.$submitButton = (this.$submitButton = this.$(".js-editor-submit")).length ? this.$submitButton : this.$('[type="submit"]'), this.events = this.events || {}, this.$form = (this.$form = $(this.$bodyField[0].form)).length ? this.$form : this.$el, this.$fields = this.$form.find("[name]").filter(":not(" + this.options.excludeField + ")"), this.$someButtons = $(), this.options.draftType !== !1) {
                    switch (this.draft = null, this.draftId = t.user.id + "+draft+" + encodeURIComponent(location.pathname) + "+#" + (null != (n = this.el.id) ? n : ""), this.typingTime = 0, _.extend(this.events, {
                            "input.save": "autoSave", check: "checkContent"}), this.options.draftType){case"server":
                            this.draft = new t.Models.Draft({id: this.draftId, type: this.options.type, link: location.pathname}), this.listenTo(this.model, "change:status", this.showStatus);
                            break;
                        case"local":
                            null !== localStorage.getItem(this.draftId) ? this.draft = JSON.parse(localStorage.getItem(this.draftId)) : this.draft = {}
                    }
                    this.listenTo(this.$bodyField, "change", this.autoSave)
                } else
                    _.extend(this.events, {input: "save"});
                return this.$el.on("submit.editor", this.submit.bind(this))
            }, activatePlugins: function() {
                var t, n, i;
                return 0 === this.$body.children().length && this.$body.append("<p><br></p>"), $html.hasClass("desktop") ? this.editor ? (this.editor.activate(), "function" == (n = typeof MutationObserver) || "object" === n ? this.observer.observe() : void 0) : (i = this, this.editor = new MediumEditor(this.$body, {buttons: this.options.buttons, buttonLabels: "fontawesome", placeholder: this.options.placeholder, anchorInputPlaceholder: "\u5728\u8fd9\u91cc\u63d2\u5165\u94fe\u63a5", targetBlank: !0, extensions: {aligncenter: new e}}), ("function" == (t = typeof MutationObserver) || "object" === t) && (this.observer = new MutationObserver(function(t) {
                    return t.forEach(function(t) {
                        var e, n, i, r, o;
                        if (e = t.addedNodes, e.length) {
                            for (o = [], n = 0, i = e.length; i > n; n++)
                                r = e[n], o.push(function(t) {
                                    var e, n, i;
                                    "SPAN" === t.nodeName && "atwho-query" !== t.className && (i = window.getSelection(), n = document.createRange(), e = $(t).contents().unwrap().get(0), n.selectNode(e), i.removeAllRanges(), i.addRange(n), i.collapseToEnd())
                                }(r));
                            return o
                        }
                    })
                }), this.observer.observe(this.$body[0], {childList: !0, subtree: !0})), this.$body.minsert({actions: {videos: {placeholder: "\u5728\u8fd9\u91cc\u8f93\u5165\u89c6\u9891\u7f51\u5740\u7136\u540e\u6309\u56de\u8f66"}, embeds: {placeholder: "\u63d2\u5165\u4ea7\u54c1\u3001\u8bc4\u6d4b\u6216\u5217\u8868\u94fe\u63a5\u7136\u540e\u56de\u8f66"}}}), this.$insertImageButton = this.$('.minsert [data-action="insert-image"]').on("click", function(t) {
                    return function() {
                        return t.$imageField.clone(!0).removeAttr("id").click()
                    }
                }(this)), this.$imageField.attr("multiple", !0).attr("accept", "image/*").fileupload({dataType: "json", dropZone: null, formData: function() {
                        return[{name: "policy", value: i.$imageField.attr("data-policy")}, {name: "signature", value: i.$imageField.attr("data-signature")}]
                    }, beforeSend: function(t, e) {
                        var n;
                        return n = t.requestid = (new Date).getTime(), i.$body.trigger("loading.minsert", n), i.disableButtons()
                    }, done: function(t, e) {
                        var n, r;
                        return r = i.$imageField.data("domain") + e.jqXHR.responseJSON.url + ("!" + i.options.imageSize), n = e.jqXHR.requestid, i.$body.trigger("done:image.minsert", {url: r, id: n})
                    }, fail: function(t, e) {
                        var n;
                        switch (n = e.jqXHR.responseJSON.message.trim()) {
                            case"Not accept, File too large":
                                n = "Not accept, File too large. \u56fe\u7247\u592a\u5927\u4e86\uff0c\u5efa\u8bae\u538b\u7f29\u81f3 4 MB \u4ee5\u4e0b\u518d\u4e0a\u4f20\u3002";
                                break;
                            case"Authorize has expired":
                                n = "Authorize has expired. \u8bf7\u4fdd\u5b58\u8349\u7a3f\u540e\u5237\u65b0\u4e00\u4e0b\u9875\u9762\uff0c\u7136\u540e\u91cd\u8bd5\u4e0b\u3002"
                        }
                        return i.$body.trigger("fail:image.minsert", n)
                    }, always: function(t, e) {
                        var n;
                        return n = e.jqXHR.requestid, i.$body.trigger("loaded.minsert", n), i.enableButtons()
                    }}), this.$body.on("mouseenter mouseleave", this.options.blocks.join(","), function(t) {
                    var e, n, r, o;
                    switch (t.type) {
                        case"mouseenter":
                            return e = $(t.currentTarget), r = e.position(), o = r.top + "px", n = r.left + "px", i.$ctxmenu.css({top: o, left: n}).data("target", e).removeClass("is-hidden");
                        case"mouseleave":
                            if (0 === $(t.relatedTarget).closest(".editor-ctxmenu").length)
                                return i.$ctxmenu.addClass("is-hidden")
                        }
                }), this.$ctxmenu.on("click", "button", function(t) {
                    var e, n, r;
                    switch (t.preventDefault(), $(t.target).data("action")) {
                        case"enter":
                            return e = document.createElement("p"), n = document.createRange(), r = window.getSelection(), e.innerHTML = "<br>", i.$ctxmenu.data("target").after(e), n.selectNodeContents(e), n.collapse(!0), r.removeAllRanges(), r.addRange(n), i.$body.trigger("click")
                        }
                })) : (this.$body.prop("contenteditable", !0).attr("data-placeholder", this.options.placeholder).addClass("medium-editor-placeholder").on("input", function(t) {
                    return function() {
                        return"" === t.$body.html().trim() ? t.$body.append("<p><br></p>") : "<p><br></p>" === t.$body.html() ? t.$body.addClass("medium-editor-placeholder") : t.$body.removeClass("medium-editor-placeholder")
                    }
                }(this)), !0)
            }, deactivatePlugins: function() {
                var t;
                return("function" == (t = typeof MutationObserver) || "object" === t) && this.observer.disconnect(), this.editor.deactivate()
            }, initWidgets: function() {
                return t.atUser(this.$body), this.$body.find(".knewone-embed, .video_thumbnail").attr("contenteditable", !1), !this.$rating && (this.$rating = this.$(".range-rating")).length && this.$rating.rating()
            }, initHelp: function() {
                return this.$helpToggle.one("click", function(t) {
                    return function() {
                        return t.$help.find("img[data-src]").each(function() {
                            var t;
                            return t = this.getAttribute("data-src"), this.setAttribute("src", t)
                        })
                    }
                }(this))
            }, appendDraftId: function() {
                return this.$form.append($("<input>", {type: "hidden", name: "draft[key]", value: this.draft.get("id")}))
            }, showStatus: function() {
                return null != this.$output ? this.$output.text(this.model.get("status")).removeClass("text-danger") : void 0
            }, enableButtons: function() {
                return this.$someButtons.each(function() {
                    return $(this).enable()
                })
            }, disableButtons: function() {
                return this.$someButtons.each(function() {
                    return $(this).disable()
                })
            }, checkContent: function() {
                return"<p><br></p>" === this.$body.html() ? !1 : (this.$body.removeClass("medium-editor-placeholder"), !0)
            }, setBody: function(t) {
                return null == t && (t = this.$body.html()), this.$bodyField.val(t)
            }, setContent: function(t) {
                var e;
                return e = function(e) {
                    return function() {
                        switch (t) {
                            case"serverDraft":
                                return function(t, n) {
                                    e.draft.set(t, n)
                                };
                            case"localDraft":
                                return function(t, n) {
                                    e.draft[t] = n
                                };
                            default:
                                return function(t, n) {
                                    e.model.setContent(t, n)
                                }
                            }
                    }
                }(this)(), this.setBody(), _.each(this.$fields, function(t, n, i) {
                    var r;
                    switch (r = $(t), r.attr("type")) {
                        case"checkbox":
                        case"radio":
                            return e(r.attr("name") + r.val(), r.prop("checked"));
                        default:
                            return e(r.attr("name"), r.prop("value"))
                        }
                }, this)
            }, renderBody: function() {
                var t;
                return t = this.$bodyField.val(), this.$body.html(0 === t.trim().length ? "<p><br></p>" : t)
            }, renderContent: function(t) {
                return _.each(this.$fields, function(e, n, i) {
                    var r, o;
                    switch (r = $(e), o = r.prop("name"), r.attr("type")) {
                        case"checkbox":
                        case"radio":
                            return r.prop("checked", t[o + r.val()]);
                        default:
                            return r.prop("value", t[o])
                        }
                }, this), this.renderBody()
            }, save: function(t) {
                switch (this.setContent(this.options.draftType + "Draft"), this.options.draftType) {
                    case"server":
                        return this.model.updateStatus("save"), this.draft.save(null, {success: function(e) {
                                return function(n, i, r) {
                                    return e.model.updateStatus("edit"), e.model.set("persisten", !0), "function" == typeof t ? t() : void 0
                                }
                            }(this), error: function(t) {
                                return function(e, n, i) {
                                    return null != n.responseJSON.error ? (t.model.updateStatus("error"), alert("\u676f\u5177\uff0c\u51fa\u9519\u4e86\uff0c\u8bf7\u628a\u5185\u5bb9\u4fdd\u5b58\u5230\u7535\u8111\u540e\u5237\u65b0\u9875\u9762\u518d\u8bd5\u8bd5\u3002\u7ed9\u60a8\u5e26\u6765\u7684\u4e0d\u4fbf\uff0c\u6211\u4eec\u6df1\u8868\u6b49\u610f\uff01")) : void 0
                                }
                            }(this)});
                    case"local":
                        if (localStorage.setItem(this.draftId, JSON.stringify(this.draft)), this.model.updateStatus("edit"), this.model.set("persisten", !0), "function" == typeof t)
                            return t()
                    }
            }, autoSave: function(t) {
                return this.typingTime = new Date, this.model.set("persisten", !1), this.autoSaveTimeout = setTimeout(function(t) {
                    return function() {
                        return new Date - t.typingTime > t.options.autoSaveDelay ? t.save() : void 0
                    }
                }(this), this.options.autoSaveDelay)
            }, submit: function(t) {
                var e, n;
                return this.$submitButton.disable(), null != this.autoSaveTimeout && clearTimeout(this.autoSaveTimeout), e = $("<div>").append(this.$body.html()).find(".knewone-embed").empty().removeAttr("contenteditable").end().find(".video_thumbnail").removeAttr("contenteditable").end().find(".atwho-inserted").each(function() {
                    var t;
                    return t = $(this), t.text(t.text() + " ")
                }).end().find(".minsert-progress").remove().end()[0].innerHTML, this.setBody(e), null != this.options.beforeSubmit && (n = this.options.beforeSubmit(t), n === !1) ? !1 : (this.model.updateStatus("submit"), this.options.draftType !== !1 && $window.off("beforeunload"), !0)
            }, beforeunload: function(t) {
                return this.model.get("persisten") === !1 ? "\u6587\u6863\u8fd8\u672a\u4fdd\u5b58\uff0c\u786e\u5b9a\u8981\u79bb\u5f00\u5417\uff1f" : void 0
            }, serialize: function() {
                return this.setContent(), this.model.toJSON().content
            }, reset: function() {
                var t;
                if (t = {}, _.keys(this.model.get("content")).forEach(function(e) {
                    return t[e] = ""
                }), this.model.clear(), this.model.set(this.model.defaults), this.model.set("content", t), this.renderContent(this.model.toJSON().content), this.$submitButton.enable(), this.options.draftType !== !1)
                    switch (this.options.draftType) {
                        case"server":
                            return this.draft.destory();
                        case"local":
                            return localStorage.removeItem(this.draftId)
                        }
            }})
    }(Making)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    !function(e) {
        return e.Views.FullscreenEditor = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function(t) {
                return n.__super__.initialize.call(this, t), this.$spinner = $(".spinner-fullscreen"), this.$submit = this.$(".editor-submit"), this.$drop = this.$(".editor-drop"), this.$output = this.$(".editor-menu output"), _.extend(this.events, {"click .editor-drop": "drop", "click .editor-save": "save", "submit .editor-form": "submit"}), this.$someButtons = $().add(this.$submitButton)
            }, n.prototype.render = function() {
                return this.$drop.addClass("is-hidden"), $.ajax({url: this.draft.url(), type: "get"}).done(function(t) {
                    return function(e, n, i) {
                        return t.renderContent(e)
                    }
                }(this)).always(function(t) {
                    return function() {
                        return t.show(), t.initWidgets(), t.appendDraftId(), t.initHelp()
                    }
                }(this)), this
            }, n.prototype.show = function() {
                return this.renderBody(), this.activatePlugins(), this.$el.show(), this.$spinner.addClass("is-hidden"), $docbody.trigger("freeze.ko"), "server" === this.options.draftType ? $window.on("beforeunload", this.beforeunload.bind(this)) : void 0
            }, n.prototype.hide = function() {
                return this.$el.hide(), $docbody.trigger("unfreeze.ko"), this.deactivatePlugins(), "server" === this.options.draftType ? $window.off("beforeunload") : void 0
            }, n.prototype.drop = function() {
                return confirm("\u786e\u5b9a\u5220\u9664\u8349\u7a3f\u5417\uff1f") ? (this.model.updateStatus("drop"), "server" === this.options.draftType && $window.off("beforeunload"), this.draft.destroy({success: function() {
                        return window.close()
                    }})) : void 0
            }, n
        }(e.Views.Editor)
    }(Making)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    !function(e) {
        return e.Views.AffiliatedEditor = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.className = "editor editor--affiliated", n.prototype.template = HandlebarsTemplates["editor/affiliated_editor"], n.prototype.initialize = function(t) {
                return n.__super__.initialize.call(this, t), this.isInitialized = !1, this.draft = this.options.draft, this.draftId = this.options.draftId, this.$bodyField = $(this.options.bodyField), this.$imageField = $(this.options.imageField), this.$fields = this.$fields.add(this.$bodyField), _.extend(this.events, {"click .editor-back": "switchToInline"})
            }, n.prototype.render = function() {
                return this.isInitialized ? this.$body.html(this.$bodyField.val()) : (this.$el.html(this.template({body: this.model.getBody()})), this.$body = this.$el.children(".article").children(".body"), this.$output = this.$(".editor-menu output"), this.$helpToggle = this.$(".editor-help-toggle"), this.$someButtons = $().add(this.$(".editor-back")), this.$body.prop("contenteditable", !0).after(this.$imageField), $docbody.append(this.$el), this.activatePlugins(), this.initHelp(), this.isInitialized = !0), this.show(), this
            }, n.prototype.show = function() {
                return this.$el.removeClass("is-hidden"), this.detectPlaceholder(), $docbody.trigger("freeze.ko")
            }, n.prototype.hide = function() {
                return this.$el.addClass("is-hidden"), $docbody.trigger("unfreeze.ko")
            }, n.prototype.detectPlaceholder = function() {
                return"<p><br></p>" === this.$body.get(0).innerHTML ? this.$body.addClass("medium-editor-placeholder") : this.$body.removeClass("medium-editor-placeholder")
            }, n.prototype.switchToInline = function() {
                return this.model.setBody(this.$body.html()), this.setBody(this.model.getBody()), this.hide(), this.trigger("switchToInline")
            }, n
        }(e.Views.Editor)
    }(Making)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    !function(e) {
        return e.Views.InlineEditor = function(n) {
            function i() {
                return i.__super__.constructor.apply(this, arguments)
            }
            return t(i, n), i.prototype.initialize = function(t) {
                return i.__super__.initialize.call(this, t), this.affiliatedEditor = new e.Views.AffiliatedEditor({type: this.options.type, model: this.model, bodyField: this.$bodyField, imageField: $(this.$imageField[0].outerHTML).attr("id", this.$el.attr("id") + "-image_field--affliated"), draft: this.draft, draftId: this.draftId, draftType: this.options.draftType, autoSaveDelay: this.options.autoSaveDelay, placeholder: this.options.placeholder}), this.$someButtons = $().add(this.$submitButton).add(".js-editor-fullscreen"), _.extend(this.events, {"click .js-editor-fullscreen": "switchToFullscreen"}), this.bindUnfold(), this.bindQuickSubmit(), this.listenTo(this.affiliatedEditor, "switchToInline", this.syncBody)
            }, i.prototype.render = function() {
                if (this.options.draftType !== !1)
                    switch (this.options.draftType) {
                        case"server":
                            $.ajax({url: this.draft.url(), type: "get"}).done(function(t) {
                                return function(e, n, i) {
                                    return t.renderContent(e)
                                }
                            }(this)).fail(function(t) {
                                return function(e, n, i) {
                                    return null !== t.$bodyField.val() ? t.renderContent(t.$bodyField.val()) : void 0
                                }
                            }(this)).always(function(t) {
                                return function() {
                                    return t.activatePlugins(), t.detectPlaceholder(), t.initWidgets()
                                }
                            }(this));
                            break;
                        case"local":
                            null !== localStorage.getItem(this.draftId) ? this.renderContent(this.draft) : null !== this.$bodyField.val() && this.renderContent(this.$bodyField.val()), this.activatePlugins(), this.detectPlaceholder(), this.initWidgets()
                    }
                else
                    null !== this.$bodyField.val() && this.renderContent(this.$bodyField.val()), this.activatePlugins(), this.detectPlaceholder(), this.initWidgets();
                return this
            }, i.prototype.detectPlaceholder = function() {
                return"<p><br></p>" === this.$body.get(0).innerHTML ? this.$body.addClass("medium-editor-placeholder") : this.$body.removeClass("medium-editor-placeholder")
            }, i.prototype.toggleEditable = function(t) {
                return this.$body.prop("contenteditable", t)
            }, i.prototype.bindUnfold = function() {
                return this.$el.one("click", this.unfold.bind(this))
            }, i.prototype.bindQuickSubmit = function() {
                return this.$body.on("keydown", function(t) {
                    return function(n) {
                        return(n.metaKey || n.ctrlKey) && n.keyCode === e.keycode.ENTER ? t.$submitButton.trigger("click") : void 0
                    }
                }(this))
            }, i.prototype.fold = function() {
                return this.$el.addClass("is-folded"), this.toggleEditable(!1), this.bindUnfold()
            }, i.prototype.unfold = function() {
                return this.$el.removeClass("is-folded")
            }, i.prototype.syncBody = function() {
                return this.setBody(this.model.getBody()), this.renderBody(), this.detectPlaceholder()
            }, i.prototype.switchToFullscreen = function() {
                return this.model.setBody(this.$body.html()), this.setBody(this.model.getBody()), this.affiliatedEditor.render()
            }, i.prototype.reset = function() {
                return i.__super__.reset.call(this), this.$body.minsert("hide"), this.detectPlaceholder()
            }, i
        }(e.Views.Editor)
    }(Making)
}.call(this), function() {
    var extend = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            hasProp.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, hasProp = {}.hasOwnProperty;
    Making.Views.FancyModal = function(superClass) {
        function FancyModal() {
            return FancyModal.__super__.constructor.apply(this, arguments)
        }
        return extend(FancyModal, superClass), FancyModal.prototype.id = "fancy_modal", FancyModal.prototype.className = "modal fade", FancyModal.prototype.template = HandlebarsTemplates["fancy/modal"], FancyModal.prototype.ui = {tagsForm: ".fancy_modal-tags_form", tagsInput: '[name="tag_names"]', selectizeInput: '.selectize-input input[type="text"]'}, FancyModal.prototype.events = {"hidden.bs.modal": "destroy", "change input": "onInputChange", "keyup @ui.selectizeInput": "fixFullWidthComma", "click .fancy_modal-all_tags li": "onTagClick", "click .fancy_modal-state input": "onStateClick", "click .fancy_modal-cancel_button": "onCancel", "click .fancy_modal-submit_button": "onSubmit"}, FancyModal.prototype.modelEvents = {change: "render"}, FancyModal.prototype.initialize = function() {
            return this.reviews = $("#thing_reviews"), this.initModel(), this.updateStateOnServer(), this.updateAllTriggers()
        }, FancyModal.prototype.url = function(t) {
            return null == t && (t = ""), "/things/" + this.model.get("thing_id") + "/impressions/" + this.model.get("id") + t
        }, FancyModal.prototype.initModel = function() {
            var t, e, n, i, r;
            return t = "fancy" === this.model.get("type") && !this.model.get("fancied") || "own" === this.model.get("type") && "owned" !== this.model.get("state"), r = this.model.get("tags") || [], i = r.join(","), n = (this.model.get("recent_tags") || []).filter(function(t) {
                return-1 === _.indexOf(r, t)
            }).map(function(t) {
                return{name: t, selected: !1}
            }), e = (this.model.get("popular_tags") || []).filter(function(t) {
                return-1 === _.indexOf(r, t)
            }).map(function(t) {
                return{name: t, selected: !1}
            }), this.model.set({first_time: t, tags: r, tag_names: i, recent_tags: n, popular_tags: e})
        }, FancyModal.prototype.updateStateOnServer = function() {
            var change, fancied, first_time, ref, state, thing_id, type;
            if (ref = this.model.attributes, first_time = ref.first_time, type = ref.type, fancied = ref.fancied, state = ref.state, thing_id = ref.thing_id, "edit" !== type && (change = "fancy" === type ? {fancied: !0} : "own" === type ? {state: "owned"} : {}, this.model.set(change, {silent: !0}), first_time))
                switch (type) {
                    case"fancy":
                        return $.ajax({method: "POST", url: "/things/" + thing_id + "/fancy.js"}, eval);
                    case"own":
                        return $.ajax({method: "POST", url: "/things/" + thing_id + "/own.js"}, eval)
                    }
        }, FancyModal.prototype.updateAllTriggers = function() {
            var t, e, n, i;
            return e = this.model.attributes, i = e.thing_id, t = e.fancied, n = e.state, Making.Fancy.updateAllTriggers(i, t, n)
        }, FancyModal.prototype.onShow = function() {
            return this.model.get("first_time") && "thing" !== this.model.get("from") ? this.destroy() : this.$el.modal("show")
        }, FancyModal.prototype.initTagsForm = function() {
            var t;
            return t = {}, Modernizr.touch && (t.remove_button = {title: "\u5220\u9664\u6807\u7b7e"}), this.ui.tagsInput.selectize({plugins: t, delimiter: ",", splitOn: /\s*[,\uff0c]\s*/, createOnBlur: !0, persist: !1, create: function(t) {
                    return function(e, n) {
                        return e = e.trim(), e.length >= 20 ? (t.model.set({tags_too_long: !0}), n()) : (t.model.set({tags_too_long: !1}, {silent: !0}), n({value: e, text: e}))
                    }
                }(this), onItemAdd: function(t) {
                    return function(e) {
                        var n;
                        return n = t._selectize.getValue(), t.model.set({tag_names: n, tags: n.split(",")}, {silent: !0}), setTimeout(function() {
                            return t.toggleTags([e], !0)
                        }, 0)
                    }
                }(this), onItemRemove: function(t) {
                    return function(e) {
                        return setTimeout(function() {
                            return t.toggleTags([e], !1)
                        }, 0)
                    }
                }(this)}), this._selectize = this.ui.tagsInput[0].selectize, this.once("before:render before:destroy", _.once(function(t) {
                return function() {
                    return t._selectize.destroy()
                }
            }(this)))
        }, FancyModal.prototype.onRender = function() {
            return this.bindUIElements(), this.$('[name="score"]').rating(), this.initTagsForm(), this.bindUIElements()
        }, FancyModal.prototype.toggleTags = function(t, e) {
            var n, i, r, o, a;
            return null == e && (e = "toggle"), a = function(t) {
                return t ? t.selected = "toggle" === e ? !t.selected : e : void 0
            }, r = this.model.attributes, o = r.tags, i = r.recent_tags, n = r.popular_tags, _.uniq(t).forEach(function(t) {
                return function(t) {
                    return-1 === _.indexOf(o, t) ? ("toggle" === e || e) && o.push(t) : "toggle" !== e && e || (o = _.without(o, t)), a(_.findWhere(i, {name: t})), a(_.findWhere(n, {name: t}))
                }
            }(this)), this.model.set({tags: o, tag_names: o.join(",")}, {silent: !0}), this.model.trigger("change"), this.ui.selectizeInput.focus(), setTimeout(function(t) {
                return function() {
                    return t.ui.selectizeInput.focus()
                }
            }(this), 0)
        }, FancyModal.prototype.onInputChange = function(t) {
            var e, n;
            return e = $(t.currentTarget), "state" !== e.attr("name") ? (n = {}, n[e.attr("name")] = e.val(), this.model.set(n, {silent: !0})) : void 0
        }, FancyModal.prototype.fixFullWidthComma = function(t) {
            var e;
            return e = $(t.currentTarget), /\uff0c/.test(e.val()) ? e.trigger("paste") : void 0
        }, FancyModal.prototype.scorllToReviews = function() {
            return $("html, body").animate({scrollTop: this.reviews.offset().top - 50}, "slow")
        }, FancyModal.prototype.onTagClick = function(t) {
            var e;
            return e = $(t.currentTarget).text(), this.toggleTags([e])
        }, FancyModal.prototype.onStateClick = function(t) {
            var e;
            return e = $(t.currentTarget), e.val() === this.model.get("state") ? (this.$('[name="state"][value="none"]').prop("checked", !0), this.model.set("state", "none")) : (e.prop("checked", !0), this.model.set("state", e.val()))
        }, FancyModal.prototype.onCancel = function(event) {
            var change;
            switch (event.preventDefault(), this.model.get("type")) {
                case"fancy":
                    if (!confirm("\u60a8\u786e\u5b9a\u8981\u53d6\u6d88\u559c\u6b22\u5417\uff1f"))
                        return;
                    break;
                case"own":
                    if (!confirm("\u60a8\u786e\u5b9a\u8981\u53d6\u6d88\u62e5\u6709\u5417\uff1f"))
                        return;
                    break;
                default:
                    return
            }
            return change = "fancy" === this.model.get("type") ? {fancied: !1} : {state: "none"}, this.model.set(change, {silent: !0}), $.ajax({url: this.url(".js"), type: "PATCH", data: {impression: change}}, eval), this.$el.modal("hide"), this.updateAllTriggers()
        }, FancyModal.prototype.onSubmit = function(event) {
            var impression;
            return event.preventDefault(), impression = _.pick(this.model.attributes, "state", "score"), impression.tag_names = this.model.get("tags"), $.ajax({url: this.url(".js"), type: "PATCH", contentType: "application/json", data: JSON.stringify({impression: impression, from: this.model.get("from")})}, eval), this.$el.modal("hide"), this.reviews.length && this.scorllToReviews(), (impression.score > 0 || impression.tag_names.length > 0) && Making.ShowMessageOnTop("\u64cd\u4f5c\u6210\u529f\uff0c\u611f\u8c22\u60a8\u7684\u5206\u4eab"), this.updateAllTriggers()
        }, FancyModal
    }(Backbone.Marionette.ItemView)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Views.Notification = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.el = "#notification_box", n.prototype.events = {"click #notification_trigger": "openNotification", "click .nav > li": "openTab"}, n.prototype.namespace = "nav", n.prototype.initialize = function() {
            return this.url = "/notifications", this.spinner_template = $("#notification_box .dropdown_box").html(), this.$content = $("#notification_box .dropdown_box"), this.$count = this.$("#notification_count"), this.$trigger = this.$("#notification_trigger"), this.$count.text() ? this.fetch() : this.$trigger.one("click", function(t) {
                return function() {
                    return t.fetch()
                }
            }(this))
        }, n.prototype.fetch = function() {
            return this.$content.html(this.spinner_template), $.ajax({url: this.url, dataType: "html", contentType: "application/x-www-form-urlencoded;charset=UTF-8"}).success(function(t) {
                return function(e) {
                    return t.$content.html(e)
                }
            }(this))
        }, n.prototype.loop = function() {
            var t, e, n;
            return e = null, t = function(n) {
                return function() {
                    return $.get("/notifications/unread_count").done(function(i) {
                        var r;
                        return r = setTimeout(t, 3e4), e !== i ? (e = i, +i ? (n.$count.html(i), n.$trigger.attr("title", i + " \u6761\u672a\u8bfb\u4fe1\u606f")) : (n.$count.empty(), n.$trigger.attr("title", "\u6ca1\u6709\u672a\u8bfb\u6d88\u606f"))) : void 0
                    })
                }
            }(this), n = setTimeout(function(e) {
                return function() {
                    return t()
                }
            }(this), 3e4)
        }, n.prototype.markRead = function(t, e) {
            return $.ajax({type: "POST", url: this.url + "/mark", data: {type: t}, dataType: "json"}).success(function(t) {
                return function() {
                    var n;
                    return n = t.$count.text() - e, n > 0 ? t.$count.text(n) : (t.$count.text(""), t.$trigger.attr("title", "\u6ca1\u6709\u672a\u8bfb\u6d88\u606f"))
                }
            }(this))
        }, n.prototype.openNotification = function(t) {
            return this.markRead($("#notification_box .tab-pane.active").attr("id"), $("li.active").attr("data-unread-count"))
        }, n.prototype.openTab = function(t) {
            var e, n, i;
            return n = $(t.target.parentElement).attr("href") || $(t.target).attr("href"), e = t.target.parentElement, $(e).find("span.unread").remove(), i = $(t.target).parents("li").attr("data-unread-count"), this.markRead(n, i)
        }, n
    }(Making.Views.DropdownBox)
}.call(this), function() {
    var t, e, n, i = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            r.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, r = {}.hasOwnProperty;
    t = function(t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }
        return i(e, t), e.prototype.el = ".order-address", e.prototype.itemTemplate = HandlebarsTemplates["orders/address_item"], e.prototype.events = {'change input[name="address_id"]': "setAddressInput", "click .order-address-new_btn": "setAddressEditable", "click .order-address--editable-cancel": "unSetAddressEditable", "click .order-addresses-item label": "selectItem", "click .order-address-slide_down": "slideDown", "submit #new_address": "submitNewAddress"}, e.prototype.initialize = function() {
            return this.$form = this.$el.find("form"), this.addressEditable = this.$el.hasClass("order-address--editable"), this.isEmpty = !this.$el.find(".order-addresses-item").length, this.isEmpty && (this.$el.removeClass("order-address--slide_up"), this.setAddressEditable()), Making.validator("#new_address"), Making.validatePhone("#address_phone")
        }, e.prototype.setAddressEditable = function() {
            return this.addressEditable ? (this.$el.removeClass("order-address--editable"), this.addressEditable = !1) : (this.$el.addClass("order-address--editable"), this.addressEditable = !0)
        }, e.prototype.unSetAddressEditable = function(t) {
            return t && t.preventDefault(), this.$el.removeClass("order-address--editable"), this.addressEditable = !1
        }, e.prototype.selectItem = function(t) {
            return this.addressEditable ? t.preventDefault() : (this.$el.find(".order-addresses-item").removeClass("order-addresses-item--selected"), $(t.currentTarget).parent().addClass("order-addresses-item--selected"))
        }, e.prototype.setAddressInput = function(t) {
            return $("#order_package_address_id").val(t.currentTarget.value)
        }, e.prototype.slideDown = function(t) {
            return this.$el.removeClass("order-address--slide_up")
        }, e.prototype.renderItem = function(t) {
            var e, n;
            return t["default"] && this.$el.find(".order-address-default_label").remove(), n = _.extend({}, t, {edit_link: function() {
                    return"/settings/addresses/" + this._id + "?redirect_from=" + window.location.href
                }, default_html: function() {
                    return this["default"] ? '<span class="btn btn--gray btn--xs">\u9996\u9009\u5730\u5740</span>' : ""
                }}), e = $(this.itemTemplate(n)), e.appendTo(this.$el.find(".order-addresses-list")), this.unSetAddressEditable(), this.$form[0].reset(), e.find("label").trigger("click"), $("#order_package_address_id").val(t._id)
        }, e.prototype.submitNewAddress = function(t) {
            return t.preventDefault(), $.ajax({type: "POST", url: this.$form.attr("action"), data: this.$form.serializeArray(), dataType: "JSON"}).done(function(t) {
                return function(e) {
                    return t.renderItem(e)
                }
            }(this))
        }, e
    }(Backbone.View), e = function(t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }
        return i(e, t), e.prototype.el = ".order-bong", e.prototype.events = {"click .ui-numberinput-minus": "minus", "click .ui-numberinput-plus": "plus", "change .ui-numberinput": "changePoint"}, e.prototype.initialize = function() {
            return this.$input = this.$el.find("#order_package_bong_point"), this.minimal = this.$input.data("minimal"), this.maximal = this.$input.data("maximal"), this.orderRequire = this.$el.data("require"), this.currentPoint = this.minimal, this.getBongPoint()
        }, e.prototype.minus = function() {
            return this.currentPoint > this.minimal ? this.$input.val(this.currentPoint -= 1) : void 0
        }, e.prototype.plus = function() {
            return this.currentPoint < this.maximal ? this.$input.val(this.currentPoint += 1) : void 0
        }, e.prototype.changePoint = function() {
            var t;
            return t = +this.$input.val(), t >= this.minimal && t <= this.maximal && (this.currentPoint = t), this.$input.val(this.currentPoint)
        }, e.prototype.getBongPoint = function() {
            return $.get("/bong/available_point.json", {maximal: this.maximal, minimal: this.minimal, order_require: this.orderRequire}).done(function(t) {
                return function(e) {
                    return(t.hasMessage = null != e.message) && t.renderMessage(e.message, e.status), "error" !== e.status ? $("#submit_order_btn, #submit_order_btn_mobile").removeAttr("disabled") : void 0
                }
            }(this)).done(function(t) {
                return function(e) {
                    return t.data = e, t.maximal = _.min([t.maximal, t.data.point]), t.$input.val(t.currentPoint), t.renderTips()
                }
            }(this)).done(function(t) {
                return function() {
                    return t.$el.show()
                }
            }(this))
        }, e.prototype.renderMessage = function(t, e) {
            var n, i;
            return i = "error" === e ? "alert alert-danger" : "alert alert-warning", n = $("<div />", {"class": i, html: t}), $(".order-bong-message").html(n)
        }, e.prototype.renderTips = function() {
            return this.data.point && !this.hasMessage ? (this.$tips = $("<div />", {"class": "order-bong-tips", html: "\u4f60\u6709 " + this.data.point + " \u6d3b\u8dc3\u70b9\u53ef\u7528\uff0c\u6700\u591a\u53ef\u4f7f\u7528 " + this.maximal + " \u70b9 (\u6bcf\u4e2a\u6d3b\u8dc3\u70b9 \u53ef\u62b5\u6263 " + this.data.point_value + " \u5143)"}), this.$tips.appendTo(this.$el)) : void 0
        }, e
    }(Backbone.View), n = function(n) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return i(r, n), r.prototype.el = "#wrapper", r.prototype.events = {"submit #new_order": "checkThenSubmit", "change .premium_delivery input": "available_premium_delivery"}, r.prototype.initialize = function() {
            return this.addressView = new t, $(".order-bong").length && (this.bongView = new e), this.$addressId = $("#order_package_address_id"), this.$note = $("#order_package_user_note"), this.$buyAsGify = $("#order_package_buy_as_gift"), this.$autoOwning = $("#order_package_auto_owning"), this.restore(), this.sotre()
        }, r.prototype.checkThenSubmit = function(t) {
            return this.addressView.addressEditable && (alert("\u65b0\u5730\u5740\u8fd8\u5728\u7f16\u8f91\u4e2d\uff0c\u8bf7\u53d6\u6d88\u6216\u63d0\u4ea4\u540e\u518d\u63d0\u4ea4\u8ba2\u5355"), t.preventDefault()), localStorage.removeItem("order:new")
        }, r.prototype.available_premium_delivery = function(t) {
            var e;
            return e = $(t.currentTarget).closest(".premium_delivery"), e.hasClass("available") ? (e.removeClass("available"), $("#order-delivery").text(parseFloat($("#order-delivery").text()) - parseFloat(e.data("price"))), $("#order-receivable").text(parseFloat($("#order-receivable").text()) - parseFloat(e.data("price")))) : (e.addClass("available"), $("#order-delivery").text(parseFloat($("#order-delivery").text()) + parseFloat(e.data("price"))), $("#order-receivable").text(parseFloat($("#order-receivable").text()) + parseFloat(e.data("price"))))
        }, r.prototype.sotre = function() {
            var t;
            return t = function(e) {
                return function() {
                    var n;
                    return n = {_timeout: (new Date).getTime(), address_id: e.$addressId.val(), note: e.$note.val(), buy_as_gift: e.$buyAsGify.prop("checked"), auto_owning: e.$autoOwning.prop("checked")}, localStorage.setItem("order:new", JSON.stringify(n)), setTimeout(t, 3e3)
                }
            }(this), setTimeout(t, 3e3)
        }, r.prototype.restore = function() {
            var t;
            return t = JSON.parse(localStorage.getItem("order:new")), t ? (new Date).getTime() - t._timeout > 36e5 ? localStorage.removeItem("order:new") : (this.$note.val(t.note), t.buy_as_gift && this.$buyAsGify.prop("checked", !0), t.auto_owning && this.$autoOwning.prop("checked", !0), $("#address_id_" + t.address_id).parent("label").trigger("click")) : void 0
        }, r
    }(Backbone.View), Making.Views.OrderNew = n, Making.Views.Bong = e
}.call(this), function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }, e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var r in e)
            n.call(e, r) && (t[r] = e[r]);
        return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
    }, n = {}.hasOwnProperty;
    Making.Views.Photo = function(n) {
        function i() {
            return this.destroy = t(this.destroy, this), this.render = t(this.render, this), i.__super__.constructor.apply(this, arguments)
        }
        return e(i, n), i.prototype.tagName = "li", i.prototype.className = "uploaded", i.prototype.template = HandlebarsTemplates["photos/photo"], i.prototype.events = {"click .destroy": "destroy"}, i.prototype.render = function() {
            return this.$el.html(this.template(this.model.attributes)),
            this
        }, i.prototype.destroy = function(t) {
            return t.preventDefault(), this.model.collection.remove(this.model), this.$el.remove(), this.remove()
        }, i
    }(Backbone.View)
}.call(this), function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }, e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var r in e)
            n.call(e, r) && (t[r] = e[r]);
        return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
    }, n = {}.hasOwnProperty;
    Making.Views.PhotoPreview = function(n) {
        function i() {
            return this.validate = t(this.validate, this), this.render = t(this.render, this), i.__super__.constructor.apply(this, arguments)
        }
        return e(i, n), i.prototype.tagName = "li", i.prototype.className = "uploading", i.prototype.template = HandlebarsTemplates["photos/preview"], i.prototype.events = {"click .destroy": "remove"}, i.prototype.initialize = function() {
            return this.model.readable_size = this._formatSize(this.model.size)
        }, i.prototype.render = function() {
            return this.$el.html(this.template(this.model)), loadImage(this.model, function(t) {
                return function(e) {
                    return t.$(".uploader_item").prepend(e)
                }
            }(this), {canvas: !0, maxWidth: this.$(".uploader_item").data("preview-width"), maxHeight: this.$(".uploader_item").data("preview-height")}), this
        }, i.prototype.validate = function() {
            var t, e;
            return e = /(\.|\/)(gif|jpe?g|png)$/i, t = 4194304, e.test(this.model.type) || e.test(this.model.name) ? _.isNumber(this.model.size) && this.model.size > t ? this.fail("\u56fe\u7247\u5927\u5c0f\u9650\u5236\u4e3a" + this._formatSize(t)) : !0 : this.fail("\u9700\u8981\u56fe\u7247\u683c\u5f0f\u6587\u4ef6")
        }, i.prototype.progress = function(t) {
            var e;
            return e = parseInt(t.loaded / t.total * 100, 10), this.$(".progress .progress-bar").css("width", e + "%")
        }, i.prototype.fail = function(t) {
            return this.$el.removeClass("uploading").addClass("fail").html('<p class="fail">' + t + '<a class="destroy" title="\u5220\u9664" href="javascript:;"><i class="fa fa-trash-o"></i></a></p>').closest("form").trigger("fail.validation"), !1
        }, i.prototype._formatSize = function(t) {
            return _.isNumber(t) ? t >= 1e6 ? (t / 1048576).toFixed(2) + " MB" : (t / 1024).toFixed(2) + " KB" : ""
        }, i
    }(Backbone.View)
}.call(this), function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }, e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var r in e)
            n.call(e, r) && (t[r] = e[r]);
        return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
    }, n = {}.hasOwnProperty;
    Making.Views.PhotosUpload = function(n) {
        function i() {
            return this.checkQueue = t(this.checkQueue, this), this.removePhoto = t(this.removePhoto, this), this.addPhoto = t(this.addPhoto, this), this.sortPhotos = t(this.sortPhotos, this), this.fail = t(this.fail, this), this.done = t(this.done, this), this.progress = t(this.progress, this), this.drop = t(this.drop, this), this.dragover = t(this.dragover, this), this.addFile = t(this.addFile, this), this.render = t(this.render, this), i.__super__.constructor.apply(this, arguments)
        }
        return e(i, n), i.prototype.tagName = "ul", i.prototype.events = {"click .destroy": "checkQueue", "click .uploader_button": "uploadByButton"}, i.prototype.initialize = function(t) {
            return null == t && (t = {}), this.options = t, this.$container = $(t.container || "#new_photo"), this.$queue = this.$container.find(".uploader_queue"), this.noHelper = t.helper === !1, this.$label = this.$container.find(".uploader_label"), this.collection = new Making.Collections.Photos(this.$queue.data("photos")), this.listenTo(this.collection, "add", this.addPhoto), this.listenTo(this.collection, "remove", this.removePhoto), this.$container.find('[name="photo[image]"]').fileupload($.extend({url: "/photos", dataType: "json", paramName: "photo[image]", add: this.addFile, dragover: this.dragover, drop: this.drop, progress: this.progress, done: this.done, fail: this.fail}, this.options.fileupload))
        }, i.prototype.render = function() {
            return this.collection.each(this.addPhoto), this.$queue.prepend(this.el), this.noHelper && this.renderUploaderButton(), this
        }, i.prototype.addFile = function(t, e) {
            var n;
            return this.noHelper || this.$container.find(".help-block").hide(), n = e.files[0], e.view = new Making.Views.PhotoPreview({model: n}), this.collection.isEmpty() ? this.$el.append(e.view.render().el) : this.$(".uploader_button").before(e.view.render().el), e.view.validate() ? e.submit() : void 0
        }, i.prototype.dragover = function(t) {
            return this.$queue.addClass("dragover")
        }, i.prototype.drop = function(t) {
            return this.$queue.removeClass("dragover")
        }, i.prototype.progress = function(t, e) {
            return e.view.progress(e)
        }, i.prototype.done = function(t, e) {
            return this.collection.add($.extend(e.result, {preview: e.view})), this.trigger("done", e)
        }, i.prototype.fail = function(t, e) {
            return e.view.$el.removeClass("uploading").addClass("fail").html('<p class="fail">\u51fa\u9519\u4e86\uff0c\u518d\u8bd5\u8bd5\u3002<a class="destroy" title="\u5220\u9664" href="#"><i class="fa fa-trash-o"></i></a></p>'), this.trigger("fail", e), !1
        }, i.prototype.sortPhotos = function() {
            var t;
            return t = this.$(".uploaded").map(function() {
                return $(this).data("photo-id")
            }).toArray(), this.collection.comparator = function(e) {
                return t.indexOf(e.get("id"))
            }, this.collection.sort(), this.collection.comparator = null
        }, i.prototype.addPhoto = function(t, e, n) {
            var i, r;
            return r = new Making.Views.Photo({model: t, attributes: {"data-photo-id": t.id}}), (i = t.get("preview")) ? (i.$el.replaceWith(r.render().el), i.remove()) : this.$el.append(r.render().el), this.checkQueue(), this.$el.sortable({items: ".uploaded", update: this.sortPhotos})
        }, i.prototype.removePhoto = function() {
            return 0 === this.$el.children("li").length ? this.$el.prev(".help-block").show() : void 0
        }, i.prototype.checkQueue = function() {
            var t, e;
            return e = this, 0 === this.$el.children("li:not(.uploader_button)").length ? (this.$el.children(".uploader_button").remove(), this.$label.removeClass("is-valid")) : (t = this.$el.children(".uploader_button"), this.$label.addClass("is-valid"), 0 === t.length ? this.renderUploaderButton() : this.$el.append(t))
        }, i.prototype.renderUploaderButton = function() {
            return $('<li class="uploader_button">+</li>').appendTo(this.$el)
        }, i.prototype.uploadByButton = function() {
            return this.$container.find(".uploader_label").trigger("click")
        }, i.prototype.remove = function() {
            return this.$container.find('[name="photo[image]"]').fileupload("destroy"), i.__super__.remove.call(this)
        }, i
    }(Backbone.View)
}.call(this), function() {
    var t, e, n = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var r in e)
            i.call(e, r) && (t[r] = e[r]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, i = {}.hasOwnProperty;
    e = HandlebarsTemplates["search/suggestions"], t = HandlebarsTemplates["search/loading"], Making.Views.SearchForm = function(i) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return n(r, i), r.prototype.ui = {input: 'input[type="search"]', status: ".fa-search", clear: ".fa-times", menu: ".search_menu", suggestions: ".search_menu-suggestions", result: ".search_menu-result"}, r.prototype.events = {"keydown @ui.input": "onKeyDown", "mousedown .search_menu-suggestions li": "onClick", "mousedown .search_menu-result a": "onClick", "keyup @ui.input": "onKeyUp", "focus @ui.input": "onFocus", "blur @ui.input": "onBlur", "click @ui.clear": "onClear", submit: "onSubmit"}, r.prototype.modelEvents = {change: "render"}, r.prototype.initialize = function() {
            return this.bindUIElements(), this.model = new Backbone.Model, this.reset(), this.ui.input.is(":focus") ? this.ui.input.trigger("focus") : void 0
        }, r.prototype.inputValue = function() {
            return this.ui.input.val().trim()
        }, r.prototype.reset = function() {
            return this.model.set({loading: !1, query: this.inputValue(), suggestions: [], selectedIndex: 0, result: ""})
        }, r.prototype.render = function() {
            return this.model.get("suggestions").length || this.model.get("result") ? this.ui.menu.show() : this.ui.menu.hide(), this.model.hasChanged("loading") ? this.model.get("loading") ? (this.ui.status.removeClass("fa-search").addClass("fa-spinner fa-spin"), this.ui.result.html(t()), this.ui.result.find(".search_menu-progress").animate({width: "100%"}, 500)) : (this.ui.status.addClass("fa-search").removeClass("fa-spinner fa-spin"), this.ui.result.find(".search_menu-progress").animate({width: "100%"}, 50, function(t) {
                return function() {
                    return t.ui.result.hide().html(t.model.get("result")).fadeIn()
                }
            }(this))) : !this.model.get("loading") && this.model.hasChanged("result") && this.ui.result.hide().html(this.model.get("result")).fadeIn(), this.model.get("query") !== this.inputValue() && this.ui.input.val(this.model.get("query")), this.model.hasChanged("suggestions") || this.model.hasChanged("selectedIndex") ? this.ui.suggestions.html(e({suggestions: this.model.get("suggestions"), selectedIndex: this.model.get("selectedIndex")})) : void 0
        }, r.prototype.updateSuggestions = function(t) {
            return null == this._cachedSuggestions && (this._cachedSuggestions = Object.create(null)), null != this._cachedSuggestions[t] ? this.model.set({suggestions: this._cachedSuggestions[t], selectedIndex: 0}) : $.ajax({url: "/search/suggestions", data: {q: t}, dateType: "json"}).done(function(e) {
                return function(n) {
                    return n.unshift({title: t}), e._cachedSuggestions[t] = n, t === e.inputValue() ? e.model.set({suggestions: n, selectedIndex: 0}) : void 0
                }
            }(this))
        }, r.prototype.updateResult = function(t) {
            return null == this._cachedResults && (this._cachedResults = Object.create(null)), null != this._cachedResults[t] ? this.model.set({loading: !1, result: this._cachedResults[t]}) : (this.model.set({loading: !0}), $.ajax({url: "/search", data: {q: t}, dateType: "html"}).done(function(e) {
                return function(n) {
                    return e._cachedResults[t] = n, t === e.inputValue() ? e.model.set({loading: !1, result: n}) : void 0
                }
            }(this)))
        }, r.prototype.selectSuggestion = function(t) {
            var e, n;
            return e = null != (n = this.model.get("suggestions")[t]) ? n.title : void 0, this.model.set({query: e, selectedIndex: t}), this.updateResult(e)
        }, r.prototype.moveBy = function(t) {
            var e, n;
            return n = this.model.get("suggestions").length, e = (this.model.get("selectedIndex") + t + n) % n, this.selectSuggestion(e)
        }, r.prototype.onKeyDown = function(t) {
            switch (t.which) {
                case Making.keycode.UP:
                    this.moveBy(-1);
                    break;
                case Making.keycode.DOWN:
                case Making.keycode.TAB:
                    t.shiftKey ? this.moveBy(-1) : this.moveBy(1);
                    break;
                default:
                    return
            }
            return t.preventDefault()
        }, r.prototype.onClick = function(t) {
            var e;
            return t.preventDefault(), e = $(t.currentTarget).data("id"), null != e ? (this.ui.input.data("ignore-blur-event", !0), window.open("/things/" + e)) : void 0
        }, r.prototype.onKeyUp = _.debounce(function(t) {
            var e;
            return e = this.inputValue(), e !== this.model.get("query") ? (this.model.set({query: e}), 0 === e.length ? this.model.set({suggestions: [], result: ""}) : (this.updateSuggestions(e), this.updateResult(e))) : void 0
        }, 200), r.prototype.onFocus = function() {
            var t;
            return this.ui.input.select(), t = this.model.get("query"), 0 !== t.length ? (this.updateSuggestions(t), this.updateResult(t)) : void 0
        }, r.prototype.onBlur = function() {
            return Making.isDebugging() || this.ui.input.data("ignore-blur-event") ? void 0 : this.model.set({loading: !1, suggestions: [], selectedIndex: 0, result: ""})
        }, r.prototype.onClear = function() {
            return this.ui.input.val(""), this.reset()
        }, r.prototype.onSubmit = function(t) {
            return 0 === this.inputValue().length ? t.preventDefault() : void 0
        }, r
    }(Backbone.Marionette.ItemView)
}.call(this), function() {
    var t, e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var r in e)
            n.call(e, r) && (t[r] = e[r]);
        return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
    }, n = {}.hasOwnProperty;
    t = function(t) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return e(n, t), n.prototype.tagName = "li", n.prototype.className = "thing-list", n.prototype.template = HandlebarsTemplates["thing_lists/list"], n.prototype.events = {"change input": "toggle"}, n.prototype.modelEvents = {change: "render"}, n.prototype.toggle = function(t) {
            return this.model.get("full") ? Making.ShowMessageOnTop("\u4e00\u4e2a\u5217\u8868\u6700\u591a\u53ea\u80fd\u88c5 300 \u4e2a\u4ea7\u54c1\u54e6", "warning") : this.model.set("selected", t.currentTarget.checked)
        }, n
    }(Backbone.Marionette.ItemView), Making.Views.AddToListModal = function(n) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }
        return e(i, n), i.prototype.id = "add-to-list-modal", i.prototype.className = "modal fade", i.prototype.template = HandlebarsTemplates["thing_lists/add_to_list_modal"], i.prototype.ui = {name: 'input[name="name"]', description: 'input[name="description"]'}, i.prototype.events = {"show.bs.modal": "reset", "hidden.bs.modal": "destroy", "keyup @ui.name": "editName", "submit .new-thing-list-form": "addThingList", "submit .new-thing-list-items-form": "done"}, i.prototype.collectionEvents = {reset: "initSelected", "change:selected": "addToChangedLists"}, i.prototype.childView = t, i.prototype.childViewContainer = "ul.thing-lists", i.prototype.initialize = function() {
            return this.model.set("photo", this.model.get("photo").replace(/!huge$/, "!square"))
        }, i.prototype.onShow = function() {
            return this.$el.modal("show")
        }, i.prototype.reset = function() {
            return this.collection.fetch({reset: !0, success: function(t) {
                    return function() {
                        return t.model.get("categories").forEach(function(e) {
                            return t.collection.findWhere({name: e}) || t.collection.unshift({name: e})
                        })
                    }
                }(this)}), this._changedLists = {}
        }, i.prototype.initSelected = function() {
            var t;
            return t = this.model.id, this.collection.each(function(e) {
                return e.set("selected", _.any(e.get("items"), function(e) {
                    return e.thing_id === t
                }), {slient: !0})
            }), this.collection.sort()
        }, i.prototype.editName = function(t) {
            return t.currentTarget.value.trim() ? this.$(".new-thing-list-form button").removeClass("disabled") : this.$(".new-thing-list-form button").addClass("disabled")
        }, i.prototype.addThingList = function(t) {
            var e, n;
            return t.preventDefault(), (n = this.ui.name.val().trim()) ? (e = this.collection.findWhere({name: n}) || this.collection.unshift({name: n}), e.set("selected", !0), this.addToChangedLists(e), this.ui.name.val("")) : void 0
        }, i.prototype.done = function(t) {
            var e, n;
            return t.preventDefault(), this.addThingList(t), n = this.model.id, e = this.ui.description.val().trim(), _.any(this._changedLists, function(t) {
                return t.get("selected")
            }) ? (this.ui.description.val(""), _.each(this._changedLists, function(t) {
                var i, r, o;
                return o = new Backbone.Collection(t.get("items")), o.url = t.url() + "/items", r = o.findWhere({thing_id: n}), i = function() {
                    return o.create({thing_id: n, description: e})
                }, t.isNew() ? void(t.get("selected") && t.save(null, {success: function() {
                        return o.url = t.url() + "/items", o.create({thing_id: n, description: e})
                    }})) : t.get("selected") ? r ? e ? r.save({description: e}) : void 0 : i() : null != r ? r.destroy() : void 0
            }), _.size(this._changedLists) && this.$el.one("hidden.bs.modal", function() {
                return Making.ShowMessageOnTop("\u64cd\u4f5c\u6210\u529f")
            }), this.$el.modal("hide")) : this.$("form > h5").css({color: "#8cadca"}).fadeTo("fast", .7).fadeTo("fast", 1)
        }, i.prototype.addToChangedLists = function(t) {
            return this._changedLists[t.cid] = t
        }, i
    }(Backbone.Marionette.CompositeView)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Views.ThingsNew = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.events = {submit: "validate"}, n.prototype.initialize = function() {
            var t;
            return t = this, this.$title = this.$('[name="thing[title]"]'), this.$content = this.$('[name="thing[content]"]'), this.$submit = $("#form-thing-submit"), this.photo_view = new Making.Views.PhotosUpload, this.photo_view.render(), this.$submit.on("click", function() {
                return t.$el.submit()
            }), $('[name="file"]').prop("accept", "image/*")
        }, n.prototype.validate_unicity = function(t) {
            var e, n, i, r, o, a, s, l;
            return $("html").hasClass("things_new") ? (l = $("#navbar_search").attr("action") + ".js?type=things", s = $.trim(t.target.value), a = !1, o = $("#thing_candidate"), r = o.children(".slideshow_body"), e = o.children(".close"), i = o.find(".slideshow_control.left"), n = o.find(".slideshow_control.right"), $.ajax({url: l, data: {q: s}, dataType: "html", contentType: "application/x-www-form-urlencoded;charset=UTF-8"}).done(function(t, s, l) {
                var u, c, d;
                return 200 === l.status ? (u = $(t), 0 === u.children().length ? void e.trigger("click") : (c = o.is(":hidden"), r.empty().append(u.addClass("slideshow_inner")), c && o.css("height", 0).show(), r.css("width", function() {
                    return o.width()
                }), c && o.css("height", "auto").hide(), a ? (slideshow_body.slideTo(0), d.reload()) : (d = new Sly(r, {horizontal: 1, itemNav: "centered", activateMiddle: 1, activateOn: "click", mouseDragging: 1, touchDragging: 1, releaseSwing: 1, speed: 300, elasticBounds: 1, dragHandle: 1, dynamicHandle: 1, clickBar: 1, prevPage: i, nextPage: n}).init(), a = !0), o.slideDown())) : e.trigger("click")
            }), e.on("click", function(t) {
                return t.preventDefault(), o.slideUp()
            })) : void 0
        }, n.prototype.validate_photos = function() {
            return console.log("validate")
        }, n.prototype.collect_photos = function() {
            var t;
            return t = this.photo_view.$(".uploaded"), _.each(t, function(t) {
                return function(e) {
                    return $("<input>").attr({name: "thing[photo_ids][]", value: $(e).data("photo-id"), type: "hidden"}).appendTo(t.$el)
                }
            }(this))
        }, n.prototype.validate = function() {
            var t;
            return t = this.photo_view.$(".uploaded"), "" !== $.trim(this.$title.val()) && "" !== $.trim(this.$content.val()) && t.length > 0 ? (this.collect_photos(), this.$submit.disable(), !0) : (0 === t.length && $(".uploader_label").tooltip("show"), "" === this.$title.val().trim() && this.$title.tooltip("show"), "" === this.$content.val().trim() && this.$el.parents("#form-thing").find("#form-thing-body").tooltip("show"), !1)
        }, n
    }(Backbone.View)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Views.NewThingInModal = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.events = {"submit form": "validate", "after:render": "afterRender"}, n.prototype.attributes = function() {
            return{id: "new-thing-from-local", "class": "modal fade thing modal--new_thing modal--new_thing-local", "data-keyboard": "false"}
        }, n.prototype.initialize = function(t) {
            return null == t && (t = {}), this.options = t, this.render(), this
        }, n.prototype.validate = function(t) {
            var e;
            return t.preventDefault(), e = this.validatePhotos(), e ? ($.post(this.$form.attr("action"), this.$form.serializeArray()), this.$form.find('button[type="submit"]').button("loading")) : void 0
        }, n.prototype.addPhotoInput = function(t) {
            var e;
            return e = $("#photo_hidden_group").empty(), $.each(t, function(t) {
                return function(t, n) {
                    return $("<input>").attr({name: "thing[photo_ids][]", value: n, type: "hidden"}).appendTo(e)
                }
            }(this))
        }, n.prototype.validatePhotos = function() {
            var t, e, n;
            return t = $("#photos-for-new-thing"), n = $("#photos-for-new-thing .uploaded").map(function(t, e) {
                return $(e).data("photo-id")
            }), e = !!n.length, t.removeClass("is-invalid"), e ? this.addPhotoInput(n) : t.addClass("is-invalid"), $("[required]").trigger("after:validate"), e
        }, n.prototype.renderProgress = function() {
            return this.$el.html('<div class="progress progress-striped active">\n  <div class="progress-bar" style="width: 100%;"></div>\n</div>')
        }, n.prototype.renderPhotoView = function() {
            return this.photoView = new Making.Views.PhotosUpload($.extend({container: "#new_thing", helper: !1}, this.options.photo)), this.photoView.render(), this.listenTo(this.photoView, "done", function(t) {
                return function() {
                    return t.validatePhotos()
                }
            }(this))
        }, n.prototype.afterRender = function() {
            var t;
            return this.$form = this.$el.find("form"), t = this.$form.find("textarea").closest(".form-group"), Making.validator("#new_thing"), Making.atUser("#new-thing-from-local textarea")
        }, n.prototype.render = function() {
            return this.renderProgress(), $(document.body).append(this.el), $.get("/things/new").done(function(t) {
                return function(e) {
                    return t.$el.html(e), t.renderPhotoView(), t.$el.trigger("after:render")
                }
            }(this)), this
        }, n
    }(Backbone.View)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Views.RemoteThingEditor = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.id = "new-thing-edit-modal", n.prototype.className = "modal fade modal--new_thing modal--new_thing-remote_edit", n.prototype.template = "", n.prototype.events = {"show.bs.modal": "ready_to_show", "shown.bs.modal": "shown", "click .slideshow_inner li": "selected", "submit form": "submit"}, n.prototype.initialize = function(t) {
            var e;
            return this.images = t.images, e = $(window).width(), this.size = e > 768 ? 120 : (e - 20) / 3
        }, n.prototype.ready_to_show = function(t) {
            return $("#new-thing-from-url-modal").find("input").val("").end().find("input, button").attr("disabled", !1).end(), $("#new-thing-url").$progress("remove")
        }, n.prototype.shown = function(t) {
            return this.$carousel.css({maxHeight: "none", visibility: "visible"}), Making.carousel({element: this.$carousel[0], isResetItemWidth: !0})
        }, n.prototype.selected = function(t) {
            var e, n;
            return t.preventDefault(), e = $(t.currentTarget), e.hasClass("selected") ? e.removeClass("selected") : (this.$img_error.hide(), e.addClass("selected")), n = this.$carousel.data("carousel"), n && n.slickGoTo(e.attr("data-slide-to"))
        }, n.prototype.submit = function(t) {
            var e, n, i, r;
            return t.preventDefault(), e = t.currentTarget, i = _.map(this.$slideshow_inner.find("li.selected"), function(t) {
                return $(t).children("img").attr("src")
            }), i.length ? (r = this.$el.find("#thing_title").val(), !r || /^\s*$/.test(r) ? alert("\u6807\u9898\u4e0d\u80fd\u4e3a\u7a7a") : (n = this.$el.find("#thing_official_site").val(), this.$el.find(".js-create")[0].disabled = !0, $.ajax({type: "POST", url: e.action, dataType: "JSON", data: {"thing[official_site]": n, "images[]": i, "thing[title]": r}}).done(function(t) {
                return window.location.href = t.thing_url
            }).always(function(t) {
                return function() {
                    return setTimeout(function() {
                        return t.$el.find(".js-create")[0].disabled = !1
                    }, 1e3)
                }
            }(this)))) : this.$img_error.show()
        }, n.prototype.load_image = function(t, e, n) {
            var i;
            return i = new Image, i.onload = function(t) {
                return function() {
                    return n.call(t, null, i, e)
                }
            }(this), i.onerror = function(t) {
                return function() {
                    return n.call(t, "error", i, e)
                }
            }(this), i.src = t
        }, n.prototype.resize_image = function(t, e, n) {
            var i, r, o, a;
            return i = t.find("img"), a = n > e ? [this.size / e * n, this.size] : e > n ? [this.size, this.size / n * e] : [this.size, this.size], o = a[0], r = a[1], t.css({height: this.size}), i.css({height: r, width: o})
        }, n.prototype.renderImages = function() {
            var t, e;
            return this.$slideshow_inner.sortable(), t = 0, e = 0, _.each(this.images, function(n) {
                return function(i, r) {
                    return n.load_image(i, r, function(r, o, a) {
                        var s, l, u, c;
                        return r ? t += 1 : (s = $(o), u = s.prop("naturalHeight"), c = s.prop("naturalWidth"), (u >= 300 || c >= 300) && (n.$el.find("#new-thing-edit-modal-images").addClass("more-than-one"), n.add_carousel_item(i, e), l = n.add_slideshow_item(i, e), e += 1, setTimeout(function() {
                            return n.resize_image(l, u, c)
                        }, 0)), t += 1), t === n.images.length ? n.images_rendered() : void 0
                    })
                }
            }(this))
        }, n.prototype.add_carousel_item = function(t, e) {
            var n, i;
            return n = $('<div class="item"><img src="' + t + '"/></div>'), (i = this.$carousel.data("carousel")) ? i.slickAdd(n[0]) : this.$carousel_inner.append(n[0]), n
        }, n.prototype.add_slideshow_item = function(t, e) {
            var n;
            return n = $('<li><img src="' + t + '"/></li>').attr("data-slide-to", e).attr("draggable", !0), this.$slideshow_inner.append(n), n
        }, n.prototype.images_rendered = function() {
            return 0 === this.$slideshow_inner.find("li").length ? ($("#new-thing-from-url-modal").find(".alert").removeClass("hidden"), this.$el.modal("hide").on("hidden.bs.modal", function(t) {
                return function() {
                    return t.remove()
                }
            }(this))) : setTimeout(function(t) {
                return function() {
                    return t.$slideshow_inner.find("li").first().trigger("click")
                }
            }(this), 0)
        }, n.prototype.render = function() {
            return this.$el.html(this.template), this.$carousel = this.$el.find(".carousel"), this.$carousel_inner = this.$el.find("#new-thing-edit-modal-images .carousel-inner"), this.$slideshow_inner = this.$el.find("#new-thing-edit-modal-sortable"), this.$img_error = this.$el.find("#upload_image_error"), this.renderImages(), this.$el.modal("show")
        }, n
    }(Backbone.View)
}.call(this), function() {
    var t = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
    }, e = {}.hasOwnProperty;
    Making.Routers.Photos = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.routes = {"": "index"}, n.prototype.initialize = function() {
        }, n.prototype.index = function() {
        }, n
    }(Backbone.Router)
}.call(this), $.extend($.fn.socialshare.Constructor.DEFAULTS, {consumerKeys: {weibo: "3754720038"}, content: $('meta[name="sharing_content"]').attr("content") || document.title, cover: $('meta[name="sharing_cover"]').attr("content"), url: Making.url}), function() {
    Making.Pages.ArticlesShow = function() {
        $(".socialshare--tiny").socialshare(), Making.Comments("#comments")
    }
}(), function() {
    Making.Pages.DiscussionsShow = function() {
        Making.Comments("#comments")
    }
}(), function() {
    Making.Pages.EntriesShow = function() {
        return Making.Comments("#comments"), $(".socialshare--tiny").socialshare(), $html.is(".wechat") ? $("a[href^=mailto]").tooltip({placement: "top", title: "\u957f\u6309\u53d1\u9001\u90ae\u4ef6", trigger: "manual"}).on("click", function(t) {
            var e;
            return e = $(this), e.tooltip("show"), setTimeout(function() {
                return e.tooltip("hide")
            }, 3e3)
        }) : void 0
    }
}.call(this), function() {
    window.Making = function(t) {
        var e;
        return t.InitHome = function(e, n) {
            return null == e && (e = ""), null == n && (n = 1), t.infiniteScroll({container: "#feeds", url: "/", page: Math.max(n, 1), data: {from_id: e}}), Making.Discussion("#feeds")
        }, Making.Pages.HomeLanding = function() {
            var e, n, i, r;
            if (r = $html.hasClass("mobile") ? {url: "/"} : {url: "/htis"}, $("html").hasClass("mobile"))
                switch (t.device) {
                    case"mobile":
                    case"tablet":
                        t.infiniteScroll({container: "#wrapper > .hits", url: r.url});
                        break;
                    default:
                        t.initSearchForm("#search_form")
                }
            return $("html").hasClass("tablet") && ($(document).on("click", ".nav_toggle-btn", function() {
                return $(".explore_nav").toggleClass("open")
            }), n = $(".explore_content").slick({arrows: !1}), $(".explore_content_item").css("display", "block"), e = $(".explore_nav li"), i = 0, n.on("afterChange", function(t, n, r) {
                return e.eq(i).removeClass("active"), e.eq(r).addClass("active"), i = r
            }), e.on("click", function() {
                var t;
                return t = e.index(this), t !== i ? (e.eq(i).removeClass("active"), e.eq(t).addClass("active"), n.slick("slickGoTo", t), i = t) : void 0
            })), Making.carousel({slick: {autoplaySpeed: 3e3, dots: !0}})
        }, e = "", Making.Pages.HomeWelcome = function() {
            var t, n, i, r;
            return i = location.hash, t = $("#step2").find(".tags"), n = $("#step2 .things"), r = $html.hasClass("mobile") ? 5 : 10, "" === i && (i = "#step1"), $(i).addClass("is-active"), $window.on("hashchange", function() {
                var t;
                return e = location.hash, t = $(e), t.addClass("is-active").siblings().removeClass("is-active"), "#step2" === e && $html.hasClass("mobile") && t.find("img.js-lazy").trigger("lazyload"), $window.scrollTop(0)
            }).on("load", function() {
                return $window.trigger("hashchange")
            }), Making.selectCategories("#step2", "#step2 .things"), $(".js-friendship").on("click", ".js-friendship-follow-all", function(t) {
                var e;
                return t.preventDefault(), e = $(t.delegateTarget).find('.follow_btn[data-method="post"]').map(function() {
                    return $(this).attr("id").replace(/^follow_btn_/, "")
                }).toArray().slice(0, "step3" !== location.hash || $html.hasClass("mobile") ? r : void 0), $.ajax({type: "POST", url: "/users/" + Making.user.id + "/followings", data: {user_ids: e}, dataType: "script"})
            }).on("click", ".js-friendship-refresh", function(t) {
                var e, n;
                return t.preventDefault(), e = $(t.delegateTarget).find(".js-friendship-users"), n = e.children().slice(r), e.prepend(_.sample(n, r))
            }), $html.hasClass("mobile") ? ($("#step2").find(".things").find(".thing_fancy_backdrop").removeAttr("href").removeAttr("target").end().find("figcaption h5 a").removeAttr("href").removeAttr("target"), Making.lazyLoadImages({container: "#step2", event: "lazyload"})) : void 0
        }, Making.Pages.HomeHits = function() {
            return Making.infiniteScroll({container: "#wrapper .hits"})
        }, t
    }(window.Making || {})
}.call(this), function() {
    Making.Pages.MerchantsThingsEdit = function() {
        new Making.Views.InlineEditor({el: "#shopping_desc-form", model: new Making.Models.Editor({bodyKey: "thing[shopping_desc]"}), bodyField: $('[name="thing[shopping_desc]"]'), imageField: "#shopping_desc-form-image_field", draftType: !1, buttons: ["header1", "header2", "anchor", "bold", "italic", "strikethrough", "quote", "aligncenter"], placeholder: "\u8d2d\u4e70\u8be6\u60c5"}).render()
    }, Making.Pages.MerchantsPromotionsNew = Making.Pages.MerchantsPromotionsEdit = Making.Pages.MerchantsPromotionsCreate = Making.Pages.MerchantsPromotionsUpdate = function() {
        $(".datetime-field").datetime({date: {clear: !1}, time: {clear: !1, interval: 10}}), new Making.Views.InlineEditor({el: "#promotion-form", model: new Making.Models.Editor({bodyKey: "thing_promotion[content]"}), bodyField: $('[name="thing_promotion[content]"]'), imageField: "#promotion-form-image_field", draftType: !1, buttons: ["header1", "header2", "anchor", "bold", "italic", "strikethrough", "quote", "aligncenter"], placeholder: "\u4fc3\u9500\u6d3b\u52a8"}).render()
    }, Making.Pages.MerchantsPromotionsIndex = function() {
        $("#promotion-content-modal").on("show.bs.modal", function(t) {
            $(this).find(".body").html(t.relatedTarget.getAttribute("data-content"))
        })
    }
}(), function() {
    Making.OrderPage = {InitNew: function() {
            var t;
            return $(".order_package_coupon_radio").click(function() {
                return window.location.href = $(this).attr("data-href")
            }), t = new Making.Views.OrderNew
        }, InitShow: function(t) {
            var e, n;
            return $(document).on("submit", "#new_sub_order_refund_request", function(t) {
                var e;
                return e = $(this).find("#sub_order_refund_request_user_note"), /^\s*$/.test(e.val()) ? (alert("\u8bf7\u586b\u5199\u7533\u8bf7\u7406\u7531"), t.preventDefault()) : void 0
            }), n = $("#redirect_prompt_modal"), $(".js-redirect_prompt").on("click", function(t) {
                return n.find(".modal-body").html('<i class="fa fa-spinner fa-spin"></i>\u6b63\u5728\u51c6\u5907' + $(this).text() + "...").end().modal("show")
            }), "on" === t && $(function() {
                return $("#share_order_btn").click()
            }), $(".order-bong").length && (this.bongView = new Making.Views.Bong), e = $(".order-delivery_track"), $(document).on("click", ".order-sub_order-delivery_method a", function() {
                return e.slideToggle()
            }), $('[name="order_package[cancel_type]"]').linkedOption()
        }}
}.call(this), function() {
    !function(t) {
        return t.InitPostIndex = function(t) {
            var e, n, i, r;
            for (null == t && (t = []), r = [], e = 0, i = t.length; i > e; e++)
                n = t[e], r.push($("#voting-" + n).addClass("voted"));
            return r
        }, t
    }(window.Making || {})
}.call(this), function() {
    Making.Pages.ReviewsShow = function() {
        Making.Comments("#comments"), $html.hasClass("mobile") && $(".socialshare--tiny").socialshare()
    }
}(), function() {
    Making.Pages.SearchThings = function() {
        Making.infiniteScroll({container: ".js-infinite", url: "/search/things" + window.location.search})
    }
}(), function() {
    Making.Pages.ThingListsShow = function(t) {
        var e, n, i;
        return e = $("#socialshare-trigger"), $('input[name="show_price"]').on("change", function(t) {
            return $(this).is(":checked") ? $(".thing_list_items").addClass("thing_list_items--with_price") : $(".thing_list_items").removeClass("thing_list_items--with_price")
        }), Making.Comments("#comments"), $("#socialshare_collapse").socialshare({content: e.attr("data-content"), body: e.attr("data-body")}), $window.on("resize.socialshare", function() {
            var t;
            return t = Modernizr.mq("(min-width: " + Making.breakpoints.screenLGMin + ")") ? {href: "#socialshare_collapse", "data-toggle": "collapse"} : {href: "#socialshare_modal", "data-toggle": "modal"}, e.attr(t)
        }).trigger("resize.socialshare"), t ? (i = $(".thing_list_items").attr("class"), $(".thing_list_item-cover_field").each(function(t, e) {
            var n, i, r;
            return n = $(e), r = n.closest(".thing_list_item"), i = r.find("input"), i.fileupload({dataType: "json", dropZone: null, formData: function() {
                    return[{name: "policy", value: i.attr("data-policy")}, {name: "signature", value: i.attr("data-signature")}]
                }, beforeSend: function(t, e) {
                    return n.addClass("is-uploading")
                }, done: function(t, e) {
                    var o;
                    return o = i.data("domain") + e.jqXHR.responseJSON.url, $.ajax({url: r.data("url"), type: "PATCH", data: {thing_list_item: {cover: o}}}).done(function(t, e, n) {
                        return r.find(".thing_list_item-cover-image").attr("src", o)
                    }).always(function() {
                        return n.removeClass("is-uploading")
                    })
                }, fail: function() {
                    return n.removeClass("is-uploading")
                }})
        }), $(".thing_list_name .editable").editable(), $(".thing_list_description .editable").editable({emptytext: "\u63cf\u8ff0\u4e00\u4e0b\u5427", tpl: '<textarea maxlength="100"></textarea>'}), $(".thing_list_item-description .editable").editable({emptytext: "\u8bf4\u70b9\u4ec0\u4e48\u5427\uff08140\u5b57\u4ee5\u5185\u54e6\uff09", tpl: '<textarea maxlength="140"></textarea>'}).on("shown", function(t, e) {
            return setTimeout(function() {
                return e.input.$input.autosize()
            }, 0)
        }), $(".thing_list_description, .thing_list_item-description").on("keydown", function(t) {
            return 13 === t.which ? (t.preventDefault(), $(this).find(".editableform").submit()) : void 0
        }), $(".editable").editable("disable"), $(".hide").each(function() {
            return $(this).removeClass("hide").hide()
        }), $(".thing_list_items").sortable({disabled: !0, helper: "clone", start: function(t, e) {
                return e.placeholder.height(0)
            }, update: function(t, e) {
                var n, i, r, o;
                return n = e.item, n.prev().length && (o = parseFloat(n.prev().data("order"))), n.next().length && (r = parseFloat(n.next().data("order"))), null == o && (o = r + 1), null == r && (r = o - 1), i = (o + r) / 2, n.data("order", i), $.ajax({url: n.data("url"), type: "PATCH", data: {thing_list_item: {order: i}}})
            }}), $(".thing_list_edit_button").on("click", function(t) {
            var e;
            return t.preventDefault(), e = $(this), "\u7ba1\u7406" === e.text() ? (e.text("\u5b8c\u6210"), $(".thing_list_sorting_buttons").show(), $(".thing_list_description, .thing_list_item-description").show(), $(".thing_list_description").find(".editable").show().end().find(".uneditable").hide(), $(".thing_list_items").attr("class", "thing_list_items thing_list_items--editing").sortable("enable")) : (e.text("\u7ba1\u7406"), $(".thing_list_sorting_buttons").hide(), $(".editableform").submit(), $(".thing_list_description, .thing_list_item-description").each(function() {
                return $(this).find(".editable-empty").length ? $(this).hide() : void 0
            }, $(".thing_list_items").attr("class", i).sortable("disable"))), e.toggleClass("thing_list_edit_button--editing"), $(".editable").editable("toggleDisabled")
        }), n = function(t) {
            return $("#thing_list_background").css("background-image", "url(" + t + ")")
        }, Making.imagePicker({el: "#change_list_background_modal", after: function(t, e) {
                return n(t.data("url")), $.ajax({url: window.location.pathname, type: "PATCH", data: {thing_list: {background_id: t.data("id")}}})
            }})) : void 0
    }
}.call(this), function() {
    window.Making = function(t) {
        return t.InitNewThing = function() {
            var e;
            return new t.Views.ThingsNew({el: "form.thing_form"}), e = new t.Views.FullscreenEditor({el: "#form-thing", model: new t.Models.Editor, type: "thing", bodyField: '[name="thing[content]"]', draftType: "server", excludeField: '[name="utf8"], [name="authenticity_token"], [name="photo[image]"]', placeholder: "\u4ea7\u54c1\u8be6\u7ec6\u4fe1\u606f"}), e.render()
        }, t.InitThings = function() {
            var e;
            return $html.is(".things_subscriptions") && t.InitThingsSubscriptions(), t.infiniteScroll({container: ".infinite", callback: function(t, e) {
                    return $(t).find(".lazy").css("visibility", "visible").lazyload({threshold: 400})
                }}), (e = $(".more")).length ? e.on("click", function() {
                return $("#tags").css("height", "auto"), $(".more").hide()
            }) : void 0
        }, t.InitThingsSubscriptions = function() {
            var t;
            return t = $("#subscriptions-categories"), t.one("click", ".subscribe_button", function(e) {
                return t.find(".refresh_button").enable()
            }).on("click", ".refresh_button", function(t) {
                return window.location.reload()
            })
        }, t.InitThing = function() {
            return t.carousel({isResetItemWidth: !0}), $html.hasClass("mobile") || t.extendCarousel(), t.readMore(".post_content"), t.InitAdoption(), t.InitDiscussions(), $html.hasClass("touch") && $window.on("load", function() {
                var t;
                return t = $(".is_folded .embed-responsive"), t.css({height: t.css("height"), width: t.css("width"), position: "absolute", left: "-1000%", overflow: "hidden"}), $(".post_content").next(".more").on("click", function() {
                    return t.css({position: "relative", left: 0})
                })
            }), "wechat" === t.browser ? t.shareOnWechat() : $(".dropdown_share-menu").socialshare(), $html.is(".mobile, .tablet") && (new Stream("#tab--mobile-discussions"), new Stream("#tab--mobile-reviews")), $html.hasClass("desktop") ? $("#thing_description .body").find("img").each(function() {
                var t, e;
                return t = this.naturalHeight, e = this.naturalWidth, t > 800 && 1 / 3 > e / t ? this.setAttribute("src", this.getAttribute("src").split("!")[0]) : void 0
            }) : void 0
        }, t.InitThingModal = function(e) {
            return $(document).on("click", "[data-target]", function(n) {
                var i, r, o;
                return r = $(this), "#new-thing-from-local" === r.data("target") ? (i = $("#new-thing-from-local"), i.length || (o = new t.Views.NewThingInModal(e), i = o.$el), i.modal("show")) : void 0
            })
        }, t.InitAdoption = function() {
            var t, e, n;
            return $html.hasClass("mobile") || (t = $("#thing_actions #adoption-modal"), e = t.find('[name="adoption[kind]"]'), $('[data-target="#adoption-modal"]').on("click", function(t) {
                var n;
                return n = $('[name="cart_item[kind_id]"]'), e.val(n.val())
            })), n = function(t) {
                return $(["#adoption_address_province_code", "#adoption_address_city_code", "#adoption_address_district_code", "#adoption_address_street", "#adoption_address_name", "#adoption_address_phone"].join(", ")).prop("required", t)
            }, $('[name="adoption[address_id]"]').on("change", function() {
                var t;
                return t = $("#adoption_address_id_new").prop("checked"), n(t)
            }), $('[name^="adoption[address]"]').on("focus", function() {
                return $("#adoption_address_id_new").prop("checked", !0), n(!0)
            }), $('[name^="adoption[address_id]"]:enabled').first().prop("checked", !0)
        }, t.InitDiscussions = function() {
            return t.EditorCompact(".discussion_form"), new t.Views.DiscussionNew({el: ".discussion_form > .editor_compact"}), t.Discussion(".discussions")
        }, t.Discussion = function(e) {
            var n;
            return n = $(e), n.on("click", ".comments_toggle", function(e) {
                var n, i, r;
                return e.preventDefault(), r = "#" + $(this).data("id"), n = $(r), i = n.parents(".comments_wrap"), i.is(":hidden") ? (t.Comments(r), n.show(), i.show()) : i.hide()
            })
        }, t.InitBookmarklet = function() {
            var t, e, n, i;
            return n = $("#thing_title"), e = $("#thing_official_site"), t = $(".image-list"), i = 0, window.opener && window.opener.postMessage("init", "*"), window.addEventListener("message", function(r) {
                var o, a, s, l, u;
                for (o = JSON.parse(r.data), n.val(o.title), e.val(o.href), i = o.images.length, l = o.images, a = 0, s = l.length; s > a; a++)
                    u = l[a], t.append('<li style="background-image:url(' + u + ');">\n  <input type="hidden" name="images[]", value="' + u + '">\n  <span class="remove_image">x</span>\n</li>');
                return t.sortable({items: "li"})
            }), t.on("click", ".remove_image", function(t) {
                return 1 === i ? alert("\u5206\u4eab\u9700\u8981\u81f3\u5c11\u4e00\u5f20\u56fe\u7247") : (i -= 1, $(this).closest("li").remove())
            }), $(document).on("submit", "#new_thing", function(i) {
                return i.preventDefault(), /^\s*$/.test(n.val()) || /^\s*$/.test(e.val()) || !t.find("li").length ? alert("\u8bf7\u68c0\u67e5\u5185\u5bb9\u662f\u5426\u4e3a\u7a7a") : ($(".pending_mask").show(), $.ajax({method: "POST", url: "/things/create_by_extractor", data: $(this).serializeArray(), dataType: "JSON"}).always(function() {
                    return $(".pending_mask").hide()
                }).done(function(t) {
                    return null != t.errors ? alert(t.errors.join(", ")) : $("#wrapper").html('<div class="created_thing clearfix">\n  <h3><i class="fa fa-check-square"></i> \u5206\u4eab\u6210\u529f</h3>\n  <div class="cover" style="background-image:url(' + t.cover_url + ');"></div>\n  <div class="title">' + t.title + '</div>\n  <div class="created_thing-action">\n    <span><a href="' + t.thing_url + '" class="close_window" target="_blank">\u6253\u5f00\u4ea7\u54c1\u9875</a></span>\n    <span><a href="#" class="close_window">\u5173\u95ed\u7a97\u53e3</a></span>\n  </div>\n</div>')
                }))
            }), $(document).on("click", ".close_window", function(t) {
                return window.close()
            })
        }, Making.Pages.ThingsShop = function() {
            return t.carousel({slick: {autoplaySpeed: 3e3, dots: !0}}), window.addEventListener("popstate", function(t) {
                return $.getScript(location.href)
            }), $(document).on("change", ".filter-panel select,input", function(t) {
                var e;
                return e = Making.removeParam("page", window.location.href), e = this.checked !== !1 && this.value ? Making.addParam(this.name, this.value, e) : Making.removeParam(this.name, e), history.pushState ? ($(".explore").addClass("explore--loading"), $.getScript(e).done(function(t) {
                    return history.pushState({}, null, e)
                })) : window.location = e
            })
        }, t.InitShopMobile = function() {
            return t.infiniteScroll({container: ".js-infinite", url: window.location.pathname + window.location.search}), t.carousel({slick: {autoplaySpeed: 3e3, arrows: !1, dots: !0}}), $(document).on("change", ".explore-legend select", function() {
                return window.location = $(this).find(":selected").data("url")
            }), $(document).on("click", ".toolbox-filter", function() {
                return $(document.body).css({overflow: "hidden"}), $(".sidemenu-wrapper").addClass("in")
            }), $(document).on("click", ".sidemenu-hide", function() {
                return $(".sidemenu-wrapper").removeClass("in"), $(document.body).css({overflow: "auto"})
            }), $(document).on("change", '.collapse input[type="checkbox"]', function() {
                var t;
                return t = $(this), t.prop("checked") ? (t.closest(".collapse").find('input[type="checkbox"]').prop("checked", !1), t.prop("checked", !0)) : t.prop("checked", !1)
            })
        }, t
    }(window.Making || {})
}.call(this), function() {
    Making.Pages.TopicsShow = function() {
        Making.Comments("#topic_comments")
    }
}(), function() {
    !function(t) {
        var e;
        return Making.Pages.Users = function() {
            var t, e, n, i, r, o, a, s, l, u, c, d, h, p, f;
            return $html.hasClass("desktop") ? (u = $(".vcard"), t = $(".vcard-avatar img"), i = $(".vcard-setting-canopy"), n = $(".vcard-canopy img"), o = $("#select_canopy_btn"), a = $("#upload_canopy_btn"), s = $("#user_canopy_field"), l = a.find("span"), r = $("#save_profile_btn"), e = $("#cancel_edit_profile_btn"), d = n.attr("src").split("!")[1], p = {}, h = {}, c = function() {
                h.avatar = t.attr("src"), h.canopy = n.attr("src")
            }, f = function(t) {
                var e, n, i;
                e = new FormData;
                for (n in t)
                    i = t[n], e.append("user[" + n + "]", i);
                return $.ajax({url: "/settings/profile.js", type: "PATCH", dataType: "json", processData: !1, contentType: !1, data: e})
            }, c(), $('[name="user[avatar]"]').on("change", function(e) {
                var n, i;
                return n = e.target.files[0], i = new FileReader, i.onload = function() {
                    return t.attr("src", i.result)
                }, n && /image/.test(n.type) ? (p.avatar = n, i.readAsDataURL(n)) : void 0
            }), s.fileupload({dataType: "json", dropZone: null, formData: function() {
                    return[{name: "policy", value: s.attr("data-policy")}, {name: "signature", value: s.attr("data-signature")}]
                }, beforeSend: function(t, n) {
                    return a.disable(), l.data("tip", l.text()).text("\u6b63\u5728\u4e0a\u4f20..."), o.addClass("is-hidden"), r.disable(), e.disable()
                }, done: function(t, e) {
                    return p.canopy = s.data("domain") + e.jqXHR.responseJSON.url, n.attr("src", p.canopy + "!" + d), l.text(l.data("tip"))
                }, fail: function(t, e) {
                    return l.text("\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")
                }, always: function(t, n) {
                    return a.enable(), o.removeClass("is-hidden"), r.enable(), e.enable()
                }}), Making.imagePicker({el: "#user_canopy_picker_modal", after: function(t, e) {
                    return n.attr("src", p.canopy = e)
                }}), u.on("click", "#edit_profile_btn", function(t) {
                return u.addClass("is-editing")
            }).on("click", "#save_profile_btn", function(n) {
                var i;
                return Object.keys(p).length ? (i = f(p), u.addClass("is-saving").removeClass("is-editing"), r.data("tip", r.text()).disable().text("\u6b63\u5728\u4fdd\u5b58..."), e.disable(), i.done(function(n, i, o) {
                    return u.removeClass("is-saving"), t.attr("src", n.avatar_url), r.enable().text(r.data("tip")), e.addClass("is-hidden"), c()
                }).fail(function(t, e, n) {
                    return u.addClass("is-editing").removeClass("is-saving"), r.enable().text("\u4fdd\u5b58\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")
                }).always(function() {
                    return e.enable().removeClass("is-hidden")
                })) : u.removeClass("is-editing")
            }).on("click", "#cancel_edit_profile_btn", function(e) {
                return t.attr("src", h.avatar), n.attr("src", h.canopy), u.removeClass("is-editing")
            })) : void 0
        }, Making.Pages.UsersShow = function() {
            var e, n;
            return e = $(".page-content > .block_list"), e.length && Making.infiniteScroll({container: ".page-content > .block_list", url: window.location.pathname, data: {rich: t.getParameterByKey("rich")}, callback: function(n, i) {
                    var r, o;
                    return $html.is(":not(.users_activities_text)") && Modernizr.mq("(min-width: " + t.breakpoints.screenSMMin + ")") ? (o = e.data("waterfall"), r = e.children(".activity:not([style])"), o.appended(r), o.layout()) : void 0
                }}), $html.is(".users_activities:not(.users_activities_text)") && (e = $(".js-waterfall"), e.length) ? (n = new Masonry(e[0], {itemSelector: ".activity"}), e.data("waterfall", n)) : void 0
        }, e = function() {
            var t, e, n;
            return e = $(".thing_tags"), t = e.find(".tags"), n = e.find(".thing_tags-toggle"), t.length && t[0].scrollHeight > t[0].offsetHeight ? (n.show(), n.on("click", function(e) {
                return e.preventDefault(), t.hasClass("is-collapsed") ? (t.removeClass("is-collapsed"), n.text("\u6536\u8d77\u6807\u7b7e")) : (t.addClass("is-collapsed"), n.text("\u5c55\u5f00\u6240\u6709\u6807\u7b7e"))
            })) : void 0
        }, Making.Pages.UsersFancies = function() {
            return e()
        }, Making.Pages.UsersDesires = function() {
            return e()
        }, Making.Pages.UsersOwns = function() {
            return e()
        }, t
    }(window.Making || {})
}.call(this), function() {
    !function(t) {
        var e;
        e = function() {
            var t, e, n;
            return e = $("#new-thing-modal"), t = $("#new-thing-from-url-modal"), t.on("click", 'button[type="submit"]', function() {
                var e;
                return e = t.find("#new-thing-url").val(), e && !/^https?:\/\//.test(e) && (e = "http://" + e), t.find("#new-thing-url").val(e)
            }), n = function() {
                return t.find("input").val("").end().find("input, button").attr("disabled", !1), $("#new-thing-url").$progress("remove")
            }, $("#extract_url_form").on("ajax:beforeSend", function(e, n, i) {
                return t.find("input, button").attr("disabled", !0), $("#new-thing-url").$progress({doneThenRemove: !1}).$progress("start").on("done:progress", function(t, e) {
                    return e.$progress.css({borderRadius: "20px"})
                }), $("#new-thing-edit-modal").html(""), $("#new-thing-similar-modal").html(""), !0
            }), t.on("show.bs.modal", function(e) {
                return n(), t.find(".alert").addClass("hidden")
            }), $("#new-thing-url").on("focus", function(e) {
                return t.find(".alert").addClass("hidden")
            })
        }, t.setupCustomerServices = function(e) {
            var n, i, r;
            return n = $(e), i = $("#fallback_help_modal"), r = !1, $window.on("load", function() {
                var e;
                return r = !0, t.isSignedIn ? e = setInterval(function() {
                    var n;
                    return"function" == (n = typeof mechatMetadata) || "object" === n ? (mechatMetadata({appUserName: t.user.id, appNickName: t.user.name, email: t.user.email}), clearTimeout(e)) : void 0
                }, 500) : void 0
            }), n.click(function(t) {
                var e;
                return t.preventDefault(), "function" == (e = typeof mechatClick) || "object" === e ? mechatClick() : r ? i.modal("show") : void 0
            })
        }, t.goTop = function() {
            return $(window).on("scroll", function() {
                if ($(window).scrollTop() > $(window).height() / 2) {
                    if ($("#go_top").is(":hidden"))
                        return $("#go_top").fadeIn()
                } else if ($("#go_top").is(":visible"))
                    return $("#go_top").fadeOut()
            }), $("#go_top").click(function(t) {
                return t.preventDefault(), $(this).fadeOut(), $("html,body").animate({scrollTop: 0}, "slow")
            })
        }, t.toggleFixedNavbar = function() {
            var t, e, n, i;
            return t = $("#header"), e = $(window), n = 0, i = 0, $document.on("focusin", ":input", function() {
                return i = t.css("top"), t.css({position: "absolute", top: 0})
            }).on("focusout", ":input", function() {
                return t.css({position: "fixed", top: i})
            })
        }, t.ajaxComplete = function() {
            return $(document).ajaxComplete(function() {
                var t;
                return $(".spinning").remove(), t = $(".thing").filter(function() {
                    return"_blank" !== $(this).attr("target")
                }), !0
            })
        }, t.trackEvent = function(t, e, n) {
            var i, r;
            try {
                return _hmt.push(["_trackEvent", t, e, n])
            } catch (r) {
                i = r
            }
        }, t.saveFormState = function(t) {
            return window.localStorage["saved|" + window.location.pathname + "|" + t.attr("id")] = t.serialize()
        }, t.loadFormState = function(t) {
            var e, n;
            return e = t.attr("id"), n = window.localStorage["saved|" + window.location.pathname + "|" + e], void 0 !== n ? (t.deserialize(n, {except: ["authenticity_token"]}), delete window.localStorage["saved|" + window.location.pathname + "|" + e]) : void 0
        }, t.wrapVideo = function(t) {
            var e;
            return e = $(t), e.find("iframe, embed, object, video").filter(function() {
                var t, e, n;
                return t = $(this), e = !0, n = t.attr("src"), t.is("embed") && n.indexOf("www.xiami.com") > 0 && n.indexOf("singlePlayer") > 0 && (t.css("width", t.attr("width")), e = !1), t.closest(".editor").length && (e = !1), e
            }).addClass("embed-responsive-item").wrap('<div class="embed-responsive embed-responsive-16by9"></div>')
        }, t.analytics = function() {
            return $document.on("click", "[data-action]", function(t) {
                var e, n, i, r;
                return e = $(t.currentTarget), i = e.attr("data-category"), n = e.attr("data-action"), r = e.attr("data-label")
            })
        }, t.toggleModal = function() {
            var t;
            return t = $("#" + Making.getParameterByKey("open_modal")).first(), 0 !== t.size() ? t.modal("toggle") : void 0
        }, t.initCategoriesNav = function() {
            return $(document).one("mouseenter", "#nav_primary .nav_flyout", function() {
                return $.get("/categories/menu").done(function(t) {
                    return function(t) {
                        return $("#categories-dropdown_menu").html(t), DropdownMenu({element: "#categories-dropdown_menu"})
                    }
                }(this))
            })
        }, t.initSocialShareModal = function() {
            var t;
            if ($("#socialshare_modal").length)
                return t = $("#socialshare_modal"), t.socialshare(), t.on("show.bs.modal", function(e) {
                    var n;
                    return n = e.relatedTarget, t.socialshare("set", {content: n.getAttribute("data-content"), cover: n.getAttribute("data-pic"), url: n.getAttribute("data-url") || Making.url, body: n.getAttribute("data-body")})
                })
        }, t.initEmojiMenu = function() {
            var t;
            return t = new EmojiMenu({toggle: '[data-toggle="emoji"]'}), $document.on("click.emoji", '[data-toggle="emoji"]', function(e) {
                return e.preventDefault(), t.isOpened ? t.hide() : t.render($(e.target).closest('[data-toggle="emoji"]'))
            })
        }, $(function() {
            var n, i, r, o, a, s, l, u, c, d, h, p;
            if (c = $("#user"), a = $(".navbar"), o = $(".navbar .dropdown").not(".notification, .cart_box"), i = $("#go_top"), d = i.css("right"), h = t.keycode, t.lazyLoadImages({container: "body"}), t.ajaxComplete(), t.atUser("textarea"), t.share(), t.setupCustomerServices('[href="#customer_services"]'), t.goTop(), t.profilePopovers(), t.prefillPrivateMessage(), t.toggleModal(), t.shareOnWechat(), t.initCategoriesNav(), t.initSocialShareModal(), $html.hasClass("production") && t.analytics(), e(), 0 !== parseInt(t.getScrollbarWidth()) && $html.addClass("scrollbar"), (n = $(".article")).length && t.wrapVideo(n.children(".body, .post_content")), (s = $(".popover-toggle")).length && s.popover(), (l = $("#socialshare_wechat_modal").find(".qrcode")).length && l.qrcode({render: "image", ecLevel: "L", text: document.URL.indexOf("#") > 0 ? Making.url : document.URL}), $document.on("click", "a.disabled", function(t) {
                return!1
            }).on("click", ".tags > a", function(t) {
                var e;
                return e = $(this), "#" === e.attr("href") ? (t.preventDefault(), e.toggleClass("is-active")) : void 0
            }).on("keydown", "textarea", function(t) {
                return(t.metaKey || t.ctrlKey) && t.keyCode === h.ENTER ? $(this).parents("form").find('button[type="submit"]').trigger("click") : void 0
            }).on("click", ".share_btn", function() {
                return $("#share_modal_form").find('textarea[name="share[content]"]').val($(this).attr("data-content")).end().find('input[name="share[pic]"]').val($(this).attr("data-pic")).end(), $(this).attr("data-preview-pic") ? $("#share_modal_form").find(".pic_preview").find("img").attr("src", $(this).attr("data-preview-pic")).end().removeClass("hide") : void 0
            }).on("change", ".order_select", function(t) {
                var e;
                return e = Making.addParam("order_by", this.value, window.location.href), window.location.href = e
            }), $docbody.on("freeze.ko", function() {
                var e;
                return e = t.getScrollbarWidth(), $docbody.addClass("is-frozen"), !$html.hasClass("ie") && parseInt(e) > 0 && $document.height() > $window.height() ? ($html.css("margin-right", e), a.css("padding-right", e), i.css("right", "calc(" + d + " + " + e + ")")) : void 0
            }).on("unfreeze.ko", function() {
                var e;
                return e = t.getScrollbarWidth(), $docbody.removeClass("is-frozen"), !$html.hasClass("ie") && parseInt(e) > 0 && $document.height() > $window.height() ? ($html.css("margin-right", 0), a.css("padding-right", 0), i.css("right", d)) : void 0
            }), $(".form-group.search").on("click", ".fa-times", function() {
                return $(this).hide().parents(".search").find("input").val("")
            }).on("keyup focus", "input", function() {
                var t;
                return t = $(this).parents(".search").find(".fa-times"), $.trim(this.value).length ? t.show() : t.hide()
            }), $(".js_auto_submit").on("change", function() {
                return $(this).parents("form").trigger("submit")
            }), $(".save_form_state").on("click", function() {
                return $.each($("form"), function(e, n) {
                    return t.saveFormState($(n))
                })
            }), $.each($("form"), function(e, n) {
                return t.loadFormState($(n))
            }), t.isSignedIn)
                t.InitThingModal({photo: {fileupload: {url: "/photos"}}}), t.UserFuzzy("#dialog_user_name", "#dialog_user_id"), 
                $html.hasClass("production");
            else {
                switch (t.loginModal(), t.device) {
                    case"mobile":
                    case"tablet":
                        r = $('#header [data-target="#login-modal"]');
                        break;
                    case"desktop":
                        r = $('#header .user_link[data-target="#login-modal"]')
                }
                $document.on("click", ".js-require_login", function(t) {
                    return $(t.currentTarget).find("textarea").length ? r.trigger("click") : void 0
                })
            }
            return Modernizr.mq("(min-width: " + Making.breakpoints.screenMDMin + ")") && ($("#notification_box").children("a").attr("data-toggle", "dropdown_box"), Making.user && (new Making.Views.Notification, new Making.Views.CartBox), o.each(function() {
                var t;
                return t = $(this), t.on("mouseenter", function(e) {
                    return t.addClass("open")
                }).on("mouseleave", function(e) {
                    return t.removeClass("open")
                }), t.is(".nav_flyout") ? t.on("mouseenter", function() {
                    return $docbody.trigger("freeze.ko")
                }).on("mouseleave", function() {
                    return $docbody.trigger("unfreeze.ko")
                }) : void 0
            }), c.children(".dropdown").children(".dropdown-toggle").on("click", function() {
                var t;
                return t = $(this).attr("href"), "#" !== t ? window.location.href = t : void 0
            }), $("#new_thing_trigger").attr("data-target", "#new-thing-modal")), ($html.hasClass("mobile") || $html.hasClass("tablet")) && (p = new Menu(".menu", "body", ".menu-toggle")), $html.hasClass("desktop") && Making.initEmojiMenu(), $html.hasClass("touch") && (t.toggleFixedNavbar(), $document.on("touchstart", function(t) {
                console.log("What happened?")
            })), "wechat" === t.browser ? (u = $("#wechat-subscribe_tip"), localStorage.hideWechatSubscribeTip || u.removeClass("is-hidden"), u.children("button").on("click", function(t) {
                return u.addClass("is-hidden"), localStorage.hideWechatSubscribeTip = !0
            }), t.bindWechatShareTip()) : void 0
        })
    }(Making)
}.call(this);