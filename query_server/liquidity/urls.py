from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'operation', views.LiquidityViewSet)

urlpatterns = [
    path('liquidity/', include(router.urls)),
]
