import { Link, Outlet } from 'remix';

const header = {
  fontFamily:"Impact",
  fontSize: 50,
  color: '#233F61',
  textAlign: 'left' as const  //Had to declare it like this or would get error
}

export default function Events() {
  return (
    <div>
      <header>
      </header>
      <main>
        <div>
        <div style={header}> Upcoming Events</div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}