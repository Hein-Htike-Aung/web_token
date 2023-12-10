import User from '../models/user.model';

export const generateToken = async () => {
  let token;
  let isUnique = false;

  while (!isUnique) {
    token = Math.floor(100000 + Math.random() * 900000).toString();

    // Check if the token is unique
    const existingParticipant = await User.findOne({ where: { token } });
    isUnique = !existingParticipant;
  }

  return token;
};
