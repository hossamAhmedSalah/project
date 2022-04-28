window.addEventListener("load", kek);

function kek(){
    var sub = document.getElementById("sub");
    sub.addEventListener("click",get);

    var nsub = document.getElementById("nsub");
    nsub.addEventListener("click",newa);
}

function getCookie(str){
    if(document.cookie == ''){
        return "";
    }
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith(str)).split('=')[1];
    return cookieValue;
}

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function newa(){
    var nsub = document.getElementById("signup");

    let user = nsub.elements[0].value;
    let email = nsub.elements[1].value;
    let pass = nsub.elements[2].value;
    let gen = nsub.elements[3].value;
    var pre ='';

    if(email!='' && user!='' && pass!=''){
        setCookie('nemail',email,90);
        setCookie('npass',pass,90);
        setCookie('nuser',user,90);
        if(gen=='male')
            pre='Mr. ';
        else    
            pre='Ms. ';

        alert("Account was successfully made "+pre+user);
        location.reload();
    }
    else{
        alert("Please enter all fields");
        nsub.reset();
    }
}

function get(){
    var sub = document.getElementById("signin");

    fetch("./script/data.txt")
        .then(response => response.text())
        .then(data =>{
            let email = sub.elements[0].value;
            let pass = sub.elements[1].value;

            let lines = data.split("\\").join(",").split(",");

            for(let x=0;x<lines.length;x+=3){
                if(lines[x]==email){
                    var n=x;
                }
            }
            let e = lines[n];
            let p = lines[n+1];

            if(email==e && pass==p){
                alert("Welcome "+lines[n+2]);
                setCookie('email',lines[n],30);
                setCookie('pass',lines[n+1],30);
                setCookie('user',lines[n+2],30);
                document.getElementById("log").style.display='inline';
                window.location.href='index.html';
            }
            else if(email==getCookie("nemail=") && pass==getCookie('npass=')){
                alert("Welcome "+getCookie("nuser="));
                setCookie('email',getCookie('nemail='),30);
                setCookie('pass',getCookie('npass='),30);
                setCookie('user',getCookie('nuser='),30);
                document.getElementById("log").style.display='inline';
                window.location.href='index.html';
            }
            else if(email==e && pass!=p){
                alert("Wrong password");
                sub.elements[1].value="";
            }
            else{
                alert("Wrong credentials");
                sub.reset();
            }
        });
}