import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITag {
  tagName: string;
  category: string;
}
export type TTagDocument = Document & ITag;

export type TTagModel = Model<TTagDocument>;

const tagSchema = new Schema<TTagDocument>({
  tagName: { type: String, unique: true, lowercase: true },
  category: String
});

// *** if the model exists then reuse or define the model
export default mongoose.models.Tag ||
  mongoose.model<TTagDocument, TTagModel>("Tag", tagSchema);
