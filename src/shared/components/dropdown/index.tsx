import "./style/dropdown.css";
import useDropdown from "./lib/use-dropdown";
import Trigger from "./ui/trigger";
import Menu from "./ui/menu";

const Dropdown = () => {
  const [selected, isOpen, toggle, selectItem, keyboardEv] = useDropdown();

  return (
    <div className="dropdown-wrap">
      <Trigger selected={selected} toggle={toggle} keyboardEv={keyboardEv} />
      <Menu
        isOpen={isOpen}
        items={[
          { id: 1, label: "피자" },
          { id: 2, label: "햄버거" },
          { id: 3, label: "아이스크림" },
          { id: 4, label: "스파게티" },
        ]}
        selectItem={selectItem}
        keyboardEv={keyboardEv}
      />
    </div>
  );
};

export default Dropdown;
