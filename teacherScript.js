function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.card');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function createQuiz() {
    alert('Create Quiz functionality is not implemented yet.');
}
