// ---------------- Slider animation -----------------
const speedSeconds = 20;
document.querySelectorAll('.slider-track').forEach(track => {
  track.style.animationDuration = speedSeconds + 's';
});

const viewport = document.querySelector('.slider-viewport');
if (viewport) {
  viewport.addEventListener('touchstart', () => {
    document.querySelectorAll('.slider-track').forEach(t => t.style.animationPlayState = 'paused');
  });
  viewport.addEventListener('touchend', () => {
    document.querySelectorAll('.slider-track').forEach(t => t.style.animationPlayState = 'running');
  });
}

// ---------------- Navbar login/logout -----------------
function updateNavbar() {
  const navbar = document.querySelector(".navbar-nav");
  const signupBtnContainer = document.querySelector(".d-flex");

  if (!navbar) return;

  if (localStorage.getItem("isLoggedIn") === "true") {
    navbar.innerHTML = `
      <li class="nav-item"><a class="nav-link" href="/index.html">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="./Pages/Team.html">Teams</a></li>
      <li class="nav-item"><a class="nav-link" href="./Pages/Dash.html">Dashboard</a></li>
      <li class="nav-item"><a class="nav-link logout-btn" href="#">Logout</a></li>
    `;

    if (signupBtnContainer) {
      signupBtnContainer.innerHTML = `
        <a class="btn btn-sm btn-secondary logout-btn" href="#" style="min-width:110px">Logout</a>
      `;
    }

    // Bind logout action to all logout buttons
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
      signupBtnContainer.innerHTML = `
        <a class="btn btn-sm btn-primary-acc" href="./Pages/SignUp.html" style="min-width:110px">Sign Up</a>
      `;
    }
  }
}

// Call this on every page load
document.addEventListener("DOMContentLoaded", updateNavbar);
