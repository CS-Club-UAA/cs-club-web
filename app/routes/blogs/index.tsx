import { Link, LoaderFunction, useLoaderData } from 'remix';
import { db } from '~/firebase/firebase.server';
import { useBlog } from '~/hooks/useBlog';
// import { db } from '~/utils/db.server';
import { BlogData } from '~/utils/types';

export let loader: LoaderFunction = async () => {
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
      <Link to='new'>Add blog</Link>
    </div>
  );
}
