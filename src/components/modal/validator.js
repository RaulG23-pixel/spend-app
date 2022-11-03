function validate(element) {
  const { name, register } = element;
  if (Object.keys(register).length === 0) return false;
  const validateName = name !== "";
  let validateRegister = [];

  for (let x in register) {
    const item = register[x] !== "0";
    validateRegister.push(item);
  }
  const isValidRegister = validateRegister.every((x) => x !== false);
  if (validateName && isValidRegister) return true;
  return false;
}

export default validate;
