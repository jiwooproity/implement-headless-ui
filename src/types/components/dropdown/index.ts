import { Dispatch, SetStateAction } from "react";

export interface Props {
  title: string;
  value: string;
  onChange: (option: string) => void;
  children: JSX.Element[];
}

export interface ContextIF {
  title: string;
  value: string;
  open: boolean;
  toggle: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onChange: (option: string) => void;
}

export interface TriggerIF {
  as: JSX.Element;
}

export interface MenuIF {
  children: JSX.Element[];
}

export interface ItemIF {
  children: string;
}
