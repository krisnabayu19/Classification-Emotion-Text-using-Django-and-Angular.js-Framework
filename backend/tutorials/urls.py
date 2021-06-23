from django.conf.urls import url 
from tutorials import views 
 
urlpatterns = [ 
    url(r'^api/dataDashboard$', views.dataDashboard),
    url(r'^api/dataCheckEmotion$', views.dataCheckEmotion)
]