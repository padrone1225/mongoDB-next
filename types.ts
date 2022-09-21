import { Document } from 'mongoose';
export interface IPost extends Document{
  title: string,
  slug: string,
  content: string
}