function myFun() {
    var a = document.form1.txtname.value;
    document.getElementById("Nname").innerHTML = a;
    var b = document.form1.txtfname.value;
    document.getElementById("Fname").innerHTML = b;
    var c = document.form1.txtins.value;
    document.getElementById("Iins").innerHTML = c;
    var d = document.form1.txtbatch.value;
    document.getElementById("Bbatch").innerHTML = d;
    var e = document.form1.txtoffice.value;
    document.getElementById("Ooffice").innerHTML = e;
    var f = document.form1.txtweb.value;
    document.getElementById("Wweb").innerHTML = f;
    var g = document.form1.txtit.value;
    document.getElementById("Iit").innerHTML = g;
    var h = document.form1.txtc.value;
    document.getElementById("Cc").innerHTML = h;
    var txt1 = eval(parseFloat(document.form1.txtoffice.value) + parseFloat(document.form1.txtweb.value)
        + parseFloat(document.form1.txtit.value) + parseFloat(document.form1.txtc.value));
    document.getElementById("Ttotal").innerHTML = txt1;
    var txt2 = eval(parseFloat(txt1 * 100) / 400);
    document.getElementById("Pper").innerHTML = txt2.toFixed(2) + "%";

    switch (true) {
        case (txt2 >= 80):
            document.getElementById("Ggrade").innerHTML = "A1";
            break;
        case (txt2 >= 70):
            document.getElementById("Ggrade").innerHTML = "A";
            break;
        case (txt2 >= 60):
            document.getElementById("Ggrade").innerHTML = "B";
            break;
        case (txt2 >= 50):
            document.getElementById("Ggrade").innerHTML = "C";
            break;
        case (txt2 >= 40):
            document.getElementById("Ggrade").innerHTML = "D";
            break;
        case (txt2 < 40):
            document.getElementById("Ggrade").innerHTML = "Fail";
            break;
    }

}
