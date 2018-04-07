var close = document.getElementsByClassName("close");
for(var i=0; i<close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector("ul");
list.addEventListener("click", function(e) {
    if(e.target.tagName === 'LI') {
        console.log("In if of LI");
        if(e.target.classList.contains("unchecked")) {
            e.target.classList.remove("unchecked");
            e.target.classList.add("checked");
        }
        else if(e.target.classList.contains("checked")) {
            e.target.classList.remove("checked");
            e.target.classList.add("unchecked");
        }
    }
}, false);

function addNewTask() {
    var li = document.createElement("li");
    var data = document.getElementById("myInput").value;
    if(data === "") {
        alert("You must give a name to your task");
    }
    else {
        var attr = createAttribute("draggable");
        attr.value = "true";
        li.setAttributeNode(attr);
        var text = document.createTextNode(data);
        li.appendChild(text);
        li.className += "draggable unchecked";
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for(var i=0; i<close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
