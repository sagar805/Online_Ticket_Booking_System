// Handle Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    document.querySelector(".login-section").classList.add("hidden");
    document.getElementById("bookingSection").classList.remove("hidden");
  }
});

// Handle Booking
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const ticketPrice = parseInt(document.querySelector('input[name="ticket"]:checked').value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const dateTime = document.getElementById("datetime").value;
  const paymentMode = document.getElementById("paymentMode").value;
  const comments = document.getElementById("comments").value;

  const total = ticketPrice * quantity;

  const summary = `
    <p><strong>Booking Summary:</strong></p>
    <p>Ticket Price: ₹${ticketPrice}</p>
    <p>Quantity: ${quantity}</p>
    <p>Date & Time: ${dateTime}</p>
    <p>Payment Mode: ${paymentMode}</p>
    <p>Comments: ${comments || "None"}</p>
    <p><strong>Total: ₹${total}</strong></p>
  `;

  document.getElementById("summary").innerHTML = summary;
});
