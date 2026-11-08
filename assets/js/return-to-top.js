// ===== Scroll to Top ====
const returnToTop = document.getElementById('return-to-top');
window.addEventListener('scroll', () => {
	if (window.scrollY >= 50) {
    	returnToTop.style.display = 'block';
    	returnToTop.style.opacity = '1';
	} else {
    	returnToTop.style.opacity = '0';
    	setTimeout(() => {
        	if (window.scrollY < 50) {
            	returnToTop.style.display = 'none';
        	}
    	}, 200);
	}
});
returnToTop.addEventListener('click', (e) => {
	e.preventDefault();
	window.scrollTo({
    	top: 0,
    	behavior: 'smooth'
	});
});