from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'burnings', views.BurningViewSet)
router.register(r'merchants', views.MerchantViewSet)

urlpatterns = [
    path('withdraw/', include(router.urls)),
]
