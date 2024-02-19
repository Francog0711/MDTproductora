const radioUrl = "URL_DE_TU_RADIO";
  const audio = new Audio(radioUrl);
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const stopBtn = document.getElementById("stopBtn");
  const radioStatus = document.getElementById("radioStatus");

  playBtn.addEventListener("click", function() {
      audio.play();
      radioStatus.textContent = "En línea";
  });

  pauseBtn.addEventListener("click", function() {
      audio.pause();
      radioStatus.textContent = "Parado";
  });

  stopBtn.addEventListener("click", function() {
      audio.pause();
      audio.currentTime = 0;
      radioStatus.textContent = "Fuera de servicio";
  }); 