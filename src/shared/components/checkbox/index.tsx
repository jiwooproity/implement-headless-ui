import HeadlessCheckbox from "./ui/headless-checkbox";

const Checkbox = () => {
  return (
    <HeadlessCheckbox>
      {({ isChecked, onChange }) => (
        <label>
          <input type="checkbox" checked={isChecked} onChange={onChange}></input>
          <span>체크박스 1</span>
        </label>
      )}
    </HeadlessCheckbox>
  );
};

export default Checkbox;
