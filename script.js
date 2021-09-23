function changeName(id){
    document.querySelector(id).innerHTML = "a.k.a. Coding Ninja"; 
}

function removeRequest(id){
        var element = document.querySelector('#conreq');
        var count = parseInt(element.innerHTML);
        element.innerHTML = count - 1;
        document.querySelector(id).remove();
        console.log("hello");
}

function removeRequestAddCon(id){
    var element = document.querySelector('#conreq');
    var count = parseInt(element.innerHTML);
    element.innerHTML = count - 1;
    var element1 = document.querySelector('#totalCons');
    var count1 = parseInt(element1.innerHTML);
    element1.innerHTML = count1 + 1;
    console.log("there");
    document.querySelector(id).remove();
    console.log("hello");
}
