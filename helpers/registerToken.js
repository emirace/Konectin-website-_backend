const RegisterOTP = require('../models/registerOTP');
const User = require('../models/user.model');
const randToken = require('rand-token').generator({
  chars: '0-9',
});

const generateRegisterOTP = async (userId) => {
  let random = randToken.generate(6);
  const token = new RegisterOTP({
    userId: userId,
    OTP: random,
  });
  await token.save();
  return random;
};

module.exports = { generateRegisterOTP };
