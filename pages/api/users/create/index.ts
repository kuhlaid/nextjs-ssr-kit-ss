import dbConnect from "lib/api/database";
import type { NextApiRequest, NextApiResponse } from "next";
import isEmpty from "lodash.isempty";
import User, { TUserDocument } from "lib/api/models/user";
import { LeanDocument } from "mongoose";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse<
    LeanDocument<TUserDocument[]> | { message: string } | { err: string }
  >
) {
  // const { method } = req
  await dbConnect();
  try {
    const { email, firstName, lastName, userName, backgroundInfo, address } =
      req.body;

    if (
      !email ||
      !firstName ||
      !lastName ||
      !userName ||
      !backgroundInfo ||
      isEmpty(address)
    )
      throw String("Missing user card creation parameters.");

    const userNameTaken = await User.findOne({ userName });
    if (userNameTaken) throw String("That username is already in use!");

    await User.create({
      email,
      firstName,
      lastName,
      userName,
      backgroundInfo,
      address
    });

    return res
      .status(201)
      .json({ message: `Successfully created ${userName}.` });
  } catch (err) {
    return res.status(400).json({ err: err.toString() });
  }
}
