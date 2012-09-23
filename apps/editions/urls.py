from django.conf.urls import patterns, url

urlpatterns = patterns('editions.views',
    url(r'^$', 'index'),
    url(r'^(?P<edition_id>\d+)/generate/$', 'generate'),
    url(r'^add/$', 'add'),
)