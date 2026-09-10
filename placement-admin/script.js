// COMMON MESSAGE

function showMessage(message) {

    alert(message);

}


// SEARCH STUDENTS

function searchStudents() {

    const input =
        document.getElementById("studentSearch");

    if (!input) {
        return;
    }

    const searchText =
        input.value.toLowerCase();

    const students =
        document.querySelectorAll(".student-row");

    students.forEach(function(student) {

        const text =
            student.innerText.toLowerCase();

        if (text.includes(searchText)) {

            student.style.display = "";

        } else {

            student.style.display = "none";

        }

    });

}


// SEARCH APPLICATIONS

function searchApplications() {

    const input =
        document.getElementById("applicationSearch");

    if (!input) {
        return;
    }

    const searchText =
        input.value.toLowerCase();

    const applications =
        document.querySelectorAll(".application-row");

    applications.forEach(function(application) {

        const text =
            application.innerText.toLowerCase();

        if (text.includes(searchText)) {

            application.style.display = "";

        } else {

            application.style.display = "none";

        }

    });

}


// VERIFY RECRUITER

function verifyRecruiter(button) {

    const row =
        button.closest("tr");

    const status =
        row.querySelector(".badge");

    status.textContent = "Verified";

    status.className = "badge green";

    button.textContent = "View";

    button.onclick = function() {

        showMessage(
            "Recruiter details viewed"
        );

    };

}


// APPROVE JOB

function approveJob(button) {

    const row =
        button.closest("tr");

    const status =
        row.querySelector(".badge");

    status.textContent = "Active";

    status.className = "badge green";

    button.textContent = "View";

    button.onclick = function() {

        showMessage(
            "Job details viewed"
        );

    };

}