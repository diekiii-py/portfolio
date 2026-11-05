/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	$('#current-situation').on('mouseenter', function() {
		$('#current-situation__explained').show();
	}).on('mouseleave', function() {
		$('#current-situation__explained').hide();
	});

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
			if (browser.os == 'wp' && browser.osVersion < 10)
				$('#navButton, #navPanel, #page-wrapper')
					.css('transition', 'none');

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);

/* Shared motion helpers (Web Animations API); all site animation goes through here. */
window.siteMotion = (function() {
	var EASE = 'cubic-bezier(.2,.75,.25,1)';

	// Motion is intentionally always on; the portfolio's animations are part of the design.
	function reduced() {
		return false;
	}

	function stop(el) {
		if (el._motion) {
			el._motion.cancel();
			el._motion = null;
		}
	}

	// Animates from the current computed values to the given inline styles.
	// A null value clears the inline style so the element returns to its CSS state.
	function tween(el, props, duration, easing) {
		var keys = Object.keys(props);
		var from = {};
		var to = {};
		var computed;

		stop(el);
		computed = getComputedStyle(el);
		keys.forEach(function(key) {
			from[key] = computed[key];
		});
		keys.forEach(function(key) {
			el.style[key] = props[key] === null ? '' : props[key];
		});
		if (reduced()) {
			return;
		}
		computed = getComputedStyle(el);
		keys.forEach(function(key) {
			to[key] = computed[key];
		});
		el._motion = el.animate([from, to], { duration: duration || 350, easing: easing || EASE });
		el._motion.onfinish = function() {
			el._motion = null;
		};
	}

	// Animates from a start keyframe to the element's current state.
	function enter(el, from, duration, delay, easing) {
		if (reduced() || !el.animate) {
			return;
		}
		stop(el);
		el._motion = el.animate([from, {}], { delay: delay || 0, duration: duration || 600, easing: easing || EASE, fill: 'backwards' });
		el._motion.onfinish = function() {
			el._motion = null;
		};
	}

	return { reduced: reduced, tween: tween, enter: enter };
})();

(function() {
	function shape(left, top, size, rotation, opacity, filled) {
		return { left: left, top: top, size: size, rotation: rotation, opacity: opacity, filled: filled };
	}

	var perspectiveList = [
		{
			text: 'your friend',
			color: '#0b5c63',
			shapes: [
				shape(15, 25, 30, -18, 0.58, false),
				shape(83, 22, 18, 35, 0.68, false),
				shape(23, 76, 26, 12, 0.56, false),
				shape(79, 73, 4, 0, 0.55, false),
				shape(89, 49, 32, -28, 0.48, false),
				shape(68, 82, 20, 15, 0.62, false)
			]
		},
		{
			text: 'your neighbour',
			color: '#c2410c',
			shapes: [
				shape(18, 20, 34, 0, 0.7, true),
				shape(81, 26, 28, 22, 0.7, true),
				shape(27, 74, 16, -24, 0.72, false),
				shape(73, 77, 5, 0, 0.75, false),
				shape(89, 55, 42, 18, 0.55, false),
				shape(63, 18, 14, 28, 0.62, false)
			]
		},
		{
			text: 'you',
			color: '#460047',
			shapes: [
				shape(13, 30, 20, 14, 0.72, false),
				shape(87, 22, 18, -18, 0.66, false),
				shape(24, 76, 36, 8, 0.72, false),
				shape(80, 72, 4, 0, 0.75, false),
				shape(91, 48, 48, -32, 0.62, false),
				shape(70, 82, 42, 22, 0.78, false)
			]
		},
		{
			text: 'a stranger',
			color: '#1f6b3a',
			shapes: [
				shape(17, 18, 42, 42, 0.52, false),
				shape(82, 28, 24, 0, 0.7, true),
				shape(25, 78, 20, -14, 0.66, false),
				shape(73, 79, 4, 0, 0.62, false),
				shape(88, 52, 26, 38, 0.64, false),
				shape(65, 17, 32, -22, 0.7, false)
			]
		},
		{
			text: 'they',
			color: '#2b2fb0',
			shapes: [
				shape(15, 28, 24, 55, 0.58, false),
				shape(85, 20, 34, -12, 0.56, false),
				shape(22, 78, 30, 22, 0.66, false),
				shape(78, 76, 5, 0, 0.64, false),
				shape(91, 48, 38, -40, 0.58, false),
				shape(66, 83, 24, 12, 0.72, false)
			]
		},
		{
			text: 'ur mom lol',
			color: '#b0155a',
			shapes: [
				shape(14, 22, 22, 15, 0.64, true),
				shape(84, 23, 42, 30, 0.55, false),
				shape(23, 73, 24, 0, 0.62, false),
				shape(76, 76, 5, 0, 0.72, false),
				shape(91, 53, 20, -48, 0.62, false),
				shape(66, 82, 36, 18, 0.58, false)
			]
		}
	];
	var banner = document.getElementById('banner');
	var elements = Array.from(document.querySelectorAll('#carouselContainer .perspective-word'));
	var shapes = Array.from(document.querySelectorAll('#banner .hero-shape'));

	if (!banner || elements.length !== perspectiveList.length || shapes.length !== 6) {
		return;
	}

	var focusIndex = 2;
	var focusSlot = 2;
	var spins = 0;
	// Icons hop between these edge positions (clear of the text) on every change.
	var anchors = [[13, 28], [86, 22], [24, 76], [78, 74], [91, 50], [67, 82], [6, 55], [50, 12]];

	function updatePerspective(animate) {
		var previousColors = elements.map(function(element) {
			var name = element.querySelector('.perspective-name');
			return getComputedStyle(name || element).color;
		});

		elements.forEach(function(element, slot) {
			var perspectiveIndex = (focusIndex + slot - focusSlot + perspectiveList.length) % perspectiveList.length;
			var perspective = perspectiveList[perspectiveIndex];
			var text = perspective.text;

			var perspectiveName = element.querySelector('.perspective-name');
			if (perspectiveName) {
				perspectiveName.textContent = text;
			} else {
				element.textContent = text;
			}
			element.className = 'perspective-word ' + (slot === focusSlot ? 'word-focus' : slot === focusSlot - 1 ? 'word-near' : Math.abs(slot - focusSlot) === 2 ? 'word-mid' : 'word-far');
		});

		banner.style.setProperty('--banner-color', perspectiveList[focusIndex].color);

		perspectiveList[focusIndex].shapes.forEach(function(shapeStyle, index) {
			var element = shapes[index];
			element.style.setProperty('--shape-color', perspectiveList[focusIndex].color);
			var anchor = anchors[(index + spins) % anchors.length];
			element.style.setProperty('--shape-left', anchor[0] + '%');
			element.style.setProperty('--shape-top', anchor[1] + '%');
			element.style.setProperty('--shape-size', shapeStyle.size + 'px');
			element.style.setProperty('--shape-rotation', (shapeStyle.rotation + (index % 2 === 0 ? 1 : -1) * spins * 180) + 'deg');
			element.style.setProperty('--shape-opacity', shapeStyle.opacity);
			element.classList.toggle('is-filled', shapeStyle.filled);
		});

		if (animate) {
			elements.forEach(function(element, slot) {
				window.siteMotion.enter(wordTarget(element), { opacity: 0, transform: 'translateY(.45em)', color: previousColors[slot] }, 700, 0, 'cubic-bezier(.25,.1,.25,1)');
			});
			shapes.forEach(function(element, index) {
				window.siteMotion.enter(element, {
					opacity: 0,
					transform: 'translate(-50%, -50%) rotate(' + (index % 2 === 0 ? -90 : 90) + 'deg) scale(0)'
				}, 600, index * 70, 'cubic-bezier(.34,1.56,.64,1)');
			});
		}
	}

	// Only the changing word moves; "but, will" and "actually use it?" stay put.
	function wordTarget(element) {
		return element.querySelector('.perspective-name') || element;
	}

	updatePerspective();

	// Fade the current words out (ease-in), swap them, then fade the new ones in (ease-out).
	window.setInterval(function() {
		elements.forEach(function(element) {
			window.siteMotion.tween(wordTarget(element), { opacity: '0', transform: 'translateY(-.35em)' }, 300, 'cubic-bezier(.4,0,1,1)');
		});
		shapes.forEach(function(element, index) {
			window.siteMotion.tween(element, { opacity: '0', transform: 'translate(-50%, -50%) rotate(' + (index % 2 === 0 ? 90 : -90) + 'deg) scale(0)' }, 350, 'cubic-bezier(.4,0,1,1)');
		});
		window.setTimeout(function() {
			elements.forEach(function(element) {
				var target = wordTarget(element);
				target.style.opacity = '';
				target.style.transform = '';
			});
			shapes.forEach(function(element) {
				element.style.opacity = '';
				element.style.transform = '';
			});
			focusIndex = (focusIndex + 1) % perspectiveList.length;
			spins += 1;
			updatePerspective(true);
		}, 350);
	}, 2400);
})();
