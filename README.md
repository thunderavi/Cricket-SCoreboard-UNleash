# 🏏 Cricket Scoreboard Workflow

Check out the live app here: [Cricket Scoreboard](https://cricket-s-coreboard-u-nleash.vercel.app/)

---

## Animated Workflow

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cricket Scoreboard Workflow</title>
<style>
  body {
    background: #1e1e1e;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }
  .container {
    text-align: center;
    max-width: 500px;
  }
  h1 {
    margin-bottom: 20px;
    color: #ffd700;
  }
  .step {
    font-size: 1.3rem;
    background: #333;
    margin: 15px 0;
    padding: 15px;
    border-radius: 10px;
    opacity: 0;
    transform: translateY(50px);
  }
</style>
</head>
<body>
<div class="container">
  <h1>🏏 Cricket Scoreboard Workflow</h1>
  <div class="steps">
    <div class="step">📝 Signup → Create account</div>
    <div class="step">🏏 Create Team → Add your team</div>
    <div class="step">👥 Add Players → 11 players</div>
    <div class="step">🎯 Create Match → Team1 vs Team2</div>
    <div class="step">🎲 Toss → Winner chooses bat/bowl</div>
    <div class="step">📊 Scoreboard → Track runs/wkts</div>
    <div class="step">🏆 Result → Match finished</div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.14.1/gsap.min.js"></script>
<script>
  const steps = document.querySelectorAll('.step');

  steps.forEach((step, i) => {
    gsap.to(step, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.6,
      ease: "power3.out"
    });
  });

  gsap.to(steps[steps.length-1], {
    backgroundColor: "#28a745",
    color: "#fff",
    repeat: -1,
    yoyo: true,
    duration: 0.6,
    delay: steps.length * 0.6
  });

  steps.forEach((step, i) => {
    setTimeout(() => {
      localStorage.setItem(`step${i+1}`, step.textContent);
    }, i * 600);
  });
</script>
</body>
</html>
