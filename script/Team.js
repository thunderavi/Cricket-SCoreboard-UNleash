document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  function updateNavbar() {
    const navbar = document.querySelector(".navbar-nav");
    const signupBtnContainer = document.querySelector(".d-flex");
    if (!navbar) return;

    if (localStorage.getItem("isLoggedIn") === "true") {
      navbar.innerHTML = `
        <li class="nav-item"><a class="nav-link" href="/index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="Team.html">Teams</a></li>
        <li class="nav-item"><a class="nav-link" href="./Pages/Dash.html">Dashboard</a></li>
      `;
      if (signupBtnContainer) {
        signupBtnContainer.innerHTML = `<a class="btn btn-sm btn-secondary logout-btn" href="#" style="min-width:110px">Logout</a>`;
      }
      document.querySelectorAll(".logout-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          localStorage.removeItem("isLoggedIn");
          window.location.href = "./Pages/SignUp.html";
        });
      });
    } else {
      navbar.innerHTML = `
        <li class="nav-item"><a class="nav-link" href="/index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="./Pages/Team.html">Teams</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Register</a></li>
        <li class="nav-item"><a class="nav-link" href="./Pages/SignUp.html">Login</a></li>
      `;
      if (signupBtnContainer) {
        signupBtnContainer.innerHTML = `<a class="btn btn-sm btn-primary-acc" href="./Pages/SignUp.html" style="min-width:110px">Sign Up</a>`;
      }
    }
  }
  updateNavbar();

  // ---------------- Teams -----------------
  const addTeamBtn = document.getElementById("addTeamBtn");
  const teamForm = document.getElementById("teamForm");
  const teamContainer = document.getElementById("teamContainer");

  // Show modal
  addTeamBtn.addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.getElementById("addTeamModal"));
    modal.show();
  });

  // Handle form submit
  teamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(teamForm);
    const reader = new FileReader();

    reader.onload = function(event) {
      const newTeam = {
        id: Date.now(),
        name: formData.get("name"),
        captain: formData.get("captain"),
        description: formData.get("description"),
        logo: event.target.result // base64 image
      };

      // Save to localStorage
      const teams = JSON.parse(localStorage.getItem("teams")) || [];
      teams.push(newTeam);
      localStorage.setItem("teams", JSON.stringify(teams));

      renderTeam(newTeam);

      // Reset form and close modal
      teamForm.reset();
      bootstrap.Modal.getInstance(document.getElementById("addTeamModal")).hide();
    };

    reader.readAsDataURL(formData.get("logo"));
  });

  // Load teams from localStorage
  function loadTeams() {
    const teams = JSON.parse(localStorage.getItem("teams")) || [];
    teams.forEach(renderTeam);
  }

  // Render a team card
 function renderTeam(team) {
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4";
  col.innerHTML = `
    <div class="card h-100 d-flex flex-row align-items-center">
      <img src="${team.logo}" class="team-logo me-3" alt="Team Logo">
      <div class="card-body p-2" style="color:#c5c6c7;">
        <h5 class="card-title" style="color: var(--accent); margin-bottom: 0.25rem;">${team.name}</h5>
        <p class="card-text" style="color:#c5c6c7; margin-bottom: 0.25rem;">Captain: ${team.captain}</p>
        <p class="card-text" style="color:#c5c6c7;">${team.description}</p>
        <a href="#" class="btn btn-sm btn-primary-acc">View Team</a>
      </div>
    </div>
  `;
  teamContainer.appendChild(col);
}


  loadTeams();
});
