from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'commits', views.CommitViewSet)
router.register(r'dispatches', views.DispatchViewSet)

urlpatterns = [
    path('cross_chain/', include(router.urls)),
]
