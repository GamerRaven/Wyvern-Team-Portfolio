import image from "../src/assets/animation.svg";
const particles = {
	particles: {
		number: {
			value: 10,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: "#1b1e34",
		},
		shape: {
			type: "image",
			stroke: {
				width: 0,
				color: "#000",
			},
			polygon: {
				nb_sides: 6,
			},
			image: {
				src: image,
				width: 10,
				height: 10,
			},
		},
		opacity: {
			value: 0.5,
			random: true,
			anim: {
				enable: false,
				speed: 0.3,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 15,
			random: true,
			anim: {
				enable: true,
				speed: 10,
				size_min: 5,
				sync: false,
			},
		},
		line_linked: {
			enable: false,
			distance: 200,
			color: "#ffffff",
			opacity: 1,
			width: 2,
		},
		move: {
			enable: true,
			speed: 8,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
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
				mode: "bubble",
			},
			onclick: {
				enable: true,
				mode: "repulse",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 250,
				size: 0,
				duration: 2,
				opacity: 0,
				speed: 3,
			},
			repulse: {
				distance: 400,
				duration: 0.4,
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
};

export default particles;
