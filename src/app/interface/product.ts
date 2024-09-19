export interface Dimensions {
  height: number;
  width: number;
  depth: number;
}

export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

export interface Meta {
  [key: string]: any;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Review[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: Meta;
  images: string[];
  thumbnail: string;
}
