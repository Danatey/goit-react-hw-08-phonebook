import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const profile = localStorage.getItem("persist:root");
// console.log(JSON.parse(profile).token);

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const getToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = createAsyncThunk("auth/register", async (personalQuality) => {
  try {
    // console.log(personalQuality);
    const { data } = await axios.post("/users/signup", personalQuality);
    getToken.set(data.token);
    return data;
  } catch (error) {
    return console.log(`Error: ${error}`);
  }
});

const login = createAsyncThunk("auth/login", async (personalQuality) => {
  try {
    // console.log(personalQuality);
    const { data } = await axios.post("/users/login", personalQuality);
    getToken.set(data?.token);
    return data;
  } catch (error) {
    return console.log(`Error: ${error}`);
  }
});

const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    getToken.unset();
  } catch (error) {
    return console.log(`Error: ${error}`);
  }
});

const currentUser = createAsyncThunk("auth/current", async (_, thunkApi) => {
  const persistedToken = thunkApi.getState().auth.token;
  getToken.set(persistedToken);
  const { data } = await axios.get("/users/current");
  console.log(data);
  return data;
});

export { register, logout, login, currentUser };
