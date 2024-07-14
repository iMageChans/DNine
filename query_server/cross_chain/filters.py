from django_filters import rest_framework as filters
from .models import Commit, Dispatch


class CommitFilter(filters.FilterSet):
    from_address = filters.CharFilter(field_name='data__from_address', lookup_expr='icontains')

    class Meta:
        model = Commit
        fields = ['from_address', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']


class DispatchFilter(filters.FilterSet):
    to_address = filters.CharFilter(field_name='data__to_address', lookup_expr='icontains')

    class Meta:
        model = Dispatch
        fields = ['to_address', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']
