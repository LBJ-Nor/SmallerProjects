const addedCircles = []
const deletedCircles = []

document.getElementById("undo").addEventListener("click", () => {
    let element = addedCircles.pop()
    deletedCircles.push(element)
    document.body.removeChild(element)
})

document.getElementById("redo").addEventListener("click", () => {
    let element = deletedCircles.pop();
    if (!element) {return}
    

    addedCircles.push(element)
    document.body.appendChild(element)
})




document.addEventListener("click", (e) => {
    if (e.clientY < 60) {return}

    deletedCircles.length = 0;

    let x = e.clientX;
    let y = e.clientY;
    console.log(x, y);


    let classElementStyle = getComputedStyle(document.querySelector(".circle"))
    let circleHeight = parseInt(classElementStyle.height);
    let circleWidth = parseInt(classElementStyle.width);

    let div = document.createElement("div")
    div.style.left = `${x - (circleWidth / 2)}px`;
    div.style.top = `${y - (circleHeight / 2)}px`;
    div.className = "circle"
    document.body.appendChild(div)
    addedCircles.push(div)
});
