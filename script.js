const appointmentForm = document.getElementById("appointmentForm");
const successMsg = document.getElementById("appoint-success");

appointmentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const bookingId = "BK" + Date.now();

    alert(`Appointment booked successfully!\nBooking ID: ${bookingId}`);

    const message = `New Appointment
Booking ID: ${bookingId}
Name: ${this.name.value}
Phone: ${this.phone.value}
Date: ${this.date.value}
Time: ${this.time.value}
Message: ${this.message.value}`;

    const phone = "+918309451136";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    successMsg.style.display = "block";
    setTimeout(() => {
        successMsg.style.display = "none";
        this.reset();
    }, 2500);
});


document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const container = document.getElementById("reviews-container");
    const user = this.user.value;
    const review = this.review.value;
    const date = new Date().toISOString().split("T")[0];

    container.innerHTML += `
        <div class="review">
            <strong>${user}</strong>
            <span>${date}</span>
            <p>${review}</p>
        </div>
    `;
    this.reset();
});