import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  backgroundInfo: string;
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zipCode: string;
  };
}
export type TUserDocument = Document & IUser;

export type TUserModel = Model<TUserDocument>;

const userSchema = new Schema<TUserDocument>({
  email: String,
  firstName: String,
  lastName: String,
  userName: { type: String, unique: true, lowercase: true },
  backgroundInfo: String,
  address: {
    street: String,
    suite: String,
    city: String,
    state: String,
    zipCode: String
  }
});

// *** if the model exists then reuse or define the model
export default mongoose.models.User ||
  mongoose.model<TUserDocument, TUserModel>("User", userSchema);
