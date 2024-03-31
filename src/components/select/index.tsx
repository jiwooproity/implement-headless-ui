import { Dispatch, SetStateAction } from "react";
import DropDown from "../dropdown";

interface Props {
  label: string;
  value: string;
  trigger: JSX.Element;
  onChange: Dispatch<SetStateAction<string>>;
  options: string[];
}

const Select = ({ label, value, trigger, onChange, options }: Props) => {
  return (
    <DropDown label={label} value={value} onChange={onChange}>
      <DropDown.Trigger as={trigger} />
      <DropDown.Menu>
        {options.map((option) => (
          <DropDown.Item key={option}>{option}</DropDown.Item>
        ))}
      </DropDown.Menu>
    </DropDown>
  );
};

export default Select;
