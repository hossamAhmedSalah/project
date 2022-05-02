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
        if($('#chk').is(':checked')){
            meow();
        }
        else{
            let darr = document.getElementById("darr").value;
            let ddepa = document.getElementById("ddepa").value;

            let arrm = darr.split("-")[1];
            let arrd = darr.split("-")[2];

            let depam = ddepa.split("-")[1];
            let depad = ddepa.split("-")[2];

            if(arrm<depam){
                myalert('Arrival cant be before departure');
                darr.value='';
            }
            else if(arrm==depam){
                if(arrd<depad){
                    myalert('Arrival cant be before departure');
                    darr.value='';
                }
                else{
                    meow();
                }
            }
            else{
                meow();
            }
        }
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

    var images = ['style/flight/egyptair.webp','style/flight/flopair.webp','style/flight/emirates.webp','style/flight/japan.webp','style/flight/omanair.webp','style/flight/singapore.webp','style/flight/gulf.webp','style/flight/italy.webp']
    var names = ['Egypt Air','Flopair','Emirates', 'Japan Airlines', 'Oman Air', 'Singapore Airlines','Gulf Air','Italy Airways'];
    var links = ['https://www.egyptair.com/',
                'https://i.redd.it/bwad7fvpv3c61.jpg',
                'https://www.emirates.com/',
                'https://www.jal.com/',
                'https://www.omanair.com/',
                'https://www.singaporeair.com/',
                'https://www.gulfair.com/',
                'https://www.ita-airways.com/en_en'];

    let num = Math.floor(Math.random() * 6);
    let adult = document.getElementById("adu").value*1;
    let children = document.getElementById("chi").value*0.7;
    let infant = document.getElementById("inf").value*0.4;

    let passen = adult+children+infant;

    let clls=0;
    if($("#clselect").val()=='Economy'){
        clls=1;
    }
    else{
        clls=1.5;
    }

    for(let x=0;x<num;x++){
        let kek = Math.floor(Math.random() * 8);
        let pprice = 300+Math.floor(Math.random() * 600);
        let time = 2+Math.floor(Math.random() * 6);
        
        $divclone = $("#aircard").clone();

        $divclone.attr("class", "");
        $divclone.find("img").attr('src',images[kek]);
        $divclone.find("#imglink").attr('href',links[kek]);
        $divclone.find("#imglink").attr('target','_blank');
        
        $divclone.find("#aname").html(names[kek]);
        $divclone.find("#aname").attr('href',links[kek]);
        $divclone.find("#aname").attr('target','_blank');

        $divclone.find("#price").html("$"+(passen*pprice*clls));
        $divclone.find("#time").html(time+" hrs");
        $divclone.find("#from").html(dep);
        $divclone.find("#to").html(des);
        $divclone.find("#aclass").html($("#clselect").val());

        $divclone.attr("style", "fading 0.4s");
        $("#results").append($divclone).fadeIn(600);
    }
    
}