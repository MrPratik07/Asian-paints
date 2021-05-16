const applyClickHandler = () =>{
    const wallId = document.getElementById("wall_id").value;
    const wallColor = document.getElementById("wall_color").value;
    //console.log(wallId);
    //console.log(wallColor);
    document.getElementById(wallId).style.backgroundColor=wallColor;
}

function resetClickHandler(){
    const walls = document.querySelectorAll(".wall");
    for(var i = 0; i < walls.length; i++){
        walls[i].style.backgroundColor = "transparent";
    }
}