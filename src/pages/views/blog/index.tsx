import * as React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { IPost } from '../../../shared/dto/post.interface';
import PostPreview from '../../../components/post-preview';

interface Props {
  posts: IPost[];
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Blog</h1>
      <div>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
      {posts.length < 1 && (
        <div style={{ fontStyle: 'italic', fontSize: 14 }}>
          No post available
        </div>
      )}
      <div style={{ fontStyle: 'italic', fontSize: 14 }}>
        this page was rendered on the server side
      </div>
    </div>
  );
};

// When the page was rendered server side the ctx.query will contain the data
// returned by the controller's method. When the page was rendered on the client
// side, the ctx.query will only contain the query params for the url.
//
// To better understand why this happens, reference the following next
// documentation about how getServerSideProps only runs on the server:
// https://nextjs.org/docs/basic-features/data-fetching#only-runs-on-server-side

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const baseUrl = `${process.env.CLIENT_HOST}:${process.env.PORT}`;
  const resData = await fetch(`${baseUrl}/api/blog/post`, {
    method: 'GET',
  });

  const posts = await resData.json();
  return { props: { posts } };
};

export default Blog;
