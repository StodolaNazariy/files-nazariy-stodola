const validationService = {
  name: name => {
    if (name.length < 3 || name.length > 30) {
      return `Name should contain at least 3 and max 30 characters`;
    }
  },

  email: email => {
    // eslint-disable-next-line no-useless-escape
    const template =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const isValid = template.test(email);
    if (!isValid) {
      return "Invalid email format";
    }
  },

  password: password => {
    if (password.length < 8 || password.length > 30) {
      return `Password should contain at least 8 and max 32 characters`;
    }

    const template = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    const isValid = template.test(password);
    if (!isValid) {
      return "Password should contain at least 1 lowercase, 1 uppercase, and 1 number.";
    }
  },
};

const validate = (field, value, setErrors, values) => {
  if (field === "repeatPassword") {
    value !== values.password
      ? setErrors(prev => ({
          ...prev,
          repeatPassword: "Passwords don`t match",
        }))
      : setErrors(prev => ({ ...prev, [field]: "" }));

    return;
  }

  const error = validationService[field](value);

  if (error) {
    setErrors(prev => ({ ...prev, [field]: error }));
    return;
  }

  setErrors(prev => ({ ...prev, [field]: "" }));
};

const checkFormFields = (values, errors = {}) => {
  const errorsStatus = Object.values(errors).every(item => !item);
  const valuesStatus = Object.values(values).every(item => !!item);
  return errorsStatus && valuesStatus;
};

export { checkFormFields, validate };
