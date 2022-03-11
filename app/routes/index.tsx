import { Link } from 'remix';

{/*Styling*/}
const darkBlue = {
  backgroundColor: "#233F61",
  fontFamily:"Impact",
  fontSize: 25,
  color: 'white'
};
const lightBlue = {
  backgroundColor: "#CAD5DD",
  fontFamily:"Impact",
  color: 'white',
  textAlign: 'center' as const, //Had to declare it like this or would get error
  lineHeight: '3rem'
};
const yellow = {
  backgroundColor: "#FEE190",
  fontFamily:"Impact",
  fontSize: 30,
  color: '#FEE190',
  textAlign: 'center' as const  //Had to declare it like this or would get error
};

const whiteWithDarkText = {
  backgroundColor: "white",
  fontFamily:"Helvetica Neue",
  fontSize: 25,
  color: '#233F61',
  textAlign: 'right' as const  //Had to declare it like this or would get error
}

const whiteWithLightText = {
  backgroundColor: "white",
  fontFamily:"Impact",
  fontSize: 80,
  color: '#CAD5DD',
  textAlign: 'left' as const,  //Had to declare it like this or would get error
  lineHeight: '5rem'
}


export default function Index() {
  return (
    <body>

      {/*Logo row*/}
      <div className="row"  style={lightBlue}>
        <div className="col-lg-4" style={darkBlue}>
          <img src="blueClubLogo.png" className="img-fluid my-3" alt="Club Logo"/>
        </div>

        <div className="col-lg-8 my-auto">
          <p></p>
          <p style={{fontSize: 50}}>We are PASSIONATE about</p>
          <p style={{fontSize: 90}}> PROGRAMMING</p>
          <b style={{fontSize: 30, fontFamily: 'Helvetica Neue', color: "#233F61", lineHeight: '9rem'}}>
          Meetings every Wednesday @ 6:30pm
          </b>
        </div>
      </div>

      {/*Club summary row*/}
      <div className="row my-3"  style={whiteWithDarkText}>
        <div className="col-lg-6 my-auto">
          <p>The <strong>Computer Science Club at UAA </strong>
            is committed to positively impacting the
            <strong> Alaskan community </strong>
            by supporting the next generation of computer enthusiasts. We foster a 
            <strong> supportive, learning-focused environment </strong>
            where friends and mentors can work together to reach new heights.
          </p>
        </div>

        <div className="col-lg-6 my-auto" style= {{textAlign: 'center'}}>
          <img src="mountainBg.png" className="img-fluid" width='500rem' alt="Alaskan Mountain Image taken by Mya Schroder"/>
        </div>
      </div>

      {/*Club stats row*/}
      <div className="row"  style={yellow}>
        <div className="card mx-auto my-5" style={{width: '18rem'}}>  
          <div className="card-body">
            <h5 className="card-title " style={{fontSize:80}}>10</h5>
            <p className="card-text">members</p>
          </div>
        </div>

        <div className="card mx-auto my-5" style={{width: '18rem'}}>  
          <div className="card-body">
            <h5 className="card-title" style={{fontSize:80}}>3</h5>
            <p className="card-text">projects</p>
          </div>
        </div>

        <div className="card mx-auto my-5" style={{width: '18rem'}}>  
          <div className="card-body">
            <h5 className="card-title" style={{fontSize:80}}>5</h5>
            <p className="card-text">speakers</p>
          </div>
        </div>
      </div>
      
      {/*Club spotlight row*/}
      <div className="row m-4"  style={whiteWithLightText}>
        <div className="col-md-4 mt-auto">
          <p>Club <br/>Spotlight:</p>
        </div>
        
        <div className="col-md-4 my-auto" style= {{textAlign: 'left'}}>
          {/*TODO: replace w/ other image*/}
          <img src="mountainBg.png" className="img-fluid" width='500rem' alt="Alaskan Mountain Image taken by Mya Schroder"/>
        </div>
        
        <div className="col-md-4 my-auto" style= {{textAlign: 'left'}}>
          {/*TODO: replace w/ other image*/}
          <img src="mountainBg.png" className="img-fluid" width='500rem' alt="Alaskan Mountain Image taken by Mya Schroder"/>
        </div>  
      </div>
      
    </body>
    
  );
}
