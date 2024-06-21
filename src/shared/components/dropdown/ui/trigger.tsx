import { KeyboardEvent } from "react";

interface TriggerProps {
  selected: string;
  toggle: () => void;
  keyboardEv: (e: KeyboardEvent) => void;
}

const Trigger = ({ selected, toggle, keyboardEv }: TriggerProps) => {
  return (
    <div className="dropdown-trigger" tabIndex={0} onClick={toggle} onKeyDown={keyboardEv}>
      <span className="selected-target">{selected}</span>
    </div>
  );
};

export default Trigger;
