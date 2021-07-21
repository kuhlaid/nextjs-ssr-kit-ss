import dbConnect from "lib/api/database";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "lib/api/models/user";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function updateUser(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { err: string }>
) {
  await dbConnect();
  try {
    const { params } = req.query;
    const { userName } = req.body;
    const _id = params[0]; // get the id of the user
    if (!_id || !userName)
      return res.status(400).json({ err: "Missing user update parameters." });

    const existingUser = await User.findOne({ _id });
    if (!existingUser)
      return res
        .status(400)
        .json({ err: "Unable to locate that user to update." });

    /* istanbul ignore next */
    if (existingUser.userName !== userName) {
      const userNameTaken = await User.findOne({ userName });
      if (userNameTaken)
        return res
          .status(400)
          .json({ err: "That username is already in use!" });
    }

    await existingUser.updateOne(req.body);

    return res
      .status(201)
      .json({ message: `Successfully updated ${userName}.` });
  } catch (err) {
    return res.status(400).json({ err: err.toString() });
  }
}
