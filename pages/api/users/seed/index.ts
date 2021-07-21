import dbConnect from "lib/api/database";
import type { NextApiResponse } from "next";
import User, { TUserDocument } from "lib/api/models/user";
import userSeeds from "lib/api/database/seedDB/userSeeds";
import { LeanDocument } from "mongoose";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function seedUsers(
  // req: NextApiRequest,
  res: NextApiResponse<LeanDocument<TUserDocument[]>>
) {
  // const { method } = req
  await dbConnect();
  await User.deleteMany({});
  await User.insertMany(userSeeds);

  const users = await User.find({});

  return res.status(201).send(users);
}
