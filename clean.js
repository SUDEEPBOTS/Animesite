document.querySelectorAll('.post-lst, .owl-carousel').forEach(c => {
    c.innerHTML = '<div style="text-align:center; padding:40px; border: 2px dashed #9333ea; border-radius: 12px; margin: 20px;"><h2 style="color:white;">🚀 Dynamic Anime Feed</h2><p style="color:#94a3b8;">Admin Panel se upload kiya hua Anime yahan dikhega!</p></div>';
});
document.querySelectorAll('.networks, .network-list, img[alt="Networks"]').forEach(net => {
    if(net.parentElement) net.parentElement.style.display = 'none';
});
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() { this.style.display = 'none'; };
});
