import { useState } from "react";

function useForm(validate) {
  const [values, setValues] = useState({});
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIssubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setUser(values);
      setIssubmitted(true);
      e.target.reset();
    } else {
      setErrors(validate(values));
    }
  };
  const handleKeyUp = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors(validate({ ...values, [name]: value }));
  };

  return {
    handleSubmit,
    handleKeyUp,
    isSubmitted,
    setIssubmitted,
    errors,
    setUser,
    user,
  };
}
export default useForm;
