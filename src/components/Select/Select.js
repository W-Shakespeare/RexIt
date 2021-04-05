import React, { useState } from "react";
import { changePack } from "../../redux/actions/actions";
import { ChoosePack } from "../Icons";
import { UncoverIcon } from "../Icons/UncoverIcon";
import { useDispatch } from "react-redux";
const selectItems = [
  { text: "SMALL PACK", value: 0.5 },
  { text: "MEDIUM PACK", value: 1.0 },
  { text: "LARGE PACK", value: 1.5 },
];

const Select = () => {
  const [uncover, setUncover] = useState(false);
  const [selectedItem, setSelectedItem] = useState("SMALL PACK");
  const dispatch = useDispatch();
  const uncoverSelect = () => {
    setUncover(!uncover);
  };

  const onSelected = (selectedItem) => {
    setSelectedItem(selectedItem.text);
    dispatch(changePack(selectedItem.value));
  };

  return (
    <div className="select" onClick={uncoverSelect}>
      <div className="selected">
        <UncoverIcon fill="red" className="select__Uncover" />
        <div>{selectedItem}</div>
      </div>
      <div
        className={
          uncover ? "select__column select__uncover" : "select__column "
        }
      >
        <div className="select__item default ">CHOOSE YOUR PACK</div>
        {selectItems.map(({ text, value }) => {
          return (
            <div
              key={text}
              className="select__item"
              onClick={() => onSelected({ text, value })}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default React.memo(Select);
