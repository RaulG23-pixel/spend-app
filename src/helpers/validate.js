const validateName = (name) => {
  if (name === "" || undefined) return "Name must not be empty";
  if (/[^a-zA-Z0-9]/.test(name)) return "Invalid characters";
  if (name !== undefined && name.trim().length < 3)
    return "name needs to be at least three characters long";

  return null;
};

const validateEmail = (email) => {
  if (email === "" || undefined) return "Email must not be empty";
  if (
    email !== undefined &&
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z]+\.[a-zA-Z]+/.test(email)
  ) {
    return "please insert a valid email";
  }

  return null;
};
const validatePass = (pass) => {
  if (pass === "" || undefined) return "Password must not be empty";
  if (pass !== undefined && pass.trim().length < 8)
    return "Password must be at least 8 characters long";
  return null;
};
const validatePass2 = (pass, pass2) => {
  if (pass2 !== pass) return "Passwords don't match";
  return null;
};

function validateInfo(values) {
  let errors = {};
  const { username, email, password, password_confirmation } = values;
  if (username && validateName(username)) {
    errors.username = validateName(username);
  }

  if (email && validateEmail(email)) {
    errors.email = validateEmail(email);
  }

  if (password && validatePass(password)) {
    errors.password = validatePass(password);
  }

  if (password_confirmation && validatePass2(password, password_confirmation)) {
    errors.password_confirmation = validatePass2(
      password,
      password_confirmation
    );
  }

  return Object.keys(errors).length > 0 ? errors : [];
}

export default validateInfo;
