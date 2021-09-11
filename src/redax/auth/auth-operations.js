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

const currentUser = createAsyncThunk("auth/current", async (credential) => {
  try {
    const { data } = await axios.get("/users/current");
    //       {
    //   headers: {
    //     Authorization: `Bearer ${JSON.parse(profile)?.token.replace(
    //       /['"]/g,
    //       ""
    //     )}`,
    //   },
    // });
    getToken.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    return console.log(`Error: ${error}`);
  }
});

export { register, logout, login, currentUser };
