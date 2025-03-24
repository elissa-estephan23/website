document.addEventListener("DOMContentLoaded", function() {
    const langToggle = document.getElementById("lang-toggle");

    langToggle.addEventListener("click", function() {
        if (document.documentElement.lang === "en") {
            document.documentElement.lang = "ar";
            langToggle.textContent = "English";
            translateToArabic();
        } else {
            document.documentElement.lang = "en";
            langToggle.textContent = "العربية";
            translateToEnglish();
        }
    });

    function translateToArabic() {
        document.querySelector("h1").textContent = "مرحبًا بكم في بوابة خدمات نفع";
        document.querySelector("p").textContent = "قم بتبسيط إجراءات رخصة القيادة وتسجيل المركبات في لبنان.";
        document.querySelector(".quick-access h2").textContent = "الوصول السريع";
        document.querySelectorAll(".services a")[0].textContent = "تقديم طلب رخصة قيادة";
        document.querySelectorAll(".services a")[1].textContent = "تجديد رخصة القيادة";
        document.querySelectorAll(".services a")[2].textContent = "تسجيل المركبة";
        document.querySelectorAll(".services a")[3].textContent = "طلب نسخة مكررة";
    }

    function translateToEnglish() {
        document.querySelector("h1").textContent = "Welcome to the Nefaa Services Portal";
        document.querySelector("p").textContent = "Simplify your driving license and vehicle registration processes in Lebanon.";
        document.querySelector(".quick-access h2").textContent = "Quick Access";
        document.querySelectorAll(".services a")[0].textContent = "Apply for Driving License";
        document.querySelectorAll(".services a")[1].textContent = "Renew Driving License";
        document.querySelectorAll(".services a")[2].textContent = "Vehicle Registration";
        document.querySelectorAll(".services a")[3].textContent = "Duplicate License";
    }
});