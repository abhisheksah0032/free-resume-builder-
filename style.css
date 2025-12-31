function generateResume() {
  document.getElementById("r-name").innerText =
    document.getElementById("name").value || "Your Name";

  document.getElementById("r-email").innerText =
    document.getElementById("email").value;

  document.getElementById("r-phone").innerText =
    document.getElementById("phone").value;

  document.getElementById("r-about").innerText =
    document.getElementById("about").value;

  document.getElementById("r-objective").innerText =
    document.getElementById("objective").value;

  document.getElementById("r-skills").innerText =
    document.getElementById("skills").value;

  document.getElementById("r-education").innerText =
    document.getElementById("education").value;

  document.getElementById("r-strengths").innerText =
    document.getElementById("strengths").value;
}

/* PHOTO PREVIEW */
document.getElementById("photo").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("r-photo").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
