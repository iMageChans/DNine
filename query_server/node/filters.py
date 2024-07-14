from django_filters import rest_framework as filters
from .models import AddVoting, NodeReward, NodeWithdraw


class AddVotingFilter(filters.FilterSet):
    beneficiaryVoter = filters.CharFilter(field_name='data__beneficiaryVoter', lookup_expr='icontains')

    class Meta:
        model = AddVoting
        fields = ['beneficiaryVoter', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']


class NodeRewardFilter(filters.FilterSet):
    receiver = filters.CharFilter(field_name='data__receiver', lookup_expr='icontains')

    class Meta:
        model = NodeReward
        fields = ['receiver', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']


class NodeWithdrawFilter(filters.FilterSet):
    accountId = filters.CharFilter(field_name='data__accountId', lookup_expr='icontains')

    class Meta:
        model = NodeWithdraw
        fields = ['accountId', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']
