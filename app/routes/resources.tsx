import { Link, Outlet } from 'remix';

export default function Resources() {
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