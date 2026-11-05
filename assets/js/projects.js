(function() {
	var projects = [
		{
			slug: 'delphi',
			title: 'Project DELPHI',
			category: 'Interaction design · Search and rescue',
			summary: 'A smart-buoy and thermal-drone concept with a real-time dispatcher dashboard for maritime search and rescue.',
			previewClass: 'project-preview--delphi',
			role: 'Lead UX Researcher & Visual Systems Designer',
			context: 'EIT Summer School multidisciplinary innovation project.',
			methods: 'Stakeholder interviews, journey mapping, Figma, STM32U5, thermal and motion sensors',
			brief: 'Explore how a connected buoy network and dispatcher interface could help identify and verify distress incidents involving vessels without transponders.',
			problem: 'Small vessels can be difficult to detect in open water, and reports may arrive late or lack enough detail to guide a response.',
			insight: 'The concept should not depend on people in distress sending a signal. Dispatchers also need prioritized, changing information and a way to verify an alert before directing response resources.',
			design: 'Developed a three-tier detection concept combining reports, buoy sensor signals, and checkpoint alerts. The dashboard presents alert levels, drift projections, and a proposed thermal-drone verification flow.',
			outcome: 'Built a laboratory proof of concept with microcontrollers, sensors, and a web dashboard, then demonstrated a simulated detection and verification sequence.'
		},
		{
			slug: 'grolsch',
			title: 'Grolsch Connect',
			category: 'UX research · B2B web usability',
			summary: 'Eye-tracking and usability testing exposed ordering friction in a wholesale portal.',
			previewClass: 'project-preview--grolsch',
			role: 'Lead UX Researcher & Usability Analyst',
			context: 'University of Twente BMS Lab usability project for Royal Grolsch N.V.; 9 participants.',
			methods: 'Tobii Pro Fusion eye-tracking, think-aloud testing, System Usability Scale',
			brief: 'Evaluate the tank-beer ordering journey in Grolsch Connect and identify ways to support hospitality customers moving from phone orders to self-service.',
			problem: 'Participants had trouble finding previous orders and some missed the minimum order quantity, which was presented in a hover tooltip.',
			insight: 'Important transaction information should be visible without hover, and frequently used ordering tasks should not be buried in account navigation.',
			design: 'Proposed a simpler ordering path, inline minimum-order information, clearer price and delivery details, and more direct access to saved orders.',
			outcome: 'Testing with nine participants found that 6/9 missed the minimum order quantity and 5/9 encountered pathing errors. The study produced a focused redesign framework.'
		},
		{
			slug: 'dancehub',
			title: 'DanceHub',
			category: 'Product design · Rehearsal learning',
			summary: 'A dance-practice concept shaped by dancer surveys, diary studies, and interviews.',
			previewClass: 'project-preview--dancehub',
			role: 'Project Lead & Lead UX Designer',
			context: 'University of Twente and Aalto University project for independent dancers.',
			methods: 'Survey (N=16), two-week diary study (N=5), interviews (N=3), Figma, usability evaluation',
			brief: 'Make at-home choreography practice more guided, from learning individual movements to planning group formations.',
			problem: 'General video platforms lack the playback and learning tools dancers need to review difficult steps, practise at a manageable pace, and plan formations.',
			insight: 'Dancers switch between active physical practice and lower-energy preparation, while piecing together separate tools for mirroring, looping, and formation planning.',
			design: 'Designed a high-fidelity practice prototype with mirrored video, adjustable looping and speed, a Technique Mode overlay, and split-screen formation planning.',
			outcome: 'Usability evaluation informed an integrated set of rehearsal features for solo and group practice.'
		},
		{
			slug: 'carl',
			title: 'Carl the Hospital Chameleon',
			category: 'Human-robot interaction · Paediatric care',
			summary: 'A non-verbal social robot concept for distraction and comfort during hospital procedures.',
			previewClass: 'project-preview--carl',
			role: 'Interaction Designer & Hardware Prototyper',
			context: 'University of Twente Human-Robot Interaction project.',
			methods: 'HRI literature review, Wizard-of-Oz testing, 3D printing, Arduino/ESP32, LED matrices',
			brief: 'Explore how a child-friendly social robot could offer distraction without relying on speech during medical procedures.',
			problem: 'A humanoid robot can imply conversational abilities it does not have, while a basic toy may not sustain a child’s attention.',
			insight: 'An animal-like form and non-verbal signals can communicate warmth without setting expectations of human conversation.',
			design: 'Prototyped a chameleon with expressive LED eyes, head tracking, soft tactile surfaces, semantic-free sounds, and a simple touch interaction.',
			outcome: 'Created a physical interaction prototype demonstrating a non-verbal approach to engagement and distraction.'
		},
		{
			slug: 'adhdino',
			title: 'ADHDino',
			category: 'Accessible learning · Web development',
			summary: 'A block-based coding editor concept with structured learning support for teens with ADHD.',
			previewClass: 'project-preview--adhdino',
			role: 'UX Researcher & Educational UI Designer',
			context: 'TU Eindhoven course project for high-school students learning with Blockly and Arduino.',
			methods: 'Accessibility research, Google Blockly, JavaScript, Arduino prototyping',
			brief: 'Adapt a visual programming workspace to make introductory coding more manageable for students with ADHD.',
			problem: 'Large sets of blocks and open-ended tasks can make it difficult to decide where to begin and keep track of progress.',
			insight: 'Breaking a task into a few visible steps and providing timely feedback can reduce the amount of information learners must manage at once.',
			design: 'Designed a guided sidebar with short steps, progress feedback, a supportive mascot, focus-and-break prompts, and physical Arduino activities.',
			outcome: 'Built a block-based learning concept that pairs step-by-step guidance with hands-on coding activities.'
		},
		{
			slug: 'parental-support',
			title: 'Parental Workplace Support',
			category: 'UX research · Workplace service',
			summary: 'A digital service concept for finding and using workplace lactation facilities.',
			previewClass: 'project-preview--parental',
			role: 'Lead UX Researcher & UI Designer',
			context: 'University of Twente human-centered design project.',
			methods: 'Semi-structured interviews, think-aloud sessions, journey mapping, Figma',
			brief: 'Investigate workplace pumping experiences and design a service concept to make facilities and support easier to access.',
			problem: 'Unclear room availability, awkward access processes, and limited information about facilities can make pumping at work stressful.',
			insight: 'Employees need practical information about rooms as well as a private, low-friction way to find and use them.',
			design: 'Proposed a floor-plan availability map, room booking, amenity information, reviews, and an optional peer-support forum.',
			outcome: 'Developed a digital workplace-support prototype informed by interviews and journey mapping.'
		},
		{
			slug: 'flowering',
			title: 'Flowering, Not Withering',
			category: 'Health and wellbeing · Inclusive interaction',
			summary: 'A nature-inspired concept for encouraging everyday movement among older women with limited mobility.',
			role: 'Lead UX Researcher & System Designer',
			context: 'University of Twente health and wellbeing design project.',
			methods: 'Literature review, cross-cultural interviews, co-design workshop, paper prototyping',
			brief: 'Explore a dignified, low-effort way to support regular movement in older women with limited mobility.',
			problem: 'Fitness tools can feel clinical, demanding, or disconnected from the everyday routines and abilities of their intended users.',
			insight: 'Movement is often part of domestic life, and progress should reflect personal capacity rather than compare users against a single target.',
			design: 'Designed a digital picture frame where a plant grows with daily movement, with adaptable goals and decorative sensors for mobility aids.',
			outcome: 'Produced a nature-based digital-physical concept and an evaluation approach using paper prototypes and participatory feedback.'
		},
		{
			slug: 'hooked',
			title: 'Hooked!',
			category: 'Game design · Unity',
			summary: 'A 2D platform game where a fishing rod gives players several ways to move through a level.',
			role: 'Lead Game Designer & Mechanics Prototyper',
			context: 'University of Twente game design team project, Fishy Business.',
			methods: 'Unity 2D, C# physics, pixel art, MDA framework, Self-Determination Theory',
			brief: 'Create a distinctive platforming experience around a fishing rod used for swinging, pulling, and vaulting.',
			problem: 'A precision platformer needs challenging movement that remains understandable and rewarding rather than frustrating.',
			insight: 'Players benefit from learning mechanics progressively and having more than one way to overcome obstacles.',
			design: 'Developed three grapple movement modes and paired them with custom pixel art, varied environments, and humorous character dialogue.',
			outcome: 'Produced a playable Unity demonstrator combining physics-based movement with a light narrative.'
		},
		{
			slug: 'adhd-warehouse-game',
			title: 'ADHD Asymmetric Co-op Warehouse Game',
			category: 'Game design · Neurodiversity',
			summary: 'A two-player game concept using asymmetric roles to encourage communication and shared problem solving.',
			role: 'Game Designer',
			context: 'University game design essay and concept project.',
			methods: 'Game-mechanics research, role and interface design, scenario prototyping',
			brief: 'Explore how cooperative play could help players practise communication and task coordination.',
			problem: 'Planning and sequencing multi-step tasks can be difficult, while conventional learning tools may feel overly clinical.',
			insight: 'Giving players different information and responsibilities creates a reason to communicate and ask for help.',
			design: 'Designed Manager and Floor Worker roles with separate dashboards, shared objectives, timed interruptions, and role switching.',
			outcome: 'Developed a theoretical game concept that frames executive-function challenges as collaborative play.'
		},
		{
			slug: 'mystic-garden',
			title: 'Mystic Garden',
			category: 'Spatial interaction · Research through Design',
			summary: 'An interactive room installation exploring tangible interaction and physical wayfinding.',
			role: 'Lead Spatial Designer & Interaction Prototyper',
			context: 'University of Twente Research through Design project.',
			methods: 'Iterative spatial prototyping, OpenCV, Python, paper craft, lighting and sound',
			brief: 'Create an immersive physical-digital garden where visitors can discover interactions through the space itself.',
			problem: 'Complex instructions and crowded layouts can distract from the experience and make it unclear how to participate.',
			insight: 'Clear spatial cues and tangible props can invite exploration more naturally than a screen full of directions.',
			design: 'Combined a softly lit room, handcrafted flowers and butterfly props, and computer-vision-triggered projections.',
			outcome: 'Iterated from restrictive tables to a more open floor layout with clearer paths and tangible interaction points.'
		},
		{
			slug: 'hex2o',
			title: 'Hex2O',
			category: 'Product design · Sustainable IoT',
			summary: 'A shower water-monitoring prototype pairing a compact device with a mobile companion concept.',
			role: 'Hardware Engineer & Mobile UI Designer',
			context: 'TU Eindhoven course 4WBB0 final hardware project.',
			methods: 'Arduino Nano, flow and temperature sensors, Bluetooth, 3D printing, mobile UI design',
			brief: 'Design an affordable, easy-to-install device that makes shower water use more visible.',
			problem: 'Water and energy use during showering is difficult to notice in the moment, while existing meters may be costly or cumbersome.',
			insight: 'Immediate feedback and simple installation can make resource use easier to understand without interrupting the activity.',
			design: 'Built a prototype with an inline flow sensor, temperature sensor, buzzer, and companion app concept for usage history and limits.',
			outcome: 'Assembled a prototype under the project’s €50 target and calibrated its flow measurement in lab testing.'
		},
		{
			slug: 'padel-anc',
			title: 'Mobile Padel Court Active Noise Control',
			category: 'Acoustic engineering · Simulation',
			summary: 'A study of speaker arrays as a possible way to reduce low-frequency noise from mobile padel courts.',
			role: 'Acoustic Modeler & Research Analyst',
			context: 'TU Eindhoven course 7SAX0 acoustic engineering project.',
			methods: 'Bose Modeler, MATLAB acoustic tools, noise sensors, loudspeaker-array modelling',
			brief: 'Investigate whether active noise control could reduce noise from temporary padel courts near homes.',
			problem: 'Impact sounds from rackets and glass walls can disturb nearby residents, and low-frequency sound is challenging to block.',
			insight: 'A potential active-noise-control setup needs to account for impact locations, sensor placement, and where sound is measured.',
			design: 'Modelled reference microphones and perimeter speakers intended to produce phase-inverted sound near court boundaries.',
			outcome: 'Produced a simulation-based feasibility study and a proposed array configuration for further testing.'
		},
		{
			slug: 'notifications-sart',
			title: 'Mobile Phone Notifications & Sustained Attention',
			category: 'Human-technology interaction · Quantitative research',
			summary: 'A controlled study examining unattended phone notifications during a sustained-attention task.',
			role: 'Researcher & Analyst',
			context: 'University research project; 48 university student participants.',
			methods: 'Sustained Attention to Response Task, controlled notification conditions, statistical analysis',
			brief: 'Examine whether receiving a phone notification can affect attention even when the phone is not actively used.',
			problem: 'The effect of unattended notification sounds or vibrations on performance is less obvious than the distraction caused by checking a phone.',
			insight: 'Notification cues may interrupt attention without requiring a person to pick up or interact with a device.',
			design: 'Compared a baseline task condition with a condition that included notification stimuli during the attention task.',
			outcome: 'Analysed task performance across conditions to inform discussion of notifications and digital wellbeing.'
		},
		{
			slug: 'instagram-life-satisfaction',
			title: 'Instagram, Life Satisfaction & Social Comparison',
			category: 'UX research · Qualitative diary study',
			summary: 'A diary study of how everyday Instagram use relates to young adults’ mood and social comparison.',
			role: 'Lead Qualitative Researcher & Analyst',
			context: 'University of Twente qualitative research project.',
			methods: 'Three-day morning and evening diary protocol, thematic analysis',
			brief: 'Understand how the Instagram content people see relates to their daily mood, self-perception, and motivation.',
			problem: 'Broad claims about social media’s effects can miss how everyday experiences differ by content and context.',
			insight: 'Diary entries described boredom as a common reason for opening the app, while emotional responses varied with the content viewed.',
			design: 'Created a structured diary protocol capturing usage, content, mood, and reflections at two points each day.',
			outcome: 'Thematic analysis highlighted both social comparison and positive inspiration as parts of participants’ reported experiences.'
		},
		{
			slug: 'robot-cuteness',
			title: 'Robot Cuteness, Scenario Framing & Empathy',
			category: 'Human-robot interaction · Bachelor thesis',
			summary: 'A quantitative study of robot appearance, narrative framing, and empathy after a robot error.',
			role: 'Lead Researcher & Thesis Author',
			context: 'TU Eindhoven Bachelor End Project; 241 participants recruited via Prolific.',
			methods: 'Factorial online study, empathy and mind-perception measures, ANOVA and regression',
			brief: 'Study how robot appearance and scenario framing relate to empathy for a robot and the person affected by its mistake.',
			problem: 'Designers need to understand whether cues such as cuteness influence how people judge robots after errors.',
			insight: 'The reported analysis found that perceived cuteness related to empathy for the robot without reducing empathy for the human victim.',
			design: 'Compared robot images and four narrative framing conditions using structured scenarios and established survey measures.',
			outcome: 'Produced findings on how appearance and framing may shape responses to robot mistakes, with implications for HRI design.'
		},
		{
			slug: 'slumbering-mystic-garden',
			title: 'The Slumbering Mystic Garden',
			category: 'Experiential design · Interactive installation',
			summary: 'A multisensory amusement-park installation concept for drawing, scanning, and animating butterflies.',
			role: 'Lead Interaction Designer & Creative Technologist',
			context: 'Experiential spatial design project for a theme-park transition space.',
			methods: 'OpenCV, MediaPipe, Python, physical craft, visitor testing',
			brief: 'Create a calmer, playful transition experience between high-energy amusement-park attractions.',
			problem: 'A busy park offers few moments for visitors to pause, and complicated interaction rules can discourage participation.',
			insight: 'Visitors responded to clear, embodied interactions; drawing a butterfly and moving arms to make it fly offered a legible shared activity.',
			design: 'Combined a softly lit garden, a paper-butterfly scanner, a central digital canopy, and body-tracked movement.',
			outcome: 'Refined the concept around a simple draw-scan-flap loop that invites individual and group participation.'
		},
		{
			slug: 'crossing-the-road',
			title: 'Crossing the Road',
			category: 'Assistive technology · Wearable interaction',
			summary: 'A wearable radar and haptic-aid concept for visually impaired pedestrians crossing roads.',
			role: 'Researcher & System Designer',
			context: 'TU Eindhoven Control Systems Technology project PRE2024_3_Group18.',
			methods: 'User interviews and surveys, radar sensing, MATLAB signal processing, haptic prototyping',
			brief: 'Explore a hands-free system that could provide information about approaching traffic at uncontrolled crossings.',
			problem: 'Judging vehicle speed and distance can be difficult when traffic is quiet, noisy, or moving quickly, and hands may already be occupied.',
			insight: 'A wearable system should preserve hands-free use and communicate through a discreet channel that is not masked by traffic noise.',
			design: 'Designed a concept using shoulder-mounted radar sensors, signal processing, and a wrist-worn vibration interface.',
			outcome: 'Developed and tested system components, including a wearable prototype and radar simulation, as a proof of concept.',
			images: {
				hero: {
					src: 'images/Physical_Protoype_Group_18_(worn).jpg',
					alt: 'Wearable road-crossing prototype shown on a person.',
					caption: 'Wearable prototype exploring shoulder-mounted sensors.'
				},
				design: {
					src: 'images/Wristband2.png',
					alt: 'Haptic feedback wristband prototype.',
					caption: 'Wristband concept for communicating crossing status through vibration.'
				},
				outcome: {
					src: 'images/Radar_simulation.gif',
					alt: 'Animation of a radar target-detection simulation.',
					caption: 'Radar simulation for detecting and tracking approaching traffic.'
				}
			}
		}
	];

	if (window.location.pathname.toLowerCase().endsWith('/project.html')) {
		window.location.replace('projects.html' + window.location.search);
		return;
	}

	var track = document.getElementById('projects-track');
	if (!track) {
		return;
	}

	function createCard(project, index) {
		var card = document.createElement('a');
		card.className = 'project-card';
		card.href = 'projects.html?project=' + encodeURIComponent(project.slug);

		var preview = document.createElement('span');
		preview.className = 'project-preview ' + (project.previewClass || 'project-preview--case-study');
		preview.setAttribute('aria-hidden', 'true');
		card.appendChild(preview);

		var number = document.createElement('span');
		number.className = 'project-card__number';
		number.textContent = String(index + 1).padStart(2, '0');
		card.appendChild(number);

		var type = document.createElement('span');
		type.className = 'project-card__type';
		type.textContent = project.category;
		card.appendChild(type);

		var title = document.createElement('h3');
		title.textContent = project.title;
		card.appendChild(title);

		var summary = document.createElement('p');
		summary.textContent = project.summary;
		card.appendChild(summary);

		var link = document.createElement('span');
		link.className = 'project-card__link';
		link.appendChild(document.createTextNode('Explore case study '));
		var arrow = document.createElement('span');
		arrow.setAttribute('aria-hidden', 'true');
		arrow.textContent = '↗';
		link.appendChild(arrow);
		card.appendChild(link);

		return card;
	}

	projects.forEach(function(project, index) {
		track.appendChild(createCard(project, index));
	});

	var cards = Array.from(track.querySelectorAll('.project-card'));
	var position = document.getElementById('projects-position');
	var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

	function updatePosition(scrollLeft) {
		if (!cards.length || !position) {
			return;
		}

		var cardStep = cards[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0);
		var currentScroll = typeof scrollLeft === 'number' ? scrollLeft : track.scrollLeft;
		var firstVisible = Math.min(cards.length, Math.floor(currentScroll / cardStep) + 1);
		position.textContent = String(firstVisible).padStart(2, '0') + ' / ' + String(cards.length).padStart(2, '0');
	}

	function scrollProjects(direction) {
		var maxScroll = track.scrollWidth - track.clientWidth;
		var targetScroll = Math.max(0, Math.min(maxScroll, track.scrollLeft + direction * track.clientWidth));
		track.scrollBy({ left: direction * track.clientWidth, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
		updatePosition(targetScroll);
	}

	document.getElementById('projects-previous').addEventListener('click', function() {
		scrollProjects(-1);
	});

	document.getElementById('projects-next').addEventListener('click', function() {
		scrollProjects(1);
	});

	track.addEventListener('scroll', updatePosition, { passive: true });
	window.addEventListener('resize', updatePosition);
	updatePosition();

	var projectSlug = new URLSearchParams(window.location.search).get('project');
	if (!projectSlug) {
		return;
	}

	var overview = document.getElementById('projects-overview');
	var projectView = document.getElementById('project-view');
	var projectIndex = projects.findIndex(function(project) {
		return project.slug === projectSlug;
	});

	overview.classList.add('is-hidden');
	projectView.classList.remove('is-hidden');

	if (projectIndex === -1) {
		document.title = 'Project not found — Jada van der Heijden';
		document.getElementById('project-category').textContent = 'Selected work';
		document.getElementById('project-title').textContent = 'Project not found';
		document.getElementById('project-summary').textContent = 'That project is not available. Browse all projects to find another one.';
		document.querySelector('.project-snapshot').classList.add('is-hidden');
		document.querySelector('.project-case-navigation').classList.add('is-hidden');
		return;
	}

	var project = projects[projectIndex];
	document.title = project.title + ' — Jada van der Heijden';
	document.getElementById('project-category').textContent = project.category;
	document.getElementById('project-title').textContent = project.title;
	document.getElementById('project-summary').textContent = project.summary;
	document.getElementById('project-role').textContent = project.role;
	document.getElementById('project-context').textContent = project.context;
	document.getElementById('project-methods').textContent = project.methods;

	// Add images per project with: images: { hero|brief|problem|insight|design|outcome: { src, alt, caption } }
	// Slots without an image render as a colored placeholder block.
	var images = project.images || {};

	function createSlot(key, label, extraClass) {
		var item = images[key];
		var figure = document.createElement('figure');
		figure.className = 'project-image ' + (extraClass || '') + (item ? '' : ' is-placeholder');
		figure.dataset.slot = key;

		var frame = document.createElement('div');
		frame.className = 'project-image__frame';

		if (item) {
			var image = document.createElement('img');
			image.src = item.src;
			image.alt = item.alt || '';
			image.loading = 'lazy';
			frame.appendChild(image);
		} else {
			var hint = document.createElement('span');
			hint.className = 'project-image__hint';
			hint.textContent = 'Image placeholder · ' + label;
			frame.appendChild(hint);
		}
		figure.appendChild(frame);

		if (item && item.caption) {
			var caption = document.createElement('figcaption');
			caption.textContent = item.caption;
			figure.appendChild(caption);
		}
		return figure;
	}

	document.getElementById('project-hero').appendChild(createSlot('hero', 'project hero', 'project-image--hero'));

	var story = document.getElementById('project-story');
	[
		{ key: 'brief', title: 'The brief', content: project.brief },
		{ key: 'problem', title: 'The problem', content: project.problem },
		{ key: 'insight', title: 'Research insight', content: project.insight },
		{ key: 'design', title: 'Design intent', content: project.design },
		{ key: 'outcome', title: 'Outcome', content: project.outcome }
	].forEach(function(section, index) {
		var sectionElement = document.createElement('section');
		sectionElement.className = 'wrapper container project-story-section ' + (index % 2 === 0 ? 'style4' : 'style3');

		var row = document.createElement('div');
		row.className = 'project-story-section__row' + (index % 2 === 1 ? ' is-reversed' : '');

		var text = document.createElement('div');
		text.className = 'project-story-section__text';
		var heading = document.createElement('h2');
		heading.textContent = section.title;
		var paragraph = document.createElement('p');
		paragraph.textContent = section.content;
		text.appendChild(heading);
		text.appendChild(paragraph);

		row.appendChild(text);
		row.appendChild(createSlot(section.key, section.title));
		sectionElement.appendChild(row);
		story.appendChild(sectionElement);
	});

	var previousIndex = (projectIndex + projects.length - 1) % projects.length;
	var nextIndex = (projectIndex + 1) % projects.length;
	document.getElementById('previous-project').href = 'projects.html?project=' + projects[previousIndex].slug;
	document.getElementById('next-project').href = 'projects.html?project=' + projects[nextIndex].slug;
})();
