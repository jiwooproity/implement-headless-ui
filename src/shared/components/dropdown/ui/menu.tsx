import { KeyboardEvent } from "react";

interface MenuItem {
  id: number;
  label: string;
}

interface MenuProps {
  isOpen: boolean;
  items: MenuItem[];
  selectItem: (item: string) => void;
  keyboardEv: (e: KeyboardEvent) => void;
}

const Menu = ({ isOpen, items, selectItem, keyboardEv }: MenuProps) => {
  return (
    <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="dropdown-item"
          tabIndex={item.id}
          onClick={() => selectItem(item.label)}
          onKeyDown={keyboardEv}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Menu;
