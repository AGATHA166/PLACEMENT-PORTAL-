// COMMON MESSAGE

function showMessage(message) {
    alert(message);
}


// POST JOB

function postJob(event) {

    event.preventDefault();

    const role =
        document.getElementById("jobRole").value;

    const message =
        document.getElementById("jobMessage");

    message.innerHTML =
        '<div class="success-message">' +
        '✓ Job posted successfully for ' +
        role +
        '.</div>';

    event.target.reset();

}


// SEARCH APPLICANTS

function searchApplicants() {

    const input =
        document.getElementById("applicantSearch");

    if (!input) {
        return;
    }

    const searchText =
        input.value.toLowerCase();

    const applicants =
        document.querySelectorAll(".applicant-row");

    applicants.forEach(function(applicant) {

        const text =
            applicant.innerText.toLowerCase();

        if (text.includes(searchText)) {

            applicant.style.display = "";

        } else {

            applicant.style.display = "none";

        }

    });

}