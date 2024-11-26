
function myrull(){

    const numofdic = document.getElementById("numofdic").value;
    const result = document.getElementById("dicresult");
    const image = document.getElementById("dicimages");
    const values = [];
    const images = [];
    
    for(let i = 0; i <numofdic; i++){
        const value = Math.floor(Math.random() * 3) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png" >`)
    }
    
    result.innerHTML = `dice: ${values.join(', ')}`
    image.innerHTML = images;
}
