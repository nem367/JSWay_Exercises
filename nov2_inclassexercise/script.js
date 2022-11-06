let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () =>{
    checker();
    runValidation();
});

let check = document.getElementById("checkbox");

function checker() {
    if(document.getElementById("firstname").value === ""){
        document.getElementById("firstname").style.border="3px solid red";
    }
    if(document.getElementById("lastname").value === ""){
        document.getElementById("lastname").style.border="3px solid red";
    }
    if(document.getElementById("email").value === ""){
        document.getElementById("email").style.border="3px solid red";
    }
    if(check.checked === false){
        console.log("Checkbox is not checked");
        // check.style.border="3px solid red";
    }
    if(document.getElementsByClassName("checkText").value !== "" && check.checked === true && runValidation() === true){
        submitButton.style.display="none";
        // document.body.insertAdjacentHTML("beforeEnd", '<div class="loader" style="border-top:16px solid blue; border-right:16px solid green; border-bottom:16px solid red; border-left:16px solid pink; border-radius: 50%;width: 120px; height: 120px; animation: spin 2s linear infinite;"></div>');

        var loaderSpin = document.createElement("div");
        loaderSpin.id = "loader"; 
        loaderSpin.style.borderTop="16px solid blue";
        loaderSpin.style.borderRight="16px solid green";
        loaderSpin.style.borderBottom="16px solid red";
        loaderSpin.style.borderLeft="16px solid pink";
        loaderSpin.style.borderRadius="50%";
        loaderSpin.style.width="120px";
        loaderSpin.style.height="120px";
        loaderSpin.style.animation="spin 2s linear infinite";
        document.body.appendChild(loaderSpin);

        const timeOut = setTimeout(timeOutFunction, 3000);

        function timeOutFunction(){
            loaderSpin.style.display="none";
            document.body.insertAdjacentHTML("beforeEnd", '<p>Thanks for signing up!</p>');
            console.log("3 sec passed");
        }

        // var spin = {
        //     "0% { "transform": "rotate(0deg)"; "} 
        //     "100% { "transform": "rotate(360deg)";" }
        // }
        // loaderSpin.appendChild(spin);
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log("AAAAH");
    return re.test(email);
}

function runValidation(){
    const emailEntered = document.getElementById("email").value;

    if(validateEmail(emailEntered)){
        console.log("email yes");
        return true;
    }else{
        console.log("email no");
        return false;
    }
}
