


    function doi1() {
        var element1 = document.getElementById("1");

        if (element1.getAttribute("src") === "cho1.PNG") {
            element1.src = "meo1.PNG";

        }else if (element1.getAttribute("src") === "meo1.PNG") {
            element1.src = "gau1.PNG";
        }else if (element1.getAttribute("src") === "gau1.PNG") {
            element1.src = "cho1.PNG";
        }
check();
    }

    function doi2() {
        var element2 = document.getElementById("2");

        if (element2.getAttribute("src") === "cho2.PNG") {
            element2.src = "meo2.PNG";
        }else
        if (element2.getAttribute("src") === "meo2.PNG") {
            element2.src = "gau2.PNG";
        }else if (element2.getAttribute("src") === "gau2.PNG") {
            element2.src = "cho2.PNG";
        }
check();
    }

    function doi3() {
        var element3 = document.getElementById("3");

        if (element3.getAttribute("src") === "cho3.PNG") {
            element3.src = "meo3.PNG";
        }else if (element3.getAttribute("src") === "meo3.PNG") {
            element3.src = "gau3.PNG";
        }else if (element3.getAttribute("src") === "gau3.PNG") {
            element3.src = "cho3.PNG";
        }
check();
    }

    function check() {
        element1 =  document.getElementById("1");
        element2 = document.getElementById("2");
        element3 = document.getElementById("3");
        if(
            element1.getAttribute("src") === "meo1.PNG"
            && element2.getAttribute("src") === "meo2.PNG"
            && element3.getAttribute("src") ==="meo3.PNG"
        ){
            alert("RIGHT");
        }
        if(
            element1.getAttribute("src") === "cho1.PNG"
            && element2.getAttribute("src") === "cho2.PNG"
            && element3.getAttribute("src") ==="cho3.PNG"
        ){
            alert("RIGHT");
        }
        if(
            element1.getAttribute("src") === "gau1.PNG"
            && element2.getAttribute("src") === "gau2.PNG"
            && element3.getAttribute("src") ==="gau3.PNG"
        ){
            alert("RIGHT");
        }

    }






