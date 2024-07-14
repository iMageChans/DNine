from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework import filters as rest_filters
from django_filters import rest_framework as filters

from utils.LatestRecordsPagination import LatestRecordsPagination
from .models import Liquidity
from .serializers import LiquiditySerializer
from .filters import LiquidityFilter


class LiquidityViewSet(mixins.ListModelMixin,
                       mixins.CreateModelMixin,
                       viewsets.GenericViewSet):
    queryset = Liquidity.objects.all()
    serializer_class = LiquiditySerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = LiquidityFilter
    pagination_class = LatestRecordsPagination

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = Liquidity.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)
