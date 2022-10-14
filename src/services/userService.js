import { globalUrl } from "./globalUrl";
import axios from "axios";
import { useState, useEffect } from "react";

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
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}

async function getUsers() {
  try {
    let url = globalUrl + "/user/all";
    let data = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
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

async function updateUser(user) {
  try {
    let url = globalUrl + "/update";
    console.log(url);
    let data = await axios.put(url, user, {
      headers: { "Content-Type": "application/json" },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getUser, getUsers, createUser, logIn, updateUser };
