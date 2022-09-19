// Creating a kaboom scene
kaboom({
    background: [0, 0, 0],
    width: 1200,
    height: 800,
});

///////////// ASSETS /////////////

loadRoot("assets/");

// Sprites
loadSprite("classRoom1","classroomBg.png");
loadSprite("schoolMap","schoolMap.png");
loadSprite("KATE", "KATEcu.png");
loadSprite("overWorldKATE", "KATE1.png");
loadSprite("mathsTeacherAvatar", "oldTeachCu.png");
loadSprite("mathsTeacher", "oldTeach.png");
loadSprite("artTeacher", "artTeach.png");
loadSprite("artTeacherAvatar", "artTeachCu.png");

// Sounds
loadSound("corridorAmbient", "corridor.mp3");
loadSound("spacePress", "spacePress.mp3");
loadSound("soCold", "soCold.mp3");
loadSound("door", "door.mp3");



loadBean("bean");


///////////// VARIABLES /////////////
let placeHolder = "My name: ";
let namePlayer;
const pad = 24;
let playerPoints = 0;

///////////////////////////////////////////////////////////////// SCENE ONE: Start Screen //////////////////////////////////////////////////////////////////////////////

scene("accueil", () =>{
    add([
        text(`bIAs
        
PRESS SPACE BAR TO BEGIN

A game brought to you by Sophie and Tessa`, {
            size: 48,
            font: "sink",
            
        }),
        pos (100, 350),
    ]);

    // Ajouter un évennement quand j'appuie sur une touche
    onKeyPress("space", () =>{
        go("nameInput");
    });
});
///////////////////////////////////////////////////////////////// SCENE TWO: Name input ////////////////////////////////////////////////////
scene("nameInput", () => {
    add([
        pos(150, 200),
        text("Type your name and press enter", {
            font: "sink",
            width: width() - pad * 2,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 4,
        })
    ])
    const input = add([
        pos(250, 250),
        text(`${placeHolder}`, {
            font: "sink",
            width: width() - pad * 2,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 4,
        }),

    ])
    onCharInput((ch) => {
        input.text += ch
    })
    onKeyPressRepeat("backspace", () => {
        input.text = input.text.substring(0, input.text.length - 1)
    })
    onKeyPress("enter", () => {
        placeHolder = input.text
        go("introduction");
        namePlayer = placeHolder.replace("My name: ", "");
    })
    
})

///////////////////////////////////////////////////////////////// SCENE THREE: Introduction /////////////////////////////////////////////////////////////////
// Your teacher introduces the AI, K.A.T.E. to the class and contextualises the game.

// Adding the background image of the scene: 
scene("introduction", () =>{
    let class1 = add([
        sprite("classRoom1"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        origin("center"),
        // Allow the background to be scaled
        //scale(1),
        // Keep the background position fixed even when the camera moves
        fixed()
      ]);

    // Adding the dialog/text box at the bottom of the screen:
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    // Adding the portrait to the left of the text box: 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);

    const dialogs = [
        // Teacher introducing AI:
        [ "bean", "Good morning class."],
        [ "bean", "Today we're going to be learning about Artificial Intelligence, or 'AI' for short." ],
        [ "bean", "AI lets computers learn and grow, sort of like a brain for computers." ],
        [ "bean", "Much like you and I, an AI can understand language, plan things, solve problems, think, and flex its intelligence." ],
        [ "bean", "It's a great way to make computer perform tasks for us and help us in our everyday lives!" ],
        [ "bean", "From solving simple puzzles to helping research quantum physics, AIs can perform incredible tasks." ],
        [ "bean", "If you play video games, then you most likely would have encountered an AI. Thanks to it, your gaming experience is enhanced and feels more natural" ],
        [ "bean", "Let me give you an example of an AI." ],
        [ "bean", "I'm sure you've all played Pac Man before?" ],
        [ "bean", "Well, the little ghosts that chase after you are AIs – each with their own personalities and traits! They act independently and can make split-second decisions on how to chase you. It's what makes the game so engaging!" ],
        [ "bean", "As I said, AIs can be used in all sorts of scenarios to automate things and help carry out complex tasks" ],
        // Teacher introduces K.A.T.E.:
        [ "bean", "I'll be introducing you to one today." ],
        [ "bean", "She's called K.A.T.E.. Her name is short for 'Kind Artifical Teaching Enrichment Tool'. " ], 
        [ "bean", "Her job is to help schools find the very best teachers to teach you kids, and suggest who she thinks will be the most suitable applicant for the job." ],
        [ "bean", "Naturally, our headmaster has taken an interest in her and what she can do. I'm sure you've all heard by now that the school is looking for a new science teacher." ],
        [ "bean", "What better time to call on K.A.T.E. to help us find a great new teacher for you all?" ],
        [ "bean", "We don't want to leaver her with the final say on who will be hired to teach you, however." ],
        [ "bean", "After all, the staff and I are committed to offering you only the highest standard of teaching, and just like you or me, she can still make mistakes!" ],
        [ "bean", "That's where you kids come in!" ],
        [ "bean", "Today, one of you will be chosen to spend some time with K.A.T.E. and get to know her so that you can see and how she works." ],
        [ "bean", "AIs need to collect information to learn from before they can offer informed suggestions." ],
        [ "bean", "For this reason, whomever will be chosen to spend some time with K.A.T.E. will accompany her on her data-collecting journey!" ],
        [ "bean", "Since our headmaster wants our new hiree to integrate comfortably in our school, K.A.T.E. will be gathering her information from successful past applicants. In other words, she'll get to know other teachers and find out about their hiring experience." ],
        [ "bean", "Their background, their work experience, their personnal opinions and insights..." ],
        [ "bean", "She'll even look at their CVs!" ],
        [ "bean", "Once she's gathered all the information she needs, she'll be able to tell us who she thinks is the best candidate for the science teaching opening." ],
        [ "bean", "The student who will be accompanying K.A.T.E. will have to learn alongside her, and have the chance to offer their own input on who they think is best suited." ],
        [ "bean", "This way, we can compare K.A.T.E.'s assessment to that of a student's!" ],
        [ "bean", "I wonder if they'll be very different." ],
        [ "bean", "I've got a bowl here with all of your names written on different slips of paper." ],
        [ "bean", "I'll pick one at random, and the lucky winner will be chosen to be K.A.T.E.'s guide!" ],
        [ "bean", "All right! One... " ],
        [ "bean", "Two..." ],
        [ "bean", "Three..." ],
        [ "bean", "..." ],
        // Make constant to allow the student to put their name in at the start of the game?
        [ "bean", `${namePlayer}!` ],
        [ "bean", "You will be K.A.T.E.'s companion!" ],
        [ "bean", "Take her around to talk to some teachers and gather information about them and understand what it is about them that helped them successfully get a teaching position here." ],
        [ "bean", "Their je-ne-sais-quoi if you will." ],
        [ "bean", "Take your time!" ],
        [ "bean", "Once you and K.A.T.E. have collected all of the information that you need to make your informed decision, come back here and we'll see what she suggests..." ],
        [ "bean", "And if you agree with her!" ],
    ];

    let curDialog = 0

    // Text
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
        ]);

        // Character avatar
        const avatar = add([
        sprite("bean"),
        scale(3),
        origin("center"),
        pos(portrait.pos),
        ])

    onKeyPress("space", () => {
        // Cycle through the dialogs
        curDialog = (curDialog + 1)
        console.log(curDialog)
        // Adding a delay between hitting space bar and the text showing up:
        wait(0.3,() => {
        updateDialog()})
        // Looking at how to get the typing effect for the text?
        //setTimeout("type()", 5000)  
    });

    // Update the on screen sprite & text
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]

        
        // Use a new sprite component to replace the old one
        // We can use this for different facial expressions in the portraits? 
        //avatar.use(sprite(char))
        
        // Update the dialog text
        txt.text = dialog} else {
            play("door")
            go("corridor")
        }
    }

    updateDialog()

})

//////////////////////////////////////////////////// SCENE FOUR: CORRIDOR /////////////////////////////////////////////////////////////////

// Exit scene one: player is standing outside the door of their classroom with KATE.
// The player can interact with her sprite (she can introduce herself, maybe explain once more that she needs to listen in on convos with teacher to gather her data, explain that she'll cross reference each teacher to determine/pintpoint what it is that made them successful (non-recurring terms, male-oriented language, gender etc.))

scene("corridor", () =>{
    // need to loop this? Or does it end with silence and we need to trim the mp3. Anyway I wanted to test a sound file
    play("corridorAmbient")
        //Adding the school map as background: 
        let map = add([
        sprite("schoolMap"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        origin("center"),
        // Keep the background position fixed even when the camera moves
        fixed()
    ]);


    // I. PERIMETERS
    // Setting up wall, lockers and mics positions : 
    // 1) Walls (red)
        let corridorWallDown = add([
            pos(8, 342),
            rect(1150, 4),
            opacity(0.7),
            color(255, 0, 0),
            area(),
            solid()
        ])
        let corridorWallUp = add([
            pos(8, 237),
            rect(1150, 4),
            opacity(0.7),
            color(255, 0, 0),
            area(),
            solid()
        ])
        let corridorWallLeft = add([
            pos(6, 238),
            rect(4, 110),
            opacity(0.7),
            color(255, 0, 0),
            area(),
            solid()
        ])
        let corridorWallRight = add([
            pos(1150, 225),
            rect(4, 130),
            opacity(0.7),
            color(255, 0, 0),
            area(),
            solid()
        ])
    // 2) Lockers (green)
        let lockers = add([
            pos(37, 240),
            rect(98, 8),
            opacity(0.7),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
        ]);
        add([
            pos(138, 240),
            rect(98, 8),
            opacity(0.7),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
        ]);
        add([
            pos(340, 240),
            rect(98, 8),
            opacity(0.7),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
            ]);
        add([
            pos(37, 333),
            rect(98, 8),
            opacity(0.7),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
        ]);
        add([
            pos(168, 333),
            rect(98, 8),
            opacity(0.7),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
        ]);
        add([
            pos(340, 333),
            rect(98, 8),
            opacity(0.7),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
        ])
    // 3) Doors (purple)
        let mathsDoor = add([
            pos(302, 238),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "mathsDoor"
        ]);
        let scienceDoor = add([
            pos(803, 238),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "scienceDoor"
        ]);
        let headmastersDoor = add([
            pos(135, 340),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "headMastersDoor"
        ]);
        let playerClassDoor = add([
            pos(305, 340),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "playerClassDoor"
        ]);
        let batroomDoor = add([
            pos(499, 340),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "bathroomDoor"
        ]);
        let englishDoor = add([
            pos(591, 340),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "englishDoor"
        ]);
        let artDoor = add([
            pos(805, 340),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "artDoor"
        ]);
    // 4) Corridor misc
    let corridorPlant1 = add([
        pos(1122, 245),
        rect(27, 25),
        opacity(0.5),
        color(242, 219, 15),
        area(),
        solid(),
        "plant",
    ]);
    let corridorPlant2 = add([
        pos(1122, 313),
        rect(27, 27),
        opacity(0.5),
        color(242, 219, 15),
        area(),
        solid(),
        "plant",
    ]);

    // PLAYER AND PLAYER MOVEMENT
    // Adding player into the over world : 
    let overWorldPlayer = add([
        sprite("bean"),
        pos(325, 325),
        origin("center"),
        area({
            width : 80,
            height : 80,
        }),
        scale(0.2),
        solid(),
        color([32, 110, 19])
        // Animation for the player sprite (walking) will go here :
        ]);

    // Adding KATE sprite into te overworld:
    //

    overWorldPlayer.onUpdate(() => {
    });

    // Adding movements to the player:
    const playerSpeed = 400
    onKeyDown("left", () => {
            overWorldPlayer.move(-playerSpeed, 0)        
    });
    onKeyDown("right", () => {
            overWorldPlayer.move(playerSpeed, 0)
    });
    onKeyDown("up", () => {
            overWorldPlayer.move(0, -playerSpeed)
    });
    onKeyDown("down", () => {
            overWorldPlayer.move(0, +playerSpeed)
    });


    // III. INTERACTIONS
        // Textbox, portrait and text for the interactions
        const textbox = add([
            rect(width() - 300, 120, { radius: 32 }),
            origin("center"),
            pos(center().x + 100, height() - 125),
            outline(2),
        ]);
        textbox.hidden = true;
        // Portait :
        const portrait = add([
            rect(200, 120, {radius: 32}),
            origin("center"),
            pos(center().x - 450, height() - 125),
            outline(2),
            "portrait"
        ]);
        portrait.hidden = true;
        // Character avatar
        const avatar = add([
            sprite("KATE"),
            scale(2),
            origin("center"),
            pos(portrait.pos),
        ])
        avatar.hidden = true
        // Text
        const txt = add([
            text("", { 
                size: 32, 
                width: 800,
                }),
            color([0, 0, 0]),
            pos(textbox.pos),
            origin("center")
        ]);
        txt.hidden = true
    // A function that deletes the text boxes once the dialogue is finished
    function deleEverything (){
        textbox.hidden = true;
        avatar.hidden = true; 
        portrait.hidden = true;
        txt.hidden = true
    }
    // A function to update the dialogues (for objects with minimal interaction)
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1]} else {
            deleEverything()
        }
    }
    // Two functions to update the dialogues (for doors from which to access the teachers)
    function YorNChoiceDoor (string){
        portrait.hidden = true;
        avatar.hidden = true;
        textbox.hidden = false;
        txt.text = "Press Y if you would like to go in, or N if you don't.";
    onKeyPress("y", () => {
        console.log("Pressed Y")
        go(string)
    })
    onKeyPress("n", () => {
        console.log("Pressed N");
        textbox.hidden = true;
        txt.hidden = true; 
    })
    }
    function updateDoorsDialog(v, t, string) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1];
        }
        else if (v > t.length){
            YorNChoiceDoor(string)
        }
    }

    // A) Interactions with LOCKERS when player presses space while touching them
    let lockerD = ["Oh, do you think some of the teachers are hiding in the lockers? How fun!", "Is it a sort of school tradition for teachers to lock themselves in there?", "Maybe it's their designated quiet place?", "In any case, it seems like no one is in there.", "Shall we move on?"];
    let lockerDialog = 0;
    onKeyPress("space", () => {
        //Testing sound
        // For some reason spacePress plays if you press space even when not interacting with a locker hmmm
        play("spacePress")
        every("locker", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            lockerDialog += 1
            console.log(lockerDialog)
            wait(0.3,() => {
                updateDialog(lockerDialog, lockerD)
            });
        }; 
        });
    });

    // B) Interaction with CORRIDOR PLANTS when player presses space while touching them :
    let plantsD = ["What a lovely green plant! And it's a real one too!", "Did you know that the presence of such plants can ease feelings of anxiety and stress?", "It helps you feel more at peace... and calm...", "Sort of like putting a piece of decoration in your Sim's house.", "I suppose that if a quiet moment in a locker won't help, a green plant can surely soothe your teachers.", "Nature sure is precious"];
    let plantDialog = 0;
    onKeyPress("space", () => {
        every("plant", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            plantDialog += 1
            console.log(plantDialog)
            wait(0.3,() => {
                updateDialog(plantDialog, plantsD)
            });
        }; 
        });
    });

    // C) Interaction with BATHROOM DOOR when player presses space when touching it
    let bathroomD = ["Oh, do you need to go to the bathroom?", "Go on, I'll wait for you here then", "...", "...", "...", "All done? Awesome! Let's go"];
    let bathroomDialog = 0;
    onKeyPress("space", () => {
        every("bathroomDoor", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            bathroomDialog += 1
            console.log(bathroomDialog)
            wait(0.3,() => {
                updateDialog(bathroomDialog, bathroomD)
            });
        }; 
        });
    });

    // D) Interactions with DOORS

    // Yes or no choice to go through doors: 
    

    // a) Maths Door
    let mathsDoorD = ["This is the door to the maths class, right?", "Mr. XYZ should be in there.", "Shall we go talk to him about his experience as a successful applicant to teach in this school?", "He may have valuable insights for me to learn from...", " so that I may suggest the best person suited for the open teaching position!"];
    let mathsDoorDialog = 0;
    onKeyPress("space", () => {
        every("mathsDoor", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            mathsDoorDialog += 1
            wait(0.3,() => {
                updateDoorsDialog(mathsDoorDialog, mathsDoorD, "mathsClass")
            });
        }; 
        });
    });

    // b) Science Door
    let scienceDoorD = ["This is the door to the maths class, right?", "Mr. XYZ should be in there.", "Shall we go talk to him about his experience as a successful applicant to teach in this school?", "He may have valuable insights for me to learn from...", " so that I may suggest the best person suited for the open teaching position!"];
    let scienceDoorDialog = 0;
    onKeyPress("space", () => {
        every("scienceDoor", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            scienceDoorDialog += 1
            wait(0.3,() => {
                updateDoorsDialog(scienceDoorDialog, scienceDoorD, "scienceDoor")
            });
        }; 
        });
    });

    // c) Headmaster's office
    let HMDoorD = ["This is the door to the maths class, right?", "Mr. XYZ should be in there.", "Shall we go talk to him about his experience as a successful applicant to teach in this school?", "He may have valuable insights for me to learn from...", " so that I may suggest the best person suited for the open teaching position!"];
    let HMDoorDialog = 0;
    onKeyPress("space", () => {
        every("headMastersDoor", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            HMDoorDialog += 1
            wait(0.3,() => {
                updateDoorsDialog(scienceDoorDialog, HMDoorD, "headMastersDoor")
            });
        }; 
        });
    });

    // d) Player class --> !! the playerPoints should be updated everytime the player meets a teacher, as in playerPoints += 1, so that once the player has visited all five teachers he will be able to access the classroom again
    let PCNotReadyDoorD = ["I don't know about you, but I think we haven't collected enough data yet to make an informed decion.", "Should we explore the other classes before coming back?"];
    let PCReadyDoorD = ["We sure talked with a lot of people today.", "I think I have now a fair idea about who not to hire for the job, do you?", "Should we go in then and choose the best candidate for the job?"]
    let PCDoorDialog = 0;

    if (playerPoints < 5){
        onKeyPress("space", () => {
            every("playerClassDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                PCDoorDialog += 1
                wait(0.3,() => {
                    updateDialog(PCDoorDialog, PCNotReadyDoorD)
                });
            }; 
        });
    });
    } else {
        onKeyPress("space", () => {
            every("playerClassDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                PCDoorDialog += 1
            wait(0.3,() => {
                updateDoorsDialog(PCDoorDialog, PCReadyDoorD, "playerClassDoor")})
            }; 
            });
        });
    }

    // e) English class englishDoor
    let englishDoorD = ["This is the door to the maths class, right?", "Mr. XYZ should be in there.", "Shall we go talk to him about his experience as a successful applicant to teach in this school?", "He may have valuable insights for me to learn from...", " so that I may suggest the best person suited for the open teaching position!"];
    let englishDoorDialog = 0;
    onKeyPress("space", () => {
        every("englishDoor", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            englishDoorDialog += 1
            wait(0.3,() => {
                updateDoorsDialog(englishDoorDialog, englishDoorD, "englishDoor")
            });
        }; 
        });
    });

    // f) Art Door
    let artDoorD = ["Ah, this is the art class.", "Mrs. XYZ must be waiting for us.", "Let's find out what her hiring experience was like.", "I'm certain that she'll have some interesting things to say.",];
    let artDoorDialog = 0;
    onKeyPress("space", () => {
        every("artDoor", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            artDoorDialog += 1
            wait(0.3,() => {
                updateDoorsDialog(artDoorDialog, artDoorD, "artClass")
            });
        }; 
        });
    });
    
});

//////////////////////////////////////////////////// SCENE FIVE: MATHS CLASS /////////////////////////////////////////////////////////////////


scene("mathsClass", () =>{
    //  ¯\_(ツ)_/¯
    //play("soCold")
    let MathsClass = add([
        sprite("classRoom1"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        origin("center"),
        // Allow the background to be scaled
        //scale(1),
        // Keep the background position fixed even when the camera moves
        fixed()
      ]);

    // Adding Teacher
    const mathsTeacher = add([
        sprite("mathsTeacher"),
    ])
    //  (⊙‿⊙)(⊙‿⊙)(⊙‿⊙)
    /* loop(0.5, () => {
        add([
            sprite("mathsTeacher"),
            pos(rand(vec2(window.innerWidth, window.innerHeight))),
            color(112, 11, 48)
        ])
    }) */
    // Adding the dialog/text box at the bottom of the screen:
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    // Adding the portrait to the left of the text box: 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);

    const dialogs = [
        // Teacher introducing AI:
        [ "mathsTeacherAvatar", `${namePlayer}!` ],
        [ "mathsTeacherAvatar", "Your teacher told me to be expecting one of his/her students to stop by during this period." ],
        [ "mathsTeacherAvatar", "So you're the lucky student who got paired up with KATE, huh?" ],
        [ "mathsTeacherAvatar", "I understand that you're here to ask me about how I got hired here." ],
        [ "mathsTeacherAvatar", "It was quite a serendipitous to be honest." ],
        [ "mathsTeacherAvatar", "You see, I've known Mr XYZ, our headmaster for quite a long time..." ],
        [ "mathsTeacherAvatar", "ever since I was a teenager, actually!" ],
        [ "mathsTeacherAvatar", "He used to live next door to my family." ],
        [ "mathsTeacherAvatar", "Dad and he became fast friends. They'd go on fishing trips together. I even tagged along a few times." ],
        [ "mathsTeacherAvatar", "When I graduated from university Mr. XYZ even wrote me a glowing letter of recommendation... as a personal favour of course." ],
        [ "mathsTeacherAvatar", "Competition was tough back then." ],
        [ "mathsTeacherAvatar", "I spent a few months trying to get a teaching position, but alas, to no avail." ],
        [ "mathsTeacherAvatar", "Then Mr. XYZ got in touch to ask me how my job-searching was going. When I told him that I was having a difficult time..." ],
        [ "mathsTeacherAvatar", "He hired me on the spot!" ],
        [ "mathsTeacherAvatar", "I didn't even have to do an interview." ],
        // Avatar size issue here for KATE
        [ "KATE", "Oh? I can only conclude that your qualifications must have been perfectly suited to the position!" ],
        [ "mathsTeacherAvatar", "Well, yes. I may not have had any prior teaching experience at the time, but I've since proven my worth since then..." ],
        [ "mathsTeacherAvatar", "Isn't that right," + `${namePlayer}!` ],
        [ "mathsTeacherAvatar", "Most of my students leave here with good grades, after all." ],
        [ "mathsTeacherAvatar", "And I dare say that our dear headmaster has trusted me with teaching maths from the very start of my career." ],
        // KATE avatar
        [ "KATE", "A longstanding and positive relationship with the headmaster certainly seems very important!" ],
        [ "mathsTeacherAvatar", "Indeed. It's always good to nurture a good rapport with the boss!" ],
        [ "mathsTeacherAvatar", "That reminds me..." ],
        [ "mathsTeacherAvatar", `${namePlayer},` + "don't forget to hand in your maths homework on time this week." ],
        [ "mathsTeacherAvatar", "I'm starting to find it hard to believe that your pet has recently taken such a liking to vandalising your papers." ],
        [ "mathsTeacherAvatar", "Anyway, if you would like to find more details about how the hiring process works here, you can take a look at my old CV in the headmaster's office." ],
        [ "mathsTeacherAvatar", "It'll have ample information for you to use." ],
        // KATE avatar
        [ "KATE", "Excellent! It will be most useful for me to learn from so that I may fulfill my purpose today!" ],
        [ "mathsTeacherAvatar", "Of course. I suppose I am one of those 'datasets' that fuels that brain of yours, KATE." ],
        // KATE avatar
        [ "KATE", "That is correct!" ],
        [ "mathsTeacherAvatar", "Well, good luck on your data-gathering journey." ],
        [ "mathsTeacherAvatar", "And if you do see the headmaster, let him know that I am available for our fishing trip next Saturday will you?" ],
    ];

    let curDialog = 0

    // Text
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
        ]);

    // Character avatars
    // Maths teacher:
    const avatar = add([
    sprite("mathsTeacherAvatar"),
    scale(0.3),
    origin("center"),
    pos(portrait.pos),
    ])

    onKeyPress("space", () => {
        // Sound: 

        // Cycle through the dialogs
        curDialog = (curDialog + 1)
        console.log(curDialog)
        // Adding a delay between hitting space bar and the text showing up:
        wait(0.3,() => {
        updateDialog()})
        // Looking at how to get the typing effect for the text?
        //setTimeout("type()", 5000)  
    });

    // Update the on screen sprite & text
    function updateDialog() {
        if (curDialog < dialogs.length){
            const [ char, dialog ] = dialogs[curDialog]
        // Use a new sprite component to replace the old one
        avatar.use(sprite(char))
        // Update the dialog text
        txt.text = dialog       
        // Update the dialog text
        txt.text = dialog} else {
            play("door")
            go("corridor")
        }
    };
    updateDialog()
});

//////////////////////////////////////////////////// SCENE SIX: SCIENCE CLASS /////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////// SCENE SIX: HEADMASTER'S OFFICE /////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////// SCENE SIX: PLAYER CLASS /////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////// SCENE SIX: ENGLISH CLASS /////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////// SCENE SIX: ART CLASS /////////////////////////////////////////////////////////////////

scene("artClass", () =>{
    //  ¯\_(ツ)_/¯
    //play("soCold")
    let MathsClass = add([
        sprite("classRoom1"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        origin("center"),
        // Allow the background to be scaled
        //scale(1),
        // Keep the background position fixed even when the camera moves
        fixed()
      ]);

    // Adding Teacher
    const mathsTeacher = add([
        sprite("artTeacher"),
    ])
    
    // Adding the dialog/text box at the bottom of the screen:
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    // Adding the portrait to the left of the text box: 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);

    const dialogs = [
        // Teacher introducing AI:
        [ "artTeacherAvatar", "Oh, if it isn't my dear " + `${namePlayer}!` + " Welcome, welcome!" ],
        [ "artTeacherAvatar", "And this must be KATE! I have heard so much about you!" ],
        [ "KATE", "I am at your service!" ],
        [ "artTeacherAvatar", "How charming." ],
        [ "artTeacherAvatar", "I suspect that you are here to learn about my experience getting a job here." ],
        [ "artTeacherAvatar", "It seemed like a natural progression in my career, you see." ],
        [ "artTeacherAvatar", "I've always been passionate about art." ],
        [ "artTeacherAvatar", "So much so that I studied art and art history for years, right until I finished my doctorate degree!" ],
        [ "artTeacherAvatar", "Eventually, I opened my own art gallery." ],
        [ "artTeacherAvatar", "That was truly one of my greatest accomplishments." ],
        [ "artTeacherAvatar", "Sharing art that moves one's soul and encouraging artists far and wide to pursue their craft..." ],
        [ "artTeacherAvatar", "That's one of life's greatest joys." ],
        [ "artTeacherAvatar", "Eventually, once my husband retired we moved to a quiet little house not too far from here." ],
        [ "artTeacherAvatar", "My art gallery had been so successful that we were in want for nothing." ],
        [ "artTeacherAvatar", "But my love for art and its diffusion never dwindled. I must admit, that I was feeling like something was missing in my life." ],
        [ "artTeacherAvatar", "And then I realised..." ],
        // Am I saying passion too often 
        [ "artTeacherAvatar", "What better way to channel my passion than to teach art to the youth?" ],
        [ "artTeacherAvatar", "Encourage young, inquisitive minds to find beauty and comfort in the world around them." ],
        [ "artTeacherAvatar", "Next thing I knew, I had sent my CV off to Mr. XYZ." ],
        // KATE avatar
        [ "KATE", "You were driven by the love for your craft. How inspiring!" ],
        [ "artTeacherAvatar", "Yes, and also my love for sharing my passion! Students here are all so creative. They never cease to inspire me. " ],
        [ "artTeacherAvatar", `${namePlayer}, ` + "your most recent piece was so clever." ],
        // KATE avatar
        [ "KATE", "How was the hiring process?" ],
        [ "artTeacherAvatar", "Oh, well..." ],
        [ "artTeacherAvatar", "It was surprisingly difficult." ],
        [ "artTeacherAvatar", "I had assumed, perhaps foolishly, that my many degrees and qualifications would have made the whole ordeal easier." ],
        [ "artTeacherAvatar", "Not to mention the fact that I had owned a successful art gallery and patroned many great artists." ],
        [ "artTeacherAvatar", "But the process was long." ],
        [ "artTeacherAvatar", "I had three rounds of interviews and had to produce numerous letters of recommendation." ],
        // KATE avatar
        [ "KATE", "Wow! That's quite a stringent process!" ],
        [ "artTeacherAvatar", "Yes, my dear. But I would do it again in a heart beat. Students here are truly astonishing. Some may become great artists themselves!" ],
        [ "artTeacherAvatar", "I think if it weren't for them I would not be teaching." ],
        [ "KATE", "Oh?" ],
        [ "artTeacherAvatar", "Well... I am sure you've noticed that I am the only woman in the faculty." ],
        [ "artTeacherAvatar", "It can be a little difficult at times. It feels like a bit of a 'boy's club' here at times." ],
        [ "artTeacherAvatar", "" ],




    ];

    let curDialog = 0;
    // Text
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
        ]);

    // Character avatars
    // Maths teacher:
    const avatar = add([
    sprite("artTeacherAvatar"),
    scale(0.3),
    origin("center"),
    pos(portrait.pos),
    ])

    onKeyPress("space", () => {
        // Sound: 

        // Cycle through the dialogs
        curDialog = (curDialog + 1)
        console.log(curDialog)
        // Adding a delay between hitting space bar and the text showing up:
        wait(0.3,() => {
        updateDialog()})
        // Looking at how to get the typing effect for the text?
        //setTimeout("type()", 5000)  
    });

    // Update the on screen sprite & text
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	// Use a new sprite component to replace the old one
	avatar.use(sprite(char))
	// Update the dialog text
	txt.text = dialog       
        // Update the dialog text
        txt.text = dialog} else {
            play("door")
            go("corridor")
        }
    };
    updateDialog()
});


// Initialize game 
go("corridor")