import { IContact } from "../types";
import { useRecoilState } from "recoil";
import { selectedContactState } from "../items/index";

interface IListCardProps {
  contact: IContact;
}

const ListCard = ({ contact }: IListCardProps) => {
  const [selectedContact, setSelectedContact] = useRecoilState<IContact | undefined>(selectedContactState);
  return (
    <li key={contact.id}>
      <button
        type="button"
        className={contact === selectedContact ? "selected" : ""}
        onClick={() => setSelectedContact(contact)}
      >
        {contact.name}
      </button>
    </li>
  );
};

export default ListCard;
