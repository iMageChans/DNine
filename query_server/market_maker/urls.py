from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'transactions', views.TransactionViewSet)

urlpatterns = [
    path('market_maker/', include(router.urls)),
]
