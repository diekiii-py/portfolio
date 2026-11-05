(function() {
	var tabList = document.querySelector('.creative-tabs');
	if (!tabList) {
		return;
	}

	var tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));

	function activateTab(selectedTab, moveFocus) {
		tabs.forEach(function(tab) {
			var selected = tab === selectedTab;
			var panel = document.getElementById(tab.getAttribute('aria-controls'));
			tab.setAttribute('aria-selected', String(selected));
			tab.setAttribute('tabindex', selected ? '0' : '-1');
			tab.classList.toggle('is-active', selected);
			var wasHidden = panel.hidden;
			panel.hidden = !selected;
			if (selected && wasHidden) {
				window.siteMotion.enter(panel, { opacity: 0, transform: 'translateY(.6em)' }, 450);
			}
		});

		if (moveFocus) {
			selectedTab.focus();
		}
	}

	tabs.forEach(function(tab, index) {
		tab.addEventListener('click', function() {
			activateTab(tab, false);
		});

		tab.addEventListener('keydown', function(event) {
			var nextIndex;
			if (event.key === 'ArrowRight') {
				nextIndex = (index + 1) % tabs.length;
			} else if (event.key === 'ArrowLeft') {
				nextIndex = (index - 1 + tabs.length) % tabs.length;
			} else if (event.key === 'Home') {
				nextIndex = 0;
			} else if (event.key === 'End') {
				nextIndex = tabs.length - 1;
			} else {
				return;
			}

			event.preventDefault();
			activateTab(tabs[nextIndex], true);
		});
	});
})();

(function() {
	var filters = Array.from(document.querySelectorAll('.creative-filter'));
	var works = Array.from(document.querySelectorAll('.creative-work'));

	filters.forEach(function(button) {
		button.addEventListener('click', function() {
			var category = button.getAttribute('data-filter');
			filters.forEach(function(other) {
				var active = other === button;
				other.classList.toggle('is-active', active);
				other.setAttribute('aria-pressed', String(active));
			});
			works.forEach(function(work) {
				work.hidden = category !== 'all' && work.getAttribute('data-category') !== category;
			});
			works.filter(function(work) {
				return !work.hidden;
			}).forEach(function(work, index) {
				window.siteMotion.enter(work, { opacity: 0, transform: 'translateY(1em) scale(.96)' }, 450, index * 40);
			});
		});
	});
})();
