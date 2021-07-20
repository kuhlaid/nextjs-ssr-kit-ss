import type { NextApiRequest, NextApiResponse } from 'next'
import Tag from "lib/api/models/tag";

const dropTags = async (_: Request, res: Response): Promise<void> => {
  await Tag.deleteMany({});
  return res.status(201).end();
};

export default dropTags;
