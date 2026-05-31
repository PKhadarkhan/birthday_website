document.addEventListener("DOMContentLoaded", function () {
    // Target date: 5 seconds from now (for test run)
    // const targetDate = new Date("June 1, 2026 00:00:00").getTime();
    const targetDate = new Date().getTime() + 6000;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // If countdown is over, set everything to 00
        if (distance < 0) {
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";

            // Redirect to the new video page when timer ends
            window.location.href = "video.html";
            return;
        }

        // Time calculations for hours, minutes and seconds
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add leading zeros if needed
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }

    // Update the countdown every 1 second
    setInterval(updateCountdown, 1000);

    // Initial call to set it immediately
    updateCountdown();
});
