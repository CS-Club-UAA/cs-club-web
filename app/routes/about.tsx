import { Link, Outlet } from 'remix';

export default function About() {
  return (
    <div>
      <header>
      </header>

      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}