let bookTitle = document.getElementsByTagName('h1')[0];

bookTitle.addEventListener('mouseover', function () {
	bookTitle.classList.add('book-title');
});

bookTitle.addEventListener('click', function () {
	window.location.href = 'https://www.google.com/books/edition/Why_Nations_Fail/yIV_NMDDIvYC?hl=en';
});
