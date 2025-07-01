document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Fake login - no backend
  const email = document.getElementById("email").value;
  if (email) {
    document.querySelector(".login-section").classList.add("hidden");
    document.getElementById("bookingSection").classList.remove("hidden");
  }
});

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const ticketPrice = parseInt(document.querySelector('input[name="ticket"]:checked').value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const dateTime = document.getElementById("datetime").value;
  const comments = document.getElementById("comments").value;

  const total = ticketPrice * quantity;

  const summary = `
    Ticket Price: ₹${ticketPrice}<br>
    Quantity: ${quantity}<br>
    Date & Time: ${dateTime}<br>
    Comments: ${comments}<br>
    <strong>Total: ₹${total}</strong>
  `;

  document.getElementById("summary").innerHTML = summary;
});
