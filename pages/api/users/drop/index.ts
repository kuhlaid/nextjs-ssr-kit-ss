import dbConnect from "lib/api/database";
import type { NextApiResponse } from "next";
import User from "lib/api/models/user";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function dropUsers(
  res: NextApiResponse<{ message: string } | { err: string }>
) {
  await dbConnect();
  await User.deleteMany({});
  return res.status(201).end();
}
