import { atom, selector } from "recoil";
import contactList from "../list";
import { IContact } from "../types";

export const selectedContactState = atom<IContact | undefined>({
  key: "selectedContact",
  default: undefined,
});

export const searchTextState = atom<string>({
  key: "searchTextState",
  default: "",
});

export const contactListState = atom<IContact[]>({
  key: "contactListState",
  default: contactList,
});

export const filteredContactListState = selector({
  key: "filteredContactList",
  get: ({ get }) => {
    const searchText = get(searchTextState);
    const contactList = get(contactListState);
    return contactList.filter((contact) => contact.name.includes(searchText));
  },
});
