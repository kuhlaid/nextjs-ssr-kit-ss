import dbConnect from "lib/api/database";
import type { NextApiRequest, NextApiResponse } from "next";
import Tag from "lib/api/models/tag";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function updateTag(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { err: string }>
) {
  await dbConnect();
  try {
    const { params } = req.query;
    const { tagName } = await req.body;
    const _id = params[0]; // get the id of the tag

    if (!_id || !tagName)
      return res.status(400).json({ err: "Missing tag update parameters." });

    const existingTag = await Tag.findOne({ _id });
    if (!existingTag)
      return res
        .status(400)
        .json({ err: "Unable to locate that tag to update." });

    /* istanbul ignore next */
    // do not allow duplicate tag names
    if (existingTag.tagName !== tagName) {
      const tagNameTaken = await Tag.findOne({ tagName });
      if (tagNameTaken)
        return res.status(400).json({ err: "That tagname is already in use!" });
    }

    await existingTag.updateOne(req.body);

    return res
      .status(201)
      .json({ message: `Successfully updated ${tagName}.` });
  } catch (err) {
    return res.status(404).json({ err: err.toString() });
  }
}
