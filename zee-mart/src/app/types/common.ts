// export type SingleProductData = {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   sizes: object;
//   createdAt: Date;
//   category: number;
// };

export type SingleProductData = {
  _type: string;
  _id: string;
  productName: string;
  productCategory: string;
  productPrice: number;
  productImages: object[];
  sizes: Size[];
  _createdAt: Date;
  _updatedAt: Date;
  _rev: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: Date;
};

export type Product = {
  products: SingleProductData;
  categories: Category;
};

export type Item = {
  id: string;
  title: string;
  category: string;
  image: string;
  price: number;
  quantity: Quantity;
  totalPrice: number;
};

export type Quantity = {
  size: string;
  value: number;
};

export type AllQuantity = {
  id: string;
  size: string;
  value: number;
};

export type Size = {
  size: string,
  stock: number
}