import { ReactNode } from "react";

export interface Props {
  name: string;
  value: string;
  className: string;
  children: ReactNode;
  title: string;
}

export interface ContextIF {
  name: string;
  value: string;
  className: string;
  title: string;
}
