"""django_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index,name='index'),
    path('signin/',views.login_user,name='signin'),
    path('signup/',views.create_user,name='signup'),
    path('bengaluru/',views.bengaluru,name='bengaluru'),
    path('delhi/',views.delhi,name='delhi'),
    path('hyd/',views.hyd,name='hyd'),
    path('kol/',views.kol,name='kol'),
    path('mumbai/',views.mumbai,name='mumbai'),
    path('logoutq/',views.logout_user,name='logoutq'),

]
