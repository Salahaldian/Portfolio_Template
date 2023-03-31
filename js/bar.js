let section = document.querySelector(".three"); //حددت السكشن الي بدي اشتغل عليه
let spans = document.querySelectorAll(".progress span"); //حددت العنصر الي بدي اشتغل عليه
window.onscroll = function () //لمن اعمل سكرول ف الصفحة وانزل ل اسفل
{
    if(window.scrollY >= section.offsetTop-800) // لمن اوصل لحد معين من الصفحة
    {
        console.log("Reached Section Three");
        spans.forEach((span) => {
        span.style.width = span.dataset.width;
        // كل الاسطر السابقة بتخلي العنصر يعمل الانيميشن المطلوب
        });
    }
};