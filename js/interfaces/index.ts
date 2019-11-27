import { ReactNode } from "react";

export interface IData {
    isLoading: boolean,
    setIsLoading: any,
    headerInput: string,
    setHeaderInput: Function,
    getList: Function,
    products: IProduct[];
  }
  
  export interface IContextProviderProps {
    defaults?: Partial<IData>;
    children?: ReactNode;
  }
  export interface IProduct {
    id: string,
    picture: string,
    title: string,
    _link: string
    price: IPrice,
  }
  
  export interface IPrice {
    current: string,
    installment: string
  }