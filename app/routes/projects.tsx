import { Link, Outlet } from 'remix';

export default function Projects() {
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