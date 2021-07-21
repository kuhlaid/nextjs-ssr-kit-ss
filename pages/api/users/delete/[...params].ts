import dbConnect from "lib/api/database";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "lib/api/models/user";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function deleteUser(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { err: string }>
) {
  await dbConnect();
  try {
    const { params } = req.query;
    const _id = params[0]; // get the id of the user

    const existingUser = await User.findOne({ _id });
    if (!existingUser) throw String("Unable to locate that user for deletion.");

    await existingUser.deleteOne();

    return res
      .status(200)
      .json({ message: `Successfully deleted ${existingUser.userName}.` });
  } catch (err) {
    return res.status(400).json({ err: err.toString() });
  }
}
