from django.conf.urls import patterns, url

urlpatterns = patterns('editions.views',
    url(r'^$', 'index'),
)