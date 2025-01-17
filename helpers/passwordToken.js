const passwordOTP = require('../models/passwordOTP');
const User = require('../models/user.model');
const randToken = require('rand-token').generator({
  chars: '0-9',
});

const generatePasswordOTP = async (userId) => {
  let random = randToken.generate(6);
  const token = new passwordOTP({
    userId: userId,
    OTP: random,
  });
  await token.save();
  return random;
};

module.exports = { generatePasswordOTP };
