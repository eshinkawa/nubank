import { ReactNode } from "react";
export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface IOffer {
  id: string;
  price: number;
  product: IProduct;
}

export interface IUser {
  name: string;
  balance: number;
  offers: IOffer[];
}
export interface IContextProviderProps {
  defaults?: Partial<IData>;
  children?: ReactNode;
}

export interface IDataApi {
  data: IData
}
export interface IData {
  name: string;
  balance: number;
  product: IProduct;
  offers: IOffer[]
}
