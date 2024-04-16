import styles from "./main.module.css";
import "./dropdown.css";

import { useState } from "react";
import { DropDown } from "@/components";

const Main = () => {
  const options = ["Javascript", "Typescript", "ReactJS", "NextJS", "NodeJS"];
  const [select, setSelect] = useState("기술 스택을 선택해 주세요.");
  const [dupliSelect, setDupliSelect] = useState("기술 스택을 선택해 주세요.");

  const onChange = (option: string) => {
    setSelect(option);
  };

  const onChangeDupli = (option: string) => {
    setDupliSelect(option);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <DropDown title="드롭다운 메뉴" value={select} onChange={onChange}>
          <DropDown.Title />
          <DropDown.Trigger as={<input value={select} readOnly />} />
          <DropDown.Menu>
            {options.map((option) => (
              <DropDown.Item key={option}>{option}</DropDown.Item>
            ))}
          </DropDown.Menu>
        </DropDown>
      </div>
      <div className={styles.wrapper}>
        <DropDown title="복제" value={dupliSelect} onChange={onChangeDupli}>
          <DropDown.Title />
          <DropDown.Trigger as={<input value={dupliSelect} readOnly />} />
          <DropDown.Menu>
            {options.map((option) => (
              <DropDown.Item key={option}>{option}</DropDown.Item>
            ))}
          </DropDown.Menu>
        </DropDown>
      </div>
    </div>
  );
};

export default Main;
