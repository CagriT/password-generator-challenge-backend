// this functions is to check the items of the result array of passwords
// it is checking whether the passwords are correctly built with the given numbers
const checkPassword = (password, numberLength, symbolLength) => {
   const numbers = "1234567890";
   // these symbols were taken from the package"s documentation
   const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

   let numberCount = 0;
   let symbolCount = 0;

   password.split("").forEach((item) => {
      if (numbers.includes(item)) {
         numberCount++;
      } else if (symbols.includes(item)) {
         symbolCount++;
      }
   });

   if (numberLength === numberCount && symbolLength === symbolCount) {
      return true;
   } else {
      console.log("oppss... there is something wrong!!!");
   }
};

// this functions takes the result array of passwords and checks every password to control the validity of the given parameters
const lastCheck = (req, res, items) => {
   const { minLength, number, symbol, total } = req.params;
   let lastResult = [];

   if (minLength > 0 && number > 0 && symbol > 0 && total > 0) {
      lastResult = items.map((item) => checkPassword(item, +number, +symbol));
      if (lastResult.every((el) => el === true)) {
         console.log("Every password passed the test");
         return true;
      }
   }
};

module.exports = { checkPassword, lastCheck };
