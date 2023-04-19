function calculateAge(){
    let d1 = document.querySelector("#day").value;
    let m1 = document.querySelector("#month").value;
    let y1 = document.querySelector("#year").value;

    if (!validInputs(d1, m1, y1)) {
        return;
    }else{
        validInputs()
    }

    let date = new Date();

    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();

    let months = [31,28,31,30,31,30,31,31,30,31,30,31]

    if( d1 > d2){
        d2 = d2 + months[m2 - 1]
        m2 = m2 - 1
    }

    if( m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1
    }

    let dDiff = d2 - d1;
    let mDiff = m2 - m1;
    let yDiff = y2 - y1

    let dResult = document.querySelector(".days");
    dResult.innerHTML = dDiff;

    let mResult = document.querySelector(".months");
    mResult.innerHTML = mDiff;

    let yResult = document.querySelector(".years");
    yResult.innerHTML = yDiff;
}

const button = document.querySelector('button');
button.addEventListener('click', function() {
    if(validInputs()){
        calculateAge()
    }
});





function validInputs (){
    let d = parseInt(document.querySelector("#day").value);
    let m = parseInt(document.querySelector("#month").value);
    let y = parseInt(document.querySelector("#year").value);
    
    let date = new Date()
    let months = [31,28,31,30,31,30,31,31,30,31,30,31]

    let dInvalid = document.querySelector("#day + .input-error--message")
    let mInvalid = document.querySelector("#month + .input-error--message")
    let yInvalid = document.querySelector("#year + .input-error--message")
    

        if (d < 0 || d > months[m - 1]) {
            dInvalid.innerHTML = "Must be a valid day";
            document.querySelector("#day").classList.add("input-error--border");
            document.querySelector(".day-error").classList.add("input-error--label")
            return false
        } else {
            dInvalid.textContent = "";
            document.querySelector("#day").classList.remove("input-error--border");
            document.querySelector(".day-error").classList.remove("input-error--label")
        }
        
        if (m < 1 || m > 12) {
            mInvalid.textContent = "Must be a valid month";
            document.querySelector("#month").classList.add("input-error--border");
            document.querySelector(".month-error").classList.add("input-error--label")
            return false;
        } else {
            mInvalid.textContent = "";
            document.querySelector("#month").classList.remove("input-error--border");
            document.querySelector(".month-error").classList.remove("input-error--label")
        }

        if (y < 0 || y > date.getFullYear()) {
            yInvalid.textContent = "Must be a valid year";
            document.querySelector("#year").classList.add("input-error--border");
            document.querySelector(".year-error").classList.add("input-error--label")
            return false;
        } else if (y === date.getFullYear() && m > date.getMonth()){
            mInvalid.textContent = "Must be a valid month";
            document.querySelector("#month").classList.add("input-error--border");
            document.querySelector(".month-error").classList.add("input-error--label")
            return false;
        }else{
            yInvalid.textContent = "";
            document.querySelector("#year").classList.remove("input-error--border");
            document.querySelector(".year-error").classList.remove("input-error--label")
        }

    return true;
}

