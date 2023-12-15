document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('footer');

    if (!footer) {
        console.error("Footer element not found.");
        return;
    }

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const isBottom = scrollPosition + windowHeight >= documentHeight;

        footer.style.display = isBottom ? 'block' : 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-filter');

            // Show all cards if "All" is selected
            if (category === 'all') {
                workCards.forEach(card => {
                    card.style.display = 'block';
                });
            } else {
                // Hide cards that don't match the selected category
                workCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    card.style.display = cardCategory === category ? 'block' : 'none';
                });
            }

            // Highlight the selected filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
