/* ================= DATA BINDING ================= */
function generateResume() {
    setText("r-name", "name");
    setText("r-email", "email");
    setText("r-phone", "phone");
    setText("r-skills", "skills");
    setText("r-education", "education");
    setText("r-about", "about");
    setText("r-objective", "objective");
    setText("r-strengths", "strengths");
}

function setText(resumeId, inputId) {
    document.getElementById(resumeId).innerText =
        document.getElementById(inputId).value;
}

/* ================= PHOTO UPLOAD ================= */
document.getElementById("photo").addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById("r-photo").src = reader.result;
    };
    reader.readAsDataURL(file);
});

/* ================= PDF DOWNLOAD (NO GAP) ================= */
function downloadResume() {
    const resume = document.getElementById("resume");

    const options = {
        margin: 0,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
            scale: 3,
            useCORS: true,
            scrollY: 0   // 🔥 IMPORTANT
        },
        jsPDF: {
            unit: "px",
            format: [794, 1123], // A4 exact
            orientation: "portrait"
        }
    };

    html2pdf().set(options).from(resume).save();
}
