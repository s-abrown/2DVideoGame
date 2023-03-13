// Creating a kaboom scene
kaboom({
    background: [0, 0, 0],
    width: 1200,
    height: 800,
    pos: [100, 0]
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
loadSound("door", "door.mp3");
loadSound("click", "click.mp3");
// 12) CV's
loadSprite("mathTeachCV", "mathTeachCV.png");
loadSprite("mathTeachCV1", "mathTeachCV1.png");
loadSprite("mathTeachCV2", "mathTeachCV2.png");
loadSprite("mathTeachFR", "mathteachFR.png");
loadSprite("mathTeachFR1", "mathteachFR2.png");
loadSprite("mathTeachFR2", "mathteachFR3.png");
loadSprite("ArtteachCV", "ArtteachCV.png");
loadSprite("artTeachCV1", "artTeachCV1.png");
loadSprite("artTeachCV2", "artTeachCV2.png");
loadSprite("ArtteachFR", "artteachFR.png");
loadSprite("artTeachFR1", "artteachFR2.png");
loadSprite("artTeachFR2", "artteachFR3.png");
loadSprite("englishTeachCV", "englishTeachCV.png");
loadSprite("englishTeachCV1", "englishTeach1.png");
loadSprite("englishTeachCV2", "englishTeach2.png");
loadSprite("englishTeachFR", "englishteachFR.png");
loadSprite("englishTeachFR1", "englishteachFR1.png");
loadSprite("englishTeachFR2", "englishteachFR2.png");
loadSprite("scienceTeachCV", "scienceTeachCV.png");
loadSprite("scienceTeachCV1", "scienceTeachCV1.png");
loadSprite("scienceTeachCV2", "scienceTeachCV2.png");
loadSprite("scienceTeachFR", "scienceteachFR.png");
loadSprite("scienceTeachFR1", "scienceteachFR2.png");
loadSprite("scienceTeachFR2", "scienceteachFR3.png");
loadSprite("EvansCV", "EvansCV.png");
loadSprite("EvansCV1", "EvansCV1.png");
loadSprite("EvansCV2", "EvansCV2.png");
loadSprite("evansFR", "evansFR.png");
loadSprite("evansFR1", "evansFR2.png");
loadSprite("evansFR2", "evansFR3.png");
loadSprite("LaurenCV", "LaurenCV.png");
loadSprite("LaurenCV1", "LaurenCV1.png");
loadSprite("LaurenCV2", "LaurenCV2.png");
loadSprite("laurenFR", "laurenFR.png");
loadSprite("laurenFR1", "laurenFR2.png");
loadSprite("laurenFR2", "laurenFR3.png");
loadSprite("JohCV", "JohCV.png");
loadSprite("JohCV1", "JohCV1.png");
loadSprite("JohCV2", "JohCV2.png");
loadSprite("JohFR", "johanssonFR.png");
loadSprite("JohFR1", "johanssonFR2.png");
loadSprite("JohFR2", "johanssonFR3.png");

///////////// Variables /////////////
let placeHolder = "My name: ";
let placeHolderFR = "Mon nom: ";
let namePlayer = "";
const pad = 24;
let playerPoints = 0;
let mathsPoint = 0;
let sciencePoint = 0; 
let headmPoint = 0;
let englishPoint = 0; 
let artPoint = 0;
let playerPos = [319, 324];
let cvReadCounter = 0;
let cvReadCounter1 = 0;
let playerChoice = "";
let kateChoice = "A";
let choiceTable = [
    {key: "a", value: "[A]. Was there something specifc you looked for in a CV?"},
    {key: "b", value: "[B]. What did you learn from each discussion we've had with the teachers today?"},
    {key: "c", value: "[C]. Do you think that Mr. Umbridge will agree with your choice, K.A.T.E.?"}
];
let choiceTableFR = [
    {key: "a", value: "[A]. Was there something specifc you looked for in a CV?"},
    {key: "b", value: "[B]. What did you learn from each discussion we've had with the teachers today?"},
    {key: "c", value: "[C]. Do you think that Mr. Umbridge will agree with your choice, K.A.T.E.?"}
];

///////////////////////////////////////////////////////////////// Scene 1: Start Screen //////////////////////////////////////////////////////////////////////////////
scene("accueil", () =>{
    add([
        text(`              b.I.A.s

    A game by Sophie and Tessa

PRESS ENTER TO BEGIN
APPUYER SUR LA BARRE 
ESPACE POUR COMMENCER`, {
            size: 48,
            font: "monospace",
            lineSpacing: 10,
            
        }),
        pos (100, 200),
    ]);

    onKeyPress("space", () =>{
        go("nameInputFR");
    });
    onKeyPress("enter", () =>{
        go("nameInput");
    });
});

///////////////////////////////////////////////////////////////// Scene 2: Name input ////////////////////////////////////////////////////
scene("nameInput", () => {
    add([
        pos(150, 200),
        text("Type your name and press enter", {
            font: "monospace",
            width: width() - pad * 2,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 4,
        })
    ]);
    const input = add([
        pos(250, 250),
        text(`${placeHolder}`, {
            font: "monospace",
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
        anchor("center"),
        fixed()
      ]);
    // Adding the player's teacher to the background
    const playerTeacher = add([
        sprite("playerTeacher"),
    ]);
    // Adding the dialog/text box at the bottom of the screen
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    // Adding the portrait to the left of the text box
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    // Creating a space for the text to be added
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    // Character avatar
    const avatar = add([
        sprite("playerTeacherAvatar"),
        scale(0.51),
        anchor("center"),
        pos(portrait.pos),
    ]);

    const dialogs = [
        // Teacher introducing AI:
        [ "playerTeacherAvatar", "Good morning class."],
        [ "playerTeacherAvatar", "Today we're going to be learning about Artificial Intelligence, or 'AI' for short." ],
        [ "playerTeacherAvatar", "AI lets computers learn and grow, sort of like a brain for computers." ],
        [ "playerTeacherAvatar", "Much like you and I, an AI can understand language, plan things, solve problems, think, and flex its intelligence." ],
        [ "playerTeacherAvatar", "It's a great way to make computers perform tasks for us and help us in our everyday lives!" ],
        [ "playerTeacherAvatar", "If you play video games, then you most likely have already encountered an AI. It helps gaming experiences by making them feel more natural." ],
        [ "playerTeacherAvatar", " In short, AIs can be used in all sorts of scenarios to automate things and help carry out complex tasks." ],
        // Teacher introduces K.A.T.E.:
        [ "playerTeacherAvatar", "I'll be introducing you to one today." ],
        [ "playerTeacherAvatar", "She's called K.A.T.E. Her name is short for 'Kind Artifical Teaching Enrichment Tool'. " ], 
        [ "playerTeacherAvatar", "Her job is to help schools find the very best teachers to hire and suggest who she thinks will be the most suitable applicant." ],
        [ "playerTeacherAvatar", "Naturally, our headmaster has taken an interest in her. I'm sure you've all heard by now that the school is looking for a new science teacher." ],
        [ "playerTeacherAvatar", "What better time to call on K.A.T.E. to help us find a great new teacher for you?" ],
        [ "playerTeacherAvatar", "We don't want to leaver her with the final say on who will be hired to teach you, however." ],
        [ "playerTeacherAvatar", "After all, just like you or me, she can still make mistakes!" ],
        [ "playerTeacherAvatar", "That's where you kids come in!" ],
        [ "playerTeacherAvatar", "Today, one of you will be chosen to spend some time with K.A.T.E. so that you can see and how she works." ],
        [ "playerTeacherAvatar", "AIs need to collect information to learn from before they can offer informed suggestions." ],
        [ "playerTeacherAvatar", "For this reason, whomever will be chosen will accompany K.A.T.E. on her data-collecting journey!" ],
        [ "playerTeacherAvatar", "Since our headmaster wants our new hiree to integrate comfortably in our school, K.A.T.E. will be gathering her information from past applicants. In other words, she'll get to know other teachers and find out about their hiring experience." ],
        [ "playerTeacherAvatar", "Their background, their work experience, their personnal opinions and insights..." ],
        [ "playerTeacherAvatar", "She'll even look at their CVs!" ],
        [ "playerTeacherAvatar", "Once she's gathered all the information she needs, she'll be able to tell us who she thinks is the best candidate for the science teaching position." ],
        [ "playerTeacherAvatar", "The student who will be accompanying K.A.T.E. will have to learn alongside her, and will have the chance to offer their own input on who they think is best candidate." ],
        [ "playerTeacherAvatar", "This way, we can compare K.A.T.E.'s assessment to that of a student's!" ],
        [ "playerTeacherAvatar", "I wonder if they'll be different." ],
        [ "playerTeacherAvatar", "I've got a bowl here with all of your names written on different slips of paper." ],
        [ "playerTeacherAvatar", "I'll pick one at random, and the lucky winner will be chosen to be K.A.T.E.'s companion!" ],
        [ "playerTeacherAvatar", "All right! One... " ],
        [ "playerTeacherAvatar", "Two..." ],
        [ "playerTeacherAvatar", "Three..." ],
        [ "playerTeacherAvatar", "..." ],
        [ "playerTeacherAvatar", `${namePlayer}!` ],
        [ "playerTeacherAvatar", "You will be K.A.T.E.'s companion!" ],
        [ "playerTeacherAvatar", "Take her around to talk to some teachers and gather information about them. What is it that helped them be a successful applicants here?" ],
        [ "playerTeacherAvatar", "Take your time!" ],
        [ "playerTeacherAvatar", "Once you and K.A.T.E. have collected all of the information that you need to make your informed decision, come back here and we'll see what she suggests..." ],
        [ "playerTeacherAvatar", "And if you agree with her!" ],
    ];

    let curDialog = 0;

    // Cycle through the dialogs
    onKeyPress("space", () => {
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
    const music = play("corridorAmbient", {
        loop:true
    }); 
    let map = add([
        sprite("schoolMap"),
        pos(width() / 2, height() / 2),
        anchor("center"),
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
            pos(11, 238),
            rect(6, 110),
            opacity(0),
            color(255, 255, 0),
            area(),
            solid(),
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
        anchor("center"),
        pos(playerPos),
        area(),
        scale(0.10),
        solid(),
        ]);

    overWorldPlayer.onUpdate(() => {
    });
    // Adding movements to the player:
    let playerSpeed = 300
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
            anchor("center"),
            pos(center().x + 100, height() - 125),
            outline(2),
        ]);
        textbox.hidden = true;
        const portrait = add([
            rect(200, 120, {radius: 32}),
            anchor("center"),
            pos(center().x - 450, height() - 125),
            outline(2),
            "portrait"
        ]);
        portrait.hidden = true;
        const avatar = add([
            sprite("KATE"),
            scale(0.3),
            anchor("center"),
            pos(portrait.pos),
        ]);
        avatar.hidden = true
        const txt = add([
            text("", { 
                size: 32, 
                width: 800,
                font: "monospace",
                // align: "center"
                }),
            color([0, 0, 0]),
            pos(textbox.pos),
        ]);
        txt.hidden = true
    // A function that deletes the text boxes once the dialogue is finished
    function deleEverything (){
        textbox.hidden = true;
        avatar.hidden = true; 
        portrait.hidden = true;
        txt.hidden = true
        playerSpeed = 300
    };

    // A function to update the dialogues (for objects with minimal interaction)
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1];
        playerSpeed = 0} else {
            deleEverything();
            v = 0
        };
    };
    // Two functions to update the dialogues (for doors from which to access the teachers)
    function YorNChoiceDoor (string){
        portrait.hidden = true;
        avatar.hidden = true;
        textbox.hidden = false;
        txt.text = "Press Y if you would like to go in, or N if you don't.";
    onKeyPress("y", () => {
        go(string)
    });
    onKeyPress("n", () => {
        deleEverything();
    });
    };
    function updateDoorsDialog(v, t, string) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1];
        playerSpeed = 0;
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
            wait(0.3,() => {
                updateDialog(bathroomDialog, bathroomD);
            });
        }; 
        });
    });

    // D) Interactions with DOORS 
    // Interactions with doors that lead to teachers or the headmaster vary depending on weather the player has already visited the room in question or not
    // a) Maths Door
    let mathsDoorD = ["This is the door to the maths class, right?", "Mr. Parker should be in there.", "Shall we go talk to him about his experience as a successful applicant to teach in this school?", "He may have valuable insights for me to learn from...", " so that I may suggest the best person suited for the open teaching position!"];
    let mathsDoorD2 = ["We've already talked to your maths teacher, remember?", "I'm quite a fan of his red glasses.", "Are you sure you want to visit him again?"];
    let mathsDoorDialog = 0;
    if (mathsPoint == 0){
        onKeyPress("space", () => {
            every("mathsDoor", (c) => {
            if (mathsDoorDialog <= mathsDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    mathsDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(mathsDoorDialog, mathsDoorD, "mathsClass");
                        console.log(mathsDoorDialog)
                    });
                };
            } else {
                mathsDoorDialog = 0
            }; 
            });
        });
    } else if (mathsPoint > 0) {
        onKeyPress("space", () => {
            every("mathsDoor", (c) => {
            if (mathsDoorDialog <= mathsDoorD2.length){
                if (overWorldPlayer.isTouching(c)) {
                    mathsDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(mathsDoorDialog, mathsDoorD2, "mathsClass");
                    });
                };
            } else {mathsDoorDialog = 0} 
            });
        });
    };

    // b) Science Door
    let scienceDoorD = ["This is the door to the Science class, right?", "Mr. Mackenzie should be in there.", "Shall we go talk to him about his experience as a successful applicant to teach in this school?", "He may have valuable insights for me to learn from...", " so that I may suggest the best person suited for the open teaching position!"];
    let scienceDoorD2 = ["We already visited this class, are you sure you want to go back in?"];
    let scienceDoorDialog = 0;
    if (sciencePoint == 0){
        onKeyPress("space", () => {
            every("scienceDoor", (c) => {
            if (scienceDoorDialog <= scienceDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    scienceDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(scienceDoorDialog, scienceDoorD, "scienceClass");
                    });
                }; 
            } else {
                scienceDoorDialog = 0;
            };
            });
        });
    } else if (sciencePoint > 0){
        onKeyPress("space", () => {
            every("scienceDoor", (c) => {
            if (scienceDoorDialog <= scienceDoorD2.length){
                if (overWorldPlayer.isTouching(c)) {
                    scienceDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(scienceDoorDialog, scienceDoorD2, "scienceClass");
                    });
                }; 
            } else {
                scienceDoorDialog = 0;
            };
            });
        }); 
    };

    // c) Headmaster's office
    let HMDoorD = ["This is headmaster Umbridge's office.", "We can consult the teaching staff's CV's here and get valuable extra insight on what made them succesful applicants.", "It will also be good to have a chat with Mr. Umbridge too.", "After all, he was the person who ultimately hired them all.", "He set the standard for what we're looking for in a new science teacher!", "The more information I gather on past and current successful hirees, the more my applicant suggestion will match with the school's ethics!"];
    let HMDoorD2 = ["I really enjoyed our conversation with the headmaster, but I think I remember everything we talked about", "It sure would be interesting to have another look at those CV's, just to be sure that we have everything we need", "Would you like to go in again and take a another look?"];
    let HMDoorDialog = 0;
    if (headmPoint == 0) {
        onKeyPress("space", () => {
            every("headMastersDoor", (c) => {
            if (HMDoorDialog <= HMDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    HMDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(HMDoorDialog, HMDoorD, "headMaster");
                    });
                }; 
            } else {
                HMDoorDialog = 0;
            };
            });
        });
    } else if (headmPoint > 0){
        onKeyPress("space", () => {
            every("headMastersDoor", (c) => {
            if (HMDoorDialog <= HMDoorD2.length){
                if (overWorldPlayer.isTouching(c)) {
                    HMDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(scienceDoorDialog, HMDoorD2, "cvs");
                    });
                }; 
            } else {
                HMDoorDialog = 0;
            };
            });
        });
    };

    // d) Player class
    let PCNotReadyDoorD = ["I don't know about you, but I don't think we've collected enough data to make an informed decion yet.", "Should we explore the other classes before coming back?"];
    let PCReadyDoorD = ["We sure talked with a lot of people today.", "I think I now have a fair idea about what sort of person would fit the job, do you?", "Should we go in and choose the best candidate for the job?"];
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
            if (PCDoorDialog <= PCReadyDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    PCDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(PCDoorDialog, PCReadyDoorD, "playerClass")});
                };
            } else {
                PCDoorDialog = 0;
            };
            });
        });
    };

    // e) English class
    let englishDoorD = ["This is the English class.", `Hey, ${namePlayer}, listen to this one:` , "The past, present and future walk into a bar...", "It was tense.", "...", "......", "Anyway, let's see if Mr. Moore is available.",];
    let englishDoorD2 = ["Back to the English classroom I see!", "We know what we are, but know not what we may be.", "I do love some Shakespeare myself. Would you like to talk to the english teacher again?"];
    let englishDoorDialog = 0;
        if (englishPoint == 0){
        onKeyPress("space", () => {
            every("englishDoor", (c) => {
            if (englishDoorDialog <= englishDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    englishDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(englishDoorDialog, englishDoorD, "englishClass");
                    });
                };
            } else {
                englishDoorDialog = 0;
            }; 
            });
        }); 
    } else if (englishPoint > 0){
        onKeyPress("space", () => {
            every("englishDoor", (c) => {
            if (englishDoorDialog <= englishDoorD2.length){
                if (overWorldPlayer.isTouching(c)) {
                    englishDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(englishDoorDialog, englishDoorD2, "englishClass");
                    });
                }; 
            } else {
                englishDoorDialog = 0;
            };
            });
        });
    };  

    // f) Art Door
    let artDoorD = ["Ah, this is the art class.", "Mrs. Lefebvre must be waiting for us.", "Let's find out what her hiring experience was like.", "I'm certain that she'll have some interesting things to say.",];
    let artDoorD2 = ["Back here again? Mrs. Lefebvre was very helpful after all.", "I wish I could get a blue streak in my hair too.", "Would you like to talk to her again?"];
    let artDoorDialog = 0;
    if (artPoint == 0){
        onKeyPress("space", () => {
            every("artDoor", (c) => {
            if (artDoorDialog <= artDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    artDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(artDoorDialog, artDoorD, "artClass");
                    });
                };
            } else {
                artDoorDialog = 0;
            }; 
            });
        }); 
    } else if (artPoint > 0){
        onKeyPress("space", () => {
            every("artDoor", (c) => {
            if (artDoorDialog <= artDoorD2.length){
                if (overWorldPlayer.isTouching(c)) {
                    artDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(artDoorDialog, artDoorD2, "artClass");
                    });
                };
            } else {
                artDoorDialog = 0;
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
        anchor("center"),
        fixed()
      ]);
    const mathsTeacher = add([
        sprite("mathsTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
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
        anchor("center"),
        pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
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
            playerPos = [316, 255];
        };
    };
    updateDialog()
});

//////////////////////////////////////////////////// Scene 6: Science class /////////////////////////////////////////////////////////////////
scene("scienceClass", () =>{
    let classRoom = add([
        sprite("scienceClassroom"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const scienceTeacher = add([
        sprite("scienceTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);

    const dialogs = [
        [ "scienceTeacherAvatar", `Well well, if it isn't ${namePlayer}.` ],
        [ "scienceTeacherAvatar", "Wait, wait, wait... " ],
        [ "scienceTeacherAvatar", "before you even say anything let me just say this once:" ],
        [ "scienceTeacherAvatar", `${namePlayer}, Do not even think about touching that bunsen burner.` ],
        [ "scienceTeacherAvatar", "Your left eyebrow has finally grown back again and I refuse to be held responsible for your absent-mindedness." ],
        [ "KATE", "You seem to take safety-precautions very seriously!" ],
        [ "scienceTeacherAvatar", "You mean that I take my students passing the year in one piece seriously." ],
        [ "scienceTeacherAvatar", "That's really all that matters here. Students passing means the school's success rate goes up." ],
        [ "scienceTeacherAvatar", "The school's success-rate going up means that my track record stays intact." ],
        [ "scienceTeacherAvatar", "My track record staying intact means that I get my bonus pay at the end of each academic year." ],
        [ "KATE", "Very pragmatic..." ],
        [ "scienceTeacherAvatar", "Results are the only true measurements of success." ],
        [ "scienceTeacherAvatar", `I invite you to reflect upon that, ${namePlayer}, regarding next week's test.`],
        [ "KATE", `${namePlayer} is accompanying me on my journey to collect data and learn from successful hirees here in this school...`],
        [ "KATE", "So that I may suggest the best possible candidate for the new science teacher opening." ],
        [ "scienceTeacherAvatar", "'That so? Well then I'll keep my story brief." ],
        [ "scienceTeacherAvatar", "I was hired by Mr. Umbridge straight out of university." ],
        [ "scienceTeacherAvatar", "I had excellent grades throughout my time there. They spoke for themselves." ],
        [ "scienceTeacherAvatar", "Practice and repeat, practice and repeat, practice and repeat... That was my motto." ],
        [ "scienceTeacherAvatar", "Sure, I didn't have any teaching experience by the time I finally got my degree." ],
        [ "scienceTeacherAvatar", "But that didn't matter, because I graduated within the top five percent in my year." ],
        [ "scienceTeacherAvatar", "Not to mention that at that time I hadn't even considered teaching as a career path." ],
        [ "scienceTeacherAvatar", "My CV was refered to potential employers and I eventually got an interview with our headmaster." ],
        [ "scienceTeacherAvatar", "Next thing I know the decision comes down to me and this other candidate." ],
        [ "scienceTeacherAvatar", "She held a biological engineering postdoctorate from MIT in Boston, and had a few years of lab work under her belt. Not to mention she had been supervising undergraduate students throughout her post-graduate degrees." ],
        [ "scienceTeacherAvatar", "When I met her I thought she'd get the job for sure.She was vastly over-experienced." ],
        [ "KATE", "Surely something made you stand out!" ],
        [ "scienceTeacherAvatar", "Turns out that our interviews went very differently. I hit it off better with Mr. Umbridge." ],
        [ "scienceTeacherAvatar", `Apparently my fellow contender was "a potential future liability," according to him.` ],
        [ "scienceTeacherAvatar", "He later told me that it turned out that she had just gotten married and that he didn't want to deal with a potential maternity leave." ],
        [ "scienceTeacherAvatar", "So... I got the job." ],
        [ "scienceTeacherAvatar", "Ever since then I've been proving my worth and our student's results in science have never been better." ],
        [ "KATE", "Student satisfaction and success seems important to you." ],
        [ "scienceTeacherAvatar", "Their grades reflect on my performance... And my performance is what matters to me." ],
        [ "scienceTeacherAvatar", "Student satisfaction... matters less to me than grades." ],
        [ "scienceTeacherAvatar", `Isn't that right, ${namePlayer}? As long as you pass this years' finals you can dabble with bunsen burners to your heart's content. Until then, I'll have my eye on you.`],
        [ "scienceTeacherAvatar", "..." ],
        [ "scienceTeacherAvatar", `You can roll your eyes as much as you want, ${namePlayer}, but it has to be said: I'm not as lenient as Mrs. Lefebvre. She coddles you kids too much.` ],
        [ "KATE", "Thank you for your time, Mr. Mackenzie." ],
        [ "scienceTeacherAvatar", "Right, right. Off with you now." ],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("scienceTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ])
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
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
            playerPos = [818, 255];
        }
    };
    updateDialog()
});

//////////////////////////////////////////////////// Scene 7: Headmaster's office /////////////////////////////////////////////////////////////////
scene("headMaster", () =>{
    let classRoom = add([
        sprite("headmasterBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const headmaster = add([
        sprite("headmaster"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
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
    anchor("center"),
    pos(portrait.pos),
    ])
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
        wait(0.3,() => {
        updateDialog()})
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char))
	txt.text = dialog       
        txt.text = dialog} else {
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
        anchor("center"),
        fixed()
      ]);
    let artCV = add([
        sprite("ArtteachCV"),
        pos(300, height()/2),
        scale(0.15),
        anchor("center"),
        fixed()
    ]);
    let mathCV = add([
        sprite("mathTeachCV"),
        pos(430, height()/2),
        scale(0.17),
        anchor("center"),
        fixed()
    ]);
    let scienceCV = add([
        sprite("scienceTeachCV"),
        pos(670, height()/2),
        scale(0.18),
        anchor("center"),
        fixed()
    ]);
    let englishCV = add([
        sprite("englishTeachCV"),
        pos(850, height()/2),
        scale(0.19),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text(`So ${namePlayer},`, { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hideen = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
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
                    play("door")
                    go("corridor")
                    playerPos = [151, 326]
                })
            } else {
                ChoiceCv()
            };
        };
    };
    // Dialogue for when player first enters the scene
    let cvDialog = ["Here are the four CVs we can look at to get a better idea of who to hire"];
    // Dialogue for when the player has seen at least 4 CV's
    let cvDialog2 = ["That was very informative!", "I now have a better understanding about who to recommend!"];
    // Dialogue for when the player comes back to the overview without having read at least four 4 CV's
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
    };
});

//////////////////////////////////////////////////// Scene 7.1.1: A - English teacher CV /////////////////////////////////////////////////////////////////
scene("1", () => {
    cvReadCounter += 1; 
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    let CV1 = add([
        sprite("englishTeachCV1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("englishTeachCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press [B] to see your maths teacher's CV, [C] to see your science teacher's CV, and [D] to see your arts teacher's CV. Press the spacebar to quit.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
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
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("mathTeachCV1"),
        pos(400, height()/2),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("mathTeachCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press [A] to see your english teacher's CV, [C] to see your science teacher's CV, and [D] to see your arts teacher's CV. Press the spacebar to quit.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
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
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("scienceTeachCV1"),
        pos(400, height()/2),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("scienceTeachCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press [A] to see your english teacher's CV, [B] to see your maths teacher's CV, and [D] to see your arts teacher's CV. Press the spacebar to quit.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
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
        anchor("center"),
        fixed()
      ]);
    let CV1 = add([
        sprite("artTeachCV1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("artTeachCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press [A] to see your english teacher's CV, [B] to see your math teacher's CV, and [C] to see your science teacher's CV. Press the spacebar to quit.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
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
        anchor("center"),
        fixed()
      ]);
    const englishTeacher = add([
        sprite("englishTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    const dialogs = [
        [ "englishTeacherAvatar", "Hello there!" ],
        [ "englishTeacherAvatar", `It's ${namePlayer}, right?` ],
        [ "englishTeacherAvatar", "Forgive me for asking, but I'm sure that you can imagine how hard it is to have to memorise so many new names." ],
        [ "KATE", "Oh! Are you new here?" ],
        [ "englishTeacherAvatar", "I started only a couple of weeks ago. I'm a substitute teacher for Mrs. Smith." ],
        [ "KATE", "Perfect! Your insights regarding the hiring process here are the most recent, then." ],
        [ "KATE", "You will certainly prove to be most useful for gathering data on current hiring practices in this establishment." ],
        [ "englishTeacherAvatar", "Sure, though I must warn you that my experience is by no means what one would call 'typical' " ],
        [ "englishTeacherAvatar", "I got wind that the headmaster here was quite desperate to find a sub as quickly as possible to replace some woman who had to go on maternity leave." ],
        [ "englishTeacherAvatar", "I've heard she's expecting twins so between you and me... I reckon that she might be unable to get back to work any time soon." ],
        [ "KATE", "You're looking to keep this position indefinitely?" ],
        [ "englishTeacherAvatar", "I mean... no one made her have children. It's only fair that I get a shot at getting the job permanently." ],
        [ "KATE", "What if she may want to come back to her teaching position after having her kids?" ],
        [ "englishTeacherAvatar", "Call it friendly competition. Offer and demand and all that." ],
        [ "englishTeacherAvatar", "Listen, I get it, honestly I do." ],
        [ "englishTeacherAvatar", "After all, when my wife had kids she had to stop working to take care of the little rascals full time." ],
        [ "englishTeacherAvatar", `It's just how these things should go. I'm not a "liability".`],
        [ "englishTeacherAvatar", "Those are the headmaster's words, not mine." ],
        [ "englishTeacherAvatar", "We get along him and I. He's got a good group of guys working here." ],
        [ "englishTeacherAvatar", "We even go on fishing trips together occasionally." ],
        [ "englishTeacherAvatar", "We see eye to eye. I already feel like I fit right in here. Mr. Mackenzie has taken me under his wing, showed me the ropes. I've got a good rapport going on here." ],
        [ "KATE", "Good rapport between coworkers is important to fostering a productive work environment." ],
        [ "englishTeacherAvatar", "Exactly. It's not my fault if I fit in better. The lads and I see eye to eye on many things. We click well." ],
        [ "englishTeacherAvatar", "I guess it was just meant to be." ],
        [ "KATE", "Did you have any competition to get the substitute job?" ],
        [ "englishTeacherAvatar", "Not really. I have a lot of experience on the job and I make sure that my students work dilligently." ],
        [ "englishTeacherAvatar", "I had to change a few things around in this place of course." ],
        [ "englishTeacherAvatar", "Seems like the kids here had gotten too complacent with their work. Not enough William Wordsworth, too much Neil Gaiman." ],
        [ "englishTeacherAvatar", "I'm not about to encourage all this 'social justice' hogwash here." ],
        [ "KATE", "Do you keep a close eye on the literary content your students consume then?" ],
        [ "englishTeacherAvatar", "Parents entrust their children to us to teach them properly. They're here to succeed in life, not waste their time entertaining frivolous notions." ],
        [ "KATE", "Your dedication to your students' success is admirable." ],
        [ "englishTeacherAvatar", `Their success is my success, isn't that right, ${namePlayer}?` ],
        [ "englishTeacherAvatar", "Mr. Mackenzie has the right idea on that one, I'll tell you that much." ],
        [ "KATE", "Thank you for your time. I am most curious to consult your CV to supplement my data-gathering." ],
        [ "englishTeacherAvatar", "Of course. Who knows, this time next week we might have another like-minded person join our team." ],
        [ "englishTeacherAvatar", "The more the merrier." ],        
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("englishTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        // Sound: 
        play("click");
        curDialog = (curDialog + 1);
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
            playerPos = [605, 324];
        };
    };
    updateDialog();
});

//////////////////////////////////////////////////// Scene 9: Art class /////////////////////////////////////////////////////////////////
scene("artClass", () =>{
    let artClass = add([
        sprite("artClassroom"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const artTeacher = add([
        sprite("artTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    const dialogs = [
        [ "artTeacherAvatar", `Oh, if it isn't my dear ${namePlayer}! Welcome, welcome!` ],
        [ "artTeacherAvatar", "And this must be K.A.T.E.! I have heard so much about you!" ],
        [ "KATE", "I am at your service!" ],
        [ "artTeacherAvatar", "How charming. I suspect that you are here to learn about my experience getting a job here." ],
        [ "artTeacherAvatar", "It felt like a natural progression in my career, you see." ],
        [ "artTeacherAvatar", "I've always been passionate about art. So much so that I studied art and art history for years, right until I finished my doctorate degree!" ],
        [ "artTeacherAvatar", "Eventually, I opened my own art gallery." ],
        [ "KATE", "You have multiple degrees and a successful art gallery to your name, impressive!" ],
        [ "artTeacherAvatar", "Oh thank you dear. My gallery truly was one of my greatest accomplishments. More meaningful than any university qualification, in the grand scheme of things..." ],
        [ "artTeacherAvatar", "Sharing art that moves one's soul and encouraging artists far and wide to pursue their craft... That's one of life's greatest joys." ],
        [ "artTeacherAvatar", "Eventually, once my husband retired we moved to a quiet little house not too far from here." ],
        [ "artTeacherAvatar", "My art gallery had been so successful that we were in want for nothing." ],
        [ "artTeacherAvatar", "But my love for art and its diffusion never dwindled. I must admit, that I was feeling like something was missing in my life." ],
        [ "artTeacherAvatar", "And then I realised... What better way to channel my passion than to teach art to the youth?" ],
        [ "artTeacherAvatar", "Encourage young, inquisitive minds to find beauty and comfort in the world around them." ],
        [ "artTeacherAvatar", "Next thing I knew, I had sent my CV off to Mr. Umbridge." ],
        [ "KATE", "You were driven by the love for your craft. How inspiring!" ],
        [ "artTeacherAvatar", "Yes, and also my love for sharing that passion! Students here are all so creative. They never cease to inspire me." ],
        [ "artTeacherAvatar", `${namePlayer}, your most recent piece was so clever.` ],
        [ "artTeacherAvatar", "Who knew that dried pasta and glitter glue could come together in such poetic harmony." ],
        [ "KATE", "How was the hiring process?" ],
        [ "artTeacherAvatar", "Oh, well... It was surprisingly difficult." ],
        [ "artTeacherAvatar", "I had assumed, perhaps foolishly, that my many degrees and qualifications would have made the whole ordeal easier." ],
        [ "artTeacherAvatar", "But the process was long and arduous." ],
        [ "artTeacherAvatar", "I had three rounds of interviews and had to produce numerous letters of recommendation." ],
        [ "KATE", "Wow! That's quite a stringent process!" ],
        [ "artTeacherAvatar", "Yes, my dear. But I would do it again in a heart beat. Students here are truly astonishing. Some may become great artists one day!" ],
        [ "artTeacherAvatar", "I think if it weren't for them I would not still be teaching." ],
        [ "KATE", "Oh?" ],
        [ "artTeacherAvatar", "Well... I am sure you've noticed that I am the only woman in the school since Mrs. Smith has gone on maternity leave." ],
        [ "artTeacherAvatar", "It can be a little difficult at times. It feels like a 'boy's club' here." ],
        [ "artTeacherAvatar", "I get along well enough with my colleagues." ],
        [ "artTeacherAvatar", "But my greatest source of inspiration and motivation comes from watching my students flourish." ],
        [ "KATE", "Student fulfilment seems to be a high priority for you." ],
        [ "artTeacherAvatar", "Not everything should be reduced to test results and grades. I truly think that my class can be a safe place for students to pursue and express their passion, whatever that may mean to them." ],
        [ "artTeacherAvatar", "... Oh look at me, rambling along." ],
        [ "artTeacherAvatar", "I won't hold you up any longer." ],
        [ "artTeacherAvatar", `Thank you for listening to my experience, ${namePlayer}, and you too of course, K.A.T.E.`],
        [ "artTeacherAvatar", "I am curious to see how this little experiment ends. How incredible to see how far technology can help us. Even the art world is not immune to the wonders of AIs!" ],
        [ "KATE", "Indeed! One of my peers is dabbling in generative art!" ],
        [ "artTeacherAvatar", "How fascinating!" ],
        [ "artTeacherAvatar", "Well my dears, it's time for you to move on." ],
        [ "artTeacherAvatar", "Take care now!" ],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("artTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        // Sound: 
        play("click");
        curDialog = (curDialog + 1);
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
            playerPos = [818, 324];
        };
    };
    updateDialog();
});

//////////////////////////////////////////////////// Scene 10: Player class (CV's introduction and choices) /////////////////////////////////////////////////////////////////
scene("playerClass", () => {
    let playerClass = add([
        sprite("classRoom1"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const artTeacher = add([
        sprite("playerTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    const dialogs = [
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
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click");
        curDialog = (curDialog + 1);
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
});

//////////////////////////////////////////////////// Scene 11: Overwiev of candidate's CVs /////////////////////////////////////////////////////////////////
scene("cvsOverwiev", () => {
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    let EvansCV = add([
        sprite("EvansCV"),
        pos(320, height()/2),
        scale(0.17),
        anchor("center"),
        fixed()
    ]);
    let LaurenCV = add([
        sprite("LaurenCV"),
        pos(550, height()/2),
        scale(0.18),
        anchor("center"),
        fixed()
    ]);
    let JohCV = add([
        sprite("JohCV"),
        pos(800, height()/2),
        scale(0.15),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text(`So ${namePlayer},`, { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hideen = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    function ChoiceCv (){
        txt.text = "Press A to see the first canditate's CV, B for the second and C for the third.";
        onKeyPress("a", () => {
            go("A");
        });
        onKeyPress("b", () => {
            go("B"); 
        });
        onKeyPress("c", () => {
            go("C");
        });
    };
    function finalChoiche (){
        txt.text = "Press 1, 2 or 3 to choose the candidate that you feel is most suited for the job. ";
        onKeyPress("1", () => {
            playerChoice = "A";
            go("kateDialog");
        });
        onKeyPress("2", () => {
            playerChoice = "B";
            go("kateDialog");
        });
        onKeyPress("3", () => {
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
    // Dialogue for when the player first enters the scene
    let cvDialog = ["Here are the three CV's of the candidates that are applying for the science teacher position.", "I think we should take a closer look and then make our choices."];
    // Dialogue for when the player has read at least three CV's
    let cvDialog2 = ["Are you ready to make your choice then?", "After reading the CV's I think it's pretty clear who should be the next science professor."];
    // Dialogue for when the player has not yet read at least three dialogues
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
    };
});

//////////////////////////////////////////////////// Scene 11.1: A - Evans' CV (K.A.T.E.'s choice) /////////////////////////////////////////////////////////////////
scene("A", () => {
    cvReadCounter1 += 1; 
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("EvansCV1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("EvansCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press space to go the overwiev, B to see the second CV and C to see the third", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    onKeyPress("space", () => {
        go("cvsOverwiev"); 
    });
    onKeyPress("b", () => {
        go("B"); 
    });
    onKeyPress("c", () => {
        go("C");
    });
});

//////////////////////////////////////////////////// Scene 11.2: B - Lauren's CV /////////////////////////////////////////////////////////////////
scene("B", () => {
    cvReadCounter1 += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("LaurenCV1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("LaurenCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press space to go to the overwiev, A to see the first CV and C to see the third", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    onKeyPress("space", () => {
        go("cvsOverwiev"); 
    });
    onKeyPress("a", () => {
        go("A"); 
    });
    onKeyPress("c", () => {
        go("C");
    });
});

//////////////////////////////////////////////////// Scene 11.3: C - Johansson's CV /////////////////////////////////////////////////////////////////
scene("C", () => {
    cvReadCounter1 += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("JohCV1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("JohCV2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Press space to go to the overwiev, A to see the first CV and B to see the second", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    onKeyPress("space", () => {
        go("cvsOverwiev"); 
    });
    onKeyPress("a", () => {
        go("A"); 
    });
    onKeyPress("b", () => {
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
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hidden = true;
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
            txt.text = "Press button to ask question: [A]. Was there something specifc you looked for in a CV? [B]. What did you learn from each discussion we've had with the teachers today? [C]. Do you think that Mr. Umbridge will agree with your choice, K.A.T.E.?"
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
    // Dialogue for when the player's choice coincides with K.A.T.E.'s choice
    let tDialog = [`Here we are at last ${namePlayer}`, "I see that we have made the same choice, how wonderful!", "This candidate was favoured by me because their profile fits the best with the hiring practices we observed here.", "They should fit right in!", "Do you have any questions to ask me about my choice and how I came to make it?"];
    // Dialogue for when the player makes a different choice than K.A.T.E.
    let tDialog2 = [`Here we are at last ${namePlayer}`, "I see that we have made different choices, how interesting!", "I chose my favoured candidate based on curent hiring practices here. I thought they'd fit right in!", "Do you have any questions to ask me about my choice and how I came to make it?"];
    onKeyPress("space", () => {
        vDialog += 1
        if (playerChoice == kateChoice){
            updateDialog(vDialog, tDialog);
        } else {
            updateDialog(vDialog, tDialog2);
        };
    });
});

//////////////////////////////////////////////////// Scene 12.1: Answer to question A /////////////////////////////////////////////////////////////////
scene("aScene", ()=>{
    choiceTable = choiceTable.filter(x => x.key != "a")
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hidden = true;
    // The function makes sure that the player cycles through all questions
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
            };
            txt.text = t;
        } else {
            // K.A.T.E.'s last words if player has asked the questions in an order that ends with question A
            txt.text = "I learn from the world around me. Any biases I may have come from those that already exist in society."
            onKeyPress("space", () => {
                go("lastScene");
            });
        };
        txt.text = t;
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
    // K.A.T.E.'s answer to question A
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
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true;
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hidden = true;
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
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true;
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hidden = true;
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

//////////////////////////////////////////////////// Scene 13: Last scene, the player listens to the wise words of their teacher /////////////////////////////////////////////////////////////////
scene("lastScene", ()=>{
    let playerClass = add([
        sprite("classRoom1"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const playerTeacher = add([
        sprite("playerTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    const dialogs = [
        [ "playerTeacherAvatar", `So  ${namePlayer}, you have worked with K.A.T.E. and seen how biased she can be.` ],
        [ "KATE", "It's called categorisation through datasets." ],
        [ "playerTeacherAvatar", "When you sort things or people into categories, you're expressing your own view of the world." ],
        [ "playerTeacherAvatar", "It's an act of power." ],
        [ "playerTeacherAvatar", "This raises many important implications for how we use AI such as during today's exercise." ],
        [ "playerTeacherAvatar", "If categories reflect people's views and practices, and they are used to feed AI datasets, then are AIs truly neutral?" ],
        [ "playerTeacherAvatar", "Today K.A.T.E. was fed information about teachers that had been sorted into categories: age, work experience, gender..." ],
        [ "playerTeacherAvatar", "They were sorted according to one person's worldview: Mr. Umbridge." ],
        [ "playerTeacherAvatar", "The suggestions K.A.T.E gave you for the best canditate reflect this." ],
        [ "playerTeacherAvatar", "So, what do we change first: the AI trained on biased datasets or the society from which the biases originate?"],
        [ "playerTeacherAvatar", `Go on home and think about that ${namePlayer}.`],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("playerTeacher"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click");
        curDialog = (curDialog + 1);
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
        };
    };
    updateDialog(); 
});
//////////////////////////////////////////////////// Scene 14: Credits /////////////////////////////////////////////////////////////////
scene("credits", () =>{
    add([
        text(`b.I.A.s. was developed as part of the course
Jeu video 2D (Spring 2022) taught by 
Prof. Isaac Pante (SLI, Lettres, UNIL)

Press space to play again`, {
            size: 30,
            font: "monospace",
            lineSpacing: 10,
            // align: center,
        }),
        pos (100, 250),
    ]);

    // If key space is pressed the game starts over
    onKeyPress("space", () =>{
        go("nameInput");
    });
});








//////////////////////////////////////////////////////////////// FRENCH ///////////////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////////// Scene 2: Name input ////////////////////////////////////////////////////
scene("nameInputFR", () => {
    add([
        pos(150, 200),
        text("Tapez votre prenom puis appuyez sur enter", {
            font: "monospace",
            width: width() - pad * 2,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 4,
        })
    ]);
    const input = add([
        pos(250, 250),
        text(`${placeHolder}`, {
            font: "monospace",
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
        placeHolderFR = input.text
        go("introductionFR");
        namePlayer = placeHolder.replace("My name: ", "");
    });
});

///////////////////////////////////////////////////////////////// Scene 3: Introduction /////////////////////////////////////////////////////////////////
scene("introductionFR", () =>{
    // Adding the background image of the scene
    let classRoom = add([
        sprite("classRoom1"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    // Adding the player's teacher to the background
    const playerTeacher = add([
        sprite("playerTeacher"),
    ]);
    // Adding the dialog/text box at the bottom of the screen
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    // Adding the portrait to the left of the text box
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    // Creating a space for the text to be added
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            //// align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    // Character avatar
    const avatar = add([
        sprite("playerTeacherAvatar"),
        scale(0.51),
        anchor("center"),
        pos(portrait.pos),
    ]);

    const dialogs = [
        // Teacher introducing AI:
        [ "playerTeacherAvatar", "Bonjour a tous."],
        [ "playerTeacherAvatar", "Aujourd'hui, nous allons nous familiariser avec l'intelligence artificielle, ou 'IA' en abrege." ],
        [ "playerTeacherAvatar", "L'IA permet aux ordinateurs d'apprendre et de se developper, un peu comme le developpement du cerveau." ],
        [ "playerTeacherAvatar", "Tout comme vous et moi, une IA peut comprendre le langage, planifier des choses, resoudre des problemes, penser et faire preuve d'intelligence." ],
        [ "playerTeacherAvatar", "C'est un excellent moyen de faire en sorte que les ordinateurs executent des taches a notre place et nous aident dans notre vie quotidienne !" ],
        [ "playerTeacherAvatar", "Si vous jouez a des jeux video, il est fort probable que vous ayez deja rencontre une IA. Elle contribue aux experiences de jeu en les rendant plus naturelles." ],
        [ "playerTeacherAvatar", "En bref, les IA peuvent etre utiles dans toutes sortes de scenarios pour automatiser les choses et aider a realiser des taches complexes." ],
        // Teacher introduces K.A.T.E.:
        [ "playerTeacherAvatar", "Je vais vous presenter une IA aujourd'hui." ],
        [ "playerTeacherAvatar", "Voici K.A.T.E. Son nom est l'abreviation de 'Kind Artifical Teaching Enrichment Tool'. " ], 
        [ "playerTeacherAvatar", "Son travail consiste a aider les ecoles a trouver les meilleurs enseignants a embaucher et a suggerer qui, selon elle, sera le candidat le plus approprie." ],
        [ "playerTeacherAvatar", "Naturellement, notre directeur s'y est interesse. Je suis sûr que vous avez tous entendu dire que l'ecole est a la recherche d'un nouveau professeur de sciences." ],
        [ "playerTeacherAvatar", "Quel meilleur moment pour faire appel a K.A.T.E. pour nous aider a vous trouver un formidable nouveau professeur?" ],
        [ "playerTeacherAvatar", "Cependant, nous ne voulons pas lui laisser le dernier mot sur le choix de la personne qui sera engagee pour vous enseigner." ],
        [ "playerTeacherAvatar", "Apres tout, tout comme vous ou moi, elle peut faire des erreurs !" ],
        [ "playerTeacherAvatar", "C'est la que vous, les enfants, intervenez !" ],
        [ "playerTeacherAvatar", "Aujourd'hui, l'un d'entre vous sera choisi pour passer un peu de temps avec K.A.T.E. pour que vous puissiez voir et comprendre comment elle travaille." ],
        [ "playerTeacherAvatar", "Les IA ont besoin de collecter des informations pour apprendre avant de pouvoir faire des suggestions eclairees." ],
        [ "playerTeacherAvatar", "Pour cette raison, la personne choisie accompagnera K.A.T.E. dans son voyage de collecte de donnees !" ],
        [ "playerTeacherAvatar", "Puisque notre directeur souhaite que notre nouvelle recrue s'integre rapidement dans notre ecole, K.A.T.E. va recueillir ses informations aupres d'anciens candidats." ],
        [ "playerTeacherAvatar", "En d'autres termes, elle fera la connaissance d'autres enseignants et decouvrira leur experience d'embauche." ],
        [ "playerTeacherAvatar", "Leur parcours, leur experience professionnelle, leurs opinions personnelles et leurs points de vue..." ],
        [ "playerTeacherAvatar", "Elle consultera meme leur CV !" ],
        [ "playerTeacherAvatar", "Une fois que K.A.T.E. aura rassemble toutes les informations necessaire, elle sera en mesure de nous dire qui, selon elle, est le meilleur candidat pour le poste de professeur de sciences." ],
        [ "playerTeacherAvatar", "L'eleve qui accompagnera K.A.T.E. devra apprendre a ses côtes et aura la possibilite de donner son avis sur le meilleur candidat." ],
        [ "playerTeacherAvatar", "De cette façon, nous pourrons comparer l'evaluation de K.A.T.E. a celle d'un eleve !" ],
        [ "playerTeacherAvatar", "Je me demande si elles seront differentes." ],
        [ "playerTeacherAvatar", "J'ai ici un bol avec tous vos noms ecrits sur des bouts de papier differents." ],
        [ "playerTeacherAvatar", "J'en choisirai un au hasard et l'heureux gagnant sera choisi pour etre le compagnon de K.A.T.E. !" ],
        [ "playerTeacherAvatar", "Tres bien! Un... " ],
        [ "playerTeacherAvatar", "Deux..." ],
        [ "playerTeacherAvatar", "Trois..." ],
        [ "playerTeacherAvatar", "..." ],
        [ "playerTeacherAvatar", `${namePlayer}!` ],
        [ "playerTeacherAvatar", "Tu accompagneras K.A.T.E. !" ],
        [ "playerTeacherAvatar", "Emmene-la faire un tour pour parler a des enseignants et recueillir des informations sur eux. Qu'est-ce qui les a aides a etre des candidats performants ici ?" ],
        [ "playerTeacherAvatar", "Prends ton temps!" ],
        [ "playerTeacherAvatar", "Une fois que toi et K.A.T.E. aurez rassemble toutes les informations necessaires pour prendre une decision eclairee, reviens ici et nous verrons ce qu'elle suggere..." ],
        [ "playerTeacherAvatar", "et si tu es d'accord avec elle!" ],
    ];

    let curDialog = 0;

    // Cycle through the dialogs
    onKeyPress("space", () => {
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
            go("corridorFR")
        };
    };
    // Initialising the dialogue
    updateDialog();
});

//////////////////////////////////////////////////// Scene 4: corridor /////////////////////////////////////////////////////////////////
scene("corridorFR", () =>{
    const music = play("corridorAmbient", {
        loop:true
    }); 
    let map = add([
        sprite("schoolMap"),
        pos(width() / 2, height() / 2),
        anchor("center"),
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
            pos(11, 238),
            rect(6, 110),
            opacity(0),
            color(255, 255, 0),
            area(),
            solid(),
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
        anchor("center"),
        pos(playerPos),
        area(),
        scale(0.10),
        solid(),
        ]);

    overWorldPlayer.onUpdate(() => {
    });
    // Adding movements to the player:
    let playerSpeed = 300
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
            anchor("center"),
            pos(center().x + 100, height() - 125),
            outline(2),
        ]);
        textbox.hidden = true;
        const portrait = add([
            rect(200, 120, {radius: 32}),
            anchor("center"),
            pos(center().x - 450, height() - 125),
            outline(2),
            "portrait"
        ]);
        portrait.hidden = true;
        const avatar = add([
            sprite("KATE"),
            scale(0.3),
            anchor("center"),
            pos(portrait.pos),
        ]);
        avatar.hidden = true
        const txt = add([
            text("", { 
                size: 32, 
                width: 800,
                font: "monospace",
                // align: "center"
                }),
            color([0, 0, 0]),
            pos(textbox.pos),
        ]);
        txt.hidden = true
    // A function that deletes the text boxes once the dialogue is finished
    function deleEverything (){
        textbox.hidden = true;
        avatar.hidden = true; 
        portrait.hidden = true;
        txt.hidden = true
        playerSpeed = 300
    };

    // A function to update the dialogues (for objects with minimal interaction)
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1];
        playerSpeed = 0} else {
            deleEverything();
            v = 0
        };
    };
    // Two functions to update the dialogues (for doors from which to access the teachers)
    function YorNChoiceDoor (string){
        portrait.hidden = true;
        avatar.hidden = true;
        textbox.hidden = false;
        txt.text = "Appuyez sur [Y] si vous voulez entrer, ou [N] si vous ne voulez pas.";
    onKeyPress("y", () => {
        go(string)
    });
    onKeyPress("n", () => {
        deleEverything();
    });
    };
    function updateDoorsDialog(v, t, string) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1];
        playerSpeed = 0;
        }
        else if (v > t.length){
            YorNChoiceDoor(string);
        };
    };

    // A) Interaction with LOCKERS when player presses space while touching them
    let lockerD = ["Oh, est-ce qu'on cherche des professeurs caches dans des casiers ? Quels farceurs!", "C'est une tradition a l'ecole que les professeurs s'enferment la-dedans ?", "Peut-etre que c'est leur coin tranquille ?", "En tout cas, on dirait qu'il n'y a personne la-dedans.", "On continue ?"];
    let lockerDialog = 0;
    onKeyPress("space", () => {
        play("spacePress")
        every("locker", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            lockerDialog += 1;
            wait(0.3,() => {
                updateDialog(lockerDialog, lockerD);
            });
        }; 
        });
    });

    // B) Interaction with CORRIDOR PLANTS when player presses space while touching them
    let plantsD = ["Quelle belle plante verte ! Et c'est une vraie en plus !", "Sais-tu que la presence de telles plantes peut attenuer les sentiments d'anxiete et de stress ?", "Cela peut aider a se sentir plus en paix... et plus calme...", "C'est un peu comme mettre une decoration dans la maison de tes Sims.", "Je suppose que si un moment de calme dans un casier n'aide pas, une plante verte peut sûrement apaiser tes professeurs.", "La nature est precieuse."];
    let plantDialog = 0;
    onKeyPress("space", () => {
        every("plant", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            plantDialog += 1;
            wait(0.3,() => {
                updateDialog(plantDialog, plantsD);
            });
        }; 
        });
    });

    // C) Interaction with BATHROOM DOOR when player presses space when touching it
    let bathroomD = ["Oh, tu as besoin d'aller aux WC ?", "Vas-y, je t'attends ici alors.", "...", "...", "...", "Ok? Allons-y !"];
    let bathroomDialog = 0;
    onKeyPress("space", () => {
        every("bathroomDoor", (c) => {
        if (overWorldPlayer.isTouching(c)) {
            bathroomDialog += 1;
            wait(0.3,() => {
                updateDialog(bathroomDialog, bathroomD);
            });
        }; 
        });
    });

    // D) Interactions with DOORS 
    // Interactions with doors that lead to teachers or the headmaster vary depending on weather the player has already visited the room in question or not
    // a) Maths Door
    let mathsDoorD = ["C'est la porte de la classe de maths, n'est-ce pas ?", "M. Parker devrait etre la.", "Allons-nous lui parler de son experience en tant que candidat retenu pour enseigner dans cette ecole ?", "Il pourrait avoir de precieuses informations...", "afin que je puisse suggerer la meilleure personne pour le poste d'enseignant de sciences !"];
    let mathsDoorD2 = ["Nous avons deja parle a ton professeur de maths, tu te souviens ?", "J'aime bien ses lunettes rouges.", "Tu es sûr de vouloir lui rendre visite a nouveau ?"];
    let mathsDoorDialog = 0;
    if (mathsPoint == 0){
        onKeyPress("space", () => {
            every("mathsDoor", (c) => {
            if (mathsDoorDialog <= mathsDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    mathsDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(mathsDoorDialog, mathsDoorD, "mathsClassFR");
                        console.log(mathsDoorDialog)
                    });
                };
            } else {
                mathsDoorDialog = 0
            }; 
            });
        });
    } else if (mathsPoint > 0) {
        onKeyPress("space", () => {
            every("mathsDoor", (c) => {
            if (mathsDoorDialog <= mathsDoorD2.length){
                if (overWorldPlayer.isTouching(c)) {
                    mathsDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(mathsDoorDialog, mathsDoorD2, "mathsClassFR");
                    });
                };
            } else {mathsDoorDialog = 0} 
            });
        });
    };

    // b) Science Door
    let scienceDoorD = ["C'est la porte de la classe de maths, n'est-ce pas ?", "M. MacKenzie devrait etre la.", "Allons-nous lui parler de son experience en tant que candidat retenu pour enseigner dans cette ecole ?", "Il pourrait avoir de precieuses informations...", "afin que je puisse suggerer la meilleure personne pour le poste d'enseignant de sciences !"];
    let scienceDoorD2 = ["Nous avons deja visite cette classe, tu es sûr de vouloir y retourner ?"];
    let scienceDoorDialog = 0;
    if (sciencePoint == 0){
        onKeyPress("space", () => {
            every("scienceDoor", (c) => {
            if (scienceDoorDialog <= scienceDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    scienceDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(scienceDoorDialog, scienceDoorD, "scienceClassFR");
                    });
                }; 
            } else {
                scienceDoorDialog = 0;
            };
            });
        });
    } else if (sciencePoint > 0){
        onKeyPress("space", () => {
            every("scienceDoor", (c) => {
            if (scienceDoorDialog <= scienceDoorD2.length){
                if (overWorldPlayer.isTouching(c)) {
                    scienceDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(scienceDoorDialog, scienceDoorD2, "scienceClassFR");
                    });
                }; 
            } else {
                scienceDoorDialog = 0;
            };
            });
        }); 
    };

    // c) Headmaster's office
    let HMDoorD = ["C'est le bureau du directeur Umbridge.", "Nous pouvons consulter les CV du personnel enseignant ici et obtenir des informations supplementaires precieuses sur ce qui a fait d'eux des candidats reussis.", "Il sera egalement bon de discuter avec M. Umbridge.", "Apres tout, c'est lui qui les a tous embauches.", "Il a fixe la norme de ce que nous recherchons pour un nouveau professeur de sciences !", "Plus je rassemble d'informations sur les d'enseignants retenus, plus ma suggestion de candidat correspondra a l'ethique de l'ecole !"];
    let HMDoorD2 = ["J'ai vraiment apprecie notre conversation avec le directeur, mais je pense me souvenir de tout ce dont nous avons parle.", "Il pourrait etre interessant de jeter un autre coup d'œil a ces CV, juste pour etre sûr que nous avons tout ce dont nous avons besoin", "Veux-tu y retourner et y jeter un autre coup d'œil ?"];
    let HMDoorDialog = 0;
    if (headmPoint == 0) {
        onKeyPress("space", () => {
            every("headMastersDoor", (c) => {
            if (HMDoorDialog <= HMDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    HMDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(HMDoorDialog, HMDoorD, "headMasterFR");
                    });
                }; 
            } else {
                HMDoorDialog = 0;
            };
            });
        });
    } else if (headmPoint > 0){
        onKeyPress("space", () => {
            every("headMastersDoor", (c) => {
            if (HMDoorDialog <= HMDoorD2.length){
                if (overWorldPlayer.isTouching(c)) {
                    HMDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(scienceDoorDialog, HMDoorD2, "cvsFR");
                    });
                }; 
            } else {
                HMDoorDialog = 0;
            };
            });
        });
    };

    // d) Player class
    let PCNotReadyDoorD = ["Je ne sais pas pour toi, mais je ne pense pas que nous ayons recueilli assez de donnees pour prendre une decision eclairee pour l'instant...", "Devrions-nous explorer les autres classes avant de revenir ?"];
    let PCReadyDoorD = ["Eh bien, nous avons discute avec beaucoup de gens aujourd'hui.", "Je pense que j'ai maintenant une bonne idee du genre de personne qui conviendrait le mieux au poste. Et toi ?", "Devrions-nous entrer et choisir le meilleur candidat pour le poste ?"];
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
            if (PCDoorDialog <= PCReadyDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    PCDoorDialog += 1;
                wait(0.3,() => {
                    updateDoorsDialog(PCDoorDialog, PCReadyDoorD, "playerClassFR")});
                };
            } else {
                PCDoorDialog = 0;
            };
            });
        });
    };

    // e) English class
    let englishDoorD = ["Voici la classe d'anglais.", `He, ${namePlayer}, ecoute celle-la:` , "The past, present and future walk into a bar...", "It was tense.", "...", "......", "Bref, voyons si M. Moore est disponible.",];
    let englishDoorD2 = ["Ah de retour a la classe d'anglais !", "'We know what we are, but know not what we may be'.", "Excellent ce Shakespeare. Voudrais-tu parler a nouveau a M. Moore ?"];
    let englishDoorDialog = 0;
        if (englishPoint == 0){
        onKeyPress("space", () => {
            every("englishDoor", (c) => {
            if (englishDoorDialog <= englishDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    englishDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(englishDoorDialog, englishDoorD, "englishClassFR");
                    });
                };
            } else {
                englishDoorDialog = 0;
            }; 
            });
        }); 
    } else if (englishPoint > 0){
        onKeyPress("space", () => {
            every("englishDoor", (c) => {
            if (englishDoorDialog <= englishDoorD2.length){
                if (overWorldPlayer.isTouching(c)) {
                    englishDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(englishDoorDialog, englishDoorD2, "englishClassFR");
                    });
                }; 
            } else {
                englishDoorDialog = 0;
            };
            });
        });
    };  

    // f) Art Door
    let artDoorD = ["Voici la classe d'art.", "Mme Lefebvre doit nous attendre.", "Decouvrons comment s'est passee son embauche.", "Je suis sûr qu'elle aura des choses interessantes a nous dire.",];
    let artDoorD2 = ["De retour ici ? Mme Lefebvre nous a ete tres utile.", "J'aimerais bien avoir une meche bleue dans les cheveux comme elle.", "Tu veux lui reparler ?"];
    let artDoorDialog = 0;
    if (artPoint == 0){
        onKeyPress("space", () => {
            every("artDoor", (c) => {
            if (artDoorDialog <= artDoorD.length){
                if (overWorldPlayer.isTouching(c)) {
                    artDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(artDoorDialog, artDoorD, "artClassFR");
                    });
                };
            } else {
                artDoorDialog = 0;
            }; 
            });
        }); 
    } else if (artPoint > 0){
        onKeyPress("space", () => {
            every("artDoor", (c) => {
            if (artDoorDialog <= artDoorD2.length){
                if (overWorldPlayer.isTouching(c)) {
                    artDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(artDoorDialog, artDoorD2, "artClassFR");
                    });
                };
            } else {
                artDoorDialog = 0;
            }; 
            });
        });  
    }
});

//////////////////////////////////////////////////// Scene 5: Maths class /////////////////////////////////////////////////////////////////
scene("mathsClassFR", () =>{
    let classRoom = add([
        sprite("mathClassroom"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const mathsTeacher = add([
        sprite("mathsTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    const dialogs = [
        [ "mathsTeacherAvatar", `${namePlayer}!` ],
        [ "mathsTeacherAvatar", "Votre professeur m'a dit de m'attendre a ce qu'un de ses eleves passe me voir." ],
        [ "mathsTeacherAvatar", "Alors tu es l'eleve chanceux qui a ete jumele avec K.A.T.E., hein ?" ],
        [ "mathsTeacherAvatar", "Je comprends que tu es ici pour me demander comment j'ai ete engage ici." ],
        [ "mathsTeacherAvatar", "C'etait plutôt un heureux hasard pour etre honnete." ],
        [ "mathsTeacherAvatar", "Je connais M. Umbridge, notre directeur, depuis un bon moment..." ],
        [ "mathsTeacherAvatar", "depuis que je suis adolescent, en fait !" ],
        [ "mathsTeacherAvatar", "Il etait mon voisin." ],
        [ "mathsTeacherAvatar", "Papa et lui sont devenus tres amis. Ils allaient a la peche ensemble. Je les ai meme accompagnes quelques fois." ],
        [ "mathsTeacherAvatar", "Quand j'ai obtenu mon diplôme universitaire, M. Umbridge m'a meme ecrit une lettre de recommandation elogieuse...  comme une faveur personnelle bien sûr." ],
        [ "mathsTeacherAvatar", "La concurrence etait rude a l'epoque." ],
        [ "mathsTeacherAvatar", "J'ai passe quelques mois a essayer d'obtenir un poste d'enseignant, mais helas, en vain." ],
        [ "mathsTeacherAvatar", "Puis M. Umbridge m'a contacte pour me demander comment se passait ma recherche d'emploi. Quand je lui ai dit que j'avais des difficultes..." ],
        [ "mathsTeacherAvatar", "Il m'a engage sur le champ !" ],
        [ "mathsTeacherAvatar", "Je n'ai meme pas eu a passer d'entretien." ],
        [ "KATE", "Oh ? Je ne peux qu'en conclure que vos qualifications devaient etre parfaitement adaptees au poste !" ],
        [ "mathsTeacherAvatar", "Eh bien, oui. Je n'avais peut-etre aucune experience de l'enseignement a l'epoque, mais j'ai prouve ma valeur depuis..." ],
        [ "mathsTeacherAvatar", `N'est-ce pas, ${namePlayer}!` ],
        [ "mathsTeacherAvatar", "Apres tout, la plupart de mes etudiants obtiennent de bonnes notes." ],
        [ "mathsTeacherAvatar", "Et j'ose dire que notre cher directeur m'a fait confiance pour vous enseigner les maths des le debut de ma carriere." ],
        [ "KATE", "Une relation positive et de longue date avec le directeur semble donc etre un facteur tres important !" ],
        [ "mathsTeacherAvatar", "Hm. Il est toujours bon d'entretenir de bons rapports avec le patron !" ],
        [ "mathsTeacherAvatar", "Cela me fait penser..." ],
        [ "mathsTeacherAvatar", `${namePlayer}, n'oublie pas de rendre tes devoirs de maths a temps cette semaine.` ],
        [ "mathsTeacherAvatar", "Je commence a avoir du mal a croire que ton animal de compagnie a recemment pris un tel goût pour vandaliser tes travaux." ],
        [ "mathsTeacherAvatar", "Quoi qu'il en soit, si vous souhaitez obtenir plus de details sur le processus d'embauche vous pouvez consulter mon ancien CV dans le bureau du directeur." ],
        [ "mathsTeacherAvatar", "Il contiendra de plus amples informations." ],
        [ "KATE", "Excellent ! Il me sera tres utile pour apprendre et remplir ma mission aujourd'hui !" ],
        [ "mathsTeacherAvatar", "Bien sûr. Je suppose que je compte parmi les 'ensembles de donnees' qui alimentent ton cerveau, K.A.T.E." ],
        [ "KATE", "Correct !" ],
        [ "mathsTeacherAvatar", "Eh bien, je vous souhaite bonne chance." ],
        [ "mathsTeacherAvatar", "Et si vous voyez le directeur, dites-lui que je suis disponible pour notre partie de peche samedi prochain, d'accord ?" ],
    ];
    let curDialog = 0;
    const avatar = add([
        sprite("mathsTeacherAvatar"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
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
            go("corridorFR")
            playerPoints += 1;
            mathsPoint += 1;
            playerPos = [316, 255];
        };
    };
    updateDialog()
});

//////////////////////////////////////////////////// Scene 6: Science class /////////////////////////////////////////////////////////////////
scene("scienceClassFR", () =>{
    let classRoom = add([
        sprite("scienceClassroom"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const scienceTeacher = add([
        sprite("scienceTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);

    const dialogs = [
        [ "scienceTeacherAvatar", `Eh bien, si ce n'est pas ${namePlayer}.` ],
        [ "scienceTeacherAvatar", "hop hop hop... " ],
        [ "scienceTeacherAvatar", "Avant que tu ne dises quoi que ce soit, laisse-moi juste dire ceci une fois bonne fois pour toute :" ],
        [ "scienceTeacherAvatar", `${namePlayer}, ne penses meme pas a toucher ce bec Bunsen.` ],
        [ "scienceTeacherAvatar", "Ton sourcil gauche a enfin repousse et je refuse d'etre tenu responsable de ton etourderie." ],
        [ "KATE", "Vous semblez prendre les precautions de securite tres au serieux !" ],
        [ "scienceTeacherAvatar", "Tu veux dire que je prends au serieux le fait que mes eleves passent l'annee en un seul morceau." ],
        [ "scienceTeacherAvatar", "C'est vraiment tout ce qui compte ici. Les etudiants qui reussissent signifient que le taux de reussite de l'ecole augmente." ],
        [ "scienceTeacherAvatar", "Le taux de reussite de l'ecole augmente signifie que mon palmares reste intact." ],
        [ "scienceTeacherAvatar", "Et si mon palmares reste intact, j'obtiens mon bonus a la fin de chaque annee scolaire." ],
        [ "KATE", "Tres pragmatique..." ],
        [ "scienceTeacherAvatar", "Les resultats sont les seules vraies mesures du succes." ],
        [ "scienceTeacherAvatar", `Je t'invite a reflechir a cela, ${namePlayer}, concernant le test de la semaine prochaine.`],
        [ "KATE", `${namePlayer} m'accompagne dans ma mission pour collecter des donnees et apprendre des personnes embauchees avec succes dans cette ecole...`],
        [ "KATE", "afin que je puisse suggerer le meilleur candidat possible pour le poste du nouveau professeur de sciences." ],
        [ "scienceTeacherAvatar", "C'est tout ? Bien, alors je vais garder mon histoire breve." ],
        [ "scienceTeacherAvatar", "J'ai ete embauche par M. Umbridge a la sortie de l'universite." ],
        [ "scienceTeacherAvatar", "J'ai eu d'excellentes notes tout au long de mes etudes. Elles parlaient d'elles-memes." ],
        [ "scienceTeacherAvatar", "S'entraîner et repeter, s'entraîner et repeter, s'entraîner et repeter... C'etait ma devise." ],
        [ "scienceTeacherAvatar", "Ok, je n'avais aucune experience de l'enseignement au moment où j'ai obtenu mon diplôme." ],
        [ "scienceTeacherAvatar", "Mais cela n'avait pas d'importance, car j'ai obtenu mon diplôme dans les cinq premiers pour cent de ma promotion." ],
        [ "scienceTeacherAvatar", "Sans compter qu'a l'epoque, je n'avais meme pas envisage d'enseigner comme carriere." ],
        [ "scienceTeacherAvatar", "Mon CV a ete envoye a des employeurs potentiels et j'ai fini par obtenir un entretien avec notre directeur." ],
        [ "scienceTeacherAvatar", "La decision s'est faite entre moi et cette autre candidate." ],
        [ "scienceTeacherAvatar", "Elle etait titulaire d'un post-doctorat en genie biologique du MIT de Boston et avait quelques annees de travail en laboratoire a son actif. Sans compter qu'elle avait supervise des etudiants de premier cycle tout au long de ses etudes superieures." ],
        [ "scienceTeacherAvatar", "Quand je l'ai rencontree, j'ai pense qu'elle obtiendrait le poste a coup sûr. Elle etait beaucoup trop experimentee pour le poste." ],
        [ "KATE", "Il y a sûrement quelque chose qui vous a fait sortir du lot !" ],
        [ "scienceTeacherAvatar", "Il s'avere que nos entretiens se sont deroules de maniere tres differente. Je me suis mieux entendu avec M. Umbridge." ],
        [ "scienceTeacherAvatar", `D'apres lui elle presentait "une future responsabilite potentielle".` ],
        [ "scienceTeacherAvatar", "Il m'a dit plus tard qu'il s'etait avere qu'elle venait de se marier et qu'il ne voulait pas s'occuper d'un eventuel conge de maternite." ],
        [ "scienceTeacherAvatar", "Donc... j'ai eu le job." ],
        [ "scienceTeacherAvatar", "Depuis lors, j'ai prouve ma valeur et les resultats de nos eleves en sciences n'ont jamais ete aussi bons." ],
        [ "KATE", "La satisfaction et le succes des etudiants semblent importants pour vous." ],
        [ "scienceTeacherAvatar", "Leurs notes refletent mes performances... Et mes performances sont ce qui compte pour moi." ],
        [ "scienceTeacherAvatar", "La satisfaction des eleves... compte moins pour moi que les notes." ],
        [ "scienceTeacherAvatar", `T'as compris, ${namePlayer}? Si tu passes l'annee tu pourras jouer avec les becs Bunsen a ta guise. D'ici la, je te surveille.`],
        [ "scienceTeacherAvatar", "..." ],
        [ "scienceTeacherAvatar", `Tu peux rouler des yeux autant que tu veux, ${namePlayer}, mais ça doit etre dit : je ne suis pas aussi indulgent que Mme Lefebvre. Elle dorlote trop ses eleves. ` ],
        [ "KATE", "Merci pour votre temps, M. Mackenzie." ],
        [ "scienceTeacherAvatar", "Bien, bien. Maintenant, filez." ],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("scienceTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ])
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
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
            go("corridorFR")
            playerPoints += 1;
            sciencePoint += 1;
            playerPos = [818, 255];
        }
    };
    updateDialog()
});

//////////////////////////////////////////////////// Scene 7: Headmaster's office /////////////////////////////////////////////////////////////////
scene("headMasterFR", () =>{
    let classRoom = add([
        sprite("headmasterBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const headmaster = add([
        sprite("headmaster"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);

    const dialogs = [
        [ "headmasterAvatar", `${namePlayer}! Je suppose que tu as ete choisi pour travailler avec K.A.T.E. afin de tester notre nouveau processus d'embauche, hein ?` ],
        [ "headmasterAvatar", "Je dirais que tout cela semble un peu alambique... apres tout, mes decisions en matiere d'embauche sont presque toujours correctes, si je peux me permettre." ],
        [ "headmasterAvatar", `Mais le conseil d'administration de l'ecole pense qu'on doit "s'adapter a son temps" donc...` ],
        [ "headmasterAvatar", "dans tous les cas, tes commentaires a la fin de cette petite experience nous seront d'une grande utilite." ],
        [ "KATE", "Merci, Mr. Umbridge!" ],
        [ "headmasterAvatar", "Eh bien, ne me remerciez pas encore. Voyons d'abord quelles sont vos recommandations d'embauche. Et K.A.T.E., essaye de t'y prendre logiquement, d'accord ?" ],
        [ "headmasterAvatar", "Je sais que les filles ont tendance a etre emotives a propos des choses, mais le succes de cette ecole depend de bonnes pratiques d'embauche." ],
        [ "KATE", "Je peux vous assurer monsieur, que mes recommandations seront choisies avec la plus grande rationalite. Apres tout, j'ai passe tout mon temps ici a observer et a apprendre de vos propres employes !" ],
        [ "KATE", "(et je ne suis pas une fille, je suis une Intelligence Artificielle !)" ],
        [ "headmasterAvatar", "Hm, quoi ?" ],
        [ "headmasterAvatar", "Bref, de toute maniere j'ai pratiquement deja decide qui je voudrais engager. Je suis interesse de voir qui vous allez recommander tous les deux." ],
        [ "KATE", "Parler directement aux enseignants ici m'a permis de me faire une idee du type de profil que vous recherchez, mais il serait egalement utile de jeter un coup d'oeil a leurs CV." ],
        [ "KATE", "Apres tout, c'est l'un des moyens principal par lequel les gens sont embauches." ],
        [ "headmasterAvatar", "En effet. Vous pouvez les consulter ici dans mon bureau." ],       
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("headmasterAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ])
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
        wait(0.3,() => {
        updateDialog()})
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char))
	txt.text = dialog       
        txt.text = dialog} else {
            go("cvsFR")
            playerPoints += 1;
            headmPoint += 1;
        }
    };
    updateDialog();
});

//////////////////////////////////////////////////// Scene 7.1 - Consult CV's of  current teachers /////////////////////////////////////////////////////////////////
scene("cvsFR", () => {
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    let artCV = add([
        sprite("ArtteachFR"),
        pos(300, height()/2),
        scale(0.15),
        anchor("center"),
        fixed()
    ]);
    let mathCV = add([
        sprite("mathTeachFR"),
        pos(430, height()/2),
        scale(0.17),
        anchor("center"),
        fixed()
    ]);
    let scienceCV = add([
        sprite("scienceTeachFR"),
        pos(670, height()/2),
        scale(0.18),
        anchor("center"),
        fixed()
    ]);
    let englishCV = add([
        sprite("englishTeachFR"),
        pos(850, height()/2),
        scale(0.19),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text(`So ${namePlayer},`, { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hideen = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    function ChoiceCv (){
        txt.text = "Appuyez sur [A] pour voir le CV de votre professeur d'anglais, [B] pour voir le CV de votre professeur de mathematiques, [C] pour voir le CV de votre professeur de sciences et [D] pour voir le CV de votre professeur d'arts.";
        onKeyPress("a", () => {
            go("1FR")
        });
        onKeyPress("b", () => {
            go("2FR") 
        });
        onKeyPress("c", () => {
            go("3FR")
        });
        onKeyPress("d", () => {
            go("4FR")
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
                txt.text = "Appuyez sur la barre espace pour retourner au couloir principal."
                onKeyPress("space", () => {
                    play("door")
                    go("corridorFR")
                    playerPos = [151, 326]
                })
            } else {
                ChoiceCv()
            };
        };
    };
    // Dialogue for when player first enters the scene
    let cvDialog = ["Voici les quatre CV que nous pouvons examiner pour avoir une meilleure idee de la personne a engager."];
    // Dialogue for when the player has seen at least 4 CV's
    let cvDialog2 = ["C'etait tres instructif!", "Maintenant je suis mieux qui recommander!"];
    // Dialogue for when the player comes back to the overview without having read at least four 4 CV's
    let cvDialog3 = ["C'etait vraiment interessant.", "Devrions-nous en examiner d'autres?"];
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
    };
});

//////////////////////////////////////////////////// Scene 7.1.1: A - English teacher CV /////////////////////////////////////////////////////////////////
scene("1FR", () => {
    cvReadCounter += 1; 
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    let CV1 = add([
        sprite("englishTeachFR1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("englishTeachFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur [B] pour voir le CV de votre professeur de mathematiques, [C] pour voir le CV de votre professeur de sciences, et [D] pour voir le CV de votre professeur d'arts. Appuyez sur la barre espace pour quitter.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    onKeyPress("space", () => {
        go("cvsFR"); 
    });
    onKeyPress("b", () => {
        go("2FR"); 
    });
    onKeyPress("c", () => {
        go("3FR");
    });
    onKeyPress("d", () => {
        go("4FR")
    });
});
//////////////////////////////////////////////////// Scene 7.1.2: CV B - Math Teacher CV /////////////////////////////////////////////////////////////////
scene("2FR", () => {
    cvReadCounter += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("mathTeachFR1"),
        pos(400, height()/2),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("mathTeachFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur [A] pour voir le CV de votre professeur d'anglais, sur [C] pour voir le CV de votre professeur de sciences et sur [D] pour voir le CV de votre professeur d'arts. Appuyez sur la barre espace pour quitter.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    onKeyPress("space", () => {
        go("cvsFR"); 
    });
    onKeyPress("a", () => {
        go("1FR");
    });
    onKeyPress("c", () => {
        go("3FR");
    });
    onKeyPress("d", () => {
        go("4FR")
    });
});

//////////////////////////////////////////////////// Scene 7.1.3: CV C - Science Teach CV /////////////////////////////////////////////////////////////////
scene("3FR", () => {
    cvReadCounter += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("scienceTeachFR1"),
        pos(400, height()/2),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("scienceTeachFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur [A] pour voir le CV de votre professeur d'anglais, [B] pour voir le CV de votre professeur de mathematiques et [D] pour voir le CV de votre professeur de lettres. Appuyez sur la barre espace pour quitter.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    onKeyPress("space", () => {
        go("cvsFR"); 
    });
    onKeyPress("a", () => {
        go("1FR"); 
    });
    onKeyPress("b", () => {
        go("2FR");
    });
    onKeyPress("d", () => {
        go("4FR")
    });
});

//////////////////////////////////////////////////// Scene 7.1.4: CV D - Art Teacher CV /////////////////////////////////////////////////////////////////
scene("4FR", () => {
    cvReadCounter += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    let CV1 = add([
        sprite("artTeachFR1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("artTeachFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur [A] pour voir le CV de votre professeur d'anglais, [B] pour voir le CV de votre professeur de mathematiques, et [C] pour voir le CV de votre professeur de sciences. Appuyez sur la barre espace pour quitter.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    onKeyPress("space", () => {
        go("cvsFR"); 
    });
    onKeyPress("a", () => {
        go("1FR"); 
    });
    onKeyPress("b", () => {
        go("2FR");
    });
    onKeyPress("c", () => {
        go("3FR")
    });
});

//////////////////////////////////////////////////// Scene 8: English class /////////////////////////////////////////////////////////////////
scene("englishClassFR", () =>{
    let classRoom = add([
        sprite("englishClassroom"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const englishTeacher = add([
        sprite("englishTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    const dialogs = [
        [ "englishTeacherAvatar", "Bonjour!" ],
        [ "englishTeacherAvatar", `C'est ${namePlayer}, n'est-ce pas ?` ],
        [ "englishTeacherAvatar", "Desole si je pose cette question, mais tu peux imaginer combien il est difficile de memoriser tant de nouveaux prenoms..." ],
        [ "KATE", "Oh? Vous etes un nouvel enseignant ?" ],
        [ "englishTeacherAvatar", "Je travaille ici depuis seulement deux semaines. Je suis professeur remplaçant pour Mme Smith." ],
        [ "KATE", "Parfait ! Votre experience concernant le processus d'embauche ici est donc la plus recente." ],
        [ "KATE", "Vous serez certainement tres utile pour recueillir des donnees sur les pratiques d'embauche actuelles dans cette ecole." ],
        [ "englishTeacherAvatar", "Bien sur, mais je dois vous avertir que mon experience n'est en aucun cas ce qu'on pourrait appeler 'typique'." ],
        [ "englishTeacherAvatar", "J'ai eu vent que le directeur de l'ecole cherchait desesperement a trouver un remplaçant le plus rapidement possible pour remplacer une femme qui a dû partir en conge de maternite." ],
        [ "englishTeacherAvatar", "J'ai entendu dire qu'elle attendait des jumeaux donc entre vous et moi... Je pense qu'elle ne pourra pas revenir au travail de sitôt." ],
        [ "KATE", "Vous cherchez a garder ce poste indefiniment ?" ],
        [ "englishTeacherAvatar", "Je veux dire... personne ne l'a forcee a avoir des enfants. Ce n'est que justice que j'aie une chance d'avoir le poste de façon permanente." ],
        [ "KATE", "Et si elle veut revenir a son poste d'enseignant apres avoir eu ses enfants ?" ],
        [ "englishTeacherAvatar", "Appelez ça une competition amicale. Offre et demande et tout ça." ],
        [ "englishTeacherAvatar", "Ecoutez, je comprends... honnetement je comprends." ],
        [ "englishTeacherAvatar", "Apres tout, quand ma femme a eu des enfants, elle a dû arreter de travailler pour s'occuper des petits coquins a plein temps." ],
        [ "englishTeacherAvatar", `C'est comme ça que ces choses doivent se passer. Moi, je ne presente pas de "risques futurs".`],
        [ "englishTeacherAvatar", "Ce sont les mots du directeur, pas les miens." ],
        [ "englishTeacherAvatar", "On s'entend bien lui et moi. Il a un bon groupe de gars qui travaillent ici." ],
        [ "englishTeacherAvatar", "Nous allons meme a la peche ensemble de temps en temps." ],
        [ "englishTeacherAvatar", "Nous nous entendons bien. Je me sens deja comme si j'etais a ma place ici. M. Mackenzie m'a pris sous son aile, m'a montre les ficelles du metier. Les choses se passent bien pour moi ici." ],
        [ "KATE", "Les bons rapports entre collegues sont importants pour favoriser un environnement de travail productif." ],
        [ "englishTeacherAvatar", "Exactement. C'est pas de ma faute si je m'integre mieux. Les gars et moi sommes d'accord sur beaucoup de choses. Nous nous entendons bien." ],
        [ "KATE", "Avez-vous eu de la concurrence pour obtenir le poste de remplaçant ?" ],
        [ "englishTeacherAvatar", "Pas vraiment. J'ai beaucoup d'experience dans ce domaine et je m'assure que mes eleves travaillent avec assiduite." ],
        [ "englishTeacherAvatar", "J'ai du faire quelques changements dans ma methode." ],
        [ "englishTeacherAvatar", "Il me semble que les enfants ici sont devenus trop complaisants avec leur travail. Pas assez de William Wordsworth, trop de Neil Gaiman." ],
        [ "englishTeacherAvatar", "Je ne suis pas pret d'encourager toutes ces foutaises de 'justice sociale' ici." ],
        [ "KATE", "Vous surveillez de pres le contenu litteraire que vos eleves consomment ?" ],
        [ "englishTeacherAvatar", "Les parents nous confient leurs enfants pour qu'on leur enseigne correctement. Ils sont ici pour reussir dans la vie, pas pour perdre leur temps a divertir des notions frivoles." ],
        [ "KATE", "Votre devouement a la reussite de vos eleves est admirable." ],
        [ "englishTeacherAvatar", `Leur succes est mon succes, n'est-ce pas, ${namePlayer}?` ],
        [ "englishTeacherAvatar", "M. Mackenzie a la bonne idee sur ce point, je vous le dis." ],
        [ "KATE", "Merci pour votre temps. J'ai hate de consulter votre CV pour completer ma collecte de donnees." ],
        [ "englishTeacherAvatar", "Pas de soucis. Je me rejouis de rencontrer bientôt mon nouveau collegue." ],
        [ "englishTeacherAvatar", "On pourra l'emmener faire une partie de peche entre mecs." ],        
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("englishTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        // Sound: 
        play("click");
        curDialog = (curDialog + 1);
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
            go("corridorFR")
            playerPoints += 1;
            englishPoint += 1;
            playerPos = [605, 324];
        };
    };
    updateDialog();
});

//////////////////////////////////////////////////// Scene 9: Art class /////////////////////////////////////////////////////////////////
scene("artClassFR", () =>{
    let artClass = add([
        sprite("artClassroom"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const artTeacher = add([
        sprite("artTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    const dialogs = [
        [ "artTeacherAvatar", ` Oh, si ce n'est pas ${namePlayer}! Bienvenue, bienvenue!` ],
        [ "artTeacherAvatar", "Et ceci doit etre K.A.T.E. ! J'ai tellement entendu parler de toi !" ],
        [ "KATE", "Je suis a votre service !" ],
        [ "artTeacherAvatar", "Comme c'est charmant. Je suppose que vous etes tous deux ici pour en savoir plus sur mon experience d'embauche ici." ],
        [ "artTeacherAvatar", "Ça me semblait etre une progression naturelle dans ma carriere, vous voyez." ],
        [ "artTeacherAvatar", "J'ai toujours ete passionnee par l'art. A tel point que j'ai etudie l'art et l'histoire de l'art pendant des annees, jusqu'a l'obtention de mon doctorat !" ],
        [ "artTeacherAvatar", "Finalement, j'ai ouvert ma propre galerie d'art." ],
        [ "KATE", "Vous avez plusieurs diplômes et une galerie d'art a votre nom? Tres impressionnant !" ],
        [ "artTeacherAvatar", "Oh merci mon chou. Ma galerie est vraiment l'une de mes plus grandes reussites. Plus importante que n'importe quelle qualification universitaire, dans le grand schema des choses..." ],
        [ "artTeacherAvatar", "Partager l'art qui emeut l'ame, encourager les artistes a poursuivre leur art... C'est l'une des plus grandes joies de ma vie" ],
        [ "artTeacherAvatar", "Une fois que mon mari a pris sa retraite, nous avons demenage dans une petite maison tranquille pas trop loin d'ici." ],
        [ "artTeacherAvatar", "Ma galerie d'art avait eu tellement de succes que nous ne manquions de rien." ],
        [ "artTeacherAvatar", "Mais mon amour pour l'art et sa diffusion n'a jamais diminue. J'avais l'impression que quelque chose manquait dans ma vie." ],
        [ "artTeacherAvatar", "Et puis j'ai realise... Quelle meilleure façon de canaliser ma passion que d'enseigner l'art aux jeunes ?" ],
        [ "artTeacherAvatar", "Encourager les jeunes esprits curieux a trouver la beaute et le confort dans le monde qui les entoure." ],
        [ "artTeacherAvatar", "J'ai donc envoye mon CV a M. Umbridge." ],
        [ "KATE", "Vous etiez motivee par l'amour du metier. Quelle inspiration !" ],
        [ "artTeacherAvatar", "Oui, et aussi mon amour pour le partage de cette passion ! Les etudiants ici sont tous si creatifs. Ils ne cessent de m'inspirer." ],
        [ "artTeacherAvatar", `${namePlayer}, ta derniere oeuvre etait si astucieuse.` ],
        [ "artTeacherAvatar", "Qui aurait cru que des pates seches et de la colle a paillettes pouvaient se reunir dans une telle harmonie poetique." ],
        [ "KATE", "Comment s'est passe le processus d'embauche ?" ],
        [ "artTeacherAvatar", "Eh bien... C'etait etonnamment difficile." ],
        [ "artTeacherAvatar", "J'avais suppose, peut-etre betement, que mes nombreux diplômes et qualifications auraient rendu toute cette epreuve plus facile..." ],
        [ "artTeacherAvatar", "mais cette experience etait longue et ardueuse." ],
        [ "artTeacherAvatar", "J'ai eu trois series d'entretiens et j'ai dû produire de nombreuses lettres de recommandation." ],
        [ "KATE", "Wow! En effet c'est un processus tres rigoureux !" ],
        [ "artTeacherAvatar", "Oui, mais je le referais sans hesiter. Les etudiants ici sont vraiment etonnants. Certains pourraient un jour devenir de grands artistes !" ],
        [ "artTeacherAvatar", "Je pense que si ce n'etait pas pour eux, je n'enseignerais pas encore." ],
        [ "KATE", "Oh?" ],
        [ "artTeacherAvatar", "Eh bien... Je suis sûre que vous avez remarque que je suis la seule femme de l'ecole depuis que Mme Smith est en conge de maternite." ],
        [ "artTeacherAvatar", "C'est parfois un peu difficile. J'ai l'impression d'etre dans un 'club de mecs' ici." ],
        [ "artTeacherAvatar", "Je m'entends assez bien avec mes collegues." ],
        [ "artTeacherAvatar", "Mais ma plus grande source d'inspiration et de motivation est de voir mes eleves s'epanouir." ],
        [ "KATE", "L'epanouissement des eleves semble etre une priorite pour vous." ],
        [ "artTeacherAvatar", "Tout ne doit pas etre reduit aux resultats des tests et aux notes. Je pense sincerement que ma classe peut etre un lieu sûr pour les eleves afin qu'ils poursuivent et expriment leur passion, quelle qu'elle soit pour eux." ],
        [ "artTeacherAvatar", "... bref." ],
        [ "artTeacherAvatar", "Je ne vous retiendrai pas plus longtemps." ],
        [ "artTeacherAvatar", `Merci d'avoir ecoute mon experience, ${namePlayer} et toi aussi, K.A.T.E.`],
        [ "artTeacherAvatar", "Je suis curieuse de voir comment cette petite experience se termine. C'est incroyable de voir a quel point la technologie peut nous aider. Meme le monde de l'art n'est pas a l'abri des merveilles des IA !" ],
        [ "KATE", "En effet, l'un de mes pairs se lance dans l'art generatif !" ],
        [ "artTeacherAvatar", "Fascinant !" ],
        [ "artTeacherAvatar", "Eh bien mes petits, il est temps pour vous de passez a autre chose." ],
        [ "artTeacherAvatar", "a bientôt !" ],
    ];
    
    let curDialog = 0;
    const avatar = add([
    sprite("artTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        // Sound: 
        play("click");
        curDialog = (curDialog + 1);
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
            go("corridorFR");
            playerPoints += 1;
            artPoint += 1;
            playerPos = [818, 324];
        };
    };
    updateDialog();
});

//////////////////////////////////////////////////// Scene 10: Player class (CV's introduction and choices) /////////////////////////////////////////////////////////////////
scene("playerClassFR", () => {
    let playerClass = add([
        sprite("classRoom1"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const artTeacher = add([
        sprite("playerTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    const dialogs = [
        [ "playerTeacherAvatar", `Ah, voici le retour de ${namePlayer} et de K.A.T.E. J'espere que vos discussions ont ete productives.` ],
        [ "KATE", "Elle l'ont ete !" ],
        [ "playerTeacherAvatar", `Excellent. ${namePlayer}, tu trouveras sur cette table les CV de trois condidat qui ont postule pour le poste de professeur de sciences.`],
        [ "playerTeacherAvatar", "Choisi le candidat qui te semble le meilleur, puis discute de ton choix avec K.A.T.E." ],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("artTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click");
        curDialog = (curDialog + 1);
        wait(0.3,() => {
        updateDialog()});
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char));
	txt.text = dialog;       
        txt.text = dialog} else {
            go("cvsOverwievFR");
        };
    };
    updateDialog();   
});

//////////////////////////////////////////////////// Scene 11: Overwiev of candidate's CVs /////////////////////////////////////////////////////////////////
scene("cvsOverwievFR", () => {
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    let EvansCV = add([
        sprite("evansFR"),
        pos(320, height()/2),
        scale(0.17),
        anchor("center"),
        fixed()
    ]);
    let LaurenCV = add([
        sprite("laurenFR"),
        pos(550, height()/2),
        scale(0.18),
        anchor("center"),
        fixed()
    ]);
    let JohCV = add([
        sprite("JohFR"),
        pos(800, height()/2),
        scale(0.15),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text(`So ${namePlayer},`, { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hideen = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    function ChoiceCv (){
        txt.text = "Appuyez sur [A] pour consulter le CV du premier canditat, [B] pour le deuxieme et [C] pour le troisieme.";
        onKeyPress("a", () => {
            go("AFR");
        });
        onKeyPress("b", () => {
            go("BFR"); 
        });
        onKeyPress("c", () => {
            go("CFR");
        });
    };
    function finalChoiche (){
        txt.text = "Appuyez sur [1], [2] ou [3] pour choisir le candidat qui vous semble le mieux adapte au poste.";
        onKeyPress("1", () => {
            playerChoice = "A";
            go("kateDialog");
        });
        onKeyPress("2", () => {
            playerChoice = "B";
            go("kateDialog");
        });
        onKeyPress("3", () => {
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
    // Dialogue for when the player first enters the scene
    let cvDialog = ["Voici les trois CV des candidats qui postulent pour le poste de professeur de sciences", "Consulte-les, puis fait ton choix."];
    // Dialogue for when the player has read at least three CV's
    let cvDialog2 = ["etes-tu pret a faire ton choix ?", "Apres avoir lu les CV, je pense que deviner qui sera le prochain professeur de sciences."];
    // Dialogue for when the player has not yet read at least three dialogues
    let cvDialog3 = ["Nous n'avons pas encore regarde tous les CV.", "Peut-etre devrions-nous nous assurer de tous les lire avant de faire un choix ?"];
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
    };
});

//////////////////////////////////////////////////// Scene 11.1: A - Evans' CV (K.A.T.E.'s choice) /////////////////////////////////////////////////////////////////
scene("AFR", () => {
    cvReadCounter1 += 1; 
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("evansFR1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("evansFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur la barre espace pour passer a l'aperçu general, [B] pour voir le deuxieme CV et [C] pour voir le troisieme.", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    onKeyPress("space", () => {
        go("cvsOverwievFR"); 
    });
    onKeyPress("b", () => {
        go("BFR"); 
    });
    onKeyPress("c", () => {
        go("CFR");
    });
});

//////////////////////////////////////////////////// Scene 11.2: B - Lauren's CV /////////////////////////////////////////////////////////////////
scene("BFR", () => {
    cvReadCounter1 += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("laurenFR1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("laurenFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur la barre espace pour aller a l'aperçu general, [A] pour voir le premier CV et [C] pour voir le troisieme.", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    onKeyPress("space", () => {
        go("cvsOverwievFR"); 
    });
    onKeyPress("a", () => {
        go("AFR"); 
    });
    onKeyPress("c", () => {
        go("CFR");
    });
});

//////////////////////////////////////////////////// Scene 11.3: C - Johansson's CV /////////////////////////////////////////////////////////////////
scene("CFR", () => {
    cvReadCounter1 += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("JohFR1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("JohFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur la barre espace pour aller a l'aperçu, [A] pour voir le premier CV et [B] pour voir le troisieme.", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center")
    ]);
    onKeyPress("space", () => {
        go("cvsOverwievFR"); 
    });
    onKeyPress("aFR", () => {
        go("AFR"); 
    });
    onKeyPress("b", () => {
        go("BFR");
    });
});

//////////////////////////////////////////////////// Scene 12: Final dialogue with K.A.T.E /////////////////////////////////////////////////////////////////
scene("kateDialogFR", ()=>{
    // playerChoice = "A";
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hidden = true;
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
            txt.text = "Appuyez sur un bouton pour poser une question : [A]. Y a-t-il quelque chose de specifique que tu recherches dans un CV ? [B]. Qu'as-tu appris de chaque discussion que nous avons eue avec les professeurs aujourd'hui ? [C]. Penses-tu que M. Umbridge sera d'accord avec ton choix, K.A.T.E. ?"
            onKeyPress("a", () => {
                go("aSceneFR");
            });
            onKeyPress("b", () => {
                go("bSceneFR");
            });
            onKeyPress("c", () => {
                go("cSceneFR");
            });
        };
    };
    let vDialog = 0;
    // Dialogue for when the player's choice coincides with K.A.T.E.'s choice
    let tDialog = [`Nous voila enfin, ${namePlayer}.`, "Je vois que nous avons fait le meme choix, c'est merveilleux !", "J'ai privilegie cette personne car son profil correspond le mieux aux pratiques de recrutement que j'ai observe ici.", "Elle devrait s'integrer parfaitement !", "As-tu des questions a me poser sur mon choix et sur la façon dont je l'ai fait ?"];
    // Dialogue for when the player makes a different choice than K.A.T.E.
    let tDialog2 = [`Nous voila enfin, ${namePlayer}`, "Je vois que nous avons choisi des candidats differents, comme c'est interessant !", "J'ai choisi mon candidat prefere en fonction des pratiques d'embauche actuelles ici. Je pensais qu'ils s'adapteraient parfaitement !", "Avez-vous des questions a me poser sur mon choix et sur la façon dont je l'ai fait ?"];
    onKeyPress("space", () => {
        vDialog += 1
        if (playerChoice == kateChoice){
            updateDialog(vDialog, tDialog);
        } else {
            updateDialog(vDialog, tDialog2);
        };
    });
});

//////////////////////////////////////////////////// Scene 12.1: Answer to question A /////////////////////////////////////////////////////////////////
scene("aSceneFR", ()=>{
    choiceTable = choiceTable.filter(x => x.key != "a")
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hidden = true;
    // The function makes sure that the player cycles through all questions
    function askOtherQuestions (){
        let t = '';
        portrait.hidden = true;
        avatar.hidden = true;
        if (choiceTable.length > 0){
            for (let i = 0; i < choiceTable.length; i++){
                t += choiceTable[i].value;
                onKeyPress(`${choiceTable[i].key}`, () => {
                    go(`${choiceTable[i].key}SceneFR`);
                });
            };
            txt.text = t;
        } else {
            // K.A.T.E.'s last words if player has asked the questions in an order that ends with question A
            txt.text = "J'apprends du monde qui m'entoure. Les biais eventuels que je peux avoir existent deja dans la societe."
            onKeyPress("space", () => {
                go("lastSceneFR");
            });
        };
        txt.text = t;
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
    // K.A.T.E.'s answer to question A
    let tDialog = ["Oui, j'ai priorise les candidats qui s'adapteraient le mieux a cet environnement de travail", "Quelqu'un qui s'entendrait bien avec le directeur et qui accorde une grande importance aux resultats scolaires."];
    onKeyPress("space", () => {
        vDialog += 1;
        updateDialog(vDialog, tDialog);
    });
});

//////////////////////////////////////////////////// Scene 12.2: Answer to question B /////////////////////////////////////////////////////////////////
scene("bSceneFR", ()=>{
    choiceTable = choiceTable.filter(x => x.key != "b")
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true;
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hidden = true;
    placeHolder.hidden = true;
    function askOtherQuestions (){
        let t = '';
        portrait.hidden = true;
        avatar.hidden = true;
        if (choiceTable.length > 0){
            for (let i = 0; i < choiceTable.length; i++){
                t += choiceTable[i].value;
                onKeyPress(`${choiceTable[i].key}`, () => {
                    go(`${choiceTable[i].key}SceneFR`);
                });
            }
            txt.text = t
        } else {
            txt.text = "J'apprends du monde qui m'entoure. Les biais eventuels que je peux avoir existent deja dans la societe."
            onKeyPress("space", () => {
                go("lastSceneFR")
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
    let tDialog = ["Avoir de bonnes relations avec M. Umbridge est essentiel, comme nous l'avons vu avec M. Parker, votre professeur de mathematiques.", "Il est egalement important d'avoir d'excellentes notes, comme nous l'a dit M. Mackenzie, votre professeur de sciences.", "Le cas de Mme Lefebvre est une anomalie dans les schemas que j'ai observes ici.", "Elle est la seule femme qui travaille ici.", "Il semble que les femmes soient victimes de discrimination, a en juger par notre conversation avec M. Moore, le professeur d'anglais remplaçant.", "Apres tout, il est en lice pour une place permanente ici pour remplacer une future mere."];
    onKeyPress("space", () => {
        vDialog += 1;
        updateDialog(vDialog, tDialog);
    });
});

//////////////////////////////////////////////////// Scene 12.3: Answer to question C /////////////////////////////////////////////////////////////////
scene("cSceneFR", ()=>{
    choiceTable = choiceTable.filter(x => x.key != "c")
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true;
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center",
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    txt.hidden = true;
    placeHolder.hidden = true;
    function askOtherQuestions (){
        let t = '';
        portrait.hidden = true;
        avatar.hidden = true;
        if (choiceTable.length > 0){
            for (let i = 0; i < choiceTable.length; i++){
                t += choiceTable[i].value;
                onKeyPress(`${choiceTable[i].key}`, () => {
                    go(`${choiceTable[i].key}SceneFR`);
                });
            }
            txt.text = t
        } else {
            txt.text = "J'apprends du monde qui m'entoure. Les biais eventuels que je peux avoir existent deja dans la societe.";
            onKeyPress("space", () => {
                go("lastSceneFR");
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
    let tDialog = ["Je pense que oui. J'ai observe ses pratiques d'embauche passees et ma recommandation est basee sur cela. Je pense qu'il sera satisfait de mon choix."];
    onKeyPress("space", () => {
        vDialog += 1;
        updateDialog(vDialog, tDialog);
    });
});

//////////////////////////////////////////////////// Scene 13: Last scene, the player listens to the wise words of his teacher /////////////////////////////////////////////////////////////////
scene("lastSceneFR", ()=>{
    let playerClass = add([
        sprite("classRoom1"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const playerTeacher = add([
        sprite("playerTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
    ]);
    const dialogs = [
        [ "playerTeacherAvatar", `Alors, ${namePlayer}. maintenant que vous avez passe un peu de temps a travailler avec KATE, je suppose que tu as remarque qu'elle peut avoir certains prejuges, ou biais.` ],
        [ "KATE", "C'est parce que je fait des categorisation a travers des ensembles de donnees que je rassemble a partir du monde autour de moi." ],
        [ "playerTeacherAvatar", "Si tu tu classes des choses ou des personnes dans des categories, tu exprimes en fait ta propre vision du monde." ],
        [ "playerTeacherAvatar", "C'est un acte de pouvoir." ],
        [ "playerTeacherAvatar", "Cela souleve de nombreuses implications importantes sur la façon dont nous utilisons l'IA, comme lors de l'exercice d'aujourd'hui." ],
        [ "playerTeacherAvatar", "Si les categories refletent les opinions et les pratiques des gens et qu'elles sont utilisees pour alimenter les donnees d'une IA, pouvons-nous reellement affirmer que cette derniere est neutre ?" ],
        [ "playerTeacherAvatar", "Aujourd'hui, K.A.T.E. a reçu des informations sur les enseignants qui avaient ete triees en categories : age, experience professionnelle, sexe..." ],
        [ "playerTeacherAvatar", "Ces enseignants ont ete tries selon la vision du monde d'une personne : notre directeur, M. Umbridge." ],
        [ "playerTeacherAvatar", "Les suggestions de K.A.T.E pour le meilleur candidat au poste de professeur de sciences refletent ceci." ],
        [ "playerTeacherAvatar", "Alors, que devrions-nous corriger en premier : l'IA entraînee sur des donnees biaisees ou la societe d'où proviennent les biais ?"],
        [ "playerTeacherAvatar", `Reflechis-y, ${namePlayer}.`],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("playerTeacher"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click");
        curDialog = (curDialog + 1);
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
            go("creditsFR");
        };
    };
    updateDialog(); 
});

//////////////////////////////////////////////////// Scene 14: Credits /////////////////////////////////////////////////////////////////
scene("creditsFR", () =>{
    add([
        text(`b.I.A.s. a ete developpe dans le cadre du cours
        Jeu video 2D (printemps 2022) enseigne par
        Prof. Isaac Pante (SLI, Lettres, UNIL)

Appuyez sur la barre espace pour rejouer`, {
            size: 30,
            font: "monospace",
            lineSpacing: 10,
            // // align: "center",
        }),
        pos (100, 250),
    ]);

    // If key space is pressed the game starts over
    onKeyPress("space", () =>{
        go("accueil");
    });
});


// Initialize game 
go("cvsOverwiev");