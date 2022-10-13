const validPasswords = [
  { title: "Correct password 1", password: "gege44D673g" },
  { title: "Correct password 2", password: "6jfwl7#>fgdT" },
  { title: "Correct password 3", password: "5t#Rb446H" },
  { title: "Correct password 4", password: "rraa_11HH" },
];

const invalidPasswords = [
  { title: "Is Empty", password: "" },
  { title: "Is too short", password: "8yfmJD" },
  { title: "Is too long", password: "djvj749mcj5idvmfieeiJJDfkfeofeojvr3" },
  { title: "Include white space", password: "6jfwl7 Y#>fgd" },
  { title: "Include any upper case letter", password: "6jfwl7#>fgd" },
  { title: "Include any lover case letter", password: "GERHE543GGF4" },
  { title: "Include any number", password: "GkKlhggDV" },
  { title: "Include hyphen", password: "GkKl-hggDV" },
];

const invalidIds = [
  { title: "Empty string", id: "" },
  { title: "Zero value", id: 0 },
  { title: "Undefined value", id: undefined },
  { title: "Boolean false value", id: false },
  { title: "Boolean true value", id: true },
  { title: "Null value", id: null },
  { title: "Negative value", id: -2 },
  { title: "Non-convertible string value", id: undefined },
];

const validIds = [
  { title: "Positive numeric value", id: 2 },
  { title: "String convertable to positive number", id: "2" },
];

module.exports = {
  validPasswords,
  invalidPasswords,
  validIds,
  invalidIds,
};
