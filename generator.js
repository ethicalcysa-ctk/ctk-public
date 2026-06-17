// IMPORTANT:
//
// Unga current generator.js ah DELETE pannunga.
// Intha file ah replace pannunga.
//
// This is PART 1.
// (Portfolio Generator)

function generatePortfolio(student){

    if(!student){
        alert("Save Student First");
        return;
    }

    let html = `

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width,
initial-scale=1.0">

<title>
${student.name}
- CTK Portfolio
</title>

<link rel="stylesheet"
href="../portfolio.css">

<link href="
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
rel="stylesheet">

</head>

<body>

<nav class="navbar">

<div class="logo">
CTK
</div>

<ul class="menu">

<li>Profile</li>
<li>Skills</li>
<li>Certificates</li>
<li>Projects</li>

</ul>

</nav>



<section class="hero">

<div class="profile-left">

<img
src="../photos/${student.uuid}.jpg"
class="profile-img">

<h1>
${student.name}
</h1>

<p class="role">
${student.role}
</p>

<span class="verified">
✅ Verified Student
</span>

</div>



<div class="profile-right">

<div class="qr-card">

<img
src="../qr/${student.uuid}.png">

<p>
Scan Portfolio
</p>

</div>

</div>

</section>



<section class="stats">

<div class="stat-card">

<h2>
${student.certificates.length}
</h2>

<p>
Certificates
</p>

</div>



<div class="stat-card">

<h2>
${student.projects.length}
</h2>

<p>
Projects
</p>

</div>



<div class="stat-card">

<h2>
${student.skills.length}
</h2>

<p>
Skills
</p>

</div>



<div class="stat-card">

<h2>
${student.ai_score}%
</h2>

<p>
AI Score
</p>

</div>

</section>



<section class="skills-section">

<h2>
Skills
</h2>

${student.skills.map(skill=>`

<div class="skill">

<span>
${skill}
</span>

<progress
value="90"
max="100">
</progress>

</div>

`).join("")}

</section>



<section class="ai-section">

<h2>
AI Readiness
</h2>

<div class="ai-card">

<p>

Cybersecurity Readiness:

<b>
${student.ai_score}%
</b>

</p>

<h3>

Suggested Roles

</h3>

<ul>

<li>
SOC Analyst
</li>

<li>
Security Engineer
</li>

<li>
Penetration Tester
</li>

</ul>

</div>

</section>
`;

// generator.js FULL UPGRADE (PART 2)

html += `

<section class="certificates">

<h2>

Certificates

</h2>

<div class="grid">

${student.certificates.map(cert=>`

<div class="cert-card">

<h3>

${cert}

</h3>

<p>

Verified by CTK

</p>

<button
onclick="
window.open(
'../c/${cert}.html'
)">

View Certificate

</button>

</div>

`).join("")}

</div>

</section>



<section class="projects">

<h2>

Projects

</h2>

${student.projects.map(project=>`

<div class="project-card">

<h3>

${project}

</h3>

<p>

Student project
verified by CTK.

</p>

</div>

`).join("")}

</section>



<section class="badges">

<h2>

Badges

</h2>

<div class="badge-list">

${student.badges.map(badge=>`

<span>

🏅 ${badge}

</span>

`).join("")}

</div>

</section>



<footer>

Verified by CTK Platform © 2026

</footer>

</body>

</html>

`;

downloadHTML(
student.uuid + ".html",
html
);

}



/* DOWNLOAD */

function downloadHTML(
filename,
content
){

const blob =
new Blob(
[content],
{
type:"text/html"
}
);

const url =
URL.createObjectURL(
blob
);

const a =
document.createElement(
"a"
);

a.href = url;

a.download =
filename;

a.click();

URL.revokeObjectURL(
url
);

}

// generator.js FULL UPGRADE
// CERTIFICATE GENERATOR

function generateCertificate(student){

    if(!student){
        alert("Save Student First");
        return;
    }

    const certId =
    "CERT-" +
    new Date().getFullYear()
    + "-" +
    Math.floor(
        1000 +
        Math.random()*9000
    );

    const issueDate =
    new Date()
    .toLocaleDateString(
        "en-GB"
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

${certId}

</title>

<link rel="stylesheet"
href="../certificate.css">

<link href="
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Great+Vibes&family=Inter:wght@300;400;500;600;700&display=swap"
rel="stylesheet">

</head>

<body>

<div class="certificate">

<div class="inner-border">

<div class="top-bar">

<div class="cert-info">

<h4>

Certificate ID

</h4>

<p>

${certId}

</p>

</div>

<div class="qr-box">

<img
src="../qr/${certId}.png"
alt="QR">

<span>

Scan to Verify

</span>

</div>

</div>



<div class="logo-section">

<img
src="../logo/ctk-logo.png"
class="logo">

<h2>

Credential & Talent
Knowledge Platform

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

This certificate
is proudly awarded to

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
|| "Professional Program"}

</div>

<div class="skills">

Skills Validated:

${student.skills.join(
" • "
)}

</div>

</div>



<div class="info-cards">

<div class="card">

<h4>

Issue Date

</h4>

<p>

${issueDate}

</p>

</div>

<div class="card status">

<h4>

Status

</h4>

<p>

VALID

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



<div class="footer">

<div class="sign">

___________________
<br>

Founder Signature

</div>



<div class="seal">

CTK VERIFIED

</div>



<div class="sign">

___________________
<br>

Director Signature

</div>

</div>



<div class="verify-url">

Verify:

https://ethicalcysa-ctk.github.io/ctk-public/c/${certId}.html

</div>

</div>

</div>

</body>

</html>

`;

downloadHTML(
certId + ".html",
html
);

}

// generator.js FULL UPGRADE FINAL
// QR + Export + Generate All



function generateQRLegacyAlert(student){

    if(!student){

        alert(
        "Save Student First"
        );

        return;

    }

    const portfolioURL =

    "https://ethicalcysa-ctk.github.io/ctk-public/p/"
    +
    student.uuid
    +
    ".html";

    alert(

        "Generate QR for:\n\n"
        +
        portfolioURL

    );

}



/* EXPORT JSON */

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

                    localStorage.getItem(
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

    document.createElement(
        "a"
    );

    a.href = url;

    a.download =

    "ctk_students.json";

    a.click();

    URL.revokeObjectURL(
        url
    );

}



/* GENERATE ALL */

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

    generateQR(
        window.studentData
    );

}



/* AUTO PREVIEW */

function previewPortfolio(uuid){

    document
    .getElementById(
        "portfolioFrame"
    ).src =

    "p/"
    +
    uuid
    +
    ".html";

}



function previewCertificate(certId){

    document
    .getElementById(
        "certificateFrame"
    ).src =

    "c/"
    +
    certId
    +
    ".html";

}

/* ==========================
   CTK ADD-ON FINAL PORTFOLIO ORDER PATCH
========================== */

function generatePortfolio(student){

    if(!student){
        alert("Save Student First");
        return;
    }

    const score = student.ai_score || "0";
    const skills = ctkSectionList(student.skills);
    const certificates = ctkSectionList(student.certificates);
    const projects = ctkSectionList(student.projects);
    const badges = ctkSectionList(student.badges);

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ctkSafe(student.name)} - CTK Portfolio</title>
<link rel="stylesheet" href="../portfolio.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>
<body>
<div class="portfolio">
<section class="hero">
<nav class="navbar">
<div class="brand">
<img src="../logo/ctk-logo.png" alt="CTK Logo">
<div class="brand-text">
<h2>CTK</h2>
<span>Credential & Talent Knowledge</span>
</div>
</div>
<ul>
<li>Home</li>
<li>Verify Certificate</li>
<li><button class="contact-btn">Contact</button></li>
</ul>
</nav>
<div class="hero-content">
<div class="profile">
<div class="photo-box">
<img id="profilePhoto" src="../photos/${ctkSafe(student.uuid)}.jpg" alt="Student" onerror="this.onerror=null;this.src='../logo/ctk-logo.png';">
<div class="verified">OK</div>
</div>
<div class="info">
<h1 id="studentName">${ctkSafe(student.name)}</h1>
<h3 id="studentRole">${ctkSafe(student.role || student.department || "CTK Student")}</h3>
<p><i class="fa-solid fa-building-columns"></i> ${ctkSafe(student.institution || student.department || "CTK Platform")}</p>
<div class="verify-badge"><i class="fa-solid fa-circle-check"></i> Verified Student</div>
</div>
</div>
<div class="qr-card">
<img src="../qr/${ctkSafe(student.uuid)}.png" alt="QR">
<h4>Scan to Verify</h4>
<p>Student ID</p>
<span>${ctkSafe(student.uuid)}</span>
</div>
</div>
</section>
<section class="grid">
${skills.length ? `<div class="card"><h2>Skills</h2>${skills.map(skill=>`<div class="skill"><span>${ctkSafe(skill)}</span><span>${ctkSafe(score)}%</span></div><div class="bar"><div class="fill" style="width:${ctkSafe(score)}%"></div></div>`).join("")}</div>` : ""}
<div class="card">
<h2>AI Readiness Score</h2>
<div class="skill"><span>${ctkSafe(student.role || "Career Readiness")}</span><span>${ctkSafe(score)}%</span></div>
<div class="bar"><div class="fill green" style="width:${ctkSafe(score)}%"></div></div>
<ul class="roles">
<li>${ctkSafe(student.role || "Verified Learner")}</li>
<li>${ctkSafe(student.department || "Industry Ready")}</li>
<li>CTK Portfolio Holder</li>
</ul>
</div>
</section>
${certificates.length ? `<section class="wide-card"><div class="title-row"><h2>Certificates</h2><span>Verified</span></div><div class="certificate-grid">${certificates.map(cert=>`<div class="cert"><h3>${ctkSafe(cert)}</h3><p>Issued by CTK</p><div class="verified-small">Verified</div></div>`).join("")}</div></section>` : ""}
${(projects.length || badges.length) ? `<section class="bottom-grid">${projects.length ? `<div class="card"><h2>Projects</h2>${projects.map(project=>`<div class="project"><h4>${ctkSafe(project)}</h4><p>Student project verified by CTK.</p></div>`).join("")}</div>` : ""}${badges.length ? `<div class="card"><h2>Badges</h2><div class="badges">${badges.map(badge=>`<div>CTK<span>${ctkSafe(badge)}</span></div>`).join("")}</div></div>` : ""}</section>` : ""}
<footer>
<h3>Verified by CTK Platform</h3>
<p>Building a trusted future through skills and knowledge.</p>
<div class="powered">Powered by Chaan-Techknowledge</div>
</footer>
</div>
</body>
</html>
`;

    downloadHTML(student.uuid + ".html",html);

}

/* ==========================
   CTK ADD-ON COMPATIBILITY PATCH
   UUID paths + existing CSS classes
========================== */

function ctkSafe(value){

    return String(value || "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");

}

function ctkList(items){

    return Array.isArray(items)
    ?
    items
    :
    [];

}

function ctkBaseURL(){

    return "https://ethicalcysa-ctk.github.io/ctk-public/";

}

function ctkPortfolioURL(student){

    return ctkBaseURL()
    +
    "p/"
    +
    student.uuid
    +
    ".html";

}

function ctkCertificateURL(student){

    return ctkBaseURL()
    +
    "c/"
    +
    student.uuid
    +
    ".html";

}

function generateQRAddonBackup(student){

    if(!student){

        alert(
        "Save Student First"
        );

        return;

    }

    const div =
    document.createElement(
        "div"
    );

    const url =
    ctkPortfolioURL(
        student
    );

    new QRCode(div,{

        text:
        url,

        width:
        500,

        height:
        500

    });

    setTimeout(()=>{

        const img =
        div.querySelector(
            "img"
        );

        if(!img) return;

        const a =
        document.createElement(
            "a"
        );

        a.href =
        img.src;

        a.download =
        student.uuid
        +
        ".png";

        a.click();

    },500);

}

function generateCertificate(student){

    if(!student){

        alert(
        "Save Student First"
        );

        return;

    }

    const issueDate =
    new Date()
    .toLocaleDateString(
        "en-GB",
        {
            day:"2-digit",
            month:"long",
            year:"numeric"
        }
    );

    const course =
    student.role
    ||
    ctkList(student.certificates)[0]
    ||
    "Professional Program";

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ctkSafe(student.uuid)} - CTK Certificate</title>
<link rel="stylesheet" href="../certificate.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Cinzel:wght@400;600;700;800&family=Great+Vibes&display=swap" rel="stylesheet">
</head>
<body>
<div class="certificate">
<div class="inner">
<div class="top">
<div class="cert-id">
<p>CERTIFICATE ID</p>
<h4 id="certId">${ctkSafe(student.uuid)}</h4>
</div>
<div class="qr">
<img id="qrImage" src="../qr/${ctkSafe(student.uuid)}.png" alt="QR">
<span>Scan to Verify</span>
</div>
</div>
<div class="logo-box">
<img class="logo" src="../logo/ctk-logo.png" alt="CTK Logo">
<h1>CTK</h1>
<h2>CREDENTIAL & TALENT KNOWLEDGE</h2>
<p>EMPOWERING SKILLS. BUILDING FUTURES.</p>
<div class="line"></div>
</div>
<div class="title">
<h1>CERTIFICATE</h1>
<h2>OF ACHIEVEMENT</h2>
<p>This is proudly presented to</p>
<div id="studentName" class="student-name">${ctkSafe(student.name)}</div>
<div class="gold-line"></div>
<p>for successfully completing the</p>
<h3 id="courseName">${ctkSafe(course)}</h3>
<div class="desc">The student has demonstrated dedication, knowledge and practical skills in this area.</div>
</div>
<div class="cards">
<div class="card">
<div class="icon">DATE</div>
<div>
<small>ISSUED ON</small>
<h4 id="issueDate">${ctkSafe(issueDate)}</h4>
</div>
</div>
<div class="card">
<div class="icon">OK</div>
<div>
<small>STATUS</small>
<h4 class="green">VALID</h4>
</div>
</div>
<div class="card">
<div class="icon">CTK</div>
<div>
<small>COURSE</small>
<h4 id="courseCard">${ctkSafe(course)}</h4>
</div>
</div>
</div>
<div class="footer">
<div class="sign">
<div class="sline"></div>
<h4>FOUNDER</h4>
<p>CTK Platform</p>
</div>
<div class="seal">
<span>CTK</span>
VERIFIED
</div>
<div class="sign">
<div class="sline"></div>
<h4>DIRECTOR</h4>
<p>CTK Platform</p>
</div>
</div>
<div class="verify">
Verify this certificate anytime by scanning the QR code or visiting:
<br><br>
<b id="verifyLink">${ctkSafe(ctkCertificateURL(student))}</b>
</div>
</div>
</div>
</body>
</html>
`;

    downloadHTML(
        student.uuid
        +
        ".html",
        html
    );

}

/* ==========================
   CTK ADD-ON TRUE FINAL PORTFOLIO PATCH
========================== */

function generatePortfolio(student){

    if(!student){
        alert("Save Student First");
        return;
    }

    const score = student.ai_score || "0";
    const skills = ctkSectionList(student.skills);
    const certificates = ctkSectionList(student.certificates);
    const projects = ctkSectionList(student.projects);
    const badges = ctkSectionList(student.badges);

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ctkSafe(student.name)} - CTK Portfolio</title>
<link rel="stylesheet" href="../portfolio.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>
<body>
<div class="portfolio">
<section class="hero">
<nav class="navbar">
<div class="brand">
<img src="../logo/ctk-logo.png" alt="CTK Logo">
<div class="brand-text">
<h2>CTK</h2>
<span>Credential & Talent Knowledge</span>
</div>
</div>
<ul>
<li>Home</li>
<li>Verify Certificate</li>
<li><button class="contact-btn">Contact</button></li>
</ul>
</nav>
<div class="hero-content">
<div class="profile">
<div class="photo-box">
<img id="profilePhoto" src="../photos/${ctkSafe(student.uuid)}.jpg" alt="Student" onerror="this.onerror=null;this.src='../logo/ctk-logo.png';">
<div class="verified">OK</div>
</div>
<div class="info">
<h1 id="studentName">${ctkSafe(student.name)}</h1>
<h3 id="studentRole">${ctkSafe(student.role || student.department || "CTK Student")}</h3>
<p><i class="fa-solid fa-building-columns"></i> ${ctkSafe(student.institution || student.department || "CTK Platform")}</p>
<div class="verify-badge"><i class="fa-solid fa-circle-check"></i> Verified Student</div>
</div>
</div>
<div class="qr-card">
<img src="../qr/${ctkSafe(student.uuid)}.png" alt="QR">
<h4>Scan to Verify</h4>
<p>Student ID</p>
<span>${ctkSafe(student.uuid)}</span>
</div>
</div>
</section>
<section class="grid">
${skills.length ? `<div class="card"><h2>Skills</h2>${skills.map(skill=>`<div class="skill"><span>${ctkSafe(skill)}</span><span>${ctkSafe(score)}%</span></div><div class="bar"><div class="fill" style="width:${ctkSafe(score)}%"></div></div>`).join("")}</div>` : ""}
<div class="card">
<h2>AI Readiness Score</h2>
<div class="skill"><span>${ctkSafe(student.role || "Career Readiness")}</span><span>${ctkSafe(score)}%</span></div>
<div class="bar"><div class="fill green" style="width:${ctkSafe(score)}%"></div></div>
<ul class="roles">
<li>${ctkSafe(student.role || "Verified Learner")}</li>
<li>${ctkSafe(student.department || "Industry Ready")}</li>
<li>CTK Portfolio Holder</li>
</ul>
</div>
</section>
${certificates.length ? `<section class="wide-card"><div class="title-row"><h2>Certificates</h2><span>Verified</span></div><div class="certificate-grid">${certificates.map(cert=>`<div class="cert"><h3>${ctkSafe(cert)}</h3><p>Issued by CTK</p><div class="verified-small">Verified</div></div>`).join("")}</div></section>` : ""}
${(projects.length || badges.length) ? `<section class="bottom-grid">${projects.length ? `<div class="card"><h2>Projects</h2>${projects.map(project=>`<div class="project"><h4>${ctkSafe(project)}</h4><p>Student project verified by CTK.</p></div>`).join("")}</div>` : ""}${badges.length ? `<div class="card"><h2>Badges</h2><div class="badges">${badges.map(badge=>`<div>CTK<span>${ctkSafe(badge)}</span></div>`).join("")}</div></div>` : ""}</section>` : ""}
<footer>
<h3>Verified by CTK Platform</h3>
<p>Building a trusted future through skills and knowledge.</p>
<div class="powered">Powered by Chaan-Techknowledge</div>
</footer>
</div>
</body>
</html>
`;

    downloadHTML(student.uuid + ".html",html);

}

function generatePortfolio(student){

    if(!student){

        alert(
        "Save Student First"
        );

        return;

    }

    const skills =
    ctkList(student.skills);

    const certificates =
    ctkList(student.certificates);

    const projects =
    ctkList(student.projects);

    const badges =
    ctkList(student.badges);

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ctkSafe(student.name)} - CTK Portfolio</title>
<link rel="stylesheet" href="../portfolio.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>
<body>
<div class="portfolio">
<section class="hero">
<nav class="navbar">
<div class="brand">
<img src="../logo/ctk-logo.png" alt="CTK Logo">
<div class="brand-text">
<h2>CTK</h2>
<span>Credential & Talent Knowledge</span>
</div>
</div>
<ul>
<li>Home</li>
<li>Verify Certificate</li>
<li><button class="contact-btn">Contact</button></li>
</ul>
</nav>
<div class="hero-content">
<div class="profile">
<div class="photo-box">
<img id="profilePhoto" src="../photos/${ctkSafe(student.uuid)}.jpg" alt="Student">
<div class="verified">OK</div>
</div>
<div class="info">
<h1 id="studentName">${ctkSafe(student.name)}</h1>
<h3 id="studentRole">${ctkSafe(student.role)}</h3>
<p><i class="fa-solid fa-building-columns"></i> ${ctkSafe(student.institution)}</p>
<div class="verify-badge"><i class="fa-solid fa-circle-check"></i> Verified Student</div>
</div>
</div>
<div class="qr-card">
<img src="../qr/${ctkSafe(student.uuid)}.png" alt="QR">
<h4>Scan to Verify</h4>
<p>Student ID</p>
<span>${ctkSafe(student.uuid)}</span>
</div>
</div>
</section>
<section class="grid">
<div class="card">
<h2>Skills</h2>
${skills.map(skill=>`
<div class="skill"><span>${ctkSafe(skill)}</span><span>${ctkSafe(student.ai_score)}%</span></div>
<div class="bar"><div class="fill" style="width:${ctkSafe(student.ai_score)}%"></div></div>
`).join("")}
</div>
<div class="card">
<h2>AI Readiness Score</h2>
<div class="skill"><span>${ctkSafe(student.role || "Career Readiness")}</span><span>${ctkSafe(student.ai_score)}%</span></div>
<div class="bar"><div class="fill green" style="width:${ctkSafe(student.ai_score)}%"></div></div>
<ul class="roles">
<li>SOC Analyst</li>
<li>Security Engineer</li>
<li>Penetration Tester</li>
</ul>
</div>
</section>
<section class="wide-card">
<div class="title-row">
<h2>Certificates</h2>
<span>Verified</span>
</div>
<div class="certificate-grid">
${certificates.map(cert=>`
<div class="cert">
<h3>${ctkSafe(cert)}</h3>
<p>Issued by CTK</p>
<div class="verified-small">Verified</div>
</div>
`).join("")}
</div>
</section>
<section class="bottom-grid">
<div class="card">
<h2>Projects</h2>
${projects.map(project=>`
<div class="project">
<h4>${ctkSafe(project)}</h4>
<p>Student project verified by CTK.</p>
</div>
`).join("")}
</div>
<div class="card">
<h2>Badges</h2>
<div class="badges">
${badges.map(badge=>`
<div>CTK<span>${ctkSafe(badge)}</span></div>
`).join("")}
</div>
</div>
</section>
<footer>
<h3>Verified by CTK Platform</h3>
<p>Building a trusted future through skills and knowledge.</p>
<div class="powered">Powered by Chaan-Techknowledge</div>
</footer>
</div>
</body>
</html>
`;

    downloadHTML(
        student.uuid
        +
        ".html",
        html
    );

}

/* ==========================
   CTK ADD-ON ENTERPRISE FINAL GENERATORS
========================== */

function ctkStudentInstitution(student){
    return student.institution_name || student.institution || "";
}

function ctkSignatureImage(src){
    return src ? `<img src="${ctkSafe(src)}" alt="Signature">` : "";
}

function generateCertificate(student){

    if(!student){
        alert("Save Student First");
        return;
    }

    const issueDate =
    new Date().toLocaleDateString(
        "en-GB",
        {
            day:"2-digit",
            month:"long",
            year:"numeric"
        }
    );

    const course =
    student.role
    ||
    ctkSectionList(student.certificates)[0]
    ||
    "Professional Program";

    const institution =
    ctkStudentInstitution(student);

    const registration =
    student.registration_number || "";

    const founderName =
    student.founder_name || "";

    const leftSignature =
    student.authoritySignature || "";

    const rightSignature =
    student.authoritySignature || "";

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ctkSafe(student.uuid)} - CTK Certificate</title>
<link rel="stylesheet" href="../certificate.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Cinzel:wght@400;600;700;800&family=Great+Vibes&display=swap" rel="stylesheet">
</head>
<body>
<div class="certificate">
<div class="inner">
<div class="top">
<div class="cert-id">
<p>CERTIFICATE ID</p>
<h4 id="certId">${ctkSafe(student.uuid)}</h4>
</div>
<div class="qr">
<img id="qrImage" src="../qr/${ctkSafe(student.uuid)}.png" alt="QR">
<span>Scan to Verify</span>
</div>
</div>
<div class="logo-box">
<img class="logo" src="../logo/ctk-logo.png" alt="CTK Logo">
<h1>CTK</h1>
<h2>CREDENTIAL & TALENT KNOWLEDGE</h2>
<p>EMPOWERING SKILLS. BUILDING FUTURES.</p>
<div class="line"></div>
</div>
<div class="title">
<h1>CERTIFICATE</h1>
<h2>OF ACHIEVEMENT</h2>
<p>This is proudly presented to</p>
<div id="studentName" class="student-name">${ctkSafe(student.name)}</div>
<div class="gold-line"></div>
<p>for successfully completing the</p>
<h3 id="courseName">${ctkSafe(course)}</h3>
<div class="desc">The student has demonstrated dedication, knowledge and practical skills in this area.</div>
</div>
<div class="cards four">
<div class="card"><div><small>ISSUED ON</small><h4 id="issueDate">${ctkSafe(issueDate)}</h4></div></div>
<div class="card"><div><small>STATUS</small><h4 class="green">VALID</h4></div></div>
<div class="card"><div><small>INSTITUTION</small><h4>${ctkSafe(institution || "CTK")}</h4></div></div>
<div class="card"><div><small>REGISTRATION NO</small><h4>${ctkSafe(registration || student.uuid)}</h4></div></div>
</div>
<div class="footer">
<div class="sign">
${ctkSignatureImage(leftSignature)}
<div class="sline"></div>
<h4>FOUNDER & DIRECTOR</h4>
<p>${ctkSafe(founderName)}</p>
<p>Institution: ${ctkSafe(institution)}</p>
<p>Registration No: ${ctkSafe(registration)}</p>
</div>
<div class="seal">
<span>CTK</span>
VERIFIED
</div>
<div class="sign">
${ctkSignatureImage(rightSignature)}
<div class="sline"></div>
<h4>FOUNDER & DIRECTOR</h4>
<p>${ctkSafe(founderName)}</p>
<p>Institution: ${ctkSafe(institution)}</p>
<p>Registration No: ${ctkSafe(registration)}</p>
</div>
</div>
<div class="verify">
Verify this certificate anytime by scanning the QR code or visiting:
<br>
<b id="verifyLink">${ctkSafe(ctkCertificateURL(student))}</b>
</div>
</div>
</div>
<button class="pdf-btn" onclick="downloadCertificatePDF()">Download Certificate PDF</button>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script>
const student = { uuid:"${ctkSafe(student.uuid)}" };
function downloadCertificatePDF(){
    const certificate = document.querySelector(".certificate");
    html2canvas(certificate,{scale:3,useCORS:true}).then(canvas=>{
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jspdf.jsPDF("p","mm","a4");
        const width = 210;
        const height = canvas.height * width / canvas.width;
        pdf.addImage(imgData,"PNG",0,0,width,height);
        pdf.save(student.uuid + ".pdf");
    });
}
</script>
</body>
</html>
`;

    downloadHTML(student.uuid + ".html",html);
}

function generatePortfolio(student){

    if(!student){
        alert("Save Student First");
        return;
    }

    const score = student.ai_score || "";
    const institution = ctkStudentInstitution(student);
    const skills = ctkSectionList(student.skills);
    const certificates = ctkSectionList(student.certificates);
    const projects = ctkSectionList(student.projects);
    const badges = ctkSectionList(student.badges);

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ctkSafe(student.name)} - CTK Portfolio</title>
<link rel="stylesheet" href="../portfolio.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>
<body>
<div class="portfolio">
<section class="hero">
<nav class="navbar">
<div class="brand">
<img src="../logo/ctk-logo.png" alt="CTK Logo">
<div class="brand-text">
<h2>CTK</h2>
<span>Credential & Talent Knowledge</span>
</div>
</div>
<ul>
<li>Home</li>
<li>Verify Certificate</li>
<li><button class="contact-btn">Contact</button></li>
</ul>
</nav>
<div class="hero-content">
<div class="profile">
<div class="photo-box">
<img id="profilePhoto" src="../photos/${ctkSafe(student.uuid)}.jpg" alt="Student" onerror="this.onerror=null;this.src='../logo/ctk-logo.png';">
<div class="verified">OK</div>
</div>
<div class="info">
<h1 id="studentName">${ctkSafe(student.name)}</h1>
${student.role ? `<h3 id="studentRole">${ctkSafe(student.role)}</h3>` : ""}
${institution ? `<p><i class="fa-solid fa-building-columns"></i> ${ctkSafe(institution)}</p>` : ""}
<div class="verify-badge"><i class="fa-solid fa-circle-check"></i> Verified Student</div>
</div>
</div>
<div class="qr-card">
<img src="../qr/${ctkSafe(student.uuid)}.png" alt="QR">
<h4>Scan to Verify</h4>
<p>Student ID</p>
<span>${ctkSafe(student.uuid)}</span>
</div>
</div>
</section>
${(skills.length || score) ? `<section class="grid">${skills.length ? `<div class="card"><h2>Skills</h2>${skills.map(skill=>`<div class="skill"><span>${ctkSafe(skill)}</span>${score ? `<span>${ctkSafe(score)}%</span>` : ""}</div>${score ? `<div class="bar"><div class="fill" style="width:${ctkSafe(score)}%"></div></div>` : ""}`).join("")}</div>` : ""}${score ? `<div class="card"><h2>AI Readiness Score</h2><div class="skill"><span>${ctkSafe(student.role || "AI Readiness")}</span><span>${ctkSafe(score)}%</span></div><div class="bar"><div class="fill green" style="width:${ctkSafe(score)}%"></div></div></div>` : ""}</section>` : ""}
${certificates.length ? `<section class="wide-card"><div class="title-row"><h2>Certificates</h2><span>Verified</span></div><div class="certificate-grid">${certificates.map(cert=>`<div class="cert"><h3>${ctkSafe(cert)}</h3><p>Issued by CTK</p><div class="verified-small">Verified</div></div>`).join("")}</div></section>` : ""}
${(projects.length || badges.length) ? `<section class="bottom-grid">${projects.length ? `<div class="card"><h2>Projects</h2>${projects.map(project=>`<div class="project"><h4>${ctkSafe(project)}</h4><p>Student project verified by CTK.</p></div>`).join("")}</div>` : ""}${badges.length ? `<div class="card"><h2>Badges</h2><div class="badges">${badges.map(badge=>`<div>CTK<span>${ctkSafe(badge)}</span></div>`).join("")}</div></div>` : ""}</section>` : ""}
<footer>
<h3>Verified by CTK Platform</h3>
<p>Building a trusted future through skills and knowledge.</p>
<div class="powered">Powered by Chaan-Techknowledge</div>
</footer>
</div>
</body>
</html>
`;

    downloadHTML(student.uuid + ".html",html);
}

/* ==========================
   CTK ADD-ON PDF + FINAL OUTPUT PATCH
========================== */

function ctkSectionList(items){

    return ctkList(
        items
    )
    .filter(Boolean);

}

function generateCertificatePdfPatchBackup(student){

    if(!student){

        alert(
        "Save Student First"
        );

        return;

    }

    const issueDate =
    new Date()
    .toLocaleDateString(
        "en-GB",
        {
            day:"2-digit",
            month:"long",
            year:"numeric"
        }
    );

    const course =
    student.role
    ||
    ctkSectionList(student.certificates)[0]
    ||
    "Professional Program";

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ctkSafe(student.uuid)} - CTK Certificate</title>
<link rel="stylesheet" href="../certificate.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Cinzel:wght@400;600;700;800&family=Great+Vibes&display=swap" rel="stylesheet">
</head>
<body>
<div class="certificate">
<div class="inner">
<div class="top">
<div class="cert-id">
<p>CERTIFICATE ID</p>
<h4 id="certId">${ctkSafe(student.uuid)}</h4>
</div>
<div class="qr">
<img id="qrImage" src="../qr/${ctkSafe(student.uuid)}.png" alt="QR">
<span>Scan to Verify</span>
</div>
</div>
<div class="logo-box">
<img class="logo" src="../logo/ctk-logo.png" alt="CTK Logo">
<h1>CTK</h1>
<h2>CREDENTIAL & TALENT KNOWLEDGE</h2>
<p>EMPOWERING SKILLS. BUILDING FUTURES.</p>
<div class="line"></div>
</div>
<div class="title">
<h1>CERTIFICATE</h1>
<h2>OF ACHIEVEMENT</h2>
<p>This is proudly presented to</p>
<div id="studentName" class="student-name">${ctkSafe(student.name)}</div>
<div class="gold-line"></div>
<p>for successfully completing the</p>
<h3 id="courseName">${ctkSafe(course)}</h3>
<div class="desc">The student has demonstrated dedication, knowledge and practical skills in this area.</div>
</div>
<div class="cards">
<div class="card">
<div>
<small>ISSUED ON</small>
<h4 id="issueDate">${ctkSafe(issueDate)}</h4>
</div>
</div>
<div class="card">
<div>
<small>STATUS</small>
<h4 class="green">VALID</h4>
</div>
</div>
<div class="card">
<div>
<small>COURSE</small>
<h4 id="courseCard">${ctkSafe(course)}</h4>
</div>
</div>
</div>
<div class="footer">
<div class="sign">
<div class="sline"></div>
<h4>FOUNDER</h4>
<p>CTK Platform</p>
</div>
<div class="seal">
<span>CTK</span>
VERIFIED
</div>
<div class="sign">
<div class="sline"></div>
<h4>DIRECTOR</h4>
<p>CTK Platform</p>
</div>
</div>
<div class="verify">
Verify this certificate anytime by scanning the QR code or visiting:
<br>
<b id="verifyLink">${ctkSafe(ctkCertificateURL(student))}</b>
</div>
</div>
</div>
<button class="pdf-btn" onclick="downloadCertificatePDF()">Download PDF</button>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script>
const student = {
    uuid:"${ctkSafe(student.uuid)}"
};

function downloadCertificatePDF(){

    const certificate =
    document.querySelector(
        ".certificate"
    );

    html2canvas(
        certificate,
        {
            scale:3,
            useCORS:true
        }
    ).then(canvas=>{

        const imgData =
        canvas.toDataURL(
            "image/png"
        );

        const pdf =
        new jspdf.jsPDF(
            "p",
            "mm",
            "a4"
        );

        const width = 210;
        const height =
        canvas.height *
        width /
        canvas.width;

        pdf.addImage(
            imgData,
            "PNG",
            0,
            0,
            width,
            height
        );

        pdf.save(
            student.uuid
            +
            ".pdf"
        );

    });

}
</script>
</body>
</html>
`;

    downloadHTML(
        student.uuid
        +
        ".html",
        html
    );

}

function generatePortfolioPdfPatchBackup(student){

    if(!student){

        alert(
        "Save Student First"
        );

        return;

    }

    const score =
    student.ai_score
    ||
    "0";

    const skills =
    ctkSectionList(
        student.skills
    );

    const certificates =
    ctkSectionList(
        student.certificates
    );

    const projects =
    ctkSectionList(
        student.projects
    );

    const badges =
    ctkSectionList(
        student.badges
    );

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ctkSafe(student.name)} - CTK Portfolio</title>
<link rel="stylesheet" href="../portfolio.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>
<body>
<div class="portfolio">
<section class="hero">
<nav class="navbar">
<div class="brand">
<img src="../logo/ctk-logo.png" alt="CTK Logo">
<div class="brand-text">
<h2>CTK</h2>
<span>Credential & Talent Knowledge</span>
</div>
</div>
<ul>
<li>Home</li>
<li>Verify Certificate</li>
<li><button class="contact-btn">Contact</button></li>
</ul>
</nav>
<div class="hero-content">
<div class="profile">
<div class="photo-box">
<img id="profilePhoto" src="../photos/${ctkSafe(student.uuid)}.jpg" alt="Student" onerror="this.onerror=null;this.src='../logo/ctk-logo.png';">
<div class="verified">OK</div>
</div>
<div class="info">
<h1 id="studentName">${ctkSafe(student.name)}</h1>
<h3 id="studentRole">${ctkSafe(student.role || student.department || "CTK Student")}</h3>
<p><i class="fa-solid fa-building-columns"></i> ${ctkSafe(student.institution || student.department || "CTK Platform")}</p>
<div class="verify-badge"><i class="fa-solid fa-circle-check"></i> Verified Student</div>
</div>
</div>
<div class="qr-card">
<img src="../qr/${ctkSafe(student.uuid)}.png" alt="QR">
<h4>Scan to Verify</h4>
<p>Student ID</p>
<span>${ctkSafe(student.uuid)}</span>
</div>
</div>
</section>
<section class="grid">
${skills.length ? `
<div class="card">
<h2>Skills</h2>
${skills.map(skill=>`
<div class="skill"><span>${ctkSafe(skill)}</span><span>${ctkSafe(score)}%</span></div>
<div class="bar"><div class="fill" style="width:${ctkSafe(score)}%"></div></div>
`).join("")}
</div>
` : ""}
<div class="card">
<h2>AI Readiness Score</h2>
<div class="skill"><span>${ctkSafe(student.role || "Career Readiness")}</span><span>${ctkSafe(score)}%</span></div>
<div class="bar"><div class="fill green" style="width:${ctkSafe(score)}%"></div></div>
<ul class="roles">
<li>${ctkSafe(student.role || "Verified Learner")}</li>
<li>${ctkSafe(student.department || "Industry Ready")}</li>
<li>CTK Portfolio Holder</li>
</ul>
</div>
</section>
${certificates.length ? `
<section class="wide-card">
<div class="title-row">
<h2>Certificates</h2>
<span>Verified</span>
</div>
<div class="certificate-grid">
${certificates.map(cert=>`
<div class="cert">
<h3>${ctkSafe(cert)}</h3>
<p>Issued by CTK</p>
<div class="verified-small">Verified</div>
</div>
`).join("")}
</div>
</section>
` : ""}
${(projects.length || badges.length) ? `
<section class="bottom-grid">
${projects.length ? `
<div class="card">
<h2>Projects</h2>
${projects.map(project=>`
<div class="project">
<h4>${ctkSafe(project)}</h4>
<p>Student project verified by CTK.</p>
</div>
`).join("")}
</div>
` : ""}
${badges.length ? `
<div class="card">
<h2>Badges</h2>
<div class="badges">
${badges.map(badge=>`
<div>CTK<span>${ctkSafe(badge)}</span></div>
`).join("")}
</div>
</div>
` : ""}
</section>
` : ""}
<footer>
<h3>Verified by CTK Platform</h3>
<p>Building a trusted future through skills and knowledge.</p>
<div class="powered">Powered by Chaan-Techknowledge</div>
</footer>
</div>
</body>
</html>
`;

    downloadHTML(
        student.uuid
        +
        ".html",
        html
    );

}

function generateAll(){

    if(!window.studentData){

        alert(
        "Save Student First"
        );

        return;

    }

    generateQR(
        window.studentData
    );

    generateCertificate(
        window.studentData
    );

    generatePortfolio(
        window.studentData
    );

}

/* ==========================
   CTK ADD-ON NON-EMPTY PORTFOLIO PATCH
========================== */

function ctkFilledList(items,fallback){

    const list =
    ctkList(
        items
    )
    .filter(Boolean);

    return list.length
    ?
    list
    :
    fallback;

}

function generatePortfolioNonEmptyBackup(student){

    if(!student){

        alert(
        "Save Student First"
        );

        return;

    }

    const score =
    student.ai_score
    ||
    "0";

    const skills =
    ctkFilledList(
        student.skills,
        [
            student.role
            ||
            "Professional Skill"
        ]
    );

    const certificates =
    ctkFilledList(
        student.certificates,
        [
            student.role
            ||
            "CTK Verified Credential"
        ]
    );

    const projects =
    ctkFilledList(
        student.projects,
        [
            "CTK verified learning portfolio"
        ]
    );

    const badges =
    ctkFilledList(
        student.badges,
        [
            "Verified Student"
        ]
    );

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ctkSafe(student.name)} - CTK Portfolio</title>
<link rel="stylesheet" href="../portfolio.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>
<body>
<div class="portfolio">
<section class="hero">
<nav class="navbar">
<div class="brand">
<img src="../logo/ctk-logo.png" alt="CTK Logo">
<div class="brand-text">
<h2>CTK</h2>
<span>Credential & Talent Knowledge</span>
</div>
</div>
<ul>
<li>Home</li>
<li>Verify Certificate</li>
<li><button class="contact-btn">Contact</button></li>
</ul>
</nav>
<div class="hero-content">
<div class="profile">
<div class="photo-box">
<img id="profilePhoto" src="../photos/${ctkSafe(student.uuid)}.jpg" alt="Student">
<div class="verified">OK</div>
</div>
<div class="info">
<h1 id="studentName">${ctkSafe(student.name)}</h1>
<h3 id="studentRole">${ctkSafe(student.role || student.department || "CTK Student")}</h3>
<p><i class="fa-solid fa-building-columns"></i> ${ctkSafe(student.institution || student.department || "CTK Platform")}</p>
<div class="verify-badge"><i class="fa-solid fa-circle-check"></i> Verified Student</div>
</div>
</div>
<div class="qr-card">
<img src="../qr/${ctkSafe(student.uuid)}.png" alt="QR">
<h4>Scan to Verify</h4>
<p>Student ID</p>
<span>${ctkSafe(student.uuid)}</span>
</div>
</div>
</section>
<section class="grid">
<div class="card">
<h2>Skills</h2>
${skills.map(skill=>`
<div class="skill"><span>${ctkSafe(skill)}</span><span>${ctkSafe(score)}%</span></div>
<div class="bar"><div class="fill" style="width:${ctkSafe(score)}%"></div></div>
`).join("")}
</div>
<div class="card">
<h2>AI Readiness Score</h2>
<div class="skill"><span>${ctkSafe(student.role || "Career Readiness")}</span><span>${ctkSafe(score)}%</span></div>
<div class="bar"><div class="fill green" style="width:${ctkSafe(score)}%"></div></div>
<ul class="roles">
<li>${ctkSafe(student.role || "Verified Learner")}</li>
<li>${ctkSafe(student.department || "Industry Ready")}</li>
<li>CTK Portfolio Holder</li>
</ul>
</div>
</section>
<section class="wide-card">
<div class="title-row">
<h2>Certificates</h2>
<span>Verified</span>
</div>
<div class="certificate-grid">
${certificates.map(cert=>`
<div class="cert">
<h3>${ctkSafe(cert)}</h3>
<p>Issued by CTK</p>
<div class="verified-small">Verified</div>
</div>
`).join("")}
</div>
</section>
<section class="bottom-grid">
<div class="card">
<h2>Projects</h2>
${projects.map(project=>`
<div class="project">
<h4>${ctkSafe(project)}</h4>
<p>Student project verified by CTK.</p>
</div>
`).join("")}
</div>
<div class="card">
<h2>Badges</h2>
<div class="badges">
${badges.map(badge=>`
<div>CTK<span>${ctkSafe(badge)}</span></div>
`).join("")}
</div>
</div>
</section>
<footer>
<h3>Verified by CTK Platform</h3>
<p>Building a trusted future through skills and knowledge.</p>
<div class="powered">Powered by Chaan-Techknowledge</div>
</footer>
</div>
</body>
</html>
`;

    downloadHTML(
        student.uuid
        +
        ".html",
        html
    );

}

/* ==========================
   CTK ADD-ON TRUE FINAL NO-OVERLAP GENERATORS
========================== */

function ctkWaitPdfScript(){
    return `
async function waitForCertificateImages(){
    const images = Array.from(document.querySelectorAll(".certificate img"));
    await Promise.all(images.map(img=>{
        if(img.complete) return Promise.resolve();
        return new Promise(resolve=>{
            img.onload = resolve;
            img.onerror = resolve;
        });
    }));
}
async function downloadCertificatePDF(){
    const certificate = document.querySelector(".certificate");
    document.body.classList.add("pdf-exporting");
    await waitForCertificateImages();
    const canvas = await html2canvas(certificate,{
        scale:3,
        useCORS:true,
        backgroundColor:"#ffffff"
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf.jsPDF("p","mm","a4");
    pdf.addImage(imgData,"PNG",0,0,210,297);
    pdf.save(student.uuid + ".pdf");
    document.body.classList.remove("pdf-exporting");
}`;
}

function generateCertificate(student){
    if(!student){ alert("Save Student First"); return; }
    const issueDate = new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"});
    const institution = student.institution_name || student.institution || "Chaan-Techknowledge (CTK)";
    const registration = student.registration_number || student.uuid;
    const course = student.role || ctkSectionList(student.certificates)[0] || "Professional Program";
    const founder = student.founder_name || "";
    const founderSig = student.authoritySignature ? `<img src="${ctkSafe(student.authoritySignature)}" alt="Authority Signature">` : "";
    const directorSig = student.authoritySignature ? `<img src="${ctkSafe(student.authoritySignature)}" alt="Authority Signature">` : "";
    const html = `
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ctkSafe(student.uuid)} - CTK Certificate</title>
<link rel="stylesheet" href="../certificate.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Cinzel:wght@400;600;700;800&family=Great+Vibes&display=swap" rel="stylesheet">
</head><body>
<div class="certificate"><div class="inner">
<div class="top"><div class="cert-id"><p>CERTIFICATE ID</p><h4>${ctkSafe(student.uuid)}</h4></div><div class="qr"><img src="../qr/${ctkSafe(student.uuid)}.png" alt="QR"><span>Scan to Verify</span></div></div>
<div class="logo-box"><img class="logo" src="../logo/ctk-logo.png" alt="CTK Logo"><h1>CTK</h1><h2>CREDENTIAL & TALENT KNOWLEDGE</h2><p>EMPOWERING SKILLS. BUILDING FUTURES.</p><div class="line"></div></div>
<div class="title"><h1>CERTIFICATE</h1><h2>OF ACHIEVEMENT</h2><p>This is proudly presented to</p><div class="student-name">${ctkSafe(student.name)}</div><div class="gold-line"></div><p>for successfully completing the</p><h3>${ctkSafe(course)}</h3><div class="desc">The student has demonstrated dedication, knowledge and practical skills in this area.</div></div>
<div class="footer"><div class="ai-analyze">AI Analyze : ${ctkSafe(student.ai_score || "0")}%</div><div class="seal"><span>CTK</span>VERIFIED</div><div class="authority-sign">${student.authoritySignature ? `<img src="${ctkSafe(student.authoritySignature)}" alt="Authority Signature">` : ""}<h4>Syed Khaja</h4><p>Authorized Signatory</p></div></div>
<div class="cards four"><div class="card"><div><small>ISSUED ON</small><h4>${ctkSafe(issueDate)}</h4></div></div><div class="card"><div><small>STATUS</small><h4 class="green">VALID</h4></div></div><div class="card"><div><small>INSTITUTION</small><h4>${ctkSafe(institution)}</h4></div></div><div class="card"><div><small>REGISTRATION NO</small><h4>${ctkSafe(registration)}</h4></div></div></div>
<div class="verify">Verify this certificate anytime by scanning the QR code or visiting:<br><b>${ctkSafe(ctkCertificateURL(student))}</b></div>
</div></div>
<button class="pdf-btn" onclick="downloadCertificatePDF()">Download Certificate PDF</button>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script>const student={uuid:"${ctkSafe(student.uuid)}"};${ctkWaitPdfScript()}</script>
</body></html>`;
    downloadHTML(student.uuid + ".html",html);
}

function generatePortfolio(student){
    if(!student){ alert("Save Student First"); return; }
    const institution = student.institution_name || student.institution || "";
    const score = student.ai_score || "";
    const skills = ctkSectionList(student.skills), certs = ctkSectionList(student.certificates), projects = ctkSectionList(student.projects), badges = ctkSectionList(student.badges);
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${ctkSafe(student.name)} - CTK Portfolio</title><link rel="stylesheet" href="../portfolio.css"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></head><body><div class="portfolio"><section class="hero"><nav class="navbar"><div class="brand"><img src="../logo/ctk-logo.png" alt="CTK Logo"><div class="brand-text"><h2>CTK</h2><span>Credential & Talent Knowledge</span></div></div><ul><li>Home</li><li>Verify Certificate</li><li><button class="contact-btn">Contact</button></li></ul></nav><div class="hero-content"><div class="profile"><div class="photo-box"><img id="profilePhoto" src="../photos/${ctkSafe(student.uuid)}.jpg" alt="Student" onerror="this.onerror=null;this.src='../logo/ctk-logo.png';"><div class="verified">OK</div></div><div class="info"><h1>${ctkSafe(student.name)}</h1>${student.role?`<h3>${ctkSafe(student.role)}</h3>`:""}${institution?`<p><i class="fa-solid fa-building-columns"></i> ${ctkSafe(institution)}</p>`:""}<div class="verify-badge"><i class="fa-solid fa-circle-check"></i> Verified Student</div></div></div><div class="qr-card"><img src="../qr/${ctkSafe(student.uuid)}.png" alt="QR"><h4>Scan to Verify</h4><p>Student ID</p><span>${ctkSafe(student.uuid)}</span></div></div></section>${(skills.length||score)?`<section class="grid">${skills.length?`<div class="card"><h2>Skills</h2>${skills.map(s=>`<div class="skill"><span>${ctkSafe(s)}</span>${score?`<span>${ctkSafe(score)}%</span>`:""}</div>${score?`<div class="bar"><div class="fill" style="width:${ctkSafe(score)}%"></div></div>`:""}`).join("")}</div>`:""}${score?`<div class="card"><h2>AI Readiness Score</h2><div class="skill"><span>${ctkSafe(student.role||"AI Readiness")}</span><span>${ctkSafe(score)}%</span></div><div class="bar"><div class="fill green" style="width:${ctkSafe(score)}%"></div></div></div>`:""}</section>`:""}${certs.length?`<section class="wide-card"><div class="title-row"><h2>Certificates</h2><span>Verified</span></div><div class="certificate-grid">${certs.map(c=>`<div class="cert"><h3>${ctkSafe(c)}</h3><p>Issued by CTK</p><div class="verified-small">Verified</div></div>`).join("")}</div></section>`:""}${(projects.length||badges.length)?`<section class="bottom-grid">${projects.length?`<div class="card"><h2>Projects</h2>${projects.map(p=>`<div class="project"><h4>${ctkSafe(p)}</h4><p>Student project verified by CTK.</p></div>`).join("")}</div>`:""}${badges.length?`<div class="card"><h2>Badges</h2><div class="badges">${badges.map(b=>`<div>CTK<span>${ctkSafe(b)}</span></div>`).join("")}</div></div>`:""}</section>`:""}<footer><h3>Verified by CTK Platform</h3><p>Building a trusted future through skills and knowledge.</p><div class="powered">Powered by Chaan-Techknowledge</div></footer></div></body></html>`;
    downloadHTML(student.uuid + ".html",html);
}
