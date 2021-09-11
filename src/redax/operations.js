import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchContacts = createAsyncThunk("fetchContacts", async () => {
  const result = await axios.get("/contacts");
  // console.log("result", result);
  return result.data;
});

const postContact = createAsyncThunk(
  "postContact",
  async ({ name, number }) => {
    const result = await axios
      .post("/contacts", {
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
    .delete(`/contacts/${id}`)
    .then((responsive) => responsive)
    .catch((error) => error);
  console.log("result", result);
  return result.data;
});

const filterContacts = createAction("filterContacts");

export { fetchContacts, postContact, deleteContact, filterContacts };
