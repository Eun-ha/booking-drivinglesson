"use client";

import { useAppDispatch } from "../store/store";
import { remove } from "../store/bookingSlice";
import { Info } from "../types/type";

export default function DeleteBtn(id: { id: number }) {
  const currentId = id;
  const dispatch = useAppDispatch();
  console.log(currentId);
  const handleDelete = () => {
    console.log(currentId.id);
    dispatch(remove(currentId.id));
    console.log("삭제");
  };

  return <button onClick={handleDelete}>삭제</button>;
}
