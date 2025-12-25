document.addEventListener("DOMContentLoaded", () => {

  /* ---------- SNOW ---------- */
  const canvas = document.getElementById("snow");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const flakes = [];
  for (let i = 0; i < 150; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      s: Math.random() + 0.5
    });
  }

  function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    flakes.forEach(f => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();

      f.y += f.s;
      if (f.y > canvas.height) {
        f.y = 0;
        f.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(snow);
  }
  snow();

  /* ---------- MUSIC ---------- */
  const btn = document.getElementById("musicBtn");
  const music = new Audio("assets/bgm.mp3");
  music.loop = true;

  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play().catch(() => {});
      btn.textContent = "Music ON";
    } else {
      music.pause();
      btn.textContent = "Music OFF";
    }
  });

});