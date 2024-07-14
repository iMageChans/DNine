from django_filters import rest_framework as filters
from .models import Transaction

class TransactionFilter(filters.FilterSet):
    accountId = filters.CharFilter(field_name='data__accountId', lookup_expr='icontains')

    class Meta:
        model = Transaction
        fields = ['accountId', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']
