import { createUser } from '../services/user.service.js';

export const createAdmin = async (req, res) => {
  try {

    const user = await createUser({
      ...req.body,
      role: 'admin'
    });

    res.status(201).json(user);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createCoach = async (req, res) => {
  try {

    const user = await createUser({
      ...req.body,
      role: 'coach'
    });

    res.status(201).json(user);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createAthlete = async (req, res) => {
  try {

    const user = await createUser({
      ...req.body,
      role: 'athlete'
    });

    res.status(201).json(user);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};