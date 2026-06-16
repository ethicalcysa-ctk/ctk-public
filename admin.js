// admin.js (1/4)

function generateUUID(){

    const uuid =
    crypto.randomUUID();

    document
    .getElementById(
        "uuid"
    ).value = uuid;

}



document
.getElementById(
"photo"
)
.addEventListener(
"change",
function(e){

    const file =
    e.target.files[0];

    if(!file) return;

    const reader =
    new FileReader();

    reader.onload =
    function(){

        document
        .getElementById(
        "output"
        ).innerHTML = `

        <div class="preview-profile">

            <img
            src="${reader.result}">

            <div
            class="preview-details">

                <h2>

                Preview

                </h2>

                <p>

                Upload successful

                </p>

            </div>

        </div>

        `;

    };

    reader.readAsDataURL(
        file
    );

});



function saveStudent(){

    const student = {

        uuid:
        document
        .getElementById(
        "uuid"
        ).value,

        name:
        document
        .getElementById(
        "name"
        ).value,

        department:
        document
        .getElementById(
        "department"
        ).value,

        year:
        document
        .getElementById(
        "year"
        ).value,

        institution:
        document
        .getElementById(
        "institution"
        ).value,

        role:
        document
        .getElementById(
        "role"
        ).value,

        email:
        document
        .getElementById(
        "email"
        ).value,

        phone:
        document
        .getElementById(
        "phone"
        ).value,

        linkedin:
        document
        .getElementById(
        "linkedin"
        ).value,

        github:
        document
        .getElementById(
        "github"
        ).value,

        ai_score:
        document
        .getElementById(
        "score"
        ).value,

// admin.js (2/4)

        skills:
        document
        .getElementById(
        "skills"
        ).value
        .split(",")
        .map(
            s=>s.trim()
        )
        .filter(Boolean),

        projects:
        document
        .getElementById(
        "projects"
        ).value
        .split(",")
        .map(
            s=>s.trim()
        )
        .filter(Boolean),

        certificates:
        document
        .getElementById(
        "certificates"
        ).value
        .split(",")
        .map(
            s=>s.trim()
        )
        .filter(Boolean),

        badges:
        document
        .getElementById(
        "badges"
        ).value
        .split(",")
        .map(
            s=>s.trim()
        )
        .filter(Boolean),

        created_at:
        new Date()
        .toISOString()

    };


    if(
        !student.name
    ){

        alert(
        "Student Name Required"
        );

        return;

    }


    if(
        !student.uuid
    ){

        generateUUID();

        student.uuid =
        document
        .getElementById(
        "uuid"
        ).value;

    }


    window.studentData =
    student;


    localStorage.setItem(

        "ctk_"
        +
        student.uuid,

        JSON.stringify(
            student
        )

    );


    updatePreview(
        student
    );

    addStudentRow(
        student
    );


    alert(
    "Student Saved Successfully"
    );

}

// admin.js (3/4)

function updatePreview(student){

    document
    .getElementById(
        "output"
    ).innerHTML = `

    <div class="preview-profile">

        <img
        src="https://placehold.co/120x120">

        <div class="preview-details">

            <h2>
                ${student.name}
            </h2>

            <p>
                <b>Role:</b>
                ${student.role}
            </p>

            <p>
                <b>Department:</b>
                ${student.department}
            </p>

            <p>
                <b>Institution:</b>
                ${student.institution}
            </p>

            <p>
                <b>AI Score:</b>
                ${student.ai_score}%
            </p>

            <p>
                <b>Skills:</b>
                ${student.skills.join(", ")}
            </p>

        </div>

    </div>

    `;

}



function addStudentRow(student){

    const table =

    document
    .getElementById(
        "studentTableBody"
    );

    const row =
    document
    .createElement(
        "tr"
    );

    row.innerHTML = `

    <td>

        <img
        class="student-photo"
        src="https://placehold.co/50x50">

    </td>

    <td>

        ${student.name}

    </td>

    <td>

        ${student.department}

    </td>

    <td>

        ${student.role}

    </td>

    <td>

        ${student.ai_score}%

    </td>

    <td>

        <button
        class="
        action-btn
        view-btn"
        onclick="
        viewStudent(
        '${student.uuid}'
        )">

            View

        </button>


        <button
        class="
        action-btn
        delete-btn"
        onclick="
        deleteStudent(
        '${student.uuid}'
        )">

            Delete

        </button>

    </td>

    `;

    table.appendChild(
        row
    );

}

// admin.js (4/4) FINAL


function viewStudent(uuid){

    const data =
    localStorage.getItem(
        "ctk_" + uuid
    );

    if(!data) return;

    const student =
    JSON.parse(data);

    document
    .getElementById(
        "modalBody"
    ).innerHTML = `

        <h2>
            ${student.name}
        </h2>

        <p>
            <b>UUID:</b>
            ${student.uuid}
        </p>

        <p>
            <b>Department:</b>
            ${student.department}
        </p>

        <p>
            <b>Institution:</b>
            ${student.institution}
        </p>

        <p>
            <b>Role:</b>
            ${student.role}
        </p>

        <p>
            <b>AI Score:</b>
            ${student.ai_score}%
        </p>

        <hr>

        <h3>
            Skills
        </h3>

        <ul>
            ${student.skills
            .map(
                s=>`<li>${s}</li>`
            ).join("")}
        </ul>

        <hr>

        <h3>
            Projects
        </h3>

        <ul>
            ${student.projects
            .map(
                p=>`<li>${p}</li>`
            ).join("")}
        </ul>

        <hr>

        <h3>
            Certificates
        </h3>

        <ul>
            ${student.certificates
            .map(
                c=>`<li>${c}</li>`
            ).join("")}
        </ul>

    `;

    openModal();

}



function deleteStudent(uuid){

    if(
        !confirm(
        "Delete student?"
        )
    ){
        return;
    }

    localStorage.removeItem(
        "ctk_" + uuid
    );

    location.reload();

}



function loadStudents(){

    const table =

    document
    .getElementById(
        "studentTableBody"
    );

    table.innerHTML = "";

    let count = 0;

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

            const student =
            JSON.parse(
                localStorage.getItem(
                    key
                )
            );

            addStudentRow(
                student
            );

            count++;

        }

    }

    document
    .getElementById(
        "studentCount"
    ).innerText =
    count;

}



window.onload = function(){

    generateUUID();

    loadStudents();

};