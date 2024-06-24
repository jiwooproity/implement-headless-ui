import { useState } from "react";

type Args = { isChecked: boolean; onChange: () => void };

type HeadlessCheckboxProps = (props: {
  children: (args: Args) => JSX.Element;
}) => JSX.Element | null;

const HeadlessCheckbox: HeadlessCheckboxProps = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  if (!props.children || typeof props.children !== "function") return null;

  return props.children({
    isChecked: isChecked,
    onChange: () => setIsChecked((checked) => !checked),
  });
};

export default HeadlessCheckbox;
