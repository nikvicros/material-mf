

function b() {
    var myVar;
    console.log(myVar)
}

function a() {
    var myVar = 33;
    console.log (myVar);
    b()
}

var myVar = 22;
console.log(myVar);
a();

