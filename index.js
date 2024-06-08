function $(x){
    switch (x[0]){
        case "#":
            var k=x.substr(1);
            return document.getElementById(k);
        case ".":
            var k=x.substr(1);
            return document.getElementsByClassName(k);
        default:
           return document.getElementsByTagName(x);
    }
 
}

//for Phone.
function law(){
    $("#letter").style.left="-100vw";
    $("#letter").style.opacity="0";
}

var ti=1;
function timePass(){
    if (ti==1){
        $("#phoneTime").innerText=" [.•°] - 45% - 3:20pm ";
    ti=0;
    }
    else if (ti==0){
        $("#phoneTime").innerText=" [.•°] - 30% - 3:45pm ";
    ti=2
    }
    else{
        $("#phoneTime").innerText=" [.•°] - 18% - 4:00pm ";
        clearInterval(tPass);
    }
}
var tPass=setInterval(timePass,2500);

var a=0;
function nMess(){
    if (a>1){
        clearInterval(mess);
        setTimeout(law,3750);
    }
    $(".message")[a].style.opacity="1";
    a++
    
}
var mess=setInterval(nMess,3200);
//end Phone.


window.onload=function(){
    $("#ans1").addEventListener("click",jSleep);
    $("#ans2").addEventListener("click",police);
    $("#ans3").addEventListener("click",goDown);
    document.body.style.opacity="1";
    $("#letter").addEventListener("click",law);
}

//the black blink
function alt(){
    $("#front").style.zIndex="4";
    function alter(){
        $("#front").style.zIndex="2";
    }
    setTimeout(alter,500);
}

//1
function police(){
    alt()
    $("#content").style.color="red";
    $("#content").innerText="The zombies are blind anyway, so going out at night only made the things worse for you. You couldn't see anything and the zombies got you. You survived, but turned into a zombie because they bite you.";
    $("#all").style.transform="scale(0)";
}
function jSleep(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="You did not go outside. You used all your supplies and you were too weak to find another supplies. In a world of Zombies, you die by hunger.";
    $("#all").style.transform="scale(0)";
}
function goDown(){
    //good one
    alt();
    $("#back").style.background="url(https://www.dropbox.com/s/8negnci79l5d6dy/Village_Street%2C_Thrintoft.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition=" center"
    $("#content").innerText="You took your knife, a backpack and went outside searching for supplies. There are a few zombies far behind you, stalking you. Is it a problem?";
    $("#ans1").removeEventListener("click",jSleep);
    $("#ans2").removeEventListener("click",police);
    $("#ans3").removeEventListener("click",goDown);
    $("#ans1").innerText="Just keep walking";
    $("#ans2").innerText="Run, so they can't get to you";
    $("#ans3").innerText="Try and kill them";
    $("#ans1").addEventListener("click",hide);
    $("#ans2").addEventListener("click",police2);
    $("#ans3").addEventListener("click",block);
}
//end 1


//2
function police2(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="You Ran as fast as you could, but more zombies heard you, and they surrounded you. You had no choice but to fight them. The zombies ate you alive.";
    $("#all").style.transform="scale(0)";
}
function block(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="You went to that horde of zombies, and fought them. Because of the noice, more zombies were coming, and you got surrounded by them. They got you, after a while.";
    $("#all").style.transform="scale(0)";
}
function hide(){
    //good one
    alt();
    $("#content").innerText="You walk as nothing happened. You notice more zombies in front of you, but they still don't know you are there. What to do? Think fast!";
    $("#ans1").removeEventListener("click",hide);
    $("#ans2").removeEventListener("click",police2);
    $("#ans3").removeEventListener("click",block);
    $("#ans1").innerText="Fight them";
    $("#ans2").innerText="Hide inside a house";
    $("#ans3").innerText="Run before they see you";
    $("#ans1").addEventListener("click",bathroom);
    $("#ans2").addEventListener("click",kitchen);
    $("#ans3").addEventListener("click",bedroom);
}
//end 2


//3
function bathroom(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="You fought like a hero, but they had the number. You survived but you got bitten. You turned into a zombie a few hours later. The End. ";
    $("#all").style.transform="scale(0)";
}
function kitchen(){
    //good one
    alt();
    $("#back").style.background="url(https://www.dropbox.com/s/buajpl660kcpj68/083c0115-9f9b-4dc2-8fab-2ad6677fe0c6-5-marioncarllfarmhouse-parlour.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition=" center"
    $("#content").innerText="You hide into the closest house you find. The zombies heard you and now they are at the door, trying to break in. What is your next move?";
    $("#ans1").removeEventListener("click",bathroom);
    $("#ans2").removeEventListener("click",kitchen);
    $("#ans3").removeEventListener("click",bedroom);
    $("#ans1").innerText="Block the door";
    $("#ans2").innerText="Hide";
    $("#ans3").innerText="Run outside through the back door";
    $("#ans1").addEventListener("click",run);
    $("#ans2").addEventListener("click",jump);
    $("#ans3").addEventListener("click",fight);
}
function bedroom(){
    alt();
    $("#content").style.color="red";
    $('#content').innerText="You ran back to your house. You did not got the supplies you needed, so you died by hunger.";
    $("#all").style.transform="scale(0)";
}
//end 3


//4
function run(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="You blocked the door, but they got in through the window and the back door. You were killed by Zombies.";
    $("#all").style.transform="scale(0)";
}
function fight(){
    //good one
    $("#back").style.background="url(https://www.dropbox.com/s/84dlye5ym8c47un/511097_a75772eb.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition=" center"
    alt();
    $("#content").innerText="You went outside through the back door, and now there are no zombies. You can go find the supplies you are looking for. There is a Supermarket at the left side of the street, a shop at the right side of the street, and a huge truck on the street. Where will you look for supplies?";
    $("#ans1").removeEventListener("click",run);
    $("#ans2").removeEventListener("click",jump);
    $("#ans3").removeEventListener("click",fight);
    $("#ans1").innerText="Small Shop";
    $("#ans2").innerText="Supermarket";
    $("#ans3").innerText="Truck";
    $("#ans1").addEventListener("click",room);
    $("#ans2").addEventListener("click",jumpWin);
    $("#ans3").addEventListener("click",badGuy);
}
function jump(){
    alt()
    $("#content").style.color="red";
    $("#content").innerText="You hid, but the zombies found you anyway. You are dead.";
    $("#all").style.transform="scale(0)";
}
//end 4


//5
function badGuy(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="You searched the truck, but you found nothing useful. Zombies heard the noice and came to you. You were surrounded, and the zombies ate you.";
    $("#all").style.transform="scale(0)";
}
function room(){
    //good one
    alt();
    $("#back").style.background="url(https://www.dropbox.com/s/3nc46g0gaeo7iln/Inside%20the%20Sweet%20Shop%20Kirkby%20Lonsdale.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition=" center"
    $("#content").innerText="You chose the small shop. There was noone inside. You had enough time to fill your backpack with supplies. There are zombies outside, but you can't run with such a heavy backpack. What do you do?";
    $("#ans1").removeEventListener("click",room);
    $("#ans2").removeEventListener("click",jumpWin);
    $("#ans3").removeEventListener("click",badGuy);
    $("#ans1").innerText="Just wait until they leave";
    $("#ans2").innerText="Leave the backpack and Run";
    $("#ans3").innerText="Try your luck and go outside.";
    $("#ans1").addEventListener("click",thePhone);
    $("#ans2").addEventListener("click",emptyweapon);
    $("#ans3").addEventListener("click",keys);
}
function jumpWin(){
    alt()
    $("#content").style.color="red"
    $("#content").innerText="You chose the supermarket. There were enough supplies for you, but it was full of zombies. You had no choice just to fight them. You fought like a hero, but they got you after all. You are dead.";
    $("#all").style.transform="scale(0)";
}
//end 5


//6
function keys(){
    alt()
    $("#content").style.color="red";
    $("#content").innerText="As expected, the backpack was too heavy, so the zombies catched you very fast. They ate you alive.";
    $("#all").style.transform="scale(0)";
}
function emptyweapon(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="You left the backpack with all yoir supplies behind, and ran. You survived but you had no supplies. In a world of zombies, you died by hunger.";
    $("#all").style.transform="scale(0)";
}
function thePhone(){
    //good one
    alt();
    $("#content").innerText="You wait for almost 2 hours until all zombies are gone. Now the street is empty and you can go home without a problem. Will you?";
    $("#ans1").removeEventListener("click",thePhone);
    $("#ans2").removeEventListener("click",emptyweapon);
    $("#ans3").removeEventListener("click",keys);
    $("#ans1").innerText="Just wait a little more";
    $("#ans2").innerText="Go home,now";
    $("#ans3").innerText="Eat something first";
    $("#ans1").addEventListener("click",dead);
    $("#ans2").addEventListener("click",alive);
    $("#ans3").addEventListener("click",dead);
}
//end 6


//7
function alive(){
    //good one
    alt()
    $("#back").style.background="url(https://www.dropbox.com/s/hz8nlxssvxfva2w/Old-House-with-two-doors.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition="center";
    $("#content").innerText="You are in front of your house, but you need your password to get in. Clue: Today date.";
    
    $("#ans1").removeEventListener("click",alive);
    $("#ans2").removeEventListener("click",dead);
    $("#ans3").removeEventListener("click",dead);
    $("#ans1").innerText="29.08.2019";
    $("#ans2").innerText="14.07.2021";
    $("#ans3").innerText="24.06.2012";
    $("#ans1").addEventListener("click",ok);
    $("#ans2").addEventListener("click",b);
    $("#ans3").addEventListener("click",b);
}
function dead(){
    alt()
    $("#content").style.color="red";
    $("#content").innerText="The zombies found you, break inside the shop, and killed you.";
    $("#all").style.transform="scale(0)";  
}
//end 7

//8
function ok(){
    alt()
    $("#content").style.color="#090";
    $("#back").style.background="url(https://www.dropbox.com/s/b2ohzliwaguhply/ghost-rider250-highresscreenshot00001.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition="center";
    $("#all").style.display="none";
    $("#content").innerText="You survived! Congratulations for surviving this day. Good luck with your next ones. ";
}
//end 8

function b(){
     alt()
    $("#content").style.color="red";
    $("#content").innerText="You do not know what day is inside the game, so I won't let you win. Try again. I am sure you can win next time!";
    $("#all").style.transform="scale(0)";
}

alert("If you like it please upvote!\n\nTell me in a comment how was the last question for you.");

//It was such a pain editing all this stuff...
