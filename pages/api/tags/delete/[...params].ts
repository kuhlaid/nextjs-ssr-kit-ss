import dbConnect from "lib/api/database";
import type { NextApiRequest, NextApiResponse } from "next";
import Tag from "lib/api/models/tag";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function deleteTag(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { err: string }>
) {
  await dbConnect();
  try {
    const { params } = req.query;
    const _id = params[0]; // get the id of the tag
    const existingTag = await Tag.findOne({ _id });
    if (!existingTag)
      return res
        .status(400)
        .json({ err: "Unable to locate that tag for deletion." });

    await existingTag.deleteOne();

    return res
      .status(200)
      .json({ message: `Successfully deleted ${existingTag.tagName}.` });
  } catch (err) {
    return res.status(400).json({ err: err.toString() });
  }
}
