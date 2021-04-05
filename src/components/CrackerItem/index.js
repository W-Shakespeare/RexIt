import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteCrackerItem } from "../../redux/actions/actions";
import { CrackerItem } from "./CrackerItem";

export const CrackerItemContainer = ({ cracker, id }) => {
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  const onDeleteCrackerItem = () => {
    setIsDelete(true);
  };
  useEffect(() => {
    isDelete &&
      setTimeout(() => {
        dispatch(deleteCrackerItem(id));
      }, 1200);
  }, [isDelete]);
  return (
    <CrackerItem
      isDelete={isDelete}
      cracker={cracker}
      id={id}
      onDeleteCrackerItem={onDeleteCrackerItem}
    />
  );
};
