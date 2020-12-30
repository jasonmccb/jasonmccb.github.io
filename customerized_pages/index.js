//  Comment
//  console.log('Hello World');

let obj = {
    name: 'McShh',
    age: 30
};

const indexString = 'age';
console.log(obj[indexString]);

let myArray = ['aaa', 'bbb'];
myArray[2] = 333;
console.log(myArray.length);

function f(name) {
    console.log('Hello ' + name);
    return true;
}

if (f('World')){
    console.log('successful');
};

// Dynamically assign the onclick function
document.getElementById("btnChangeColor").onclick = function () { changeColor(document.getElementsByTagName('h1')[0]); }
document.getElementById("btnChangeColor").onclick = function () { fnChangeColor(document.getElementsByTagName('h1')[0]); }

function fake_click(obj) {
    var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent(
        "click", true, false, window, 0, 0, 0, 0, 0
        , false, false, false, false, 0, null
        );
    obj.dispatchEvent(ev);
}

function export_raw(name, data) {
   var urlObject = window.URL || window.webkitURL || window;

   var export_blob = new Blob([data]);

   var save_link = document.createElementNS("https://jasonmccb.github.io/about", "a")
   save_link.href = urlObject.createObjectURL(export_blob);
   save_link.download = name;
   fake_click(save_link);
}

/*
let test = document.getElementsByTagName('html')[0].outerHTML;
//console.log(test);
document.getElementById("fuck").click(function() {export_raw('test.html', test)}
);
*/