var styleall = document.getElementById("filterall");
var styleactive = document.getElementById("filteractive");
var stylecomp = document.getElementById("filtercomp");

function newItem() {
    var item = document.getElementById("x").value;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var editinput = document.createElement("input");
    editinput.type = "text";
    editinput.value = item;
    editinput.readOnly = true;
    editinput.className = "editinputstyle";
    if (item === "") {
        alert("type somthing!");
    }
    else {
        li.appendChild(editinput);
        li.className = "activee";
        ul.appendChild(li);

        var span = document.createElement("span");
        var close = document.createTextNode("\u00D7");
        span.className = "close";

        span.appendChild(close);
        li.appendChild(span);

        document.getElementById("x").value = "";
        span.onclick = removeItem;

        var span1 = document.createElement("span");
        var checked = document.createTextNode("\u2713");
        span1.className = "checked";

        span1.appendChild(checked);
        li.appendChild(span1);

        document.getElementById("x").value = "";
        span1.onclick = changeStyle;


        var span2 = document.createElement("span");
        var edit = document.createTextNode("edit");
        span2.className = "edit";

        span2.appendChild(edit);
        li.appendChild(span2);

        document.getElementById("x").value = "";
        span2.onclick = turnFulse;


    }
}

function removeItem(e) {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
}

function changeStyle(e) {
    e.target.parentElement.querySelector("input").style.backgroundColor = "lightgray";
    e.target.parentElement.style.backgroundColor = "lightgray";
    e.target.parentElement.classList.add("com");
    e.target.parentElement.classList.remove("active");

}

function turnFulse(e) {
    var asd = e.target.parentElement.querySelector("input");
    if (asd.readOnly == true) {
        asd.readOnly = false;
    }
    else {
        asd.readOnly = true;
    }
}
var me = document.getElementsByClassName("com");
var you = document.getElementsByClassName("activee");
function alls() {
    styleall.style.border = "1px solid gray";
    styleactive.style.border = "none";
    stylecomp.style.border = "none";

    for (var i = 0 ; i < you.length ; i++) {
        you[i].style.display = "block";
    }
    for (var i = 0 ; i < me.length ; i++) {
        me[i].style.display = "block";
    }
}

function active() {
    styleactive.style.border = "1px solid gray";
    styleall.style.border = "none";
    stylecomp.style.border = "none";

    for (var a = 0 ; a < you.length ; a++) {
        you[a].style.display = "block";
    }
    for (var a = 0 ; a < me.length ; a++) {
        me[a].style.display = "none";
    }
}

function completed() {
    stylecomp.style.border = "1px solid gray";
    styleactive.style.border = "none";
    styleall.style.border = "none";


    for (var b = 0 ; b < you.length ; b++) {
        you[b].style.display = "none";
    }
    for (var b = 0 ; b < me.length ; b++) {
        me[b].style.display = "block";
    }
}