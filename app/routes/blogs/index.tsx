import { Link, LoaderFunction, useLoaderData } from 'remix';
import { useBlog } from '~/hooks/useBlog';
import { BlogData } from '~/utils/types';

export const loader: LoaderFunction = async () => {
  const { getBlogs } = useBlog();
  const data: BlogData[] | undefined = await getBlogs();

  return data;
};

export default function Blogs() {
  const data = useLoaderData<BlogData[]>();

  return (
    <div>
      <ul>
        {data.map((blog) => (
          <li key={blog.id}>
            <Link to={blog.id}>{blog.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="new">Add blog</Link>
    </div>
  );
}
