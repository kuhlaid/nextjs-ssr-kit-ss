import dbConnect from "lib/api/database";
// ** NOTE: the NextApiRequest MUST BE INCLUDED otherwise the API call will not work
import type { NextApiRequest, NextApiResponse } from "next";
import User, { TUserDocument } from "lib/api/models/user";
import userSeeds from "lib/api/database/seedDB/userSeeds";
import { LeanDocument } from "mongoose";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function seedUsers(
  req: NextApiRequest,
  res: NextApiResponse<LeanDocument<TUserDocument[]> | { err: string }>
) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        await User.deleteMany({});
        await User.insertMany(userSeeds);

        const users = await User.find({});

        return res.status(201).send(users);
      } catch (e) {
        return res.status(400).json({ err: e.toString() });
      }
  }
}
