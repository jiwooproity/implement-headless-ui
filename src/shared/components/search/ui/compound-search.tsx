import { ChangeEvent, ReactNode, createContext, useContext } from "react";

type ContextType = {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const Context = createContext<ContextType>({
  id: "",
  onChange: () => {},
  onSubmit: () => {},
});

const SearchWrapper = ({
  children,
  id,
  onChange,
  onSubmit,
}: { children: ReactNode } & ContextType) => {
  const value = { id, onChange, onSubmit };

  return (
    <Context.Provider value={value}>
      <div className="search-wrapper">{children}</div>
    </Context.Provider>
  );
};

SearchWrapper.Input = () => {
  const { id, onChange } = useContext(Context);

  return <input id={id} onChange={onChange}></input>;
};

SearchWrapper.Label = ({ children }: { children: ReactNode }) => {
  return <label className="search-label">{children}</label>;
};

SearchWrapper.Submit = () => {
  const { onSubmit } = useContext(Context);

  return <button onClick={onSubmit}>확인</button>;
};

export default SearchWrapper;
