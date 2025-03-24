document.addEventListener("DOMContentLoaded", function () {
    const ageSelect = document.getElementById("age");
    const personalInfoSection = document.getElementById("personal-info");

    ageSelect.addEventListener("change", function () {
        if (this.value === "yes") {
            personalInfoSection.style.display = "block";
        } else {
            personalInfoSection.style.display = "none";
            alert("You must be 18 or older to apply for a driving license.");
        }
    });

    document.getElementById("applyForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your application has been submitted successfully!");
    });
});
