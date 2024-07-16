from django_filters import rest_framework as filters
from .models import GiveGreenPoints, Payment, Subscribe


class GiveGreenPointsFilter(filters.FilterSet):
    merchant = filters.CharFilter(field_name='data__merchant_accountId', lookup_expr='icontains')
    consumer = filters.CharFilter(field_name='data__consumer_accountId', lookup_expr='icontains')

    class Meta:
        model = GiveGreenPoints
        fields = ['merchant', 'consumer','block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']


class PaymentFilter(filters.FilterSet):
    from_address = filters.CharFilter(field_name='data__from_address', lookup_expr='icontains')

    class Meta:
        model = Payment
        fields = ['from_address', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']


class SubscribeFilter(filters.FilterSet):
    account_id = filters.CharFilter(field_name='data__accountId', lookup_expr='icontains')

    class Meta:
        model = Subscribe
        fields = ['account_id', 'block_number', 'timestamp', 'extrinsic_hash', 'contract', 'contract_address', 'kind']
