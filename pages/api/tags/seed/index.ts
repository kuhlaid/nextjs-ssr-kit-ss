import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "lib/api/database";
import Tag, { TTagDocument } from "lib/api/models/tag";
import tagSeeds from "lib/api/database/seedDB/tagSeeds";
import { LeanDocument } from "mongoose";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function seedTags(
  req: NextApiRequest,
  res: NextApiResponse<LeanDocument<TTagDocument[]>>
) {
  // const { method } = req
  await dbConnect();

  try {
    await Tag.deleteMany({});
    await Tag.insertMany(tagSeeds);

    const tags = await Tag.find({});

    return res.status(201).send(tags);
  } catch (e) {
    return res.status(201).send([]);
  }
}
