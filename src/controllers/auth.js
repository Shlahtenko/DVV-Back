import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '#config/env.js';
import User from '#models/User.js';

export const createUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({
      error: "Будь ласка, введіть ваше ім'я, прізвище, пошту та пароль",
    });
  }

  try {
    const existsEmail = await User.findOne({ email });
    if (existsEmail) {
      return res.status(400).json({ error: 'Пошта вже існує!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullname, email, password: hashedPassword });
    await newUser.save();
    return res.status(200).json({ message: 'Успішно створено користувача' });
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Не вдалося створити нового користувача', error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: 'Будь ласка, введіть вашу пошту та пароль' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: 'Користувача з такою поштою не існує!' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Пароль невірний!' });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      {
        expiresIn: '1h',
      },
    );

    return res
      .status(200)
      .json({ message: 'Успішно виконано вхід', data: token });
  } catch (error) {
    return res.status(500).json({ error: 'Не вдалося увійти', error });
  }
};
