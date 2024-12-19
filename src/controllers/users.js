import User from '#models/User.js';
import { ERROR, SUCCESS, response } from '#utils/messages.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return response(res, ERROR.USERS.NO_USERS);
    }
    return response(res, SUCCESS.USERS.FETCH, { data: users });
  } catch (err) {
    return response(res, ERROR.USERS.FETCH, { error: err.message });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return response(res, ERROR.USER.NOT_FOUND);
    }
    return response(res, SUCCESS.USER.FIND, { data: user });
  } catch (err) {
    return response(res, ERROR.USER.FETCH, { error: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return response(res, ERROR.USER.USERNAME_REQUIRED, { error: err.message });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name },
      { new: true },
    );
    if (!updatedUser) {
      return response(res, ERROR.USER.NOT_FOUND);
    }
    return response(res, SUCCESS.USER.UPDATE, { data: updatedUser });
  } catch (err) {
    return response(res, ERROR.USER.UPDATE, { error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    return response(res, SUCCESS.USER.DELETE);
  } catch (err) {
    return response(res, ERROR.USER.DELETE, { error: err.message });
  }
};
