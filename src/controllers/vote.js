import User from '#models/User.js';

export const updateVotes = async (req, res) => {
  try {
    const { id } = req.params;
    const { votedSubjects } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { votedSubjects },
      { new: true },
    );

    if (!user) {
      return res
        .status(404)
        .json({ error: 'Не знайдено користувача з даним ідентифікатором' });
    }
    return res.status(200).json(user.votedSubjects);
  } catch (error) {
    return res.status(500).json({
      error: 'Не вдалось оновити обрані користувачем дисципліни',
      error,
    });
  }
};
