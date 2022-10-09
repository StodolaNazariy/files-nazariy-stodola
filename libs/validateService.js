const validationService = {
  id: id => {
    const Id = Number(id) > -1;
    if (!Id) {
      return false;
    }

    return true;
  },

  name: name => {
    if (name.length < 3 || name.length > 30) {
      return `Name should contain at least 3 and max 30 characters`;
    }
  },

  email: email => {
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

module.exports = validationService;
