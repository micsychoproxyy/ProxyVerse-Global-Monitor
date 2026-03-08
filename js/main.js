 // Console log
console.log("ProxyVerse Global Monitor Online 🚀");

// Inisialisasi peta
var map = L.map('map').setView([20, 0], 2); // koordinat dunia

// Tambah layer dasar
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Contoh marker proxy
var proxyMarker = L.marker([31, 35]).addTo(map);
proxyMarker.bindPopup("<b>Proxy Base</b><br>Levant Region").openPopup();
