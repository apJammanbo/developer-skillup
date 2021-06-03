import SearchBox from "./SearchBox";
import ListCard from "./ListCard";
import { useRecoilValue } from "recoil";
import { filteredContactListState } from "../../store";
import { IContact } from "../../types/index";

const LeftBox = () => {
  const filteredContactList = useRecoilValue<IContact[]>(filteredContactListState);
  return (
    <div className="col left">
      <SearchBox />
      <div className="contact-list">
        <ul>
          {filteredContactList.map((contact) => (
            <ListCard key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftBox;
