const radioUrl = "URL_DE_TU_RADIO";

  const audio = new Audio(radioUrl);
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const stopBtn = document.getElementById("stopBtn");

  playBtn.addEventListener("click", function() {
      audio.play();
  });

  pauseBtn.addEventListener("click", function() {
      audio.pause();
  });

  stopBtn.addEventListener("click", function() {
      audio.pause();
      audio.currentTime = 0;
  });