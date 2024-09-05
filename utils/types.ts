export interface Object {
  id?: string;
  _id?: string;
  name?: string;
  email?: string;
}
export interface UserProps {
  id?: string;
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  role?: boolean;
  img?: string;
}

export interface ProductProps {
  _id?: string;
  id?: string;
  name?: string;
  price?: number;
  shortDescription?: string;
  longDescription?: string;
  weight?: number;
  suitableFor?: string;
  smell?: string;
  score?: number;
  tags?: string[] | string;
  category?: string[] | string;
  Asyab?: string[] | string;
  img?: string | string;
  comments: CommentProps[];
  createdAt?: string;
}
export interface CommentProps {
  id?: string;
  _id?: string;
  username?: string;
  body?: string;
  email?: string;
  score?: number;
  isAcsept?: boolean;
  date?: string | number | undefined | Date;
  product?: ProductProps | string;
  user?: UserProps;
  mainComment?: CommentProps;
  hasAnswer?: boolean;
  isAnswer?: boolean;
}

export interface WishlistProps {
  id?: string;
  _id?: string;
  user?: UserProps | string;
  product?: ProductProps | string;
}
export interface CardProps {
  id?: string;
  _id?: string;
  name?: string;
  img?: string;
  price?: number;
  counter?: number;
}
export interface DiscountProps {
  id?: string;
  _id: string;
  code?: string;
  percent?: number;
  maxUse?: number;
  uses?: number;
  user?: UserProps;
  product?: ProductProps;
}
export interface BillsProps {
  id?: string;
  _id: string;
  name?: string;
  family?: string;
  company?: string;
  state?: string;
  city?: string;
  street?: string;
  zipcode?: string;
  phone?: string;
  password?: string;
  body?: string;
  email?: string;
  numberOfBill?: number;
  proId?: ProductProps[];
  totalPrice?: number;
  user?: UserProps;
  createdAt?: string;
}
export interface ArticlesProps {
  id?: string;
  _id?: string;
  title?: string;
  shortdesc?: string;
  img?: string;
  authername?: string;
  longdesc?: string;
  createdAt: string;
}

export interface ViewProps {
  id?: string;
  _id?: string;
  content?: string;
  name?: string;
  email?: string;
  website?: string;
  Articel?: ArticlesProps;
}
export interface BillProps {
  id?: string;
  _id?: string;
  name?: string;
  family?: string;
  company?: string;
  state?: string;
  city?: string;
  street?: string;
  zipcode?: string;
  phone?: string;
  password?: string;
  body?: string;
  email?: string;
  numberOfBill?: number;
  createdAt?: string;
  price: string;
  proId?: ProductProps[];
  totalPrice?: number;
  user?: UserProps;
}

export interface DepartmentProps {
  id?: string;
  _id?: string;
  title?: string;
}
export interface SubDepartmentProps {
  id?: string;
  _id?: string;
  title?: string;
  department?: DepartmentProps;
}
export interface TiketProps {
  id?: string;
  _id?: string;
  title?: string;
  body?: string;
  department?: DepartmentProps;
  subDepartment?: SubDepartmentProps;
  user?: UserProps;
  priority?: number;
  hasAnswer?: boolean;
  isAnswer?: boolean;
  maintiket?: TiketProps;
  createdAt?: string;
}

export interface ContactsProps {
  id?: string;
  _id?: string;
  email: string;
  name: string;
  company: string;
  phone: string;
  message: string;
}
