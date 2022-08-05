function light(sw){
    var pic
    var bg = document.getElementById('bg')
    if(sw == 0){
        pic = "https://i.ibb.co/z7gX2GX/on.png"
    }

    else{
        pic = "https://i.ibb.co/4gLYqqb/off.png"

    }

    if(sw == 1){
        bg.style.backgroundColor="black"
    }
    if(sw == 0){
        bg.style.backgroundColor="white"
    }
    document.getElementById('blub').src = pic
}