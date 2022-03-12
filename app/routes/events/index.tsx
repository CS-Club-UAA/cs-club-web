import { Link} from 'remix';

const whiteWithDarkText = {
  backgroundColor: "white",
  fontFamily:"Helvetica Neue",
  fontSize: 25,
  color: '#233F61',
  textAlign: 'right' as const  //Had to declare it like this or would get error
}

export default function Events()  {
  return (
    <div>
    <div className="row my-4" style={{backgroundColor: "#FEE190"}}>
      <div className="col my-4" style={{textAlign: 'center'}}>
        <iframe className="embed-responsive-item embed-responsive-1by1" src="https://calendar.google.com/calendar/embed?src=c_7l5m6c6op8e73qhjgocm93460s%40group.calendar.google.com&ctz=America%2FAnchorage" style={{border: 0}} width="100%" height="600" scrolling="no"></iframe>
      </div>
    </div>
    </div>
  );
}