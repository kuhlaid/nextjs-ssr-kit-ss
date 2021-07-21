import dbConnect from "lib/api/database";
// ** NOTE: the NextApiRequest MUST BE INCLUDED otherwise the API call will not work
import type { NextApiRequest, NextApiResponse } from "next";
import User from "lib/api/models/user";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function dropUsers(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { err: string }>
) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        await User.deleteMany({});
        return res.status(201).json({ message: `Users dropped.` });
      } catch (e) {
        return res.status(201).json({ err: e.toString() });
      }
  }
}
