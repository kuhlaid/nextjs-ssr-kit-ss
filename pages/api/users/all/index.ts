import dbConnect from "lib/api/database";
import type { NextApiResponse } from "next";
import User, { TUserDocument } from "lib/api/models/user";
import { LeanDocument } from "mongoose";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function getUsers(
  // req: NextApiRequest,
  res: NextApiResponse<LeanDocument<TUserDocument[]>>
) {
  // const { method } = req
  await dbConnect();
  const users = await User.find({}).lean();

  return res.status(200).send(users);
}
