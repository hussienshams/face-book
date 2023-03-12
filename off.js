    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}




function avrage() {
    var a = 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20;
    var b = 10;
    return a / b;
}
console.log(avrage("a,b"))