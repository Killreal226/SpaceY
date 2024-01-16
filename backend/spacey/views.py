from rest_framework import generics 
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

from .models import *
from .serializers import *

class Events_MapAPIView(generics.ListAPIView):
    queryset = Place.objects.all()
    serializer_class = MapPlaceSerializer
    
class PlaceAPIView(generics.RetrieveAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    lookup_field = 'slug'
    def get_object(self):
        slug = self.kwargs.get('slug')
        obj = Place.objects.filter(slug=slug).first()
        if not obj:
            raise Http404('Запись не найдена')
        return obj


class NewsAPIView(APIView):
    def get(self, request):
        return Response({"message":"News"})
    
class ScienceAPIView(APIView):
    def get(self, request):
        return Response({"message":"Science"})
    
class ForumAPIView(APIView):
    def get(self, request):
        return Response({"message":"Forum"})
    
class About_UsAPIView(APIView):
    def get(self, request):
        return Response({"message":"About us"})

class Sign_UpAPIView(APIView):
    def get(self, request):
        return Response({"message":"Sign Up"})