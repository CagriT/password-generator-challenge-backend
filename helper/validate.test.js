const { describe, expect, test } = require("@jest/globals");
const { checkPassword, lastCheck } = require("./validate");

test("if the password has the given parameters, it should return true", () => {
   const password = "29n3@mqc*7up5ht-";
   const numberLength = 5;
   const symbolLength = 3;

   const result = checkPassword(password, numberLength, symbolLength);
   expect(result).toBe(true);
});

test("if the password has the given parameters, it should return true", () => {
   // some of the values in the lastCheck function are coming from req.params. So I made a req.params object to simulate the same process

   const items = [
      "0ksu28qy%+:wy79o",
      'upk30-"8s[n3c8rq',
      '[k6]r36vfy2rg"q0',
      "z0mdcj_hw8:633c}",
      "&7u25jir'q4:mdz3",
      "20n0@mqc*0up5ht-",
      "qpg79iv,!fa7a5~2",
      '92wy-ax:t8"3y3jc',
      "3?qr{25f`myxs5t3",
      "y3=ekci97u@m)m90",
   ];
   req = {
      params: {
         minLength: 10,
         number: 5,
         symbol: 3,
         total: 10,
      },
   };

   const result = lastCheck(req, (res = 0), items);
   expect(result).toBeTruthy();
});
