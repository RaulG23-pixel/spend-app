import { globalUrl } from "./globalUrl";
import axios from "axios";

async function getUser(token) {
  try {

    let url = globalUrl + "/user";
    let options = {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    };

    const data = await axios.get(url, options);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function logIn(user) {
  try {

    let url = globalUrl + "/login";
    let data = await axios.post(url, user, {
      headers: {"Content-Type": "application/json"}
    });

    return data;
  }catch (error) {
    return error;
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
    console.log(error);
  }
}

export { getUser, createUser, logIn };
