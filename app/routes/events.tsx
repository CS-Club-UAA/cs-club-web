import { Link, Outlet } from 'remix';

export default function Events() {
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