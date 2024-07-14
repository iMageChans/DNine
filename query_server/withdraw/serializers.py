from rest_framework import serializers
from .models import Burning, Merchant


class BurningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Burning
        fields = '__all__'


class MerchantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Merchant
        fields = '__all__'
