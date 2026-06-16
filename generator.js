// generator.js (1/3)

function generatePortfolio(student){

    if(!student){

        alert(
        "Save Student First"
        );

        return;

    }

    const html = `

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width,
initial-scale=1.0">

<title>
${student.name}
Portfolio
</title>

<link rel="stylesheet"
href="../portfolio.css">

</head>

<body>

<section class="hero">

<div class="profile-left">

<img
src="../photos/
${student.uuid}.jpg"
class="profile-img">

<h1>
${student.name}
</h1>

<p>
${student.role}
</p>

<span>

Verified Student ✅

</span>

</div>

</section>



<section>

<h2>

Skills

</h2>

<ul>

${student.skills
.map(
s=>`<li>${s}</li>`
)
.join("")}

</ul>

</section>



<section>

<h2>

Projects

</h2>

<ul>

${student.projects
.map(
p=>`<li>${p}</li>`
)
.join("")}

</ul>

</section>



<section>

<h2>

Certificates

</h2>

<ul>

${student.certificates
.map(
c=>`<li>${c}</li>`
)
.join("")}

</ul>

</section>



<footer>

CTK Verified

</footer>

</body>

</html>

`;

    downloadHTML(

        student.uuid +
        ".html",

        html

    );

}
// generator.js (2/3)

function generateCertificate(student){

    if(!student){

        alert(
        "Save Student First"
        );

        return;

    }

    const certId =

    "CERT-" +

    new Date()
    .getFullYear()

    + "-"

    +

    Math.floor(
        Math.random()
        * 100000
    );



    const html = `

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width,
initial-scale=1.0">

<title>

Certificate

</title>

<link rel="stylesheet"
href="../certificate.css">

</head>

<body>

<div class="certificate">

<div class="inner-border">

<div class="top-bar">

<div>

<h4>

Certificate ID

</h4>

<p>

${certId}

</p>

</div>


<div class="qr-box">

<img
src="../qr/
${certId}.png">

<p>

Scan Verify

</p>

</div>

</div>



<div class="logo-section">

<img
src="../logo/
ctk-logo.png"
class="logo">

<h2>

Credential &
Talent Knowledge

</h2>

</div>



<div class="title-section">

<h1>

CERTIFICATE

</h1>

<h3>

OF ACHIEVEMENT

</h3>

<p>

This certificate is
proudly awarded to

</p>

<div class="student-name">

${student.name}

</div>

<p>

for successfully
completing

</p>

<div class="course-name">

${student.certificates[0]
|| "Professional Course"}

</div>

<div class="skills">

${student.skills.join(
" • "
)}

</div>

</div>



<div class="info-cards">

<div class="card">

<h4>

Institution

</h4>

<p>

${student.institution}

</p>

</div>


<div class="card">

<h4>

Department

</h4>

<p>

${student.department}

</p>

</div>


<div class="card">

<h4>

AI Score

</h4>

<p>

${student.ai_score}%

</p>

</div>

</div>



</div>

</div>

</body>

</html>

`;

    downloadHTML(

        certId +
        ".html",

        html

    );

}
// generator.js (3/3) FINAL


function downloadHTML(
filename,
content
){

    const blob =
    new Blob(
        [content],
        {
            type:
            "text/html"
        }
    );

    const url =
    URL.createObjectURL(
        blob
    );

    const a =
    document
    .createElement(
        "a"
    );

    a.href = url;

    a.download =
    filename;

    document.body
    .appendChild(a);

    a.click();

    document.body
    .removeChild(a);

    URL.revokeObjectURL(
        url
    );

}



function generateQR(student){

    if(!student){

        alert(
        "Save Student First"
        );

        return;

    }

    alert(
    "QR generation requires qr.js"
    );

}



function exportGitHub(){

    const data = [];

    for(
        let i=0;
        i<localStorage.length;
        i++
    ){

        const key =
        localStorage.key(i);

        if(
            key.startsWith(
                "ctk_"
            )
        ){

            data.push(

                JSON.parse(

                    localStorage
                    .getItem(
                        key
                    )

                )

            );

        }

    }

    const blob =
    new Blob(

        [
            JSON.stringify(
                data,
                null,
                4
            )
        ],

        {
            type:
            "application/json"
        }

    );

    const url =
    URL.createObjectURL(
        blob
    );

    const a =
    document
    .createElement(
        "a"
    );

    a.href = url;

    a.download =
    "ctk_export.json";

    a.click();

    URL.revokeObjectURL(
        url
    );

}



function generateAll(){

    if(
        !window.studentData
    ){

        alert(
        "Save Student First"
        );

        return;

    }

    generatePortfolio(
        window.studentData
    );

    generateCertificate(
        window.studentData
    );

}