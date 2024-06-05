window.onload= loaded;

function loaded()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    
}

var state = {
    i : 0,
    j:0,
    k:0
};

function nexttop()
{
    console.log("inside function nexttop");
    console.log(state.i);
    var top=document.getElementById("tops");
    if(state.i===0){
    top.setAttribute("class","white_tanktop");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    top.setAttribute("class","blue_polo");
         state.i++;
         console.log(state.i);
    }
    else
    if(state.i===2){
    top.setAttribute("class","brown_sweatshirt");
         state.i++;
         console.log(state.i);
    }
    else
    if(state.i===3){
    top.setAttribute("class","gray_tee");
         state.i++;
         console.log(state.i);
    }
    else
    if(state.i===4){
    top.setAttribute("class","black_turtleneck");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===5){
    top.setAttribute("class","graygreen_tee");
         state.i=0;
    }

    
}

function nextbottom()
{
    console.log("inside function next_bottom");
    console.log(state.j);
    var bottom=document.getElementById("bottoms");
    if(state.j===0){
    bottom.setAttribute("class","blue_jeans");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    bottom.setAttribute("class","brown_pants");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    bottom.setAttribute("class","gray_sweatpants");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===3){
        bottom.setAttribute("class", "brown_shorts");
        state.j=0;
     }
    
}

function nextsock()
{
    console.log("inside function next_sock")
    console.log(state.k);
    var sock=document.getElementById("socks");
    if(state.k===0){
        sock.setAttribute("class", "white_socks");
            state.k++;
            console.log(state.k);
    }
    else
     if(state.k===1){
        sock.setAttribute("class", "black_socks");
            state.k=0;
     }
}