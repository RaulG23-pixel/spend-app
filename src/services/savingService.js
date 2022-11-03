import { globalUrl } from "./globalUrl";
import axios from "axios";

async function storeSaving(saving) {
  let newsaving = saving;
  newsaving.register = JSON.stringify(newsaving.register);
  try {
    let url = globalUrl + "/saving";
    let data = await axios.post(url, newsaving, {
      headers: { "Content-Type": "application/json" },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { storeSaving };
