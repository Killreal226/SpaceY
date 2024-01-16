from django.db import models

class Place(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=255)
    slug = models.SlugField(max_length=100, unique=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    description = models.CharField(max_length=255)
    content = models.CharField(max_length=50000)
    photo_1 = models.ImageField(upload_to='photos/')
    photo_2 = models.ImageField(upload_to='photos/', blank=True, null=True)
    photo_3 = models.ImageField(upload_to='photos/', blank=True, null=True)
    photo_4 = models.ImageField(upload_to='photos/', blank=True, null=True)
    photo_5 = models.ImageField(upload_to='photos/', blank=True, null=True)

    def __str__(self) -> str:
        return self.title
    
class Event(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=255)
    slug = models.SlugField(max_length=100, unique=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    description = models.CharField(max_length=255)
    content = models.CharField(max_length=50000)
    photo_1 = models.ImageField(upload_to='photos/')
    photo_2 = models.ImageField(upload_to='photos/', blank=True, null=True)
    photo_3 = models.ImageField(upload_to='photos/', blank=True, null=True)

    def __str__(self) -> str:
        return self.title
    
class Science(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=255)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.CharField(max_length=255)
    content = models.CharField(max_length=50000)
    photo_1 = models.ImageField(upload_to='photos/')
    photo_2 = models.ImageField(upload_to='photos/' , blank=True, null=True)
    photo_3 = models.ImageField(upload_to='photos/', blank=True, null=True)
    photo_4 = models.ImageField(upload_to='photos/', blank=True, null=True)
    photo_5 = models.ImageField(upload_to='photos/', blank=True, null=True)

    def __str__(self) -> str:
        return self.title
