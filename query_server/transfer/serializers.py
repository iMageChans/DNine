from rest_framework import serializers
from .models import D9Transfer, USDTTransfer

class D9TransferSerializer(serializers.ModelSerializer):
    class Meta:
        model = D9Transfer
        fields = '__all__'

class USDTTransferSerializer(serializers.ModelSerializer):
    class Meta:
        model = USDTTransfer
        fields = '__all__'
