function searchJobs() {
    const input = document.getElementById("jobSearch");
    if (!input) {
        return;
    }
    const searchText =
        input.value.toLowerCase();
    const jobs =
        document.querySelectorAll(".job-card");
    jobs.forEach(function(job) {
        const text =
            job.innerText.toLowerCase();
        if (text.includes(searchText)) {
            job.style.display = "flex";
        } else {
            job.style.display = "none";
        }
    });
}