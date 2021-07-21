import dbConnect from "lib/api/database";
// ** NOTE: the NextApiRequest MUST BE INCLUDED otherwise the API call will not work
import type { NextApiRequest, NextApiResponse } from "next";
import Tag, { TTagDocument } from "lib/api/models/tag";
import { LeanDocument } from "mongoose";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function getTags(
  req: NextApiRequest,
  res: NextApiResponse<LeanDocument<TTagDocument[]>>
) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const tags = await Tag.find({}).lean();
        return res.status(200).send(tags);
      } catch (e) {
        return res.status(201).send([]);
      }
  }
}
