// We use Jquery to invoke our meta + header + footer elements on every page

$(document).ready(function () {
    $(function () {
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
});