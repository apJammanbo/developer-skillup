import { useRecoilState, useSetRecoilState } from "recoil";
import { searchTextState, selectedContactState } from "../items/index";
import { IContact } from "../types";

const SearchBox = () => {
  const [searchText, setSearchText] = useRecoilState<string>(searchTextState);
  const setSelectedContact = useSetRecoilState<IContact | undefined>(selectedContactState);

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setSelectedContact(undefined);
  };

  return (
    <div className="search-box">
      <input
        value={searchText}
        type="text"
        className="inp-sch"
        placeholder="검색어를 입력하세요."
        onChange={handleChangeText}
      />
    </div>
  );
};

export default SearchBox;
