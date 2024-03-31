import "./dropdown.css";

import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface Props {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  children: JSX.Element[];
}

interface ContextIF {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Context = createContext<ContextIF>({
  value: "",
  onChange: () => {},
  open: false,
  setOpen: () => {},
});

const DropDown = ({ label, value, onChange, children }: Props) => {
  const [open, setOpen] = useState(false);
  const providerValue = { value, onChange, open, setOpen };

  return (
    <Context.Provider value={providerValue}>
      <div>
        <div className="title-area">
          <h3 className="title">{label}</h3>
        </div>
        <div id="dropdown-wrapper">{children}</div>
      </div>
    </Context.Provider>
  );
};

const Trigger = ({ as }: { as: JSX.Element }) => {
  const { open, setOpen } = useContext(Context);

  const mouseout = (e: globalThis.MouseEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.className !== "global-layout") return;
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", mouseout);
    return () => document.addEventListener("click", mouseout);
  }, []);

  return (
    <div id="trigger" onClick={() => setOpen(!open)}>
      {as}
    </div>
  );
};

const Menu = ({ children }: { children: JSX.Element[] }) => {
  const { open } = useContext(Context);

  return (
    <ul id="dropdown" className={open ? "" : "disabled"}>
      {children}
    </ul>
  );
};

const Item = ({ children }: { children: string }) => {
  const { onChange } = useContext(Context);

  const onSelect = (value: string) => {
    onChange(value);
  };

  return (
    <li className="item" onClick={() => onSelect(children)}>
      {children}
    </li>
  );
};

DropDown.Trigger = Trigger;
DropDown.Menu = Menu;
DropDown.Item = Item;
export default DropDown;
