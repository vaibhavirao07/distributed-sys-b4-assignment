document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('pageLoaded')) {
        let hitCount = parseInt(localStorage.getItem('pageHitCount')) || 0;
        hitCount++;
        localStorage.setItem('pageHitCount', hitCount);
        document.getElementById('hit-count').textContent = hitCount;
        sessionStorage.setItem('pageLoaded', 'true');
    } else {
        document.getElementById('hit-count').textContent = localStorage.getItem('pageHitCount');
    }
});