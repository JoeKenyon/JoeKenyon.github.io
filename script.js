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