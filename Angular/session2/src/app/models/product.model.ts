export interface IProduct {
  ID: number;
  Name: string;
  Quantity: number;
  Price: number;
  Img: string;
  CategoryID: number;
}

export interface ICategory {
  ID: number;
  Name: string;
}