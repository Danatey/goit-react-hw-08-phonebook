import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  fetchContacts,
  postContact,
  deleteContact,
  filterContacts,
} from "./operations";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [postContact.fulfilled]: (state, action) => [...state, action.payload],

  [deleteContact.fulfilled]: (state, action) =>
    state.filter((element) => element.id !== action.meta.arg),
});

const filter = createReducer("", {
  [filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
