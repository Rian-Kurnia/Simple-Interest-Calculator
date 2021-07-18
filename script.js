function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100
    var year = new Date().getFullYear()+parseInt(years);

    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML = "If you deposit " + principal +
            ", at an interest rate of " + rate + 
            "%.You will receive an amount of \<b\>" + interest +
            "\</b\>,in the year " + year + ".";
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}
 
//https://rian-kurnia.github.io/vftvk-Simple-Interest-Calculator/