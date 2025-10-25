// Scroll smooth untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Handle form submit
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const messageText = document.getElementById("messageText").value.trim();
  const result = document.getElementById("result");
  const welcomeText = document.getElementById("welcome-text");

  // Validasi form
  if (!name || !birthdate || !gender || !messageText) {
    alert("Tolong lengkapi data Anda!");
    return;
  }

  // Update teks sambutan
  welcomeText.textContent = `Hi, ${name}! Welcome To Website`;

  //Tampilkan Timestamp
  const now = new Date();
  document.getElementById("timestamp").textContent =
    "Terkirim : " + now.toLocaleString();

  // Tampilkan hasil input
  result.innerHTML = `
    <b>Nama:</b> ${name} <br>
    <b>Tanggal Lahir:</b> ${birthdate} <br>
    <b>Jenis Kelamin:</b> ${gender.value} <br>
    <b>Pesan:</b> ${messageText}
  `;

  // Reset form
  this.reset();
});
