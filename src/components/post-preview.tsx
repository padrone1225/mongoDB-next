import { FC } from 'react';
import { IPost } from '../shared/dto/post.interface';
import Link from 'next/link';

interface Props {
  post: IPost;
}

const PostPreview: FC<Props> = ({ post }) => {
  return (
    <div style={{ marginBottom: 25 }}>
      <h2 className='text-lg font-semibold'>{post.title}</h2>
      <p>{post.content}</p>
      <Link
        href={{
          pathname: '/views/blog/[slug]',
          query: { slug: post.slug },
        }}
        as={`/blog/${post.slug}`}
      >
        <a
          style={{
            display: 'inline-flex',
            background: 'black',
            color: 'white',
            padding: '5px 10px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontSize: 12,
          }}
        >
          View
        </a>
      </Link>
    </div>
  );
};

export default PostPreview;
