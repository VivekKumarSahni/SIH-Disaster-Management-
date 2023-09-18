import React from 'react'

function Landing() {
  return (
    <div>
 
<head>
  
    <title>Your Landing Page</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css"/>
    {/* <!-- Include additional CSS for your custom styles --> */}
</head>
<body>

{/* <!-- Navigation Bar --> */}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">DMS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#features">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

{/* <!-- Hero Section --> */}
<section class="hero bg-primary text-white text-center py-5">
    <div class="container">
        <h1 class="display-4">RescueConnect</h1>
        <p class="lead">Empowering Resilience: Your Path to Safety</p>
        <a href="#contact" class="btn btn-light btn-lg">SOS</a>
    </div>
</section>

{/* <!-- Features Section --> */}

<section style={{textAlign: 'center'}} id="features" class="py-5">
    <div class="container">
      <center>
        <div class="row">
            <div style={{ width: "50%", margin: "auto" }} class="col-lg-8 mb-8">
                <div class="card">
                    <div  class="card-body">
               <div class="container mt-2"> 
               <div class='row'>
               <div  class="col-sm-5"> 
            <input type="text" class="form-control" id="location" placeholder="Enter your location"/>
            </div>
            <div class="col-sm-4">
            <button class="btn btn-secondary">Apply for Assistance</button>
            </div>
            <div class="col-sm-3">
            <button class="btn btn-secondary">Check status</button>
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
<div class="row" style={{justifyContent:"center"}}>
  <div class="col-md-3">
  <div class="card">
  <div class="card-body" style={{height: "250px"}}>
    <h5 class="card-title">Disaster guidelines</h5>
    <br></br>
    <p class="card-text" style={{fontSize:"18px"}}>Disasters guidelines offer specific actions to reduce harm, save lives, and ensure a unified response in diverse situations.</p>
    <br></br>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
  </div>
  <div class="col-md-3">
  <div class="card text-bg-dark">
  <img src="..." class="card-img" alt="..."/>
  <div class="card-img-overlay" style={{height: "250px"}}>
    <h5 class="card-title">Support and Tools</h5>
    <br></br>
    <p class="card-text" style={{fontSize:"18px"}}>Practice and learn about emergency management with specialised resources followed by experts. Get help from SIH .</p>
    <br></br>
    <a href="#" class="btn btn-primary">Explore</a>
  </div>
</div>
  </div>
  <div class="col-md-3">
  <div class="card">
  <div class="card-body" style={{height: "250px"}}>
    <h5 class="card-title">Latest news and Updates</h5>
    <br></br>
    <p class="card-text" style={{fontSize:"18px"}}>All the headlines about recent incidents in your area. </p>
    <br></br>
    <br></br>
    <a href="#" class="btn btn-primary">Check</a>
  </div>
</div>
  </div>
</div>
</section>

{/* <!-- About Section --> */}

<section style={{marginTop: '10rem'}} id="about" class="bg-light py-2">
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
    <div class="container">
        &copy; 2023 DMS
    </div>
</footer>

{/* <!-- Bootstrap JavaScript (Popper.js and Bootstrap JS) --> */}
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.min.js"></script>
{/* <!-- Include additional JavaScript for your custom functionality --> */}

</body>


    </div>
  )
}

export default Landing
