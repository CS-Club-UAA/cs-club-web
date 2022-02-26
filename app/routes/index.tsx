import { Link } from 'remix';

export default function Index() {
  return (
    <div>
      <div>
        <h1>CS club web project</h1>
        <nav>
          <ul>
            <li>
              <Link to='blogs'>Read blogs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
