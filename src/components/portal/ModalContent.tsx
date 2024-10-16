import { InfoType } from "@/app/types/type";
import EditForm from "../EditForm";
import CloseIcon from "../icons/CloseIcon";

type Props = {
  item: InfoType;
  onClose: () => void;
};

export default function ModalContent(props: Props) {
  return (
    <div className="modal w-full h-full fixed top-0 left-0 z-50 bg-neutral-900/70">
      <EditForm currentId={props.item.id} />

      <button
        className="modalCloseBtn absolute top-[18px] right-5"
        onClick={props.onClose}
      >
        <CloseIcon />
      </button>
    </div>
  );
}
