"use client";

import { useAppDispatch } from "../store/store";
import { remove } from "../store/bookingSlice";
import toast from "react-hot-toast";
import DeleteIcon from "./icons/DeleteIcon copy";

import { useTranslation } from "react-i18next";

export default function DeleteBtn(id: { id: string }) {
  const currentId = id;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleDelete = () => {
    dispatch(remove(currentId.id));
    toast.success(`${t("toast-text1")}`, { duration: 2000 });
  };

  return (
    <button onClick={handleDelete} className="p-3 common-hover-style">
      <DeleteIcon />
    </button>
  );
}
