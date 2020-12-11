const color = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const btnAction = document.querySelector(".btn");

btnAction.addEventListener("click", () => {

    let hex = "#";

    for(i=0;i<6;i++) {

        hex += color[getrandom()];

    }

    console.log(hex)

    document.body.style.backgroundColor = hex;

})

function getrandom () {
    return Math.floor(Math.random()*color.length);
};