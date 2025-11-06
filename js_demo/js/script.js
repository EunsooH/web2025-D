function askQuestion() {
    var p = prompt("what is your favorite korean food")
    if (p !=null) {
    document.getElementById ("question").innerHTML='NO '+ p + ".IT'S ALWAYS KIMCHIE.";
    }
}