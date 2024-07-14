from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework import filters as rest_filters
from django_filters import rest_framework as filters

from utils.LatestRecordsPagination import LatestRecordsPagination
from .models import Commit, Dispatch
from .serializers import CommitSerializer, DispatchSerializer
from .filters import CommitFilter, DispatchFilter


class CommitViewSet(mixins.ListModelMixin,
                    mixins.CreateModelMixin,
                    viewsets.GenericViewSet):
    queryset = Commit.objects.all()
    serializer_class = CommitSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = CommitFilter
    pagination_class = LatestRecordsPagination

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = Commit.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)



class DispatchViewSet(mixins.ListModelMixin,
                      mixins.CreateModelMixin,
                      viewsets.GenericViewSet):
    queryset = Dispatch.objects.all()
    serializer_class = DispatchSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = DispatchFilter
    pagination_class = LatestRecordsPagination

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = Dispatch.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)

