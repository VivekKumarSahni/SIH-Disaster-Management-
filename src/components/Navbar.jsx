import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://logosandtypes.com/wp-content/uploads/2020/08/international-rescue-committee.svg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            escueConnect
          </a>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              class="btn btn-outline-primary me-md-2"
              type="button"
              onClick={() => navigate("/loginUser")}
            >
              Login
            </button>
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={() => navigate("/registerUser")}
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
