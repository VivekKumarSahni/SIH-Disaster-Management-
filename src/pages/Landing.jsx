import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import axios from "axios" ;
import { useState , useEffect} from "react";
import { GuideBlog } from "../components/GuideBlog";
import LocationPickerModal from "./LocationPickerModal";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";


import Modal1 from "./Modal1";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


function Landing() {
  const [blog, setBlog] = useState("guide");
  
  const [selectedLocation, setSelectedLocation] = useState(null);
  const Address = localStorage.getItem('address') ;
  let r = 0 ;
const [showModal, setShowModal] = useState(false);
const [s, sets] = useState(false);
const [locationData, setLocationData] = useState(null);
  const [locationInputValue, setLocationInputValue] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [current , setcurrent] = useState('false') ;
  const mapboxAccessToken = 'pk.eyJ1IjoiYXZpc2hlazEyNjkiLCJhIjoiY2xtbnZrbTB0MTF4MjJxcnhibmJqNHQybCJ9.eOAtr-xB5nAQfsD8Op1Gpw';
  useEffect(() => {
    // Fetch the user's current location when the component mounts
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxAccessToken}`;

       
        try {
          const response = await axios.get(geocodeUrl);
          const firstResult = response.data.features[0];
          const formattedAddress = firstResult.place_name;
          setCurrentAddress(formattedAddress);
        } catch (error) {
          console.error('Error fetching address:', error);
        }
        
      });
    } else {
      console.error('Geolocation is not available in this browser.');
    }
     console.log(currentAddress)   ;
       
  }, [mapboxAccessToken]);
  const [address , setaddress] = useState({currentAddress}) ;
  const handleInputChange = (event) => {
    setCurrentAddress(event.target.value);
  };
const location = localStorage.getItem('address') ;
const handleLocationSelect = (location) => {
  setSelectedLocation(location);
};

const handleModalShow = () => {
  setShowModal(true);
  setcurrent(true) ;

};
const handle=async()=>{
  sets(true) ;
  try {
    const address={Address,status:"pending"};
    console.log(address);
    const response = await fetch('http://localhost:8080/alerts', {
        method: 'POST',
        
        body: JSON.stringify(address ),
        headers: {'Content-Type': 'application/json', },
    });

    if (response.status === 201) {
        console.message( 'Address added to alerts successfully.');
    } else {
        const data = await response.json();
          console.error(`Error: ${data.error}`);
    }
} catch (error) {
    console.error('Error:', error);
}
}
const handle2  = () =>{
  sets(false) ;
}
const handleModalHide = () => {
  setShowModal(false);
};
const navigate = useNavigate() ;

  return (
    <div>
       
      <Navbar1></Navbar1>

      <head>
        <title>Your Landing Page</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css"
        />
        {/* <!-- Include additional CSS for your custom styles --> */}
      </head>
      <body>
        {/* <!-- Navigation Bar --> */}
       
        {/* <!-- Hero Section --> */}
        <section class="hero bg-primary text-white text-center py-5">
          <div class="container">
            <h1 class="display-4">RescueConnect</h1>
            <p class="lead">Empowering Resilience: Your Path to Safety</p>
            <button class="btn btn-light btn-lg"  onClick={handleModalShow} >
              SOS
            </button>
            <LocationPickerModal
        show={showModal}
        onHide={handleModalHide}
        onLocationSelect={handleLocationSelect}
      />
    
          </div>
        </section>

        {/* <!-- Features Section --> */}

        <section style={{ textAlign: "center" }} id="features" class="py-5">
          <div class="container">
            <center>
              <div class="row">
                <div
                  style={{ width: "50%", margin: "auto" }}
                  class="col-lg-8 mb-8"
                >
                  <div class="card">
                    <div class="card-body">
                      <div class="container mt-2">
                        <div class="row">
                          <div class="col-sm-5">
                            <input
                              type="text"
                              class="form-control"
                              id="location"
                              placeholder="Enter your location"
                              
                              value={ currentAddress } 
                              
                              onChange={handleInputChange}
                            />
                          </div>
                          <div class="col-sm-4">
                            <button class="btn btn-secondary" onClick={handle
                            
                            
                            
                            }>
                              Apply for Assistance
                            </button>
                           <Modal1 show={s} onHide={handle2}/>
                          </div>
                          <div class="col-sm-3">
                            <button class="btn btn-secondary">
                              Check status
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Repeat this card structure for each feature --> */}
              </div>
            </center>
          </div>
        </section>

        <section>
          <Carousel responsive={responsive}>
            <>
              <div
                className="card mx-4"
                style={{ height: "200px", color: "white" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1566418512212-a743fc26678a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhZmV0eXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(70%)",
                  }}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Disaster guidelines</h5>
                  <p className="card-text">
                    Disasters guidelines offer specific actions to reduce harm,
                    save lives, and ensure a unified response in diverse
                    situations.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setBlog("guide")}
                className="btn btn-warning"
                style={{
                  width: "90%",
                  margin: "auto",
                  display: "block",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }}
              >
                <b>Learn More</b>
              </button>
            </>
            <>
              <div
                className="card mx-4"
                style={{ height: "200px", color: "white" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1564483335100-3413b45dbd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhZmV0eXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(70%)",
                  }}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Support and Tools</h5>
                  <p className="card-text">
                    Practice and learn about emergency management with
                    specialised resources followed by experts. Get help from
                    SIH.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setBlog("tools")}
                className="btn btn-warning"
                style={{
                  width: "90%",
                  margin: "auto",
                  display: "block",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }}
              >
                <b>Explore</b>
              </button>
            </>
            <>
              <div
                className="card mx-4"
                style={{ height: "200px", color: "white" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(70%)",
                  }}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Latest news and Updates</h5>
                  <p className="card-text">
                    All the headlines about recent incidents in your area.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {setBlog("news");
              console.log(blog);}}
                className="btn btn-warning"
                style={{
                  width: "90%",
                  margin: "auto",
                  display: "block",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }}
              >
                <b>Check</b>
              </button>
            </>
          </Carousel>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <GuideBlog blog={blog} />
        </div>

        {/* <!-- About Section --> */}

        <section
          style={{ marginTop: "10rem" }}
          id="about"
          class="bg-light py-2"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h4>About Us</h4>
                <p></p>
              </div>
              <div class="col-md-6">
                {/* <!-- Add an image or video here --> */}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Contact Section --> */}
        <section id="contact" class="py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h4>Contact Us</h4>
                <p></p>
              </div>
              <div class="col-md-6">
                {/* <!-- Add a contact form here --> */}
              </div>
            </div>
          </div>
        </section>

        {/* 
<!-- Footer Section --> */}
        <footer class="bg-dark text-white text-center py-3">
          <div class="container">&copy; 2023 DMS</div>
        </footer>

        {/* <!-- Bootstrap JavaScript (Popper.js and Bootstrap JS) --> */}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.min.js"></script>
        {/* <!-- Include additional JavaScript for your custom functionality --> */}
      </body>
    </div>
  );
}

export default Landing;
