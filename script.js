document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const bookingSection = document.getElementById("bookingSection");
  const bookingForm = document.getElementById("bookingForm");
  const summary = document.getElementById("summary");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
     
      document.querySelector(".login-section").classList.add("hidden");
      bookingSection.classList.remove("hidden");
    });
  }


  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault(); 

     
      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;
      const mode = document.getElementById("mode").value;
      const quantity = document.getElementById("quantity").value;
      const datetime = document.getElementById("datetime").value;
      const paymentMode = document.getElementById("paymentMode").value;
      const comments = document.getElementById("comments").value;

      const summaryText = `
        From: ${from}  
        To: ${to}  
        Mode: ${mode}  
        Tickets: ${quantity}  
        Date & Time: ${datetime}  
        Payment Mode: ${paymentMode}  
        Comments: ${comments || "None"}
      `;

      
      summary.innerText = summaryText;

      
      const confirmBooking = confirm("Do you really want to confirm this booking?\n\n" + summaryText);
      if (confirmBooking) {
        alert("Booking confirmed!");
        bookingForm.reset(); 
        summary.innerHTML = ""; 
      } else {
        alert("Booking cancelled.");
      }
    });
  }
});
