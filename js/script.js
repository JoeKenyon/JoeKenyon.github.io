// Write JavaScript here

// need to update these as we add them i guess
var art_pics = 
[
	"/Users/joekenyon/Desktop/website/images/dreams.png",
	"/Users/joekenyon/Desktop/website/images/animal.png",
	"/Users/joekenyon/Desktop/website/images/alone.png",
	"/Users/joekenyon/Desktop/website/images/shitfuck.png",
	"/Users/joekenyon/Desktop/website/images/Untitled.png",
	"/Users/joekenyon/Desktop/website/images/misterblisterman.png",
	"/Users/joekenyon/Desktop/website/images/Talk_to_us_4.png",
	"/Users/joekenyon/Desktop/website/images/IMG_20230313_013040_680.jpg",
	"/Users/joekenyon/Desktop/website/images/20231117_122750.jpg",
	"/Users/joekenyon/Desktop/website/images/20231117_123046.jpg",
	"/Users/joekenyon/Desktop/website/images/FB_IMG_1696683447435.jpg",
	"/Users/joekenyon/Desktop/website/images/20240417_195438.jpg",
	"/Users/joekenyon/Desktop/website/images/20231208_21cxvcx3655-1.png",
	"/Users/joekenyon/Desktop/website/images/20240417_195450.jpg",
	"/Users/joekenyon/Desktop/website/images/bitmaCHARp.png",
	"/Users/joekenyon/Desktop/website/images/bitmasdasdsadap.png",
	"/Users/joekenyon/Desktop/website/images/20231117_123005-1.png",
	"/Users/joekenyon/Desktop/website/images/dsasdsad.jpg",
	"/Users/joekenyon/Desktop/website/images/ingoude. (2).png",
	"/Users/joekenyon/Desktop/website/images/Joe Kenyon (1).png",
	"/Users/joekenyon/Desktop/website/images/Talk to us (1).png",
	"/Users/joekenyon/Desktop/website/images/20231208_213655-1.png",
	"/Users/joekenyon/Desktop/website/images/20240417_195356.jpg",
	"/Users/joekenyon/Desktop/website/images/unknown.png",
	"/Users/joekenyon/Desktop/website/images/Your_paragraph_text_2.png"
];

function img_clk(img_ref)
{
	document.getElementById("cur_img").style.zIndex = "1"

	var expandImgDiv = document.getElementById("poenis");
	
	var img = document.createElement('img'); // Make a new image.
		
	img.src = img_ref.src;
	
	if(img_ref.width >= img_ref.height)
	{
		img.style.width = "100%";
	}
	else
	{
		img.style.width = "100%";
	}
		
		
	expandImgDiv.appendChild(img);
	
	var btn = document.createElement("BUTTON"); // Make a new image.
	
	btn.onclick = function ()
	{ 
		document.getElementById("cur_img").style.zIndex = "-2"
		var expandImgDiv = document.getElementById("poenis");
		expandImgDiv.innerHTML = "";
	}
	btn.innerText = "X"
	btn.style.width = "25px";
	btn.style.height = "25px";
	
	expandImgDiv.appendChild(btn);
	
	// add listener
	
	//
}

function set_up()
{	
	for (var i = 0; i < art_pics.length; ++i)
	{
		var img = document.createElement('img'); // Make a new image.
		img.src = art_pics[i];
		img.className += "art";
		img.onclick = function () { img_clk(this);}
		
		var a = document.createElement('a'); // Make a new anchor.
		//a.href = img.src; // Point it at the image source.
		//a.target = "_blank"
		
		a.appendChild(img); // Make the image a child of the anchor.
		
		//document.getElementById("main").appendChild(a);
		
		var cols = document.getElementsByClassName("column"); // get the collums, should be 3
		
		cols[i%cols.length].appendChild(a);
	}
	
}

window.onload = set_up

