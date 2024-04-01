import { createContext, useContext, useState } from "react";
import { Props, ContextIF, TriggerIF, MenuIF, ItemIF } from "@/types/components/dropdown";

const Context = createContext<ContextIF>({
  title: "",
  value: "",
  open: false,
  toggle: () => {},
  setOpen: () => {},
  onChange: () => {},
});

const DropDown = ({ title, value, children, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prevOpen) => !prevOpen);
  const context = { title, value, open, toggle, setOpen, onChange };

  return (
    <Context.Provider value={context}>
      <div className="dropdown">{children}</div>
    </Context.Provider>
  );
};

const Title = () => {
  const { title } = useContext(Context);
  return <h2 className="dropdown-title">{title}</h2>;
};

const Trigger = ({ as }: TriggerIF) => {
  const { toggle } = useContext(Context);

  return (
    <div className="dropdown-trigger" onClick={toggle}>
      {as}
    </div>
  );
};

const Menu = ({ children }: MenuIF) => {
  const { open } = useContext(Context);
  return <div className={`dropdown-menu ${open ? "open" : ""}`}>{children}</div>;
};

const Item = ({ children }: ItemIF) => {
  const { onChange, toggle } = useContext(Context);

  const onSelect = () => {
    onChange(children);
    toggle();
  };

  return (
    <div className="dropdown-item" onClick={onSelect}>
      {children}
    </div>
  );
};

DropDown.Title = Title;
DropDown.Trigger = Trigger;
DropDown.Menu = Menu;
DropDown.Item = Item;

export default DropDown;
