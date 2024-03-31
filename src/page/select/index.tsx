import { useState } from "react";
import { Select } from "../../components";

const SelectPage = () => {
  const options = ["소지우", "마크 주커버그", "일론 머스크"];
  const [select, change] = useState("선택해 주세요.");

  const submit = () => {
    alert(select);
  };

  return (
    <>
      <Select
        label="사용자 선택"
        value={select}
        trigger={<input value={select} readOnly />}
        options={options}
        onChange={change}
      />
      <button onClick={submit}>제출</button>
    </>
  );
};

export default SelectPage;
