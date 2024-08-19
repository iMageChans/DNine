from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework import filters as rest_filters
from django_filters import rest_framework as filters

from utils.LatestRecordsPagination import LatestRecordsPagination
from .models import D9Transfer, USDTTransfer
from .serializers import D9TransferSerializer, USDTTransferSerializer
from .filters import D9TransferFilter, USDTTransferFilter


class D9TransferViewSet(mixins.ListModelMixin,
                        mixins.CreateModelMixin,
                        viewsets.GenericViewSet):

    queryset = D9Transfer.objects.all()
    serializer_class = D9TransferSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = D9TransferFilter
    pagination_class = LatestRecordsPagination

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = D9Transfer.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)


class USDTTransferViewSet(mixins.ListModelMixin,
                          mixins.CreateModelMixin,
                          viewsets.GenericViewSet):
    queryset = USDTTransfer.objects.all()
    serializer_class = USDTTransferSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = USDTTransferFilter
    pagination_class = LatestRecordsPagination

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = USDTTransfer.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
