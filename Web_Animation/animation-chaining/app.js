const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
btn.onclick = () => box.classList.toggle("chained");

// প্রথম Animation
box.animate(
	[{ transform: "translateX(0px)" }, { transform: "translateX(300px)" }],
	{
		duration: 2000,
		easing: "ease-in-out",
	},
).onfinish = () => {
	// দ্বিতীয় Animation
	box.animate(
		[
			{ transform: "translateX(0px)" },
			{ transform: "translateX(300px)" },
			{ transform: "scale(1)" },
			{ transform: "scale(1.5)" },
		],
		{
			duration: 1000,
			easing: "ease-in-out",
		},
	);
};
console.log("আমি প্রথম লাইনে আছি।");
