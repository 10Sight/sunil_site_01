from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Product, ProductImage
from .serializers import ProductSerializer
from django.shortcuts import get_object_or_404
from cloudinary.uploader import upload

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Product.objects.filter(user=self.request.user)

    @action(detail=True, methods=['delete'])
    def remove_image(self, request, pk=None):
        product = self.get_object()
        image_id = request.data.get('image_id')
        
        if not image_id:
            return Response({'error': 'Image ID is required'}, status=status.HTTP_400_BAD_REQUEST)

        image = get_object_or_404(ProductImage, id=image_id, product=product)
        image.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.save(user=request.user)

        uploaded_images = request.FILES.getlist('uploaded_images')
        for image in uploaded_images:
            if not image or not hasattr(image, 'size') or image.size == 0:
                continue  # Skip empty files
            if hasattr(image, 'seek'):
                image.seek(0)  # Reset file pointer
            # Upload to Cloudinary
            result = upload(image)
            ProductImage.objects.create(
                product=product,  # Use the instance, not the class
                image=result['public_id'],  # Store Cloudinary public ID
                is_primary=False
            )
        return Response(self.get_serializer(product).data, status=status.HTTP_201_CREATED)
