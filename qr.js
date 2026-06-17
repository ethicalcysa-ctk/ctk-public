// qr.js FULL REPLACE

console.log("QR Ready");
function generateQR(student){

    if(!student) return;

    const url =
    "https://ethicalcysa-ctk.github.io/ctk-public/p/"
    +
    student.uuid
    +
    ".html";

    const div =
    document.createElement("div");

    new QRCode(div,{
        text:url,
        width:500,
        height:500
    });

    setTimeout(()=>{

        const img =
        div.querySelector("img");

        if(!img) return;

        const a =
        document.createElement("a");

        a.href =
        img.src;

        a.download =
        student.uuid + ".png";

        a.click();

    },500);

}