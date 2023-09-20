
import React from "react";
import Map from "../components/Agency/Map";

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

function Landing2() {

  return (
    <div>
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
            <p class="lead">Empowering Resilience: Our Path to Safety</p>
            
          </div>
        </section>

     <div>
        <Map></Map>
     </div>
       

      
      

      

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

export default Landing2;
