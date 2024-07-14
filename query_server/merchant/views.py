from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework import filters as rest_filters
from django_filters import rest_framework as filters

from utils.LatestRecordsPagination import LatestRecordsPagination
from .models import GiveGreenPoints, Payment, Subscribe
from .serializers import GiveGreenPointsSerializer, PaymentSerializer, SubscribeSerializer
from .filters import GiveGreenPointsFilter, PaymentFilter, SubscribeFilter


class GiveGreenPointsViewSet(mixins.ListModelMixin,
                             mixins.CreateModelMixin,
                             viewsets.GenericViewSet):
    queryset = GiveGreenPoints.objects.all()
    serializer_class = GiveGreenPointsSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = GiveGreenPointsFilter
    pagination_class = LatestRecordsPagination

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = GiveGreenPoints.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)


class PaymentViewSet(mixins.ListModelMixin,
                     mixins.CreateModelMixin,
                     viewsets.GenericViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = PaymentFilter
    pagination_class = LatestRecordsPagination

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = Payment.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)


class SubscribeViewSet(mixins.ListModelMixin,
                       mixins.CreateModelMixin,
                       viewsets.GenericViewSet):
    queryset = Subscribe.objects.all()
    serializer_class = SubscribeSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = SubscribeFilter
    pagination_class = LatestRecordsPagination

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = Subscribe.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)

