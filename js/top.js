const backToTopButton = document.querySelector("#back-to-top-btn"); // حددت السكشن الي بدي اشتغل عليه
window.addEventListener("scroll", scrollFunction); // حددت انه لمن اعمل سكرول
function scrollFunction() {
    if (window.pageYOffset > 1000) { // لو وصلت في الصفحة ب 1000 بظهر الزر
        if(!backToTopButton.classList.contains("btnEntrance")) {
            // الاوامر التالية بتعمل على اظهار الزر لمن يوصل ل الحد المحدد
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    }else {
        if(backToTopButton.classList.contains("btnEntrance")) {
            // الاوامر التالية بتعمل على اخفاء الزر لمن يعدي الحد المحدد 
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}