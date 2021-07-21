import dbConnect from "lib/api/database";
import type { NextApiResponse } from "next";
import Tag from "lib/api/models/tag";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function dropTags(
  res: NextApiResponse<{ message: string } | { err: string }>
) {
  await dbConnect();
  await Tag.deleteMany({});
  return res.status(201).end();
}
