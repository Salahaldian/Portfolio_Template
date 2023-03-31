var i = 0,text; // عرفت متغيرين
text = "Back End Developer With Php Laravel"; // في المتغير الثاني اديته نص (قيمة)
function typing(){
    if(i<text.length){ // يفحط لو المتغير اقل من طول النص
        document.getElementById("text").innerHTML += text.charAt(i); // برجع الي الحرف
        i++; // بزيد قيمة المتغير عشان يكمل لف على باقي احرف النص
        setTimeout(typing,34); // سرعة ظهور النص
    }
}
typing(); // هان عشان يرجع الي الميثود وتنطبع ب الصفحة