from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'add_voting', views.AddVotingViewSet)
router.register(r'reward', views.NodeRewardViewSet)
router.register(r'withdraw', views.NodeWithdrawViewSet)

urlpatterns = [
    path('node/', include(router.urls)),
]
