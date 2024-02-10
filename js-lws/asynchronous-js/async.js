const paymentSuccess = true;
const marks = 70;
function enroll(clallback) {
  console.log("Enrollment on going..");
  if (paymentSuccess) {
    clallback();
  } else {
    console.log("Payment Failed!");
  }
}

function progress(clallback) {
  console.log("Course in progress...");
  if (marks >= 80) {
    clallback();
  } else {
    console.log("❌ You are not eligible for the certificate");
  }
}
function getCertificate() {
  console.log("✅ Congratulations! Your certificate is ready.");
}

enroll(() => {
  progress(getCertificate);
});
