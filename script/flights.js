$(document).ready(function(){
      
    let des = document.getElementById("des");
    var sair = document.getElementById("sair");

    $(des).focus(function (){
        sair.style.display='inline';
        console.log("it is on focus");   
    });

    $('#sair a').click(function(){
        console.log($(this.id));
        des.value=this.innerHTML;
        sair.style.display='none';
        console.log("it is out of focus");   
    })

    let dep = document.getElementById("dep");
    var pair = document.getElementById("pair");

    $(dep).focus(function (){
        pair.style.display='inline';
        console.log("it is on focus");   
    });

    $('#pair a').click(function(){
        console.log($(this.id));
        dep.value=this.innerHTML;
        pair.style.display='none';
        console.log("it is out of focus");   
    })
    let arr = document.getElementById("arr");
    let chk = document.getElementById("chk");
    chk.addEventListener("click", function(){
        if(chk.checked){
            arr.style.display="none";
        }
        else{
            arr.style.display="inline";
        }
    });
});