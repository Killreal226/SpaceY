from rest_framework import serializers
from .models import *

class MapPlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ('title','category','slug', 'description','latitude', 'longitude','photo_1')

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ('title', 'content','photo_1','photo_2','photo_3','photo_4','photo_5')
