import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';


export const meta: MetaFunction = () => {
  return { title: 'CS Club' };
};

{/*Styling*/}
const darkBlue = {
  backgroundColor: "#233F61",
  fontFamily:"Impact",
  fontSize: 25,
  color: 'white'
};


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
        <Meta />
        <Links />
      </head>

      <body>
        {/*Navigation bar*/}
        <nav className="navbar navbar-expand-md navbar-dark m-4" style={darkBlue}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">UAA CS Club</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mx-1">
                  <Link to="about" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to="events" className="nav-link">Events</Link>
                </li>
                <li className="nav-itemmx-1">
                  <Link to="projects" className="nav-link">Projects</Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to="blogs" className="nav-link">Blogs</Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to="resources" className="nav-link">Resources</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <div className="container-fluid border">
          <Outlet />

          {/*Footer*/}
          <footer className="row" style={darkBlue}>
            <div className="col-9 my-auto align-middle">UAA CS Club</div>
            
            {/*TODO: MAKE THESE ICONS ACT AS LINKS*/}
            <div className="col-1 my-3">
              <img src="discordIcon.png" className="img-fluid " alt="Discord Icon"/>
            </div>
            <div className="col-1 my-3">
              <img src="mailIcon.png" className="img-fluid" alt="Email Icon"/>
            </div>
            <div className="col-1 my-3">
              <img src="githubIcon.png" className="img-fluid" alt="Github Icon"/>
            </div>
          </footer>

          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </div>

      </body>
    </html>
  );
}
