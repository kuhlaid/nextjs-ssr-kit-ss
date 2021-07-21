import dbConnect from "lib/api/database";
// ** NOTE: the NextApiRequest MUST BE INCLUDED otherwise the API call will not work
import type { NextApiRequest, NextApiResponse } from "next";
import Tag from "lib/api/models/tag";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function dropTags(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { err: string }>
) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        await Tag.deleteMany({});
        return res.status(201).end();
      } catch (e) {
        return res.status(400).json({ err: e.toString() });
      }
  }
}
