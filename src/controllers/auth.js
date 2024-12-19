import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '#config/env.js';
import User from '#models/User.js';
import { ERROR, SUCCESS, response } from '#utils/messages.js';

export const createUser = async (req, res) => {
  const { name, password, superuser } = req.body;

  if (!name || !password) {
    return response(res, ERROR.AUTH.CREDENTIALS_REQUIRED);
  }

  try {
    const existsUsername = await User.findOne({ name });
    if (existsUsername) {
      return response(res, ERROR.USER.USERNAME_EXISTS);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, password: hashedPassword, superuser });
    await newUser.save();

    return response(res, SUCCESS.AUTH.CREATE);
  } catch (err) {
    return response(res, ERROR.AUTH.CREATE, { error: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return response(res, ERROR.AUTH.NAME_PASSWORD_REQUIRED);
  }

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return response(res, ERROR.USER.NOT_FOUND);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return response(res, ERROR.AUTH.INVALID_PASSWORD);
    }

    const token = jwt.sign({ userId: user._id, name: user.name }, JWT_SECRET, {
      expiresIn: '1h',
    });

    return response(res, SUCCESS.AUTH.LOGIN, {
      token,
      id: user._id,
    });
  } catch (err) {
    return response(res, ERROR.AUTH.LOGIN, { error: err.message });
  }
};
