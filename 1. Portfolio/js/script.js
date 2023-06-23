/*--------------Favicon visibility--------------*/
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Vivek Saha";
            $("#favicon").attr("href", "Images/icons/logo3.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "Images/icons/logo4.png");
        }
});

/*--------------type.js script--------------*/
var typed = new Typed(".typejs", {
    strings: ["Web development.", "Android development.", "Youtube.", "web designing."],
    typeSpeed: 75,
    backSpeed: 50,
    backDelay: 500,
    loop: true
});

var typed = new Typed(".typejs2", {
    strings: ["Full Stack Web Developer | Android Developer"],
    typeSpeed: 75,
    backSpeed: 50,
    backDelay: 500,
    loop: true
});

/*--------------About me (Tabs)--------------*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add ("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


/*--------------side menu visibility--------------*/

var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


/*--------------Back To top btn--------------*/

let mybutton = document.getElementById("btn-back-to-top");

        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        mybutton.addEventListener("click", backToTop);

        function backToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }