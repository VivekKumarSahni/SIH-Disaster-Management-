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
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

{/* <!-- Hero Section --> */}
<section class="hero bg-primary text-white text-center py-5">
    <div class="container">
        <h1 class="display-4">Disaster Management System</h1>
        <p class="lead">Empowering Resilience: Your Path to Safety</p>
        <a href="#contact" class="btn btn-light btn-lg">SOS</a>
    </div>
</section>

{/* <!-- Features Section --> */}

<section style={{textAlign: 'center'}} id="features" class="py-5">
    <div class="container">
      <center>
        <div class="row">
            <div style={{textAlign: 'center'}} class="col-lg-8 mb-8">
                <div class="card">
                    <div  class="card-body">
               <div class="container mt-2"> 
               <div class='row'>
               <div  class="col-sm-8"> 
            <input type="text" class="form-control" id="location" placeholder="Enter your location"/>
            </div>
             <div class="col-sm-4">
            <button class="btn btn-primary btn-block">Apply for Assistance</button>
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
