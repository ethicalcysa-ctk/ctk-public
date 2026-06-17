// github.js FULL REPLACE

console.log("GitHub Ready");

const GITHUB_USERNAME =
"ethicalcysa-ctk";

const REPO =
"ctk-public";

const BASE_URL =

"https://"
+
GITHUB_USERNAME
+
".github.io/"
+
REPO
+
"/";

function getPortfolioURL(uuid){

    return BASE_URL
    +
    "p/"
    +
    uuid
    +
    ".html";

}

function getCertificateURL(certId){

    return BASE_URL
    +
    "c/"
    +
    certId
    +
    ".html";

}

function getPhotoURL(uuid){

    return BASE_URL
    +
    "photos/"
    +
    uuid
    +
    ".jpg";

}

function getQRURL(uuid){

    return BASE_URL
    +
    "qr/"
    +
    uuid
    +
    ".png";

}

function openPortfolio(uuid){

    window.open(

        getPortfolioURL(
            uuid
        ),

        "_blank"

    );

}

function openCertificate(certId){

    window.open(

        getCertificateURL(
            certId
        ),

        "_blank"

    );

}

function openPhoto(uuid){

    window.open(

        getPhotoURL(
            uuid
        ),

        "_blank"

    );

}

function openQR(uuid){

    window.open(

        getQRURL(
            uuid
        ),

        "_blank"

    );

}

function copyPortfolioURL(uuid){

    navigator.clipboard.writeText(

        getPortfolioURL(
            uuid
        )

    );

    alert(
    "Portfolio URL Copied"
    );

}

function copyCertificateURL(certId){

    navigator.clipboard.writeText(

        getCertificateURL(
            certId
        )

    );

    alert(
    "Certificate URL Copied"
    );

}

console.log(
"GitHub Ready"
);