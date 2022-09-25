from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.files.storage import FileSystemStorage


class ImageUploader(APIView):
    
    def get(self, request):
        return Response(
            {
                "status": True,
                "message": "yay it's working",
            },
        )
    
    def post(self, request):
        image = request.data['image']
        fs = FileSystemStorage()
        filename = fs.save(image, image)
        uploaded_file_url = f'http://localhost:8000{fs.url(filename)}'
        return Response(
            {
                "data": uploaded_file_url,
                "status": "success"
            }
        )