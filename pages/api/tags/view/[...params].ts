import dbConnect from "lib/api/database";
import type { NextApiRequest, NextApiResponse } from "next";
import Tag, { TTagDocument } from "lib/api/models/tag";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function viewTag(
  req: NextApiRequest,
  res: NextApiResponse<TTagDocument | { err: string }>
) {
  await dbConnect();
  try {
    const { params } = req.query;
    const _id = params[0]; // get the id of the tag
    const tag = await Tag.findOne({ _id });
    if (!tag) throw String("Unable to locate that tag.");

    return res.status(200).send(tag);
  } catch (err) {
    return res.status(400).json({ err: err.toString() });
  }
}
