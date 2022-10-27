import { globalUrl } from "./globalUrl";
import axios from 'axios';

function saveExpense(expense){
    try {
    let url = globalUrl + "/expenses";
    let data = await axios.post(url, expense, {
      headers: { "Content-Type": "application/json" },
    });    
    return data;
    } catch (error) {
        console.log(error);
    }
    
}

export {saveExpense};