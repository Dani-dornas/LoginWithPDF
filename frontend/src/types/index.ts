import { ReactNode } from "react";

export interface UserContextProps {
  users: UserProps[] | null;
  mail: string | null;
  profile: string | null;
  token: string | null;
  login: (mail: string, password: string) => void;
  logout: () => void;
  create: (mail: string, password: string) => void;
  getUsers: () => void;
  updateProfile: (id: string, profile: string) => void;
  error: ErrorProps | null;
  setError: (error: ErrorProps | null) => void;
  isErrorProps: (object: any) => object is ErrorProps;
}

export interface ErrorProps {
  message: string;
}

export interface LoginProps {
  mail: string;
  profile: string;
  token: string;
}

export interface UserProps {
  id: string;
  mail: string;
  profile: string;
}

export interface ProviderProps {
  children: ReactNode;
}
