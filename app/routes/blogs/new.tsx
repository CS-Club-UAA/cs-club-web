import { ActionFunction, Link } from 'remix';
import { redirect } from 'remix';
import { useBlog } from '~/hooks/useBlog';

export const action: ActionFunction = async ({ request }) => {
  const { createBlog } = useBlog();

  const form = await request.formData();
  const name = form.get('name');
  const content = form.get('content');

  // we do this type check to be extra sure and to make TypeScript happy
  if (typeof name !== 'string' || typeof content !== 'string') {
    throw new Error(`Form not submitted correctly.`);
  }

  const blog = await createBlog({ name, content });
  return redirect(`/blogs/${blog.id}`);
};

export default function NewBlog() {
  return (
    <div>
      <p>Add blog</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <Link to="/blogs">go back</Link>
    </div>
  );
}
