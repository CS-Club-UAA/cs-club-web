import { Link, Outlet } from 'remix';

export default function Blogs() {
  return (
    <div>
      <header>
        <h1>
          <Link to='/' title='blogs' aria-label='blogs'>
            <span>BLOGS</span>
          </Link>
        </h1>
      </header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
