var roomNum = "0";

function changeRoom(a, c, b, d) {
    document.getElementById(a).addEventListener("click", function(){
        document.getElementById("div").innerHTML = c;
        roomNum = a;
        room();
    });

    document.getElementById(b).addEventListener("click", function(){
        document.getElementById("div").innerHTML = d;
        roomNum = b;
        room();
    });
}

function room() {
    if (roomNum == "0") {
        changeRoom("1",
            `<h1>Hallway of Weird Artwork</h1>
            <p>You walk into a narrow hallway lined with busts of important looking people, and on the walls are hung multiple portraits that seem to watch you as you walk forward. the hallway splits about 30 feet from the entrance</p>
            <hr/>
            <p id="2">go right</p>
            <p id="4">go left</p>`,
            "3",
            `<h1>Operating Room</h1>
            <p>You enter into a clean room with 2 operating tables on opposing sides. There are metal shelves against the far wall you can see are filled with sharp, scary-looking tools. Youd better get out of here before someone tries to use them on you. When you look back at the door you came through though, it donesnt seem to lead into the room you were just in. There is also a door next to the shelves.</p>
            <hr/>
            <p id="5">go through door</p>
            <p id="6">go back</p>`)
    } else if (roomNum == "1") {
        changeRoom("2",
            `<h1>Ball Room</h1>
            <p>The next room has a checkered wooden floor and high, domed cieling. The room is has multiple lit candlesticks around its edge. You walk twards one of the candlesticks, and as you approach, a soft breeze blows all of the candles out, leaving you in the dark. Luckily, you see the dim glow of light across the floor and you know where the door you came from is</p>
            <hr/>
            <p id="3">head to light</p>
            <p id="4">go back</p>`,
            "4",
            `<h1>The Orc Room</h1>
            <p>You peek into the next room and find yourself at the edge of a small clearing in a forest made of what looks like mostly oak tress. In the center of the clearing, you find 4 orcs around a campfire, all looking directly at you, and they dont look friendly. You try to retreat from this unfortunate sight, but suddenly there is a strong wind at your back, to strong to fight, and you tumble straight into the fire.</p>
            <hr/>
            <p style="color:red">YOU DIED</p>
            <p>good try, but better luck next time</p>
            <hr/>
            <p id="0">restart</p>`);
    } else if (roomNum == "2") {
        changeRoom("3",
            `<h1>Operating Room</h1>
            <p>You enter into a clean room with 2 operating tables on opposing sides. There are metal shelves against the far wall you can see are filled with sharp, scary-looking tools. Youd better get out of here before someone tries to use them on you. When you look back at the door you came through though, it donesnt seem to lead into the room you were just in. There is also a door next to the shelves.</p>
            <hr/>
            <p id="5">go through door</p>
            <p id="6">go back</p>`,
            "4",
            `<h1>The Orc Room</h1>
            <p>You peek into the next room and find yourself at the edge of a small clearing in a forest made of what looks like mostly oak tress. In the center of the clearing, you find 4 orcs around a campfire, all looking directly at you, and they dont look friendly. You try to retreat from this unfortunate sight, but suddenly there is a strong wind at your back, to strong to fight, and you tumble straight into the fire.</p>
            <hr/>
            <p style="color:red">YOU DIED</p>
            <p>good try, but better luck next time</p>
            <hr/>
            <p id="0">restart</p>`);
    } else if (roomNum == "3") {
        changeRoom("5",
            `<h1>The Desert</h1>
            <p>You walk through the doorway and are supprised to find yourself in a vast desert. When you look back at the door, you cant see it anymore. Everything is covered in dust, and as you start to look for an exit, an dull orange haze surrounds you. You walk for what feels like years, eating what small lizards, snakes, and scorpions you find, but you cannot seem to find any water, and with the sun bearing down on your neck, your thoat quickly becomes dry. Eventually you cannot last any longer, and you collapse from the exaustion and heat, and you die of dehydration.</p>
            <hr/>
            <p style="color:red">YOU DIED</p>
            <p>good try, but better luck next time</p>
            <hr/>
            <p id="0">restart</p>`,
            "6",
            `<h1>The Forest</h1>
            <p>You find yourself in a dark forest with no obvious exit. The trees tower around you as you wander a little bit from the door, but you quickly find yourself completely lost. You eventually find a small clearing. You can see the large rotting trunk of a dead tree, and on the opposite side of the clearing a tree that looks cleaner, taller, and wider than all the others. On closer inspection, there seems to be a door in both trees trunks.</p>
            <hr/>
            <p id="8">go through dead trees door</p>
            <p id="7">go through larger trees door</p>`);
    } else if (roomNum == "4") {
        changeRoom("0",
        `<h1>Welcome to The Rooms</h1>
        <p>You find yourself in a damp and slightly dark, gloomy cave lit up by torches held by wall sconces. 
        There are two exits that you can see, one that leads forward,
        and another that leads to the left</p>
        <hr/>
        <p id="1">go straight</p>
        <p id="3">go left</p>`,
        "0",
        `<h1>Welcome to The Rooms</h1>
        <p>You find yourself in a damp and slightly dark, gloomy cave lit up by torches held by wall sconces. 
        There are two exits that you can see, one that leads forward,
        and another that leads to the left</p>
        <hr/>
        <p id="1">go straight</p>
        <p id="3">go left</p>`);
    } else if (roomNum == "5") {
        changeRoom("0",
        `<h1>Welcome to The Rooms</h1>
        <p>You find yourself in a damp and slightly dark, gloomy cave lit up by torches held by wall sconces. 
        There are two exits that you can see, one that leads forward,
        and another that leads to the left</p>
        <hr/>
        <p id="1">go straight</p>
        <p id="3">go left</p>`,
        "0",
        `<h1>Welcome to The Rooms</h1>
        <p>You find yourself in a damp and slightly dark, gloomy cave lit up by torches held by wall sconces. 
        There are two exits that you can see, one that leads forward,
        and another that leads to the left</p>
        <hr/>
        <p id="1">go straight</p>
        <p id="3">go left</p>`);
    } else if (roomNum == "6") {
        changeRoom("7",
        `<h1>The Ice Room</h1>
        <p>Upon entering this door, you instantly start shivering from the cold. You have entered a somewhat large room that looks to be made entirely of ice. Large icicles hang from the ceiling and come up from the floor. Unfortunately, you find yourself staring directly at a ragged polar bear that looks like it hasnt eaten in years. It charges at you, faster than you could ever run on this ice, and you know the end has come.</p>
        <hr/>
        <p style="color:red">YOU DIED</p>
        <p>good try, but better luck next time</p>
        <hr/>
        <p id="0">restart</p>`,
        "8",
        `<h1>The Final Tunnel</h1>
        <p>You enter into a dark tunnel that seems to be for a train, but there are no tracks on the ground. Looking forward, you can see a light that gradually grows stronger. As you near the end of the tunnel, the light become almost blinding, but you keep pushing on. At the end of the tunnel, the light suddenly dissapears, and you are filled with relief to find yourself standing just outside your houses front door.</p>
        <hr/>
        <p style="color: lightblue">YOU MADE IT OUT!</p>
        <p>Good work! You made it out of The Rooms!</p>
        <p>Thank you for playing this game</p>
        <hr/> <p>Made By: Bennett Brown</p>
        <hr/>
        <p id="0">restart</p>`);
    } else if (roomNum == "7") {
        changeRoom("0",
        `<h1>Welcome to The Rooms</h1>
        <p>You find yourself in a damp and slightly dark, gloomy cave lit up by torches held by wall sconces. 
        There are two exits that you can see, one that leads forward,
        and another that leads to the left</p>
        <hr/>
        <p id="1">go straight</p>
        <p id="3">go left</p>`,
        "0",
        `<h1>Welcome to The Rooms</h1>
        <p>You find yourself in a damp and slightly dark, gloomy cave lit up by torches held by wall sconces. 
        There are two exits that you can see, one that leads forward,
        and another that leads to the left</p>
        <hr/>
        <p id="1">go straight</p>
        <p id="3">go left</p>`);
    } else if (roomNum == "8") {
        changeRoom("0",
        `<h1>Welcome to The Rooms</h1>
        <p>You find yourself in a damp and slightly dark, gloomy cave lit up by torches held by wall sconces. 
        There are two exits that you can see, one that leads forward,
        and another that leads to the left</p>
        <hr/>
        <p id="1">go straight</p>
        <p id="3">go left</p>`,
        "0",
        `<h1>Welcome to The Rooms</h1>
        <p>You find yourself in a damp and slightly dark, gloomy cave lit up by torches held by wall sconces. 
        There are two exits that you can see, one that leads forward,
        and another that leads to the left</p>
        <hr/>
        <p id="1">go straight</p>
        <p id="3">go left</p>`);
    }
}

room();