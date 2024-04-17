// Write JavaScript here

function set_up()
{
	// Get the elements with class="art"
	var art = document.getElementsByClassName("art");
	
	for (var i = 0; i < art.length; ++i)
	{
		var img = art[i];
		var a = document.createElement('a');  // Make a new anchor.
		a.href = img.src;                     // Point it at the image source.
		a.target = "_blank"
		img.parentNode.replaceChild(a, img);  // Replace the image with the anchor.
		a.appendChild(img);                   // Make the image a child of the anchor.
	}
	
	var blink = document.getElementsByClassName('blink');
		 
	setInterval(
		function ()
		{ 
			for (var i = 0; i < blink.length; ++i)
				blink[i].style.opacity = (blink[i].style.opacity == 0 ? 1 : 0);
		}
		, 300
	); 
}

window.onload = set_up