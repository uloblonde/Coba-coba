const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
    this.classList.add('tab-border');
}
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});