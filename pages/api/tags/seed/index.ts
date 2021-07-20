import type { NextApiRequest, NextApiResponse } from "next";
import Tag, { TTagDocument } from "lib/api/models/tag";
import tagSeeds from "lib/api/database/seedDB/tagSeeds";

const seedTags = async (
  req: NextApiRequest,
  res: NextApiResponse<TTagDocument[]>
): Promise<any> => {
  await Tag.deleteMany({});
  await Tag.insertMany(tagSeeds);

  const tags = await Tag.find({});

  return res.status(201).send(tags);
};

export default seedTags;
