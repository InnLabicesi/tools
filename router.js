window.addEventListener('load', function () {
    let url = new URL(window.location.href);
    let identificador = url.searchParams.get("tid");
    if (identificador === null) {
        console.log("SIMPLE URL");
    } else {
        location.href = "/tool.html?tid=" + identificador;
    }
});