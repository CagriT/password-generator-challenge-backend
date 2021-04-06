const password = require("secure-random-password");
const { lastCheck } = require("../helper/validate");

// this functions generates the passwords with the given parameters by using above required package
exports.passwordGenerator = (req, res) => {
   let { minLength, number, symbol, total } = req.params;
   minLength = +minLength;
   number = +number;
   symbol = +symbol;
   total = +total;

   let maxLength = minLength + Math.floor(Math.random() * 10);
   let result = [];
   let numberOfPasswords = 0;

   try {
      do {
         numberOfPasswords += 1;

         if (minLength && number && symbol && total) {
            result.push(
               password.randomPassword({
                  characters: [
                     { characters: password.digits, exactly: number },
                     { characters: password.fullSymbols, exactly: symbol },
                     {
                        characters: password.lower,
                        length: maxLength - (number + symbol),
                     },
                  ],
                  length: maxLength,
               })
            );
         }
      } while (numberOfPasswords < total);
   } catch (error) {
      console.log(error);
   }

   lastCheck(req, res, result);

   res.status(200).json({
      status: "success",
      data: {
         result,
      },
   });
};
