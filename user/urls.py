from django.urls import path, include
from rest_framework import routers
from .views import UserView

router = routers.DefaultRouter()
router.register('user', UserView)

urlpatterns = [
    path('', include(router.urls))
]