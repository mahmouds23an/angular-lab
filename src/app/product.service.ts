import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      description:
        'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
      category: 'beauty',
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ['beauty', 'mascara'],
      brand: 'Essence',
      sku: 'RCH45Q1A',
      weight: 2,
      images: [
        'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
      ],
    },
    {
      id: 2,
      title: 'Eyeshadow Palette with Mirror',
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: 'beauty',
      price: 19.99,
      discountPercentage: 5.5,
      rating: 3.28,
      stock: 44,
      tags: ['beauty', 'eyeshadow'],
      brand: 'Glamour Beauty',
      sku: 'MVCFH27F',
      weight: 3,
      images: [
        'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
      ],
    },
    {
      id: 3,
      title: 'Powder Canister',
      description:
        'The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',
      category: 'beauty',
      price: 14.99,
      discountPercentage: 18.14,
      rating: 3.82,
      stock: 59,
      tags: ['beauty', 'face powder'],
      brand: 'Velvet Touch',
      sku: '9EN8WLT2',
      weight: 8,
      images: [
        'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
      ],
    },
    {
      id: 4,
      title: 'Red Lipstick',
      description:
        'The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.',
      category: 'beauty',
      price: 12.99,
      discountPercentage: 19.03,
      rating: 2.51,
      stock: 68,
      tags: ['beauty', 'lipstick'],
      brand: 'Chic Cosmetics',
      sku: 'O5IF1NTA',
      weight: 5,
      images: [
        'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png',
      ],
    },
    {
      id: 5,
      title: 'Red Nail Polish',
      description:
        'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
      category: 'beauty',
      price: 8.99,
      discountPercentage: 2.46,
      rating: 3.91,
      stock: 0,
      tags: ['beauty', 'nail polish'],
      brand: 'Nail Couture',
      sku: 'YUIIIP4W',
      weight: 9,
      images: [
        'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png',
      ],
    },
    {
      id: 23,
      title: 'Eggs',
      description:
        'Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.',
      category: 'groceries',
      price: 2.99,
      discountPercentage: 5.8,
      rating: 4.46,
      stock: 10,
      tags: ['dairy'],
      brand: 'FreshDirect',
      sku: 'YA617RI7',
      weight: 4,
      images: [
        'https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png',
      ],
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
