import { globalUrl } from "./globalUrl";
import axios from "axios";

async function storeExpense(expense) {
  let newExpense = expense;
  newExpense.register = JSON.stringify(newExpense.register);
  try {
    let url = globalUrl + "/expense";
    let data = await axios.post(url, newExpense, {
      headers: { "Content-Type": "application/json" },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { storeExpense };
