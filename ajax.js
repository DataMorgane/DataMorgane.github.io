

function connect() {
    document.getElementById("inscription")
                .addEventListener("click", ajaxRequest, false);
}

function ajaxRequest(event) {
    var em = document.forms[0][0].value;
    if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function() {
		if (xhr.readyState==4 && xhr.status == 200) {
            document.getElementById("msg_ajax").innerHTML = xhr.responseText;
        }
    };

    xhr.open('GET', 'email.php?email=' + em, async = true);
    xhr.send(null);

}

window.addEventListener("load", connect, false);
