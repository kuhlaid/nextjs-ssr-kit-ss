import type { NextApiRequest, NextApiResponse } from 'next'
import User from "lib/api/models/user";

const dropUsers = async (_: Request, res: Response): Promise<void> => {
  await User.deleteMany({});
  return res.status(201).end();
};

export default dropUsers;
