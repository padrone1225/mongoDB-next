import { Document, ObjectId } from 'mongoose';

export interface IPost extends Document {
  readonly _id?: ObjectId;
  readonly title: string;
  readonly slug: string;
  readonly content: string;
}
