"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Heart, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getFoodById } from "@/sanity/lib/helpers/getFoodById";


type Food = {
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
  description: string;
  available: boolean;
};

export default function ProductPage() {
  const { productId } = useParams(); // Get the product ID from URL
  const [product, setProduct] = useState<Food | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) return;
      const data = await getFoodById(productId as string);
      setProduct(data);
    }
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p className="text-center text-gray-500">Loading product details...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/shop" className="text-sm text-gray-600 hover:text-gray-900">
          ← Back to Shop
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full w-fit mb-4">
            {product.tags?.[0] || "Featured"}
          </div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <span className="text-sm text-gray-600">5.0 Rating</span>
            <span className="text-sm text-gray-600">22 Reviews</span>
          </div>

          <p className="text-3xl font-bold mb-6">
            ${product.price}{" "}
            {product.originalPrice && <span className="text-gray-500 line-through">${product.originalPrice}</span>}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 border-r hover:bg-gray-100">
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 border-l hover:bg-gray-100">
                +
              </button>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <Heart className="w-4 h-4" /> Add to Wishlist
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mt-12">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews (24)</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <p className="text-gray-600">{product.description}</p>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <p className="text-gray-600">User reviews will be displayed here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
