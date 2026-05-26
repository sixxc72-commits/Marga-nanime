// ==========================================
// 1. EFEK SAKURA BERGUGURAN (SAKURA FALL)
// ==========================================
const fragment = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {
    const sakura = document.createElement("div");
    sakura.className = "sakura";
    sakura.style.left = Math.random() * 100 + "vw";
    sakura.style.animationDuration = (6 + Math.random() * 6) + "s";
    sakura.style.opacity = Math.random();
    const size = (8 + Math.random() * 8) + "px";
    sakura.style.width = size;
    sakura.style.height = size;
    fragment.appendChild(sakura);
}
document.body.appendChild(fragment);


// ==========================================
// 2. LOGIKA MODAL INTERAKTIF
// ==========================================
const modal = document.getElementById('universalModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const btnContainer = document.getElementById('modalBtnContainer');

// Delegasi Event Tunggal untuk menghemat beban RAM browser
document.querySelector('.container').addEventListener('click', (e) => {
    // Cek apakah yang diklik card admin atau link box biasa
    const targetElement = e.target.closest('.admin-card, .link-box');
    if (!targetElement) return;

    const type = targetElement.getAttribute('data-type');
    const name = targetElement.getAttribute('data-name');
    const imgSrc = targetElement.getAttribute('data-img');

    // Setel konten dasar modal
    modalImg.src = imgSrc;
    modalName.innerText = name;

    // Render tombol di dalam modal secara dinamis berdasarkan tipenya
    if (type === 'admin') {
        const waUrl = targetElement.getAttribute('data-wa');
        const ttUrl = targetElement.getAttribute('data-tiktok');
        btnContainer.innerHTML = `
            <div class="social-buttons-row">
                <a href="${waUrl}" target="_blank" class="modal-btn btn-wa">WhatsApp</a>
                <a href="${ttUrl}" target="_blank" class="modal-btn btn-tt">TikTok</a>
            </div>
            <button class="modal-btn-close" id="modalCloseBtn">Kembali</button>
        `;
    } else if (type === 'link') {
        const targetUrl = targetElement.getAttribute('data-url');
        btnContainer.innerHTML = `
            <a href="${targetUrl}" target="_blank" class="btn-link-go">Buka Tautan</a>
            <button class="modal-btn-close" id="modalCloseBtn">Kembali</button>
        `;
    }

    modal.classList.add('active');
    
    // Pasang ulang trigger close untuk tombol kembali yang baru dirender
    document.getElementById('modalCloseBtn').addEventListener('click', () => {
        modal.classList.remove('active');
    });
});

// Menutup modal dengan klik area luar (background blur hitam)
modal.addEventListener('click', (e) => { 
    if (e.target === modal) {
        modal.classList.remove('active'); 
    }
});
                        
