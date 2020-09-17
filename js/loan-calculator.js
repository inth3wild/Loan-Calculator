console.log("Working...")

// P = i*A/1-(1+i)^-N

function calculateResults(e) {
    // var P = 30;
    // var i = 10;
    // var A = 20;
    // var N = 5;

    // console.log(P,i,A,N)

    var i = document.getElementById("interest").value;
    var A = document.getElementById("amount").value;
    var N = document.getElementById("time").value;

    var ans = (i * A) / 1 - Math.pow( (1+i), -N);

    console.log(ans)

    // e.preventDefault();
}

calculateResults()