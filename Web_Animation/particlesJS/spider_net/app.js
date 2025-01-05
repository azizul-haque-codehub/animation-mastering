/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

window.particlesJS(
	"particles-js",

	{
		particles: {
			number: {
				value: 300,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: "#0f0",
			},
			shape: {
				type: ["circle",'image'  ,"triangle",'polygon','rectangle'],
				stroke: {
					width: 1,
					color: "#ee00ff",
				},
				polygon: {
					nb_sides: 5,
				},
				image: {
					src: "./mojammal.jpg",
					width: 500,
					height: 500,
				},
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 8,
				random: true,
				anim: {
					enable: true,
					speed: 20,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: "#00aa11",
				opacity: 1,
				width: 1,
			},
			move: {
				enable: true,
				speed: 3,
				direction: "bottom-right",
				random: false,
				straight: false,
				out_mode: "out",
				attract: {
					enable: true,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "grab",
				},
				onclick: {
					enable: true,
					mode: "bubble",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 0.4,
					},
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3,
				},
				repulse: {
					distance: 200,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
	},
);
