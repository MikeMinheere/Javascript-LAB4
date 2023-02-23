var numOfBtn = prompt("hoeveel buttons wil je?");
const container = document.getElementById("container")
container.style.backgroundColor = "grey";
container.style.width = "60%";
container.style.padding = "1em"
container.style.margin = "auto";
container.style.display = "flex";
container.style.justifyContent = "space-between";
container.style.flexWrap = 'wrap';


for(i=1; i <=numOfBtn; i++){
    var button = document.createElement('button');
    button.innerHTML = `${i}`;
    button.setAttribute("id",`${i}`);
    container.appendChild(button);
    button.style.height = '10em';
    button.style.margin = '1em'
    button.style.backgroundColor = 'green';
    button.style.flex = '1 0 17%';
    button.style.fontSize = "1em"
    button.style.padding = '0'
}

var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        this.style.backgroundColor = 'red'
    }
}