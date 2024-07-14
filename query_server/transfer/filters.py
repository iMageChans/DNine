from django_filters import rest_framework as filters
from .models import D9Transfer, USDTTransfer


class D9TransferFilter(filters.FilterSet):
    from_address = filters.CharFilter(field_name='data__from', lookup_expr='icontains')

    class Meta:
        model = D9Transfer
        fields = ['from_address', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']


class USDTTransferFilter(filters.FilterSet):
    from_address = filters.CharFilter(field_name='data__from', lookup_expr='icontains')

    class Meta:
        model = USDTTransfer
        fields = ['from_address', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']
