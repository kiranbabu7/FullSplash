from django.urls import path

from .views import ImageUploader

urlpatterns = [
    path('', ImageUploader.as_view()),
]