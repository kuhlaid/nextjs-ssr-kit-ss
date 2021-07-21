import dbConnect from "lib/api/database";
import type { NextApiRequest, NextApiResponse } from "next";
import User, { TUserDocument } from "lib/api/models/user";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function viewUser(
  req: NextApiRequest,
  res: NextApiResponse<TUserDocument | { err: string }>
) {
  await dbConnect();
  try {
    const { params } = req.query;
    const _id = params[0]; // get the id of the user
    const user = await User.findOne({ _id });
    if (!user) throw String("Unable to locate that user.");

    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).json({ err: err.toString() });
  }
}
