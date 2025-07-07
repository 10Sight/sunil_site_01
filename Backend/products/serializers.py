from rest_framework import serializers
from .models import Product, ProductImage

class ProductImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'is_primary']

    def get_image(self, obj):
        return obj.image_url  # Returns the Cloudinary URL

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    uploaded_images = serializers.ListField(
        child=serializers.ImageField(max_length=1000000, allow_empty_file=False, use_url=False),
        write_only=True,
        required=False
    )

    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'price', 'created_at', 'updated_at', 'images', 'uploaded_images']
        read_only_fields = ['created_at', 'updated_at']

    def create(self, validated_data):
        uploaded_images = validated_data.pop('uploaded_images', [])
        validated_data['user'] = self.context['request'].user
        product = Product.objects.create(**validated_data)

        return product

    def update(self, instance, validated_data):
        uploaded_images = validated_data.pop('uploaded_images', [])
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()


        return instance