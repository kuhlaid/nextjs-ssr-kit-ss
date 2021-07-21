import dbConnect from "lib/api/database";
import type { NextApiRequest, NextApiResponse } from "next";
import Tag from "lib/api/models/tag";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function createTag(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { err: string }>
) {
  await dbConnect();
  const { tagName, category } = req.body;

  if (!tagName || !category)
    throw String("Missing tag card creation parameters.");

  try {
    const tagNameTaken = await Tag.findOne({ tagName });
    if (tagNameTaken) throw String("That tagname is already in use!");

    await Tag.create({
      tagName,
      category
    });

    return res
      .status(201)
      .json({ message: `Successfully created ${tagName}.` });
  } catch (err) {
    return res.status(400).json({ err: err.toString() });
  }
}
