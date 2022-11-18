import { globalUrl } from "./globalUrl";
import axios from "axios";
import { getAccessToken } from "../utils/utils";

async function getUser() {
  const token = JSON.parse(getAccessToken());
  try {
    let url = globalUrl + "/user";
    let options = {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    };
    const data = await axios.get(url, options);
    return data;
  } catch (error) {
    return error.message;
  }
}

async function logIn(user) {
  try {
    let url = globalUrl + "/login";
    let data = await axios.post(url, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
}

async function createUser(user) {
  try {
    let url = globalUrl + "/register";
    let data = await axios.post(url, user, {
      headers: { "Content-Type": "application/json" },
    });
    return data;
  } catch (error) {
    return error.message;
  }
}

async function updateUser(user) {
  try {
    let url = globalUrl + "/user/update";
    let data = await axios.put(url, user, {
      headers: { "Content-Type": "application/json" },
    });
    return data;
  } catch (error) {
    return error.message;
  }
}

export { getUser, createUser, logIn, updateUser };
