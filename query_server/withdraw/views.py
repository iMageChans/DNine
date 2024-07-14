from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework import filters as rest_filters
from django_filters import rest_framework as filters
from .models import Burning, Merchant
from .serializers import BurningSerializer, MerchantSerializer
from .filters import BurningFilter, MerchantFilter


class BurningViewSet(mixins.ListModelMixin,
                     mixins.CreateModelMixin,
                     viewsets.GenericViewSet):
    queryset = Burning.objects.all()
    serializer_class = BurningSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = BurningFilter

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = Burning.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)


class MerchantViewSet(mixins.ListModelMixin,
                      mixins.CreateModelMixin,
                      viewsets.GenericViewSet):
    queryset = Merchant.objects.all()
    serializer_class = MerchantSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = MerchantFilter

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = Merchant.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)
