import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <Link to={"/portal/dashboard"} class="nav-link" href="index.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </Link>
          <div class="sb-sidenav-menu-heading">Interface</div>
          <Link
            class="nav-link collapsed"
            to={"/portal/teachers_data"}
            data-bs-toggle="collapse"
            data-bs-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-columns"></i>
            </div>
            Teachers
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </Link>

          <Link
            class="nav-link collapsed"
            to={"/portal/students_data"}
            data-bs-toggle="collapse"
            data-bs-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-book-open"></i>
            </div>
            Students
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </Link>

          <div class="sb-sidenav-footer">
            <div class="small">Logged in as:</div>
            Start Bootstrap
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;