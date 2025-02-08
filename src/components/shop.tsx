"use client";

import * as React from "react";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { getAllFoods } from "@/sanity/lib/helpers/getAllFood";
import { Checkbox } from "./ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

// Sample data

const categories = [
  "Sandwiches",
  "Burger",
  "Chicken Crisp",
  "Drink",
  "Pizza",
  "Tea",
  "Non Veg",
  "Uncategorized",
];

type Food = {
  originalPrice: number;
  tags: string[];
  imageUrl: StaticImageData;
  description: string;
  available: boolean;
  name: string;
  category: string;
  price: number;
};
export default function FoodShop() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategories, setSelectedCategories ] = React.useState<string[]>(
    []

    
  );
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  const [sortBy, setSortBy] = React.useState("newest");
  const [show, setShow] = React.useState("default");
  const [foodData, setFoodData] = React.useState<Food[]>([]);
  console.log(foodData);

  React.useEffect(() => {
    async function DATA() {
      const res: Food[] = await getAllFoods();
      setFoodData(res);
      return res;
    }
    DATA();
  }, []);

  const filteredProducts = React.useMemo(() => {
    return foodData.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategories, priceRange, foodData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Filters Bar */}
          <div className="flex justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort By :</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show :</span>
              <Select value={show} onValueChange={setShow}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Link href={`/shop/${index}`} key={index}>
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="relative h-48">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      width={600}
                      height={600} //CHANGE THE WIDTH AND HEIGHT ACCORDING TO YOUR NEEDS
                    />
                    {product.category === "New" && (
                      <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                        New
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-orange-500 mt-1">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-72">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Products"
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked: CheckedState) => {
                      if (checked) {
                        setSelectedCategories([
                          ...selectedCategories,
                          category,
                        ]);
                      } else {
                        setSelectedCategories(
                          selectedCategories.filter((c) => c !== category)
                        );
                      }
                    }}
                  />
                  <label htmlFor={category} className="ml-2 text-sm">
                    {category}
                  </label>
                </div>
              ))} 
            </div>
          </div>

          {/* Featured Product */}
          <div className="mb-6 bg-gray-900 text-white p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Perfect Taste</h3>
            <p className="text-xl font-bold mb-1">Classic Hamburg</p>
            <p className="text-orange-500 text-lg mb-4">45.00$</p>
            <button className="text-sm underline">Shop Now</button>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Filter By Price</h3>
            <Slider
              defaultValue={[0, 100]}
              max={100}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-4"
            />
            <div className="flex items-center justify-between text-sm">
              <span>From ${priceRange[0]}</span>
              <span>To ${priceRange[1]}</span>
            </div>
            <button className="mt-2 bg-orange-500 text-white px-4 py-1 rounded text-sm">
              Filter
            </button>
          </div>

          {/* Latest Products */}
          <div>
            <h3 className="font-medium mb-3">Latest Products</h3>
            <div className="space-y-4">
              {foodData.slice(0, 3).map((product, index) => (
                <div key={index} className="flex gap-3">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                    width={600}
                    height={600} //CHANGE THE WIDTH AND HEIGHT ACCORDING TO YOUR NEEDS
                  />
                  <div>
                    <h4 className="text-sm font-medium">{product.name}</h4>
                    <p className="text-orange-500">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
