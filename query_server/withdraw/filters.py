from django_filters import rest_framework as filters
from .models import Burning, Merchant


class BurningFilter(filters.FilterSet):
    from_address = filters.CharFilter(field_name='data__from', lookup_expr='icontains')
    to_address = filters.CharFilter(field_name='data__to', lookup_expr='icontains')

    class Meta:
        model = Burning
        fields = ['from_address', 'to_address', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']


class MerchantFilter(filters.FilterSet):
    accountId = filters.CharFilter(field_name='data__accountId', lookup_expr='icontains')

    class Meta:
        model = Merchant
        fields = ['accountId', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']
