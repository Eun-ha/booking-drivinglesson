import { InfoType } from "@/app/types/type";
import EditForm from "../EditForm";

type Props = {
  item: InfoType;
  onClose: () => void;
};

export default function ModalContent(props: Props) {
  console.log("modal======");
  console.log(props);
  return (
    <div className="modal">
      <EditForm currentId={props.item.id} />
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}
