import type { NextApiRequest, NextApiResponse } from 'next'
import User from "lib/api/models/user";
import userSeeds from "lib/api/database/seedDB/userSeeds";

const seedUsers = async (_: Request, res: Response): Promise<Response> => {
  await User.deleteMany({});
  await User.insertMany(userSeeds);

  const users = await User.find({});

  return res.status(201).send(users);
};

export default seedUsers;
