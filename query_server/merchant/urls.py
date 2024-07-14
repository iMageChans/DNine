from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'give_green_points', views.GiveGreenPointsViewSet)
router.register(r'payments', views.PaymentViewSet)
router.register(r'subscribes', views.SubscribeViewSet)

urlpatterns = [
    path('merchant/', include(router.urls)),
]
