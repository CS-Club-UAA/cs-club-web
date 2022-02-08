import { LoaderFunction, useLoaderData } from 'remix';
import { db } from '~/utils/db.server';
import { BlogData } from '~/utils/types';

export let loader: LoaderFunction = async () => {
  const data: BlogData = {
    blogs: await db.blogs.findMany(),
  };

  return data;
};

export default function Blogs() {
  const data = useLoaderData<BlogData>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      {data.blogs.map((blog) => (
        <li>
          <p> {blog.name} </p>
          <p>{blog.content} </p>
        </li>
      ))}
    </div>
  );
}
