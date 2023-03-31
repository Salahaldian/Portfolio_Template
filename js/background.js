var section12 = document.querySelector('header') // حددت السكشن الي بدي اشتغل عليه
var images = [ "url('../images/web88.jpg')", "url('../images/web99.jpg')", "url('../images/web1111.jpg')" ]
//عملت مصفوفة وحطيت فيها الصور
setInterval( function() {
    // الميثود هادي بتعمل ع اظهار الصور بشكل عشوائي وبتغير الصورة كل 3 ثواني
    var bg = images[Math.floor(Math.random() * images.length)]
        section12.style.background = bg }
        ,3000)