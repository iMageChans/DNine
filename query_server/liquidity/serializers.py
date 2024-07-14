from rest_framework import serializers
from .models import Liquidity

class LiquiditySerializer(serializers.ModelSerializer):
    class Meta:
        model = Liquidity
        fields = '__all__'
