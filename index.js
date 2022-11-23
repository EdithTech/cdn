function uploadDocs() {
    var fileName = document.getElementById("choose-file").value.toLowerCase();
    if (!fileName.endsWith('.pdf')) {
        alert('Please upload pdf file only!');
        return false;
    }

    // location.replace("./insert.html")
}

function signIn() {
    var uname = document.getElementById("username").value;
    var upass = document.getElementById("password").value;


    if (uname === 'admin' && upass === 'admin123') {
        // console.log(uname, upass)
        location.replace("./2nd.html") // window.open("./upload-docs.html", target = "_self")
    }
}