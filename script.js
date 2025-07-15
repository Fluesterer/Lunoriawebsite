const rankCards = document.querySelectorAll('.rank-card');
const rankDetails = document.getElementById('rank-details');
const rankTitle = document.getElementById('rank-title');
const rankPerks = document.getElementById('rank-perks');
const comparison = document.getElementById('comparison-table');

const rankData = {
    vip: {
        title: 'VIP',
        perks: ['Zugang zu /kit vip', 'Grüner Name im Chat']
    },
    elite: {
        title: 'Elite',
        perks: ['Alles von VIP', 'Fly-Modus', 'Nickname ändern']
    },
    ultra: {
        title: 'Ultra',
        perks: ['Alles von Elite', 'Farbnamen', 'Priority Queue']
    }
};

rankCards.forEach(card => {
    card.addEventListener('click', () => {
        const rank = card.dataset.rank;
        const data = rankData[rank];

        rankTitle.textContent = data.title;
        rankPerks.innerHTML = '';
        data.perks.forEach(p => {
            const li = document.createElement('li');
            li.textContent = p;
            rankPerks.appendChild(li);
        });

        rankDetails.classList.remove('hidden');
        comparison.classList.add('hidden');
    });
});

function showComparison() {
    comparison.classList.remove('hidden');
}
