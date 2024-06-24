import { ChangeEvent, useRef } from "react";
import SearchWrapper from "./ui/compound-search";

const Search = () => {
  const searchRef = useRef<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    searchRef.current = value;
  };

  const onSubmit = () => {
    console.log(searchRef.current);
  };

  return (
    <SearchWrapper id="search" onChange={onChange} onSubmit={onSubmit}>
      <SearchWrapper.Label>검색</SearchWrapper.Label>
      <SearchWrapper.Input></SearchWrapper.Input>
      <SearchWrapper.Submit></SearchWrapper.Submit>
    </SearchWrapper>
  );
};

export default Search;
