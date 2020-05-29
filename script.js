function ChangeImg(){ 

    var x = document.getElementById('contentsImg').src;
    //x = x.toString()

    if (x.includes('cat-selfie.png')){
        document.getElementById('contentsImg').src = 'dog-selfie.png';
        document.getElementById('imgbtn').innerText = "SHOW CAT";
    }
    else{
        document.getElementById('contentsImg').src = 'cat-selfie.png';
        document.getElementById('imgbtn').innerText = "SHOW DOG";
    }   

}

function ClearTextBox(){
	
	document.getElementById("commentbox").value = "";
	
}


function addTime()
{

}


function SaveComment(){
	
	var time = new Date().toLocaleString();
	var comment_name = document.getElementById('namebox').value;
	
	if(comment_name == "DELETE"){
		clearData();
		document.getElementById("commentList").innerHTML = "";
	}
	
	else{
		
		var comment_text = " : " + document.getElementById('commentbox').value;
		var full_comment = "["+time+"]  "+comment_name+comment_text;
		
		var newTag = document.createElement("p");
		var TextToAdd = document.createTextNode(full_comment);
		
		newTag.appendChild(TextToAdd);
		document.getElementById("commentList").appendChild(newTag);
		
		
		addData("comments",document.getElementById("commentList").innerHTML)
		
	}
	
	
}


function DisplayComments(){
	 var comments=getData("comments");
	 
	 document.getElementById("commentList").innerHTML = comments;
}



function addData(key, value) {
	window.localStorage.setItem(key,JSON.stringify(value));
}

function getData(key) {
	var storage = window.localStorage;
	var value = storage.getItem(key);
	return value && JSON.parse(value);
}

function clearData() {
	window.localStorage.clear();
}