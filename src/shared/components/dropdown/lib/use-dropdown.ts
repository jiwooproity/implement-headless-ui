import { KeyboardEvent, useState } from "react";

type DropdownHooksType = () => [
  string,
  boolean,
  () => void,
  (item: string) => void,
  (e: KeyboardEvent) => void
];

const useDropdown: DropdownHooksType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("메뉴를 선택해 주세요.");

  const toggle = () => setIsOpen((status) => !status);

  const selectItem = (item: string) => {
    setSelected(item);
    toggle();
  };

  const keyboardEv = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      switch (e.currentTarget.className) {
        case "dropdown-trigger":
          toggle();
          break;
        case "dropdown-item":
          setSelected(e.currentTarget.innerHTML);
          toggle();
          break;
        default:
          break;
      }
    }
  };

  return [selected, isOpen, toggle, selectItem, keyboardEv];
};

export default useDropdown;
