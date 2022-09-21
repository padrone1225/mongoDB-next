import * as mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
});
// export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
export default BlogSchema;
