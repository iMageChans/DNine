from django_filters import rest_framework as filters
from .models import Liquidity

class LiquidityFilter(filters.FilterSet):
    account_id = filters.CharFilter(field_name='data__account_id', lookup_expr='icontains')

    class Meta:
        model = Liquidity
        fields = ['account_id', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']
