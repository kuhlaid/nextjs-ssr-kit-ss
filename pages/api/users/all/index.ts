import type { NextApiRequest, NextApiResponse } from 'next'
import User from "lib/api/models/user";

const getUsers = async (_: Request, res: Response): Promise<Response> => {
  const users = await User.find({}).lean();

  return res.status(200).send(users);
};

export default getUsers;
