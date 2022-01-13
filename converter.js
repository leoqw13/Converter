function convertToC() {

    let F = document.getElementById("F").value;
    const factor = 1.8;
    let C = (F - 32) / factor;

    document.getElementById("Result").innerHTML = F + " ºF = <strong>" + C + "ºF.</strong>";
}