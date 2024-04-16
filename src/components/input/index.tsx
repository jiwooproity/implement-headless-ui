import { ContextIF, Props } from "@/types/components/input";
import { createContext, useContext } from "react";

const InputContext = createContext<ContextIF>({
  name: "",
  title: "",
  value: "",
  className: "",
});

const Input = ({ name, title, value, className, children }: Props) => {
  return (
    <InputContext.Provider value={{ name, title, value, className }}>
      <div className={className}>{children}</div>
    </InputContext.Provider>
  );
};

const Title = () => {
  const context = useContext(InputContext);

  return (
    <div className="input-title">
      <h1>{context.title}</h1>
    </div>
  );
};

Input.Title = Title;

export default Input;
