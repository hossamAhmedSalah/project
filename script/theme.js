window.onload = function(){  

    let sign = document.getElementById("sign");

    if(document.cookie == ''){
        if(window.matchMedia('(prefers-color-scheme: light)').matches){
            setCookie('email','',90);
            document.cookie = 'set=light';
        }
        else{
            document.cookie = 'set=dark';
        }
    }

    if(getCookie("email=")!=""){
        sign.innerHTML=getCookie("user=");
        sign.style.width=(sign.innerHTML.length+3).toString()+"vh";
        sign.removeAttribute("onclick");
        document.getElementById("log").style.display='inline';
    }

    let link = document.getElementById('kek');
    let btn = document.getElementById("btn");

    if(getCookie("set=") == 'dark'){
        btn.innerHTML = "Light Mode";
        link.setAttribute("href","style/dark.css");
    }
    else{
        btn.innerHTML = "Dark Mode";
        link.setAttribute("href","style/light.css");
    }

    btn.addEventListener("click",dark);

    var log = document.getElementById("log");
    log.addEventListener("click",leave);
}

function dark(){
    let link = document.getElementById('kek');
    let src = link.getAttribute("href");
    let btn = document.getElementById("btn");

    if(src=='style/light.css'){
        link.setAttribute("href","style/dark.css");
        btn.innerHTML = "Light Mode";
        setCookie('set','dark',90);
    }
    else{
        link.setAttribute("href","style/light.css");
        btn.innerHTML = "Dark Mode";
        setCookie('set','light',90);
    }
}

function getCookie(str){
    if(document.cookie == ''){
        return "";
    }

    if(document.cookie!= undefined){
        console.log(document.cookie.split('; '));
        const cookieValue = document.cookie.split('; ').find(row => row.startsWith(str)).split('=')[1];
        return cookieValue;
    }
    return "";

}

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function leave(){
    let sign = document.getElementById("sign");
    setCookie("user","",30);
    setCookie("email","",30);
    setCookie("pass","",30);
    sign.innerHTML="Sign in";
    location.reload();
}