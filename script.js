function toggleSport(id) {
    const sections = document.querySelectorAll('.sport-section');

    sections.forEach(section => {
        if (section.id === id) {
            section.style.display =
                section.style.display === 'block' ? 'none' : 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function toggleItem(clickedTitle) {
    const allSubItems = document.querySelectorAll('.sub-items');

    allSubItems.forEach(sub => {
        if (sub !== clickedTitle.nextElementSibling) {
            sub.style.display = 'none';
        }
    });

    const subItems = clickedTitle.nextElementSibling;
    subItems.style.display =
        subItems.style.display === 'block' ? 'none' : 'block';
}
