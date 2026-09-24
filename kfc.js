const data = [
    { icon: '☕', nama: 'Landing Kopi' },
    { icon: '📊', nama: 'Dashboard' },
    { icon: '🍗', nama: 'Clone KFC' },
];

document.getElementById('grid').innerHTML = data.map(d => `
    <div class="card">
        <div class="icon">${d.icon}</div>
        <h3>${d.nama}</h3>
        <p>Project web sederhana.</p>
    </div>
`).join('');

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.onclick = () => navMenu.classList.toggle('open');

document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = () => navMenu.classList.remove('open');
});

document.getElementById('form').onsubmit = (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const status = document.getElementById('status');
    
    if (!nama) {
        status.style.color = '#ef4444';
        status.textContent = 'Isi nama dulu!';
        return;
    }
    
    status.style.color = '#10b981';
    status.textContent = `Terima kasih, ${nama}!`;
    e.target.reset();
};