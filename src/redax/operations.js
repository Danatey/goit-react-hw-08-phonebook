import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

import axios from "axios";

const fetchContacts = createAsyncThunk("fetchContacts", async () => {
  const result = await axios.get("http://localhost:7777/contacts");
  // console.log("result", result);
  return result.data;
});

const postContact = createAsyncThunk(
  "postContact",
  async ({ name, number }) => {
    const result = await axios
      .post("http://localhost:7777/contacts", {
        name,
        number,
      })
      .then((responsive) => responsive)
      .catch((error) => error);
    console.log("result", result);
    return result.data;
  }
);

const deleteContact = createAsyncThunk("deleteContacts", async (id) => {
  const result = await axios
    .delete(`http://localhost:7777/contacts/${id}`)
    .then((responsive) => responsive)
    .catch((error) => error);
  console.log("result", result);
  return result.data;
});

const filterContacts = createAction("filterContacts");

export { fetchContacts, postContact, deleteContact, filterContacts };
