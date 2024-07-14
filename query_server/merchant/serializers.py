from rest_framework import serializers
from .models import GiveGreenPoints, Payment, Subscribe

class GiveGreenPointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GiveGreenPoints
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'

class SubscribeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscribe
        fields = '__all__'
