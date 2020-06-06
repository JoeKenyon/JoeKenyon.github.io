function INDEX_onLoad()
{
    var progress =
    {
        "C": "55",
        "Java": "75",
        "C++": "65",
        "Python": "70",
        "STM32": "35",
        "SQL": "35",
        "ARMv7": "45",
        "Linux": "45",
        "Java AWT": "40",
        "Java Swing": "40",
        "Visual Studio": "45",
        "Git": "57",
        "Flask": "35",
        "InteliJ": "60",
        "Clion": "60",
    };

    var skills = document.getElementById("SKILLS");

    for(key in progress)
    {
        var lang = key;
        var percent = progress[key];
        var skillbox = document.createElement("div");
        skillbox.className = "SkillBox";
        skillbox.innerHTML = lang;
        var barOuter = document.createElement("div");
        var barInner = document.createElement("div");
        barOuter.id = "progressbar";
        barInner.setAttribute("style","width:"+percent+"%");
        barOuter.appendChild(barInner);
        skillbox.appendChild(barOuter);
        skills.appendChild(skillbox);
        
    }
}

function getJSONDATA(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function PROJECTS_onLoad()
{
    // div to add to
    var skills = document.getElementById("PROJECTS");

    var api_url = "https://api.github.com/users/JoeBoiii72/repos?"

    var json_obj = JSON.parse(getJSONDATA(api_url));

    for(i in json_obj)
    {
        var name = json_obj[i].name;
        var lang = json_obj[i].language;
        var desc = json_obj[i].description;

        if(desc.length <= 1)
        {
            desc = "N/A";
        }

        var projectBox = document.createElement("div");
        projectBox.className = "project";

        var nameBox = document.createElement("div");
        nameBox.id = "pName";
        nameBox.innerHTML = name;
        projectBox.appendChild(nameBox);

        var langBox = document.createElement("div");
        langBox.id = "pLang";
        langBox.innerHTML = lang;
        projectBox.appendChild(langBox);

        var descBox = document.createElement("div");
        descBox.id = "pDesc";
        descBox.innerHTML = desc;
        projectBox.appendChild(descBox);
        
        skills.appendChild(projectBox); 
    }
}