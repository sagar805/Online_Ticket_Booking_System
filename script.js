// Handle Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    document.querySelector(".login-section").classList.add("hidden");
    document.getElementById("bookingSection").classList.remove("hidden");
  }
});

// Ticket pricing by mode
const ticketPricing = {
  Train: [
    { label: "Sleeper – ₹150", value: 150 },
    { label: "AC – ₹300", value: 300 }
  ],
  Flight: [
    { label: "Economy – ₹2000", value: 2000 },
    { label: "Business – ₹5000", value: 5000 }
  ],
  Bus: [
    { label: "Non-AC – ₹100", value: 100 },
    { label: "AC – ₹250", value: 250 }
  ]
};

// Update ticket options based on selected mode
document.getElementById("mode").addEventListener("change", function () {
  const mode = this.value;
  const ticketOptions = document.getElementById("ticketOptions");
  ticketOptions.innerHTML = "";

  if (ticketPricing[mode]) {
    const label = document.createElement("label");
    label.textContent = "Ticket Type";
    ticketOptions.appendChild(label);

    const radioGroup = document.createElement("div");
    radioGroup.classList.add("radio-group");

    ticketPricing[mode].forEach((ticket, index) => {
      const optionLabel = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "ticket";
      radio.value = ticket.value;
      if (index === 0) radio.checked = true;

      optionLabel.appendChild(radio);
      optionLabel.append(" " + ticket.label);
      radioGroup.appendChild(optionLabel);
    });

    ticketOptions.appendChild(radioGroup);
  }
});

// Handle Booking
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const mode = document.getElementById("mode").value;
  const ticketPrice = parseInt(document.querySelector('input[name="ticket"]:checked').value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const dateTime = document.getElementById("datetime").value;
  const paymentMode = document.getElementById("paymentMode").value;
  const comments = document.getElementById("comments").value;

  const total = ticketPrice * quantity;

  const summary = `
    <p><strong>Booking Summary:</strong></p>
    <p>From: ${from}</p>
    <p>To: ${to}</p>
    <p>Mode: ${mode}</p>
    <p>Ticket Price: ₹${ticketPrice}</p>
    <p>Quantity: ${quantity}</p>
    <p>Date & Time: ${dateTime}</p>
    <p>Payment Mode: ${paymentMode}</p>
    <p>Comments: ${comments || "None"}</p>
    <p><strong>Total: ₹${total}</strong></p>
  `;

  document.getElementById("summary").innerHTML = summary;
});
