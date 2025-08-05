const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = '!@#$%^&*()_+{}":?><;.,';
const generatePassword = () => {
  let password = "";
  for (let i = 0; i < length; i++) {
    const x = Math.floor(Math.random() * 4);
    switch (x) {
      case 0:
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        break;
      case 1:
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        break;
      case 2:
        password += numbers[Math.floor(Math.random() * numbers.length)];
        break;
      case 3:
        password += symbols[Math.floor(Math.random() * symbols.length)];
        break;
    }
  }
  passwordBox.value = password;
};
document.querySelector("button").addEventListener("click", generatePassword);
document.querySelector("img").addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
});
