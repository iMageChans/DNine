from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'd9transfers', views.D9TransferViewSet)
router.register(r'usdttransfers', views.USDTTransferViewSet)

urlpatterns = [
    path('transfer/', include(router.urls)),
]
