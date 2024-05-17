export type Order = {
  id: string;
  name: string;
  photo: string;
  phone: string;
  total: number;
  status: "success" | "pending" | "cancelled" | "failed";
  createdAt: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  imageCover: string;
  price: number;
  category: string;
  createdAt: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  photo: string;
  gender: "female" | "male" | "other";
  role: string;
  createdAt: string;
};
