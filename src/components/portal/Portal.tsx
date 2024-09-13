"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import EditIcon from "../icons/EditIcon";
import { InfoType } from "@/app/types/type";

export default function Portal(props: { item: InfoType }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <EditIcon />
      </button>
      {showModal &&
        createPortal(
          <ModalContent
            item={props.item}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
}
