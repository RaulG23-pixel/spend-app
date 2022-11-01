function UseHelperModal() {
  const verification = (data) => {
    const { register } = data;
    const validationArr = [];
    /*
    for (let x in register) {
      const value = Number(register[x]);
      if (value > 0) validationArr.push(true);
      else validationArr.push(false);
    }

    if (validationArr.every((element) => element === true)) {
      return true;
    } else {
      return false;
    }*/
    return false;
  };

  return { verification };
}

export default UseHelperModal;
