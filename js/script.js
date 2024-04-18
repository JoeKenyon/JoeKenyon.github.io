// Write JavaScript here

// need to update these as we add them i guess
var art_pics = 
[
	"/images/dreams.png",
	"/images/animal.png",
	"/images/alone.png",
	"/images/shitfuck.png",
	"/images/Untitled.png",
	"/images/misterblisterman.png",
	"/images/Talk_to_us_4.png",
	"/images/IMG_20230313_013040_680.jpg",
	"/images/20231117_122750.jpg",
	"/images/20231117_123046.jpg",
	"/images/FB_IMG_1696683447435.jpg",
	"/images/20240417_195438.jpg",
	"/images/20231208_21cxvcx3655-1.png",
	"/images/20240417_195450.jpg",
	"/images/bitmaCHARp.png",
	"/images/bitmasdasdsadap.png",
	"/images/20231117_123005-1.png",
	"/images/dsasdsad.jpg",
	"/images/ingoude. (2).png",
	"/images/Joe Kenyon (1).png",
	"/images/Talk to us (1).png",
	"/images/20231208_213655-1.png",
	"/images/20240417_195356.jpg",
	"/images/unknown.png",
	"/images/Your_paragraph_text_2.png",
	"/images/SDC11344.JPG",
	"/images/SDC11347.JPG",
	"/images/SDC11193.JPG"
];


var path = document.location.pathname;
var working_dir = path.substring(path.indexOf('/'), path.lastIndexOf('/'));

function img_clk(img_ref)
{
	// show the thing
	document.getElementById("cur_img").style.zIndex = "1"
	
	var expandedImg = document.getElementById("art_img");
	expandedImg.src = img_ref.src;
}

function set_up()
{		
	for (var i = 0; i < art_pics.length; ++i)
	{
		var img = document.createElement('img'); // Make a new image.
		img.src = working_dir + art_pics[i];
		img.className += "art";
		img.onclick = function () { img_clk(this);}
		
		var a = document.createElement('a'); // Make a new anchor.
		
		//a.href = img.src; // Point it at the image source.
		//a.target = "_blank"
		
		a.appendChild(img); // Make the image a child of the anchor.
				
		var cols = document.getElementsByClassName("column"); // get the collums, should be 3
		
		cols[i%cols.length].appendChild(a);
	}
	
	document.getElementById("back_btn").onclick = function () { document.getElementById("cur_img").style.zIndex = "-2" }
	//document.getElementById("cur_img").onclick = function () { document.getElementById("cur_img").style.zIndex = "-2" }
	//document.getElementById("poenis").onclick = function () { document.getElementById("cur_img").style.zIndex = "-2" }
}

window.onload = set_up

