from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework import filters as rest_filters
from django_filters import rest_framework as filters
from .models import AddVoting, NodeReward, NodeWithdraw
from .serializers import AddVotingSerializer, NodeRewardSerializer, NodeWithdrawSerializer
from .filters import AddVotingFilter, NodeRewardFilter, NodeWithdrawFilter


class AddVotingViewSet(mixins.ListModelMixin,
                       mixins.CreateModelMixin,
                       viewsets.GenericViewSet):
    queryset = AddVoting.objects.all()
    serializer_class = AddVotingSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = AddVotingFilter

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = AddVoting.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)


class NodeRewardViewSet(mixins.ListModelMixin,
                        mixins.CreateModelMixin,
                        viewsets.GenericViewSet):
    queryset = NodeReward.objects.all()
    serializer_class = NodeRewardSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = NodeRewardFilter

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = NodeReward.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)


class NodeWithdrawViewSet(mixins.ListModelMixin,
                          mixins.CreateModelMixin,
                          viewsets.GenericViewSet):
    queryset = NodeWithdraw.objects.all()
    serializer_class = NodeWithdrawSerializer
    filter_backends = (filters.DjangoFilterBackend, rest_filters.OrderingFilter)
    filterset_class = NodeWithdrawFilter

    def create(self, request, *args, **kwargs):
        data = request.data
        instance, created = NodeWithdraw.create_or_update(data)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)
