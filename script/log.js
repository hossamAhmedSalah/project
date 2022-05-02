window.addEventListener("load", kek);

function kek(){
    var sub = document.getElementById("sub");
    sub.addEventListener("click",get);

    var nsub = document.getElementById("nsub");
    nsub.addEventListener("click",newa);
}

function newa(){
    document.getElementById('alertwrap').style.display='block';
    document.getElementById('alertbox').style.animation='fading 0.3s';

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
        if(gen=='Male')
            pre='Mr. ';
        else    
            pre='Ms. ';

        myalert("Account was successfully made "+pre+user);
        var bttn = document.getElementById("alertbtn");
        bttn.addEventListener("click",function(){
            location.reload();
        });
    }
    else{
        myalert("Please enter all fields");
        nsub.reset();
    }
}

function get(){
    document.getElementById('alertwrap').style.display='block';
    document.getElementById('alertbox').style.animation='fading 0.3s';


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
                myalert("Welcome "+lines[n+2]);
                setCookie('email',lines[n],30);
                setCookie('pass',lines[n+1],30);
                setCookie('user',lines[n+2],30);
                document.getElementById("log").style.display='inline';
                var bttn = document.getElementById("alertbtn");
                bttn.addEventListener("click",function(){
                    window.location.href='index.html';
                });
            }
            else if(email==getCookie("nemail=") && pass==getCookie('npass=') && email!=""){
                myalert("Welcome "+getCookie("nuser="));
                setCookie('email',getCookie('nemail='),30);
                setCookie('pass',getCookie('npass='),30);
                setCookie('user',getCookie('nuser='),30);
                document.getElementById("log").style.display='inline';
                bttn.addEventListener("click",function(){
                    window.location.href='index.html';
                });
            }
            else if(email==e && pass!=p && email!=""){
                myalert("Wrong password");
                sub.elements[1].value="";
            }
            else{
                myalert("Wrong credentials");
                sub.reset();
            }
        });
}

function myalert(str){
    let box = document.getElementById("alerttext");
    box.innerHTML=str;
}