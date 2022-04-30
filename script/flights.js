$(document).ready(function(){
      
    var des = document.getElementById("des");
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

    var dep = document.getElementById("dep");
    var pair = document.getElementById("pair");

    $(dep).focus(function (){
        pair.style.display='inline';
        console.log("it is on focus");   
    });

    $('#pair a').click(function (){
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

    let bttn = document.getElementById('falertbtn');
    var alerty = document.getElementById('falertwrap');

    bttn.addEventListener("click",function(){
        alerty.style.display='none';
    });

    let ssub = document.getElementById('ssub');
    ssub.addEventListener("click",lmao);


});

function lmao(){
    if(des.value=='' || dep.value==''){
        myalert("Fill all fields please");
    }
    else if(des.value==dep.value && dep.value!=""){
        myalert('Cant set destination as departure')
        des.value='';
    }
    else{
        meow();
    }
}

function myalert(str){
    let alerty = document.getElementById('falertwrap');
    alerty.style.display='block';
    document.getElementById('falertbox').style.animation='fading 0.3s';
    document.getElementById('falerttext').innerHTML=str;
}

function meow(){
    document.getElementById("results").style.display='block';
    var dep = document.getElementById("dep").value;
    var des = document.getElementById("des").value;

    var images = ['style/flight/bingsus.webp','style/flight/flopair.webp','style/flight/chad.webp','style/flight/ket.webp','style/flight/ameno.webp']
    var names = ['Bingsus','Flopair','Chad air', 'Ket travels', 'Ameno flights'];
    let num = Math.floor(Math.random() * 8);

    console.log("kek1"+num);
    for(let x=0;x<num;x++){
        let kek = Math.floor(Math.random() * 5);
        $divclone = $("#aircard").clone();
        console.log("kek2"+kek);

        $divclone.attr("class", "");
        $divclone.find("img").attr('src',images[kek]);
        $divclone.find("#aname").html(names[kek]);
        $divclone.find("#from").html(dep);
        $divclone.find("#to").html(des);
        $divclone.find("#aclass").html($("#clselect").val());

        $("#results").append($divclone);
    }
}