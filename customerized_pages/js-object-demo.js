function concatDisplay(obj, element) {
    if ( element.innerHTML )
        element.innerHTML += "<br/>"
    element.innerHTML += JSON.stringify(obj);
}

function Parent() {
    this.name = "Parent";
    this.message = "Initial message from Parent";
}

function Child() {
    Parent.call(this);
    this.name = "Child";
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

let objects = new Array();
objects[0] = new Parent;
objects[0].message = "I am Obj-0";
objects[1] = new Parent;
objects[1].message = "I am Obj-1";
objects[2] = new Child;

document.write("<button id='btn-show-obj-demo'> Show Obj Demo </button> <br/>");
document.write("<output id='obj-demo'></output>");
let showResult = function () {
    for( let i in objects )
        concatDisplay(objects[i], document.getElementById("obj-demo"));
}
document.getElementById("btn-show-obj-demo").onclick = showResult;
