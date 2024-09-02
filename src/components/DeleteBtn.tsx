"use client";

import { useAppDispatch } from "../store/store";
import { remove } from "../store/bookingSlice";
import toast from "react-hot-toast";
import DeleteIcon from "./icons/DeleteIcon copy";

export default function DeleteBtn(id: { id: string }) {
  const currentId = id;
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(remove(currentId.id));
    toast.success("삭제가 완료되었습니다.", { duration: 2000 });
  };

  return (
    <button onClick={handleDelete} className="p-3 common-hover-style">
      <DeleteIcon />
    </button>
  );
}
