import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPost } from '../../shared/dto/post.interface';

export class BlogService {
  constructor(@InjectModel('Blog') private readonly postModel: Model<IPost>) {}

  public async all(): Promise<IPost[]> {
    try {
      const posts = await this.postModel.find({});
      return posts;
    } catch (e) {
      console.log('Post service error============', e);
      return [];
    }
  }

  public async find(slug: string): Promise<IPost | null> {
    try {
      const post = await this.postModel.findOne({ slug: slug });
      return post;
    } catch (e) {
      return null;
    }
  }
}
