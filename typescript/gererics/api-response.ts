interface ApiResponse<T> {
  success: boolean;
  status: number;
  data: T;
}

interface User {
  id: number;
  name: string;
}

interface Product {
  name: string;
  price: number;
}

const userResponse: ApiResponse<User> = {
  success: true,
  status: 200,
  data: { id: 1, name: "Abhishek" },
};

const productResponse: ApiResponse<Product> = {
  success: false,
  status: 304,
  data: { name: "Diary", price: 200 },
};
