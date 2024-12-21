import User from '#models/User.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      res.status(400).json({ error: 'Користувачів не знайдено' });
    }
    res
      .status(200)
      .json({ message: 'Успішно знайдено користувачів', data: users });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Не вдалося отримати всіх користувачів', error });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      res
        .status(400)
        .json({ error: 'Користувача з таким ідентифікатором не знайдено' });
    }
    res.status(200).json({
      message: 'Успішно знайдено користувача за ідентифікатором',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Не вдалось виконати пошук користувача за ідентифікатором',
      error,
    });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, faculty, speciality, grade, course, budget } = req.body;

  if (!email || !faculty || !speciality || !grade || !course || !budget) {
    res
      .status(400)
      .json({ error: 'Недостатньо даних для оновлення користувача' });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { email, faculty, speciality, grade, course, budget },
      { new: true },
    );
    if (!updatedUser) {
      res.status(400).json({
        error:
          'Не знайдено користувача за ідентифікатором або не вдалось оновити його дані',
      });
    }
    res
      .status(200)
      .json({ message: 'Користувача успішно оновлено', data: updatedUser });
  } catch (error) {
    res.status(500).json({
      message: 'Не вдалось оновити користувача',
      error,
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'Успішно видалено користувача' });
  } catch (error) {
    res.status(500).json({ message: 'Не вдалось видалити користувача', error });
  }
};
