import type { LoaderFunction } from 'remix';
import { Link, useLoaderData } from 'remix';
import { useBlog } from '~/hooks/useBlog';
import { BlogData } from '~/utils/types';

export const loader: LoaderFunction = async ({ params }) => {
  const { getBlog } = useBlog();

  const blog = await getBlog(params.blogId!);

  if (!blog) throw new Error('Blog not found');

  return blog;
};

export default function Blog() {
  const data = useLoaderData<BlogData>();

  return (
    <div>
      <strong>Name: {data.name}</strong>
      <p>{data.content}</p>
      <Link to='/blogs'>go back</Link>
    </div>
  );
}
