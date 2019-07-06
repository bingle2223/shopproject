from django import template
register = template.Library()

@register.filter
def numrange(i):
    return range(i)

