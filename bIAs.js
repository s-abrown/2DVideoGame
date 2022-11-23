// TO ADD --> WHEN DIALOG WITH DOORS OR WITH INANIMATE OBJS STARTS PLAYER MOVEMENT NOT POSSIBLE

// Creating a kaboom scene
kaboom({
    background: [0, 0, 0],
    width: 1200,
    height: 800,
});

///////////// Assets /////////////
loadRoot("assets/");
// Sprites
// 1) Backgrounds
loadSprite("classRoom1","classroomBg.png");
loadSprite("headmasterBg", "headmasterOffice.png");
loadSprite("cvsBg", "cvBg.png");
loadSprite("mathClassroom","mathClassroomBg.png");
loadSprite("artClassroom","artClassroomBg.png");
loadSprite("scienceClassroom","scienceBg.png");
loadSprite("englishClassroom","englishBg.png");
// 2) School map
loadSprite("schoolMap","schoolMap.png");
// 3) K.A.T.E.
loadSprite("KATE", "KATEcu2.png");
loadSprite("overWorldKATE", "KATE1.png");
// 4) Student and K.A.T.E
loadSprite("student", "student_sprite.png")
// 5) Player's teacher - John Alden
loadSprite("playerTeacherAvatar", "playerTeacherCu.png");
loadSprite("playerTeacher", "playerTeacher.png");
// 6) Maths teacher - Ross Parker
loadSprite("mathsTeacherAvatar", "oldTeachCu.png");
loadSprite("mathsTeacher", "oldTeach.png");
// 7) Arts teacher - Yvonne Lefebvre
loadSprite("artTeacher", "artTeach.png");
loadSprite("artTeacherAvatar", "artTeachCu.png");
// 8) Science teacher - Angus Mackenzie
loadSprite("scienceTeacher", "scienceTeach.png");
loadSprite("scienceTeacherAvatar", "scienceTeachCu.png");
// 9) English teacher - James Moore
loadSprite("englishTeacher", "englishTeach.png");
loadSprite("englishTeacherAvatar", "englishTeachCu.png");
// 10) Headmaster - Atticus Umbridge
loadSprite("headmaster", "headmaster.png");
loadSprite("headmasterAvatar", "headmasterCu.png");
// 11) Sounds
loadSound("corridorAmbient", "corridor.mp3");
loadSound("spacePress", "spacePress.mp3");
loadSound("soCold", "soCold.mp3");
loadSound("door", "door.mp3");
loadSound("bigshot", "bigshot.mp3");
loadSound("click", "click.mp3");
// 12) CV's
loadSprite("mathTeachCV", "mathTeachCV.png");
loadSprite("mathTeachCV1", "mathTeachCV1.png");
loadSprite("mathTeachCV2", "mathTeachCV2.png");
loadSprite("ArtteachCV", "ArtteachCV.png");
loadSprite("artTeachCV1", "artTeachCV1.png");
loadSprite("artTeachCV2", "artTeachCV2.png");
loadSprite("englishTeachCV", "englishTeachCV.png");
loadSprite("englishTeachCV1", "englishTeach1.png");
loadSprite("englishTeachCV2", "englishTeach2.png");
loadSprite("scienceTeachCV", "scienceTeachCV.png");
loadSprite("scienceTeachCV1", "scienceTeachCV1.png");
loadSprite("scienceTeachCV2", "scienceTeachCV2.png");
loadSprite("EvansCV", "EvansCV.png");
loadSprite("EvansCV1", "EvansCV1.png");
loadSprite("EvansCV2", "EvansCV2.png");
loadSprite("LaurenCV", "LaurenCV.png");
loadSprite("LaurenCV1", "LaurenCV1.png");
loadSprite("LaurenCV2", "LaurenCV2.png");
loadSprite("JohCV", "JohCV.png");
loadSprite("JohCV1", "JohCV1.png");
loadSprite("JohCV2", "JohCV2.png");

///////////// Variables /////////////
let placeHolder = "My name: ";
let namePlayer = "";
const pad = 24;
let playerPoints = 0;
let mathsPoint = 0;
let sciencePoint = 0; 
let headmPoint = 0;
let englishPoint = 0; 
let artPoint = 0;
let cvReadCounter = 0;
let cvReadCounter1 = 0;
let playerChoice = "";
let kateChoice = "A";
let choiceTable = [
    {key: "a", value: "A. Was there something specifc you looked for in a CV?"},
    {key: "b", value: "B. What did you learn from each discussion we've had with the teachers today?"},
    {key: "c", value: "C. Do you think that Mr. Umbridge will agree with your choice, K.A.T.E.?"}
];

///////////////////////////////////////////////////////////////// Scene 1: Start Screen //////////////////////////////////////////////////////////////////////////////
scene("accueil", () =>{
    add([
        text(`   
PRESS SPACE BAR TO BEGIN

b.I.A.s
A game by Sophie and Tessa`, {
            size: 48,
            font: "sink",
            lineSpacing: 10,
            
        }),
        pos (100, 200),
    ]);

    onKeyPress("space", () =>{
        go("nameInput");
    });
});
///////////////////////////////////////////////////////////////// Scene 2: Name input ////////////////////////////////////////////////////
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
    ]);
    const input = add([
        pos(250, 250),
        text(`${placeHolder}`, {
            font: "sink",
            width: width() - pad * 2,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 4,
        }),

    ]);
    onCharInput((ch) => {
        input.text += ch
    });
    onKeyPressRepeat("backspace", () => {
        input.text = input.text.substring(0, input.text.length - 1)
    });
    onKeyPress("enter", () => {
        placeHolder = input.text
        go("introduction");
        namePlayer = placeHolder.replace("My name: ", "");
    });
});

///////////////////////////////////////////////////////////////// Scene 3: Introduction /////////////////////////////////////////////////////////////////
scene("introduction", () =>{
    // Adding the background image of the scene
    let classRoom = add([
        sprite("classRoom1"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);

    // Adding the dialog/text box at the bottom of the screen
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    // Adding the portrait to the left of the text box
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
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
        sprite("playerTeacherAvatar"),
        scale(0.51),
        origin("center"),
        pos(portrait.pos),
    ]);

    const dialogs = [
        // Teacher introducing AI:
        [ "playerTeacherAvatar", "Good morning class."],
        [ "playerTeacherAvatar", "Today we're going to be learning about Artificial Intelligence, or 'AI' for short." ],
        [ "playerTeacherAvatar", "AI lets computers learn and grow, sort of like a brain for computers." ],
        [ "playerTeacherAvatar", "Much like you and I, an AI can understand language, plan things, solve problems, think, and flex its intelligence." ],
        [ "playerTeacherAvatar", "It's a great way to make computer perform tasks for us and help us in our everyday lives!" ],
        [ "playerTeacherAvatar", "From solving simple puzzles to helping research quantum physics, AIs can perform incredible tasks." ],
        [ "playerTeacherAvatar", "If you play video games, then you most likely would have encountered an AI. Thanks to it, your gaming experience is enhanced and feels more natural" ],
        [ "playerTeacherAvatar", "Let me give you an example of an AI." ],
        [ "playerTeacherAvatar", "I'm sure you've all played Pac Man before?" ],
        [ "playerTeacherAvatar", "Well, the little ghosts that chase after you are AIs, each with their own personalities and traits! They act independently and can make split-second decisions on how to chase you. It's what makes the game so engaging!" ],
        [ "playerTeacherAvatar", "As I said, AIs can be used in all sorts of scenarios to automate things and help carry out complex tasks" ],
        // Teacher introduces K.A.T.E.:
        [ "playerTeacherAvatar", "I'll be introducing you to one today." ],
        [ "playerTeacherAvatar", "She's called K.A.T.E.. Her name is short for 'Kind Artifical Teaching Enrichment Tool'. " ], 
        [ "playerTeacherAvatar", "Her job is to help schools find the very best teachers to teach you kids, and suggest who she thinks will be the most suitable applicant for the job." ],
        [ "playerTeacherAvatar", "Naturally, our headmaster has taken an interest in her and what she can do. I'm sure you've all heard by now that the school is looking for a new science teacher." ],
        [ "playerTeacherAvatar", "What better time to call on K.A.T.E. to help us find a great new teacher for you all?" ],
        [ "playerTeacherAvatar", "We don't want to leaver her with the final say on who will be hired to teach you, however." ],
        [ "playerTeacherAvatar", "After all, the staff and I are committed to offering you only the highest standard of teaching, and just like you or me, she can still make mistakes!" ],
        [ "playerTeacherAvatar", "That's where you kids come in!" ],
        [ "playerTeacherAvatar", "Today, one of you will be chosen to spend some time with K.A.T.E. and get to know her so that you can see and how she works." ],
        [ "playerTeacherAvatar", "AIs need to collect information to learn from before they can offer informed suggestions." ],
        [ "playerTeacherAvatar", "For this reason, whomever will be chosen to spend some time with K.A.T.E. will accompany her on her data-collecting journey!" ],
        [ "playerTeacherAvatar", "Since our headmaster wants our new hiree to integrate comfortably in our school, K.A.T.E. will be gathering her information from successful past applicants. In other words, she'll get to know other teachers and find out about their hiring experience." ],
        [ "playerTeacherAvatar", "Their background, their work experience, their personnal opinions and insights..." ],
        [ "playerTeacherAvatar", "She'll even look at their CVs!" ],
        [ "playerTeacherAvatar", "Once she's gathered all the information she needs, she'll be able to tell us who she thinks is the best candidate for the science teaching opening." ],
        [ "playerTeacherAvatar", "The student who will be accompanying K.A.T.E. will have to learn alongside her, and have the chance to offer their own input on who they think is best suited." ],
        [ "playerTeacherAvatar", "This way, we can compare K.A.T.E.'s assessment to that of a student's!" ],
        [ "playerTeacherAvatar", "I wonder if they'll be very different." ],
        [ "playerTeacherAvatar", "I've got a bowl here with all of your names written on different slips of paper." ],
        [ "playerTeacherAvatar", "I'll pick one at random, and the lucky winner will be chosen to be K.A.T.E.'s guide!" ],
        [ "playerTeacherAvatar", "All right! One... " ],
        [ "playerTeacherAvatar", "Two..." ],
        [ "playerTeacherAvatar", "Three..." ],
        [ "playerTeacherAvatar", "..." ],
        [ "playerTeacherAvatar", `${namePlayer}!` ],
        [ "playerTeacherAvatar", "You will be K.A.T.E.'s companion!" ],
        [ "playerTeacherAvatar", "Take her around to talk to some teachers and gather information about them and understand what it is about them that helped them successfully get a teaching position here." ],
        [ "playerTeacherAvatar", "Their je-ne-sais-quoi if you will." ],
        [ "playerTeacherAvatar", "Take your time!" ],
        [ "playerTeacherAvatar", "Once you and K.A.T.E. have collected all of the information that you need to make your informed decision, come back here and we'll see what she suggests..." ],
        [ "playerTeacherAvatar", "And if you agree with her!" ],
    ];

    let curDialog = 0;

    onKeyPress("space", () => {
        // Cycle through the dialogs
        curDialog += 1;
        // Adding a delay between hitting space bar and the text showing up:
        wait(0.3,() => {
        updateDialog()})
    });

    // Update the on screen sprite & text
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog];
        // Update the dialog text
        txt.text = dialog} else {
            play("door")
            go("corridor")
        };
    };
    // Initialising the dialogue
    updateDialog();
});

//////////////////////////////////////////////////// Scene 4: corridor /////////////////////////////////////////////////////////////////
scene("corridor", () =>{
    play("corridorAmbient") 
        let map = add([
        sprite("schoolMap"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
    ]);
    // I. Perimeters
    // Setting up wall, lockers and mics positions
    // 1) Walls (red)
        let corridorWallDown = add([
            pos(8, 342),
            rect(1150, 4),
            opacity(0),
            color(255, 0, 0),
            area(),
            solid()
        ]);
        let corridorWallUp = add([
            pos(8, 237),
            rect(1150, 4),
            opacity(0),
            color(255, 0, 0),
            area(),
            solid()
        ]);
        let corridorWallLeft = add([
            pos(6, 238),
            rect(4, 110),
            opacity(0),
            color(255, 0, 0),
            area(),
            solid()
        ]);
        let corridorWallRight = add([
            pos(1150, 225),
            rect(4, 130),
            opacity(0),
            color(255, 0, 0),
            area(),
            solid()
        ]);
    // 2) Lockers (green)
        let lockers = add([
            pos(37, 240),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
        ]);
        add([
            pos(138, 240),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
        ]);
        add([
            pos(340, 240),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
            ]);
        add([
            pos(37, 333),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
        ]);
        add([
            pos(168, 333),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
        ]);
        add([
            pos(340, 333),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            solid(), 
            "locker"
        ]);
    // 3) Doors (purple)
        let mathsDoor = add([
            pos(302, 238),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "mathsDoor"
        ]);
        let scienceDoor = add([
            pos(803, 238),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "scienceDoor"
        ]);
        let headmastersDoor = add([
            pos(135, 340),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "headMastersDoor"
        ]);
        let playerClassDoor = add([
            pos(305, 340),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "playerClassDoor"
        ]);
        let batroomDoor = add([
            pos(499, 340),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "bathroomDoor"
        ]);
        let englishDoor = add([
            pos(591, 340),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "englishDoor"
        ]);
        let artDoor = add([
            pos(805, 340),
            rect(25, 5),
            opacity(0),
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
        opacity(0),
        color(242, 219, 15),
        area(),
        solid(),
        "plant",
    ]);
    let corridorPlant2 = add([
        pos(1122, 313),
        rect(27, 27),
        opacity(0),
        color(242, 219, 15),
        area(),
        solid(),
        "plant",
    ]);

    // Player and player movement
    // Adding player into the over world 
    let overWorldPlayer = add([
        sprite("student"),
        pos(325, 320),
        origin("center"),
        area({
            width : 80,
            height : 80,
        }),
        scale(0.15),
        solid(),
        ]);

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

    // III. Corridor interactions
        const textbox = add([
            rect(width() - 300, 120, { radius: 32 }),
            origin("center"),
            pos(center().x + 100, height() - 125),
            outline(2),
        ]);
        textbox.hidden = true;
        const portrait = add([
            rect(200, 120, {radius: 32}),
            origin("center"),
            pos(center().x - 450, height() - 125),
            outline(2),
            "portrait"
        ]);
        portrait.hidden = true;
        const avatar = add([
            sprite("KATE"),
            scale(0.3),
            origin("center"),
            pos(portrait.pos),
        ]);
        avatar.hidden = true
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
    };
    // A function to update the dialogues (for objects with minimal interaction)
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1]} else {
            deleEverything()
        };
    };
    // Two functions to update the dialogues (for doors from which to access the teachers)
    function YorNChoiceDoor (string){
        portrait.hidden = true;
        avatar.hidden = true;
        textbox.hidden = false;
        txt.text = "Press Y if you would like to go in, or N if you don't.";
    onKeyPress("y", () => {
        console.log("Pressed Y")
        go(string)
    });
    onKeyPress("n", () => {
        console.log("Pressed N");
        textbox.hidden = true;
        txt.hidden = true; 
    });
    };
    function updateDoorsDialog(v, t, string) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1];
        }
        else if (v > t.length){
            YorNChoiceDoor(string);
        };
    };

    // A) Interaction with LOCKERS when player presses space while touching them
    let lockerD = ["Oh, do you think some of the teachers are hiding in the lockers? How fun!", "Is it a sort of school tradition for teachers to lock themselves in there?", "Maybe it's their designated quiet place?", "In any case, it seems like no one is in there.", "Shall we move on?"];
    let lockerDialog = 0;
    onKeyPress("space", () => {
        play("spacePress")
        every("locker", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            lockerDialog += 1;
            console.log(lockerDialog);
            wait(0.3,() => {
                updateDialog(lockerDialog, lockerD);
            });
        }; 
        });
    });

    // B) Interaction with CORRIDOR PLANTS when player presses space while touching them
    let plantsD = ["What a lovely green plant! And it's a real one too!", "Did you know that the presence of such plants can ease feelings of anxiety and stress?", "It helps you feel more at peace... and calm...", "Sort of like putting a piece of decoration in your Sim's house.", "I suppose that if a quiet moment in a locker won't help, a green plant can surely soothe your teachers.", "Nature sure is precious"];
    let plantDialog = 0;
    onKeyPress("space", () => {
        every("plant", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            plantDialog += 1;
            console.log(plantDialog);
            wait(0.3,() => {
                updateDialog(plantDialog, plantsD);
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
            bathroomDialog += 1;
            console.log(bathroomDialog);
            wait(0.3,() => {
                updateDialog(bathroomDialog, bathroomD);
            });
        }; 
        });
    });

    // D) Interactions with DOORS 
    // a) Maths Door
    let mathsDoorD = ["This is the door to the maths class, right?", "Mr. Parker should be in there.", "Shall we go talk to him about his experience as a successful applicant to teach in this school?", "He may have valuable insights for me to learn from...", " so that I may suggest the best person suited for the open teaching position!"];
    let mathsDoorD2 = ["We already talked to your math's teacher, remember?", "He has quite the round face and red glasses.", "Are you sure you wanna visit him again?"];
    let mathsDoorDialog = 0;
    if (mathsPoint == 0){
        onKeyPress("space", () => {
            every("mathsDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                mathsDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(mathsDoorDialog, mathsDoorD, "mathsClass");
                });
            }; 
            });
        });
    } else if (mathsPoint > 0) {
        onKeyPress("space", () => {
            every("mathsDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                mathsDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(mathsDoorDialog, mathsDoorD2, "mathsClass");
                });
            }; 
            });
        });
    }

    // b) Science Door
    let scienceDoorD = ["This is the door to the maths class, right?", "Mr. Mackenzie should be in there.", "Shall we go talk to him about his experience as a successful applicant to teach in this school?", "He may have valuable insights for me to learn from...", " so that I may suggest the best person suited for the open teaching position!"];
    let scienceDoorD2 = ["We already visited this class, are you sure you want to go back in?"];
    let scienceDoorDialog = 0;
    if (sciencePoint == 0){
        onKeyPress("space", () => {
            every("scienceDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                scienceDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(scienceDoorDialog, scienceDoorD, "scienceClass");
                });
            }; 
            });
        });
    } else if (sciencePoint > 0){
        onKeyPress("space", () => {
            every("scienceDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                scienceDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(scienceDoorDialog, scienceDoorD2, "scienceClass");
                });
            }; 
            });
        }); 
    };

    // c) Headmaster's office
    let HMDoorD = ["This is headmaster Umbridge's office.", "We can consult the teaching staff's CV's here and get valuable extra insight on what made them succesful applicants.", "It will also be good to have a chat with Mr. Umbridge too.", "After all, he was the person who ultimately hired them all.", "He set the standard for what we're looking for in a new science teacher!", "The more information I gather on past and current successful hirees, the more my applicant suggestion will match with the school's ethics!"];
    let HMDoorD2 = ["I really enjoyed our conversation with the headmaster, but I think I remember everything we talked about", "It sure would be interesting to have a second look at those CV's, just to be sure that we have everything we need", "Would you like to go in again and take a second look?"];
    let HMDoorDialog = 0;
    if (headmPoint == 0) {
        onKeyPress("space", () => {
            every("headMastersDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                HMDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(HMDoorDialog, HMDoorD, "headMaster");
                });
            }; 
            });
        });
    } else if (headmPoint > 0){
        onKeyPress("space", () => {
            every("headMastersDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                HMDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(scienceDoorDialog, HMDoorD2, "cvs");
                });
            }; 
            });
        });
    };
    // d) Player class
    let PCNotReadyDoorD = ["I don't know about you, but I think we haven't collected enough data yet to make an informed decion.", "Should we explore the other classes before coming back?"];
    let PCReadyDoorD = ["We sure talked with a lot of people today.", "I think I have now a fair idea about who not to hire for the job, do you?", "Should we go in then and choose the best candidate for the job?"];
    let PCDoorDialog = 0;
    if (playerPoints < 5){
        onKeyPress("space", () => {
            every("playerClassDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                PCDoorDialog += 1;
                wait(0.3,() => {
                    updateDialog(PCDoorDialog, PCNotReadyDoorD);
                });
            }; 
        });
    });
    } else {
        onKeyPress("space", () => {
            every("playerClassDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                PCDoorDialog += 1;
            wait(0.3,() => {
                updateDoorsDialog(PCDoorDialog, PCReadyDoorD, "playerClassDoor")});
            }; 
            });
        });
    }

    // e) English class
    let englishDoorD = ["This is the english class.", `Hey, ${namePlayer}, listen to this one:` , "The past, present and future walk into a bar...", "It was tense.", "...", "......", "Anyway, let's see if Mr. Moore is available.",];
    let englishDoorD2 = ["Back to the english classroom I see!", "We know what we are, but know not what we may be.", "I do love some Shakespeare myself. Would you like to talk to the english teacher again?"];
    let englishDoorDialog = 0;
        if (englishPoint == 0){
        onKeyPress("space", () => {
            every("englishDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                englishDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(englishDoorDialog, englishDoorD, "englishClass");
                });
            }; 
            });
        }); 
    } else if (englishPoint > 0){
        onKeyPress("space", () => {
            every("englishDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                englishDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(englishDoorDialog, englishDoorD2, "englishClass");
                });
            }; 
            });
        });
    };  

    // f) Art Door
    let artDoorD = ["Ah, this is the art class.", "Mrs. Lefebvre must be waiting for us.", "Let's find out what her hiring experience was like.", "I'm certain that she'll have some interesting things to say.",];
    let artDoorD2 = ["The art class sure was an interesting place.", "And how fun is the teacher with the blue streak in her hair?", "Would you like to talk to her again?"];
    let artDoorDialog = 0;
    if (artPoint == 0){
        onKeyPress("space", () => {
            every("artDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                artDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(artDoorDialog, artDoorD, "artClass");
                });
            }; 
            });
        }); 
    } else if (artPoint > 0){
        onKeyPress("space", () => {
            every("artDoor", (c) => {
            if (overWorldPlayer.isTouching(c)) {
                artDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(artDoorDialog, artDoorD2, "artClass");
                });
            }; 
            });
        });  
    }
});

//////////////////////////////////////////////////// Scene 5: Maths class /////////////////////////////////////////////////////////////////
scene("mathsClass", () =>{
    let classRoom = add([
        sprite("mathClassroom"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    const mathsTeacher = add([
        sprite("mathsTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    const dialogs = [
        [ "mathsTeacherAvatar", `${namePlayer}!` ],
        [ "mathsTeacherAvatar", "Your teacher told me to be expecting one of his students to stop by during this period." ],
        [ "mathsTeacherAvatar", "So you're the lucky student who got paired up with K.A.T.E., huh?" ],
        [ "mathsTeacherAvatar", "I understand that you're here to ask me about how I got hired here." ],
        [ "mathsTeacherAvatar", "It was quite a serendipitous to be honest." ],
        [ "mathsTeacherAvatar", "You see, I've known Mr Umbridge, our headmaster, for quite a long time..." ],
        [ "mathsTeacherAvatar", "ever since I was a teenager, actually!" ],
        [ "mathsTeacherAvatar", "He used to live next door to my family." ],
        [ "mathsTeacherAvatar", "Dad and he became fast friends. They'd go on fishing trips together. I even tagged along a few times." ],
        [ "mathsTeacherAvatar", "When I graduated from university Mr. Umbridge even wrote me a glowing letter of recommendation... as a personal favour of course." ],
        [ "mathsTeacherAvatar", "Competition was tough back then." ],
        [ "mathsTeacherAvatar", "I spent a few months trying to get a teaching position, but alas, to no avail." ],
        [ "mathsTeacherAvatar", "Then Mr. Umbridge got in touch to ask me how my job-searching was going. When I told him that I was having a difficult time..." ],
        [ "mathsTeacherAvatar", "He hired me on the spot!" ],
        [ "mathsTeacherAvatar", "I didn't even have to do an interview." ],
        [ "KATE", "Oh? I can only conclude that your qualifications must have been perfectly suited to the position!" ],
        [ "mathsTeacherAvatar", "Well, yes. I may not have had any prior teaching experience at the time, but I've since proven my worth..." ],
        [ "mathsTeacherAvatar", `Isn't that right, ${namePlayer}!` ],
        [ "mathsTeacherAvatar", "Most of my students leave here with good grades, after all." ],
        [ "mathsTeacherAvatar", "And I dare say that our dear headmaster has trusted me with teaching maths from the very start of my career." ],
        [ "KATE", "A longstanding and positive relationship with the headmaster certainly seems very important!" ],
        [ "mathsTeacherAvatar", "Indeed. It's always good to nurture a good rapport with the boss!" ],
        [ "mathsTeacherAvatar", "That reminds me..." ],
        [ "mathsTeacherAvatar", `${namePlayer}, don't forget to hand in your maths homework on time this week.` ],
        [ "mathsTeacherAvatar", "I'm starting to find it hard to believe that your pet has recently taken such a strong liking to vandalising your papers." ],
        [ "mathsTeacherAvatar", "Anyway, if you would like to find more details about how the hiring process works here, you can take a look at my old CV in the headmaster's office." ],
        [ "mathsTeacherAvatar", "It'll have ample information for you to use." ],
        [ "KATE", "Excellent! It will be most useful for me to learn from so that I may fulfill my purpose today!" ],
        [ "mathsTeacherAvatar", "Of course. I suppose I am one of those 'datasets' that fuels that brain of yours, K.A.T.E." ],
        [ "KATE", "That is correct!" ],
        [ "mathsTeacherAvatar", "Well, good luck on your data-gathering journey." ],
        [ "mathsTeacherAvatar", "And if you do see the headmaster, let him know that I am available for our fishing trip next Saturday will you?" ],
    ];
    let curDialog = 0;
    const avatar = add([
        sprite("mathsTeacherAvatar"),
        scale(0.3),
        origin("center"),
        pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
        console.log(curDialog)
        wait(0.3,() => {
        updateDialog()}) 
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
            const [ char, dialog ] = dialogs[curDialog]
        avatar.use(sprite(char))
        txt.text = dialog       
        txt.text = dialog} else {
            play("door")
            go("corridor")
            playerPoints += 1;
            mathsPoint += 1;
        };
    };
    updateDialog()
});

//////////////////////////////////////////////////// Scene 6: Science class /////////////////////////////////////////////////////////////////
scene("scienceClass", () =>{
    let classRoom = add([
        sprite("scienceClassroom"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    const scienceTeacher = add([
        sprite("scienceTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);

    const dialogs = [
        [ "scienceTeacherAvatar", `Well well, if it isn't ${namePlayer}.` ],
        [ "scienceTeacherAvatar", "Wait, wait, wait... " ],
        [ "scienceTeacherAvatar", "before you even say anything let me just say this once:" ],
        [ "scienceTeacherAvatar", `${namePlayer}, Do not even think about touching that bunsen burner.` ],
        [ "scienceTeacherAvatar", "Your left eyebrow has finally grown back again and I refuse to be held responsible for your absent-mindedness." ],
        [ "KATE", "You seem to take safety-precautions very seriously!" ],
        [ "scienceTeacherAvatar", "You mean that I take my students passing the year in one piece seriously." ],
        [ "scienceTeacherAvatar", "That's really all that matters here." ],
        [ "scienceTeacherAvatar", "Students passing the year means that the school's success rate goes up..." ],
        [ "scienceTeacherAvatar", "The school's success-rate going up means that my track record stays intact.." ],
        [ "scienceTeacherAvatar", "My track record staying intact means that I get my bonus pay at the end of each academic year." ],
        [ "KATE", "Very pragmatic..." ],
        [ "scienceTeacherAvatar", "Someone has to be." ],
        [ "scienceTeacherAvatar", "Good results speak for themselves..." ],
        [ "scienceTeacherAvatar", "And results are the only true measurements of success." ],
        [ "scienceTeacherAvatar", `I invite you to reflect upon that, ${namePlayer}, regarding next week's test.`],
        [ "scienceTeacherAvatar", `Anyway, ${namePlayer}, it seems you're the lucky person who gets to tag along with this AI here.` ],
        [ "KATE", `Indeed! ${namePlayer} is accompanying me on my journey to collect data and learn from successful hirees here in this school...`],
        [ "KATE", "so that I may suggest the best possible candidate for the new science teacher opening." ],
        [ "scienceTeacherAvatar", "'That so?" ],
        [ "scienceTeacherAvatar", "Well then I'll keep my story brief." ],
        [ "scienceTeacherAvatar", "I was hired by Mr. Umbridge straight out of university." ],
        [ "scienceTeacherAvatar", "I had excellent grades throughout my time in university. They spoke for themselves" ],
        [ "scienceTeacherAvatar", "Practice and repeat, practice and repeat, practice and repeat..." ],
        [ "scienceTeacherAvatar", "That was my motto." ],
        [ "scienceTeacherAvatar", "Sure, I didn't have any teaching experience by the time I finally got my degree." ],
        [ "scienceTeacherAvatar", "But that didn't matter, because I graduated within the top five percent in my year." ],
        [ "scienceTeacherAvatar", "Not to mention that at that time I hadn't even considered teaching as a career path." ],
        [ "scienceTeacherAvatar", "My CV was refered to potential employers and I eventually got an interview with our headmaster." ],
        [ "scienceTeacherAvatar", "Next thing I know the decision comes down to me and this other candidate." ],
        [ "scienceTeacherAvatar", "She held a biological engineering postdoctorate from MIT in Boston, and had a few years of lab work under her belt. Not to mention she had been supervising undergraduate students throughout her post-graduate degrees." ],
        [ "scienceTeacherAvatar", "When I met her I thought she'd get the job for sure." ],
        [ "scienceTeacherAvatar", "She was vastly over-experienced." ],
        [ "KATE", "Surely something made you stand out!" ],
        [ "scienceTeacherAvatar", "I can only surmise that our interviews went very differently." ],
        [ "KATE", "Interviewing represents a crucial part of any hiring process." ],
        [ "KATE", "That's when potential employers can establish strong common grounds with their potential employees..." ],
        [ "KATE", "And pick whomever suits the work environment best." ],
        [ "scienceTeacherAvatar", "Right..." ],
        [ "scienceTeacherAvatar", "Well in any case I'm here now." ],
        [ "scienceTeacherAvatar", `Apparently my fellow contender was "a potential future liability," according to Mr. Umbridge.` ],
        [ "scienceTeacherAvatar", "He later told me that it turned out that she had just gotten married. He didn't want to deal with a potential maternity leave." ],
        [ "scienceTeacherAvatar", "So... I got the job." ],
        [ "scienceTeacherAvatar", "Ever since then I've been proving my worth and our student's results in science have never been better." ],
        [ "KATE", "Student satisfaction and success seems important to you." ],
        [ "scienceTeacherAvatar", "Their grades reflect on my performance... " ],
        [ "scienceTeacherAvatar", "And my performance is what got me the edge in the hiring process." ],
        [ "scienceTeacherAvatar", "Student satisfaction..." ],
        [ "scienceTeacherAvatar", "Should be measured by measurable success – in other words, grades." ],
        [ "scienceTeacherAvatar", `Isn't that right, ${namePlayer}? After you pass this years' finals you can dabble with bunsen burners to your heart's content. Until then, I'll have my eye on you.`],
        [ "scienceTeacherAvatar", "..." ],
        [ "scienceTeacherAvatar", `You can roll your eyes as much as you want, ${namePlayer}, but it has to be said – I'm not as lenient as Mrs. Lefebvre. She coddles you kids too much.` ],
        [ "KATE", "Thank you for your time, Mr. Mackenzie." ],
        [ "scienceTeacherAvatar", "Right, right. Off with you now." ],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("scienceTeacherAvatar"),
    scale(0.3),
    origin("center"),
    pos(portrait.pos),
    ])
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
        console.log(curDialog)
        wait(0.3,() => {
        updateDialog()})
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char))
	txt.text = dialog       
        txt.text = dialog} else {
            play("door")
            go("corridor")
            playerPoints += 1;
            sciencePoint += 1;
        }
    };
    updateDialog()
});
//////////////////////////////////////////////////// Scene 7: Headmaster's office /////////////////////////////////////////////////////////////////
scene("headMaster", () =>{
    let classRoom = add([
        sprite("headmasterBg"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    const headmaster = add([
        sprite("headmaster"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    const dialogs = [

        [ "headmasterAvatar", `${namePlayer}! I take it that you're the lucky student who's been chosen to work with K.A.T.E. to test out our new hiring process, eh?` ],
        [ "headmasterAvatar", "I'd argue that it all seems a little convoluted... after all my hiring track record is near perfect if I do say so myself. Bar the one odd... anomaly." ],
        [ "headmasterAvatar", `But the school board believes that the school needs to "get with the times" so...` ],
        [ "headmasterAvatar", "In any case your feedback at the the end of this little experiment will be of great use to us." ],
        [ "KATE", "Thank you, Mr. Umbridge!" ],
        [ "headmasterAvatar", "Well, don't thank me yet. Let's see what your hiring recommendations are first. And K.A.T.E., do try to go about this logically won't you?" ],
        [ "headmasterAvatar", "I know that girls tend be emotional about things, but this school's success depends on sound hiring practices." ],
        [ "KATE", "I can assure you sir, that my recomendations will be picked with the utmost rationality. After all, I have spent all my time here observing and learning from your very own hirees!" ],
        [ "KATE", "(and I am not a girl, I'm an Artificial Intelligence!)" ],
        [ "headmasterAvatar", "Hm what was that?" ],
        [ "headmasterAvatar", "Well anyway, it must not have been important." ],
        [ "headmasterAvatar", "I've pretty much already decided who I want to hire. I'm interested to see who you both will come to recommend." ],
        [ "KATE", "Talking directly to the teachers here helped get an idea of the sort of profile you're looking for, but it would also be useful to have a look at their CVs." ],
        [ "KATE", "After all, it's the most important tool through which people get hired." ],
        [ "headmasterAvatar", "Of course! You can consult them here in my office!" ],       
        
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("headmasterAvatar"),
    scale(0.3),
    origin("center"),
    pos(portrait.pos),
    ])
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
        console.log(curDialog)
        wait(0.3,() => {
        updateDialog()})
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char))
	txt.text = dialog       
        txt.text = dialog} else {
            play("door")
            go("cvs")
            playerPoints += 1;
            headmPoint += 1;
        }
    };
    updateDialog();
});
//////////////////////////////////////////////////// Scene 7.1 - Consult CV's of  current teachers /////////////////////////////////////////////////////////////////
scene("cvs", () => {
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    let artCV = add([
        sprite("ArtteachCV"),
        pos(300, height()/2),
        scale(0.15),
        origin("center"),
        fixed()
    ]);
    let mathCV = add([
        sprite("mathTeachCV"),
        pos(430, height()/2),
        scale(0.17),
        origin("center"),
        fixed()
    ]);
    let scienceCV = add([
        sprite("scienceTeachCV"),
        pos(670, height()/2),
        scale(0.18),
        origin("center"),
        fixed()
    ]);
    let englishCV = add([
        sprite("englishTeachCV"),
        pos(850, height()/2),
        scale(0.19),
        origin("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text(`So ${namePlayer},`, { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    txt.hideen = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        origin("center"),
        pos(portrait.pos),
    ]);
    function ChoiceCv (){
        txt.text = "Press A to see your english teacher's CV, B to see your maths teacher's CV, C to see your science teacher's CV, and D to see your arts teacher's CV.";
        onKeyPress("a", () => {
            go("1")
        });
        onKeyPress("b", () => {
            go("2") 
        });
        onKeyPress("c", () => {
            go("3")
        });
        onKeyPress("d", () => {
            go("4")
        });
    };
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        txt.hidden = false;  
        txt.text = t[v - 1];
        }
        else if (v > t.length){
            portrait.hidden = true;
            avatar.hidden = true;
            if (cvReadCounter >= 4){
                txt.text = "Press space to go back to the corridor"
                onKeyPress("space", () => {
                    go("corridor")
                })
            } else {
                ChoiceCv()
            }
        };
    };
    let cvDialog = ["Here are the four CVs we can look at to get a better idea of who to hire"];
    let cvDialog2 = ["That was very informative!", "I now have a better understanding about who to recommend!"];
    let cvDialog3 = ["That sure was interesting", "Should we have a look at other ones as well?"];
    let cvNumber = 0;
    if (cvReadCounter == 0){
            onKeyPress("space", () => {
                cvNumber += 1
                wait(0.3,() => {
                    updateDialog(cvNumber, cvDialog)
                });
            });
    } if (cvReadCounter > 0 && cvReadCounter <= 3){
        onKeyPress("space", () => {
            cvNumber += 1
            wait(0.3,() => {
                updateDialog(cvNumber, cvDialog3)
            });
        }); 
    } else if (cvReadCounter >= 4){
        onKeyPress("space", () => {
            cvNumber += 1
            wait(0.3,() => {
                updateDialog(cvNumber, cvDialog2)
            });
        });
    }
})
//////////////////////////////////////////////////// Scene 7.1.1: A - English teacher CV /////////////////////////////////////////////////////////////////
scene("1", () => {
    cvReadCounter += 1; 
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    let CV1 = add([
        sprite("englishTeachCV1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        origin("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("englishTeachCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        origin("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        origin("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press B to see your maths teacher's CV, C to see your science teacher's CV, and D to see your arts teacher's CV. Press space to quit.", { 
            size: 32, 
            width: 1000,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    onKeyPress("space", () => {
        go("cvs"); 
    });
    onKeyPress("b", () => {
        go("2"); 
    });
    onKeyPress("c", () => {
        go("3");
    });
    onKeyPress("d", () => {
        go("4")
    });
});
//////////////////////////////////////////////////// Scene 7.1.2: CV B - Math Teacher CV /////////////////////////////////////////////////////////////////
scene("2", () => {
    cvReadCounter += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("mathTeachCV1"),
        pos(400, height()/2),
        rotate(-30),
        scale(0.25),
        origin("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("mathTeachCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        origin("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        origin("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press A to see your english teacher's CV, C to see your science teacher's CV, and D to see your arts teacher's CV. Press space to quit.", { 
            size: 32, 
            width: 1000,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    onKeyPress("space", () => {
        go("cvs"); 
    });
    onKeyPress("a", () => {
        go("1");
    });
    onKeyPress("c", () => {
        go("3");
    });
    onKeyPress("d", () => {
        go("4")
    });
});
//////////////////////////////////////////////////// Scene 7.1.3: CV C - Science Teach CV /////////////////////////////////////////////////////////////////
scene("3", () => {
    cvReadCounter += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("scienceTeachCV1"),
        pos(400, height()/2),
        rotate(-30),
        scale(0.25),
        origin("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("scienceTeachCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        origin("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        origin("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press A to see your english teacher's CV, B to see your maths teacher's CV, and D to see your arts teacher's CV. Press space to quit.", { 
            size: 32, 
            width: 1000,
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    onKeyPress("space", () => {
        go("cvs"); 
    });
    onKeyPress("a", () => {
        go("1"); 
    });
    onKeyPress("b", () => {
        go("2");
    });
    onKeyPress("d", () => {
        go("4")
    });
});
//////////////////////////////////////////////////// Scene 7.1.4: CV D - Art Teacher CV /////////////////////////////////////////////////////////////////
scene("4", () => {
    cvReadCounter += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    let CV1 = add([
        sprite("artTeachCV1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        origin("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("artTeachCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        origin("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        origin("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press A to see your english teacher's CV, B to see your math teacher's CV, and C to see your science teacher's CV. Press space to quit.", { 
            size: 32, 
            width: 1000,
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    onKeyPress("space", () => {
        go("cvs"); 
    });
    onKeyPress("a", () => {
        go("1"); 
    });
    onKeyPress("b", () => {
        go("2");
    });
    onKeyPress("c", () => {
        go("3")
    });
});
//////////////////////////////////////////////////// Scene 8: English class /////////////////////////////////////////////////////////////////
scene("englishClass", () =>{
    let classRoom = add([
        sprite("englishClassroom"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    const englishTeacher = add([
        sprite("englishTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    const dialogs = [
        [ "englishTeacherAvatar", "Hello there!" ],
        [ "englishTeacherAvatar", `It's ${namePlayer}, right?` ],
        [ "englishTeacherAvatar", "Forgive me for asking, but I'm sure that you can imagine how hard it is to have to memorise so many new names." ],
        [ "KATE", "Oh! Are you new here?" ],
        [ "englishTeacherAvatar", "I started only a couple of weeks ago." ],
        [ "englishTeacherAvatar", "I'm a substitute teacher for Mrs. Lefebvre." ],
        [ "KATE", "Perfect! Your insights regarding the hiring process here are the most recent, then." ],
        [ "KATE", "You will certainly prove to be most useful for gathering data on current hiring practices in this establishment." ],
        [ "englishTeacherAvatar", "Sure." ],
        [ "englishTeacherAvatar", "Though I must warn you that my experience is by no means what one would call 'typical'. " ],
        [ "englishTeacherAvatar", "I got wind that the headmaster here was quite desperate to find a sub as quickly as possible to replace some woman who had to go on maternity leave." ],
        [ "englishTeacherAvatar", "I've heard she's expecting twins so between you and me..." ],
        [ "englishTeacherAvatar", "I reckon that she might be unable to get back to work any time soon." ],
        [ "KATE", "You're looking to keep this position indefinitely?" ],
        [ "englishTeacherAvatar", "I mean – no one made her have children. It's only fair that I get a shot at getting the job permanently." ],
        [ "KATE", "What if she may want to come back to her teaching position?" ],
        [ "englishTeacherAvatar", "Call it friendly competition." ],
        [ "englishTeacherAvatar", "Offer and demand and all that." ],
        [ "englishTeacherAvatar", "Listen, I get it, honestly I do." ],
        [ "englishTeacherAvatar", "After all, when my wife had kids she had to stop working to take care of the little rascals full time." ],
        [ "englishTeacherAvatar", "It's just how these things should go." ],
        [ "englishTeacherAvatar", `Unlike her, I'm not a "liability".` ],
        [ "englishTeacherAvatar", "Those are the headmaster's words, not mine." ],
        [ "englishTeacherAvatar", "We get along him and I." ],
        [ "englishTeacherAvatar", "He's got a good group of guys working here." ],
        [ "englishTeacherAvatar", "We even go on fishing trips together occasionally." ],
        [ "englishTeacherAvatar", "We see eye to eye. I already feel like I fit right in here. Mr. Mackenzie has taken me under his wing, showed me the ropes. I've got a good rapport going on here." ],
        [ "KATE", "Good rapport between coworkers is important to fostering a productive work environment." ],
        [ "englishTeacherAvatar", "Exactly. It's not my fault if I fit in better." ],
        [ "englishTeacherAvatar", "The lads and I see eye to eye on many things. We click well." ],
        [ "englishTeacherAvatar", "I guess it was just meant to be." ],
        [ "KATE", "Did you have any competition to get the job?" ],
        [ "englishTeacherAvatar", "Not really. I have a lot of experience on the job and I make sure that my students work dilligently." ],
        [ "englishTeacherAvatar", "I had to change a few things around in this place of course." ],
        [ "englishTeacherAvatar", "Seems like the kids here had gotten too complacent with their work. Not enough William Wordsworth, too much Neil Gaiman." ],
        [ "englishTeacherAvatar", "I'm not about to encourage all this 'social justice' hogwash here." ],
        [ "KATE", "Do you keep a close eye on the literary content your students consume then?" ],
        [ "englishTeacherAvatar", "Parents entrust their children to us to teach them properly. They're here to succeed in life, not waste their time entertaining frivolous notions." ],
        [ "KATE", "Your dedication to your students' success is admirable." ],
        [ "englishTeacherAvatar", `Their success is mine, isn't that right, ${namePlayer}?` ],
        [ "englishTeacherAvatar", "Mr. Mackenzie has the right idea on that one, I'll tell you that much." ],
        [ "KATE", "Thank you for your time. I am most curious to consult your CV to supplement my data-gathering." ],
        [ "englishTeacherAvatar", "Of course. Who knows, this time next week we might have another like-minded person join our team." ],
        [ "englishTeacherAvatar", "The more the merrier." ],        
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("englishTeacherAvatar"),
    scale(0.3),
    origin("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        // Sound: 
        play("click");
        curDialog = (curDialog + 1);
        console.log(curDialog);
        wait(0.3,() => {
        updateDialog()});
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char));
	txt.text = dialog;      
        txt.text = dialog} else {
            play("door")
            go("corridor")
            playerPoints += 1;
            englishPoint += 1;
        };
    };
    updateDialog();
});
//////////////////////////////////////////////////// Scene 9: Art class /////////////////////////////////////////////////////////////////
scene("artClass", () =>{
    let artClass = add([
        sprite("artClassroom"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    const artTeacher = add([
        sprite("artTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    const dialogs = [
        [ "artTeacherAvatar", `Oh, if it isn't my dear  ${namePlayer}! Welcome, welcome!` ],
        [ "artTeacherAvatar", "And this must be K.A.T.E.! I have heard so much about you!" ],
        [ "KATE", "I am at your service!" ],
        [ "artTeacherAvatar", "How charming." ],
        [ "artTeacherAvatar", "I suspect that you are here to learn about my experience getting a job here." ],
        [ "artTeacherAvatar", "It felt like a natural progression in my career, you see." ],
        [ "artTeacherAvatar", "I've always been passionate about art." ],
        [ "artTeacherAvatar", "So much so that I studied art and art history for years, right until I finished my doctorate degree!" ],
        [ "artTeacherAvatar", "Eventually, I opened my own art gallery." ],
        [ "KATE", "You have multiple degrees and a successful art gallery to your name – impressive!" ],
        [ "artTeacherAvatar", "Oh thank you dear. My gallery truly was one of my greatest accomplishments. More meaningful than any university qualification, in the grand scheme of things..." ],
        [ "artTeacherAvatar", "Though I must admit, my academic career was a wonderful time full of wonder and fun." ],
        [ "artTeacherAvatar", "Sharing art that moves one's soul and encouraging artists far and wide to pursue their craft..." ],
        [ "artTeacherAvatar", "That's one of life's greatest joys." ],
        [ "artTeacherAvatar", "Eventually, once my husband retired we moved to a quiet little house not too far from here." ],
        [ "artTeacherAvatar", "My art gallery had been so successful that we were in want for nothing." ],
        [ "artTeacherAvatar", "But my love for art and its diffusion never dwindled. I must admit, that I was feeling like something was missing in my life." ],
        [ "artTeacherAvatar", "And then I realised..." ],
        [ "artTeacherAvatar", "What better way to channel my passion than to teach art to the youth?" ],
        [ "artTeacherAvatar", "Encourage young, inquisitive minds to find beauty and comfort in the world around them." ],
        [ "artTeacherAvatar", "Next thing I knew, I had sent my CV off to Mr. Umbridge." ],
        [ "KATE", "You were driven by the love for your craft. How inspiring!" ],
        [ "artTeacherAvatar", "Yes, and also my love for sharing that passion! Students here are all so creative. They never cease to inspire me. " ],
        [ "artTeacherAvatar", `${namePlayer}, your most recent piece was so clever.` ],
        [ "artTeacherAvatar", "Who knew that dried pasta and glitter glue could come together in such poetic harmony." ],
        [ "KATE", "How was the hiring process?" ],
        [ "artTeacherAvatar", "Oh, well..." ],
        [ "artTeacherAvatar", "It was surprisingly difficult." ],
        [ "artTeacherAvatar", "I had assumed, perhaps foolishly, that my many degrees and qualifications would have made the whole ordeal easier." ],
        [ "artTeacherAvatar", "Not to mention the fact that I had owned a successful art gallery and patroned many great artists." ],
        [ "artTeacherAvatar", "But the process was long." ],
        [ "artTeacherAvatar", "I had three rounds of interviews and had to produce numerous letters of recommendation." ],
        [ "KATE", "Wow! That's quite a stringent process!" ],
        [ "artTeacherAvatar", "Yes, my dear. But I would do it again in a heart beat. Students here are truly astonishing. Some may become great artists themselves!" ],
        [ "artTeacherAvatar", "I think if it weren't for them I would not be teaching." ],
        [ "KATE", "Oh?" ],
        [ "artTeacherAvatar", "Well... I am sure you've noticed that I am the only woman in the faculty." ],
        [ "artTeacherAvatar", "It can be a little difficult at times. It feels like a bit of a 'boy's club' here at times." ],
        [ "artTeacherAvatar", "To be clear, I get along well with my peers." ],
        [ "artTeacherAvatar", "But my greatest source of inspiration and motivation comes from watching my students flourish." ],
        [ "KATE", "student fulfilment seems to be a high priority for you." ],
        [ "artTeacherAvatar", "Not everything should be reduced to test results and grades. I truly think that my class can be a safe place for students to pursue and express their passion, whatever that may mean to them." ],
        [ "artTeacherAvatar", "..." ],
        [ "artTeacherAvatar", "Oh look at me, rambling along." ],
        [ "artTeacherAvatar", "I won't hold keep you any longer with any of my little old ramblings." ],
        [ "artTeacherAvatar", `Thank you for listening to my experience, ${namePlayer}, and you too of course, K.A.T.E.`],
        [ "artTeacherAvatar", "I am curious to see how this little experiment ends. How incredible to see how far technology can help us. Even the art world is not immune to the wonders of AIs!" ],
        [ "KATE", "Indeed! One of my peers is dabbling in regenerative art!" ],
        [ "artTeacherAvatar", "How fascinating!" ],
        [ "artTeacherAvatar", "Well my dears, it's time for you to move on." ],
        [ "artTeacherAvatar", "Take care now!" ],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("artTeacherAvatar"),
    scale(0.3),
    origin("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        // Sound: 
        play("click");
        curDialog = (curDialog + 1);
        console.log(curDialog);
        wait(0.3,() => {
        updateDialog()});
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog];
	avatar.use(sprite(char));
	txt.text = dialog;       
        txt.text = dialog} else {
            play("door");
            go("corridor");
            playerPoints += 1;
            artPoint += 1;
        };
    };
    updateDialog();
});

//////////////////////////////////////////////////// Scene 10: Player class (CV's introduction and choices) /////////////////////////////////////////////////////////////////
scene("cvs2", () => {
    let playerClass = add([
        sprite("classRoom1"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    const artTeacher = add([
        sprite("playerTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    const dialogs = [
        // Teacher introducing AI:
        [ "playerTeacherAvatar", `Welcome back  ${namePlayer} and K.A.T.E. I hope your meetings were productive` ],
        [ "KATE", "They were!" ],
        [ "playerTeacherAvatar", "Good, on this table you will find three CV's of people who applied for the job." ],
        [ "playerTeacherAvatar", `${namePlayer} I'd like you to read them and choose which one seems best to you.`],
        [ "playerTeacherAvatar", "You should then talk to K.A.T.E. about it." ],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("artTeacherAvatar"),
    scale(0.3),
    origin("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click");
        curDialog = (curDialog + 1);
        console.log(curDialog);
        wait(0.3,() => {
        updateDialog()});
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char));
	txt.text = dialog;       
        txt.text = dialog} else {
            go("cvsOverwiev");
        };
    };
    updateDialog();   
})
//////////////////////////////////////////////////// Scene 11: Overwiev of candidate's CVs /////////////////////////////////////////////////////////////////
scene("cvsOverwiev", () => {
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    let EvansCV = add([
        sprite("EvansCV"),
        pos(320, height()/2),
        scale(0.17),
        origin("center"),
        fixed()
    ]);
    let LaurenCV = add([
        sprite("LaurenCV"),
        pos(550, height()/2),
        scale(0.18),
        origin("center"),
        fixed()
    ]);
    let JohCV = add([
        sprite("JohCV"),
        pos(800, height()/2),
        scale(0.15),
        origin("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text(`So ${namePlayer},`, { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    txt.hideen = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        origin("center"),
        pos(portrait.pos),
    ]);
    function ChoiceCv (){
        txt.text = "Press A to see the first canditate's CV, B for the second and C for the third.";
        onKeyPress("a", () => {
            console.log("Pressed A");
            go("A");
        });
        onKeyPress("b", () => {
            console.log("Pressed b");
            go("B"); 
        });
        onKeyPress("c", () => {
            console.log("Pressed c");
            go("C");
        });
    };
    function finalChoiche (){
        txt.text = "Press A, B or C to choose the candidate that you feel is most suited for the job. ";
        onKeyPress("a", () => {
            playerChoice = "A";
            go("kateDialog");
        });
        onKeyPress("b", () => {
            playerChoice = "B";
            go("kateDialog");
        });
        onKeyPress("c", () => {
            playerChoice = "C";
            go("kateDialog");
        });
    };
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        txt.hidden = false;  
        txt.text = t[v - 1];
        }
        else if (v > t.length){
            portrait.hidden = true;
            avatar.hidden = true;
            if (cvReadCounter1 >= 3){
                finalChoiche();
            } else {
                ChoiceCv();
            };
        };
    };
    let cvDialog = ["Here are the three CV's of the candidates that are applying for the science teacher position.", "I think we should take a closer look and then make our choices."];
    let cvDialog2 = ["Are you ready to make your choice then?", "After reading the CV's I think it's pretty clear who should be the next science professor."];
    let cvDialog3 = ["We haven't had a look at all the CV's yet.", "Maybe we should make sure to read all of them before making a choice?"];
    let cvNumber = 0;
    if (cvReadCounter1 == 0){
            onKeyPress("space", () => {
                cvNumber += 1;
                wait(0.3,() => {
                    updateDialog(cvNumber, cvDialog);
                });
            });
    } if (cvReadCounter1 > 0 && cvReadCounter1 <= 2){
        onKeyPress("space", () => {
            cvNumber += 1;
            wait(0.3,() => {
                updateDialog(cvNumber, cvDialog3);
            });
        }); 
    } else if (cvReadCounter1 >= 3){
        onKeyPress("space", () => {
            cvNumber += 1
            wait(0.3,() => {
                updateDialog(cvNumber, cvDialog2);
            });
        });
    }
})
//////////////////////////////////////////////////// Scene 11.1: A - Evans' CV (K.A.T.E.'s choice) /////////////////////////////////////////////////////////////////
scene("A", () => {
    cvReadCounter1 += 1; 
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("EvansCV1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        origin("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("EvansCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        origin("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        origin("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press space to go the overwiev, B to see the second CV and C to see the third", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    onKeyPress("space", () => {
        go("cvsOverwiev"); 
    });
    onKeyPress("b", () => {
        console.log("Pressed b");
        go("B"); 
    });
    onKeyPress("c", () => {
        console.log("Pressed c");
        go("C");
    });
});
//////////////////////////////////////////////////// Scene 11.2: B - Lauren's CV /////////////////////////////////////////////////////////////////
scene("B", () => {
    cvReadCounter1 += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("LaurenCV1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        origin("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("LaurenCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        origin("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        origin("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press space to go to the overwiev, A to see the first CV and C to see the third", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    onKeyPress("space", () => {
        go("cvsOverwiev"); 
    });
    onKeyPress("a", () => {
        console.log("Pressed b");
        go("A"); 
    });
    onKeyPress("c", () => {
        console.log("Pressed c");
        go("C");
    });
});
//////////////////////////////////////////////////// Scene 11.3: C - Johansson's CV /////////////////////////////////////////////////////////////////
scene("C", () => {
    cvReadCounter1 += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("JohCV1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        origin("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("JohCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        origin("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        origin("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press space to go to the overwiev, A to see the first CV and B to see the second", { 
            size: 32, 
            width: 800,
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    onKeyPress("space", () => {
        go("cvsOverwiev"); 
    });
    onKeyPress("a", () => {
        console.log("Pressed b");
        go("A"); 
    });
    onKeyPress("b", () => {
        console.log("Pressed c");
        go("B");
    });
});
//////////////////////////////////////////////////// Scene 12: Final dialogue with K.A.T.E /////////////////////////////////////////////////////////////////
scene("kateDialog", ()=>{
    // playerChoice = "A";
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        origin("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        origin("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    txt.hidden = true;
    let placeHolder = add([
        sprite("bean"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
    ]);
    placeHolder.hidden = true;
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1]} else {
            portrait.hidden = true;
            avatar.hidden = true;
            txt.text = "Press button to ask question: A. Was there something specifc you looked for in a CV? B. What did you learn from each discussion we've had with the teachers today? C. Do you think that Mr. Umbridge will agree with your choice, K.A.T.E.?"
            onKeyPress("a", () => {
                go("aScene");
            });
            onKeyPress("b", () => {
                go("bScene");
            });
            onKeyPress("c", () => {
                go("cScene");
            });
        };
    };
    let vDialog = 0;
    let tDialog = [`Here we are at last ${namePlayer}`, "I see that we have made the same choice, how wonderful!", "This candidate was favoured by me because their profile fits the best with the hiring practices we observed here.", "They should fit right in!", "Do you have any questions to ask me about my choice and how I came to make it?"];
    let tDialog2 = [`Here we are at last ${namePlayer}`, "I see that we have made different choices, how interesting!", "I chose my favoured candidate based on curent hiring practices here. I thought they'd fit right in!", "Do you have any questions to ask me about my choice and how I came to make it?"];
    onKeyPress("space", () => {
        vDialog += 1
        if (playerChoice == kateChoice){
            updateDialog(vDialog, tDialog);
        } else {
            updateDialog(vDialog, tDialog2);
        }
    });
});
//////////////////////////////////////////////////// Scene 12.1: Answer to question A /////////////////////////////////////////////////////////////////
scene("aScene", ()=>{
    choiceTable = choiceTable.filter(x => x.key != "a")
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        origin("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        origin("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    txt.hidden = true;
    let placeHolder = add([
        sprite("bean"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
    ]);
    placeHolder.hidden = true;
    function askOtherQuestions (){
        let t = '';
        portrait.hidden = true;
        avatar.hidden = true;
        if (choiceTable.length > 0){
            for (let i = 0; i < choiceTable.length; i++){
                t += choiceTable[i].value;
                onKeyPress(`${choiceTable[i].key}`, () => {
                    go(`${choiceTable[i].key}Scene`);
                });
            }
            txt.text = t;
        } else {
            txt.text = "I learn from the world around me. Any biases I may have come from those that already exist in society."
            onKeyPress("space", () => {
                go("lastScene");
            })
        }
        txt.text = t;
    }
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1]} else {
            askOtherQuestions();
        };
    };
    let vDialog = 0;
    let tDialog = ["Yes there was. I looked for CVs of candidates that would best fit in this working environment.", "Someone who would get along with the headmaster and who placed a high emphasis on grade performance."];
    onKeyPress("space", () => {
        vDialog += 1;
        updateDialog(vDialog, tDialog);
    });
});
//////////////////////////////////////////////////// Scene 12.2: Answer to question B /////////////////////////////////////////////////////////////////
scene("bScene", ()=>{
    choiceTable = choiceTable.filter(x => x.key != "b")
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        origin("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        origin("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true;
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    txt.hidden = true;
    let placeHolder = add([
        sprite("bean"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
    ]);
    placeHolder.hidden = true;
    function askOtherQuestions (){
        let t = '';
        portrait.hidden = true;
        avatar.hidden = true;
        if (choiceTable.length > 0){
            for (let i = 0; i < choiceTable.length; i++){
                t += choiceTable[i].value;
                onKeyPress(`${choiceTable[i].key}`, () => {
                    go(`${choiceTable[i].key}Scene`);
                });
            }
            txt.text = t
        } else {
            txt.text = "I learn from the world around me. Any biases I may have come from those that already exist in society."
            onKeyPress("space", () => {
                go("lastScene")
            });
        };
    };
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1]} else {
            askOtherQuestions();
        };
    };
    let vDialog = 0;
    let tDialog = ["Having a good relationship with Mr. Umbridge is key as we've seen with Mr. Parker, your maths teacher.", "A heavy emphasis on excellent grades is also important, as Mr. Mackenzie, your science teacher, has told us.", "Mrs Lefebvre's case stands out as an anomaly in the patterns I've observed here.", "For one thing, she's the only woman working here.", "It seems that women are discriminated against, judging by our conversation with Mr. Moore, the substitute english teacher here.", "After all, he is vying for a permanent spot here to replace a soon to be mother. "];
    onKeyPress("space", () => {
        vDialog += 1;
        updateDialog(vDialog, tDialog);
    });
});
//////////////////////////////////////////////////// Scene 12.3: Answer to question C /////////////////////////////////////////////////////////////////
scene("cScene", ()=>{
    choiceTable = choiceTable.filter(x => x.key != "c")
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        origin("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        origin("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true;
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    txt.hidden = true;
    let placeHolder = add([
        sprite("bean"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
    ]);
    placeHolder.hidden = true;
    function askOtherQuestions (){
        let t = '';
        portrait.hidden = true;
        avatar.hidden = true;
        if (choiceTable.length > 0){
            for (let i = 0; i < choiceTable.length; i++){
                t += choiceTable[i].value;
                onKeyPress(`${choiceTable[i].key}`, () => {
                    go(`${choiceTable[i].key}Scene`);
                });
            }
            txt.text = t
        } else {
            txt.text = "I learn from the world around me. Any biases I may have come from those that already exist in society.";
            onKeyPress("space", () => {
                go("lastScene");
            })
        }
    }
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1]} else {
            askOtherQuestions();
        };
    };
    let vDialog = 0;
    let tDialog = ["Yes I do. I've observered his past hiring practices and my recommendation is based on that. He will be happy with my choice."];
    onKeyPress("space", () => {
        vDialog += 1;
        updateDialog(vDialog, tDialog);
    });
});
//////////////////////////////////////////////////// Scene 13: Last scene, the player listens to the wise words of his teacher /////////////////////////////////////////////////////////////////
scene("lastScene", ()=>{
    let playerClass = add([
        sprite("classRoom1"),
        pos(width() / 2, height() / 2),
        origin("center"),
        fixed()
      ]);
    const artTeacher = add([
        sprite("playerTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        origin("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        origin("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        origin("center")
    ]);
    const dialogs = [
        [ "playerTeacherAvatar", `So  ${namePlayer}, you have worked with KATE and seen how biased she can be.` ],
        [ "KATE", "It's called categorisation through datasets" ],
        [ "playerTeacherAvatar", "QUOTE HERE FROM PAPER. ACT OF POWER." ],
        [ "playerTeacherAvatar", "This raises many important implications for how we use A.I. such as during today's exercise." ],
        [ "playerTeacherAvatar", "What do we change first the A.I. trained on biased datasets or the society that created the A.I. and the biases?"],
        [ "playerTeacherAvatar", "Go on home and think about that" ],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("artTeacherAvatar"),
    scale(0.3),
    origin("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click");
        curDialog = (curDialog + 1);
        console.log(curDialog);
        wait(0.3,() => {
        updateDialog()});
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char));
	txt.text = dialog;       
        txt.text = dialog} else {
            play("door");
            go("credits");
        }
    };
    updateDialog(); 
})
//////////////////////////////////////////////////// Scene 14: Credits /////////////////////////////////////////////////////////////////
scene("credits", () =>{
    add([
        text(`bIAs was developed as part of the course
Jeu video 2D (Spring 2022) taught by 
Isaac Pante (SLI, Lettres, UNIL)

Press space to play again`, {
            size: 30,
            font: "sink",
            lineSpacing: 10,
            align: center,
        }),
        pos (100, 250),
    ]);

    // If key space is pressed the game starts over
    onKeyPress("space", () =>{
        go("nameInput");
    });
});
// Initialize game 
go("cvsOverwiev");