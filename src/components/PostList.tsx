'use client';

import useSWR from 'swr';
import { GridLoader } from 'react-spinners';
import { SimplePost } from './model/post';
import PostListCard from './PostListCard';

export default function PostList() {
  const { data: posts, isLoading } = useSWR<SimplePost[]>('/api/posts');

  return (
    <section>
      {isLoading && (
        <div className="text-center mt-32">
          <GridLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
