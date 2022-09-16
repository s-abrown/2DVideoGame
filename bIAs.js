// Creating a kaboom scene
kaboom({
    background: [0, 0, 0],
    width: 1200,
    height: 800,
});

///////////// ASSETS /////////////

loadRoot("assets/")

loadSprite("classRoom1","classroomBg.png")
loadSprite("schoolMap","schoolMap.png")
loadSprite("KATE", "KATEcu.png")

loadBean("bean")


///////////// VARIABLES /////////////
let placeHolder = "My name: "
let namePlayer
const pad = 24

///////////// SCENE ONE: Start Screen /////////////

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
///////////// SCENE TWO: Name input /////////////
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

///////////// SCENE THREE: Introduction /////////////
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
        [ "bean", "She's called K.A.T.E.. Her name is short for 'Computer Assisted Teaching Engagement" ], 
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
            go("corridor")
        }
    }

    updateDialog()

})

///////////// SCENE FOUR: CORRIDOR /////////////

// Exit scene one: player is standing outside the door of their classroom.
// C.A.T.E. will then interact with the player (introduce herself, maybe explain once more that she needs to listen in on convos with teacher to gather her data, explain that she'll cross reference each teacher to determine/pintpoint what it is that made them successful (non-recurring terms, male-oriented language, gender etc.))

scene("corridor", () =>{
        //Adding the school map as background: 
        let map = add([
        sprite("schoolMap"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        origin("center"),
        // Keep the background position fixed even when the camera moves
        fixed()
    ]);

    // First dialog with KATE here /!\ care with constants for dialog boxes/portraits/etc as they are used below?: 
    // Can player take a few steps away from their classs door before KATE full body image pops up and she introduces herself

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
        let classDoor1 = add([
            pos(302, 238),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door"
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
        let loungeDoor = add([
            pos(135, 340),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "loungeDoor"
        ]);
        let classDoor4 = add([
            pos(305, 340),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door"
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
        let classDoor5 = add([
            pos(591, 340),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door"
        ]);
        let classDoor6 = add([
            pos(805, 340),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door"
        ]);
        let artDoor = add([
            pos(1125, 552),
            rect(25, 5),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "artDoor"
        ]);
        let headmasterDoor = add([
            pos(178, 438),
            rect(5, 25),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "loungeDoor"
        ]);
        let officeDoor1 = add([
            pos(488, 650),
            rect(5, 25),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "loungeDoor"
        ]);
        let officeDoor2 = add([
            pos(784, 650),
            rect(5, 25),
            opacity(0.5),
            color(102, 0, 255),
            area(),
            solid(),
            "door",
            "loungeDoor"
        ]);
    // 4) Misc. & desks
    // a. classroom 1
        let classroom1Misc = add([
            pos(264, 94),
            rect(22, 135),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "classMisk1"
        ]);
        let classroom1Desk1 = add([
            pos(369, 99),
            rect(22, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk2 = add([
            pos(369, 142),
            rect(22, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk3 = add([
            pos(369, 182),
            rect(22, 34),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk4 = add([
            pos(432, 99),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk5 = add([
            pos(432, 142),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk6 = add([
            pos(432, 182),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk7 = add([
            pos(496, 99),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk8 = add([
            pos(496, 142),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk9 = add([
            pos(496, 182),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk10 = add([
            pos(556, 99),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk11 = add([
            pos(556, 142),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk12 = add([
            pos(556, 182),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk13 = add([
            pos(612, 101),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk14 = add([
            pos(612, 143),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
        let classroom1Desk15 = add([
            pos(612, 184),
            rect(20, 33),
            opacity(0.5),
            color(204, 0, 153),
            area(),
            solid(),
            "misc",
            "desk",
        ]);
    // b. classroom 2
        // ...
        // ...
        // ...
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

        // Adding a camera to follow the player (bricks the player movement when we add it in)
        //const player = get("overWorldPlayer")[0]
            // Adding a camera to track the player?
        overWorldPlayer.onUpdate(() => {
        //     // Set the viewport center to overWorldPlayer.pos
        //camPos(overWorldPlayer.pos)
        //console.log(overWorldPlayer.pos)
        });
        //console.log(camPos(overWorldPlayer.pos))

        // Adding movements to the player:
        const playerSpeed = 400
        onKeyDown("left", () => {
            //if (overWorldPlayer.pos.x > overWorldPlayer.area.width/2) {
                overWorldPlayer.move(-playerSpeed, 0)        
            //}
        });
        onKeyDown("right", () => {
            //if (overWorldPlayer.pos.x < width() - overWorldPlayer.area.width/2){
                overWorldPlayer.move(playerSpeed, 0)
            //}
        });
        onKeyDown("up", () => {
            //if (overWorldPlayer.pos.y > overWorldPlayer.area.height/2){
                overWorldPlayer.move(0, -playerSpeed)
            //}
        });
        onKeyDown("down", () => {
            //if (overWorldPlayer.pos.y < height()- overWorldPlayer.area.height/2){
                overWorldPlayer.move(0, +playerSpeed)
            //}
        });


        // III. INTERACTIONS
        // A) Adding interactions with lockers when player presses space while touching them (still need to get the text etc. to disappear once you've cycled through the dialog. Shoudld maybe make function for it?)
        let lockerCount = 0
        onKeyPress("space", () => {
            //let interacted = false
            every("locker", (c) => {
                if (overWorldPlayer.isTouching(c)) {
                    lockerCount += 1
                    console.log("LockerCount :", lockerCount)
                    // Textbox
                    const textbox = add([
                        rect(width() - 300, 120, { radius: 32 }),
                        origin("center"),
                        pos(center().x + 100, height() - 125),
                        outline(2),
                    ]);
                    // Portait :
                    const portrait = add([
                        rect(200, 120, {radius: 32}),
                        origin("center"),
                        pos(center().x - 450, height() - 125),
                        outline(2),
                    ]);
                    // Textbox texts :
                    if(lockerCount == 1){
                    add([
                        text("Oh, do you think some of the teachers are hiding in the lockers? How fun!", { 
                            size: 32, 
                            width: 800,
                            }),
                        color([41, 143, 70]),
                        pos(textbox.pos),
                        origin("center")
                        ])
                    };
                    if (lockerCount == 2){
                        add([
                            text("Is it a sort of school tradition for teachers to lock themselves in there?", { 
                                size: 32, 
                                width: 800,
                                }),
                            color([41, 143, 70]),
                            pos(textbox.pos),
                            origin("center")
                            ])
                    };
                    if (lockerCount == 3){
                        add([
                            text("Maybe it's their designated quiet place?", { 
                                size: 32, 
                                width: 800,
                                }),
                            color([41, 143, 70]),
                            pos(textbox.pos),
                            origin("center")
                            ])
                    };
                    if (lockerCount == 4){
                        add([
                            text("In any case, it seems like no one is in there.", { 
                                size: 32, 
                                width: 800,
                                }),
                            color([41, 143, 70]),
                            pos(textbox.pos),
                            origin("center")
                            ])
                    };
                    if (lockerCount >= 5){
                        add([
                            text("Shall we move on?", { 
                                size: 32, 
                                width: 800,
                                }),
                            color([41, 143, 70]),
                            pos(textbox.pos),
                            origin("center"),
                            ])
                    };
                    // Kate avatar:
                    const avatar = add([
                    sprite("KATE"),
                    scale(1),
                    origin("center"),
                    pos(portrait.pos),
                    ])           
                }
            })
        });
        // To get rid of dialog textbox etc. after having cycled thru the convo: 
        // Doesn't work
        // onKeyPressRepeat(console.log("keypressrepeat"))


        // B) Interaction with corridor plants 
        // I got confused with the conditions texts overlap with locker dialog
        let plantCount = 0
        onKeyPress("space", () => {
            //let interacted = false
            every("plant", (c) => {
                if (overWorldPlayer.isTouching(c)) {
                    plantCount += 1
                    console.log("plantCount :", plantCount)
                    // Textbox
                    const textbox = add([
                        rect(width() - 300, 120, { radius: 32 }),
                        origin("center"),
                        pos(center().x + 100, height() - 125),
                        outline(2),
                    ]);
                    // Portait :
                    const portrait = add([
                        rect(200, 120, {radius: 32}),
                        origin("center"),
                        pos(center().x - 450, height() - 125),
                        outline(2),
                    ]);
                    // Textbox texts :
                    if(plantCount == 1 && lockerCount <1){
                    add([
                        text("What a lovely green plant! And it's a real one too!", { 
                            size: 32, 
                            width: 800,
                            }),
                        color([41, 143, 70]),
                        pos(textbox.pos),
                        origin("center")
                        ])
                    };
                    if (plantCount == 2 && lockerCount <1){
                        add([
                            text("Did you know that the presence of such plants can ease feelings of anxiety and stress?", { 
                                size: 32, 
                                width: 800,
                                }),
                            color([41, 143, 70]),
                            pos(textbox.pos),
                            origin("center")
                            ])
                    };
                    if (plantCount == 3 && lockerCount <1){
                        add([
                            text("It helps you feel more at peace... and calm...", { 
                                size: 32, 
                                width: 800,
                                }),
                            color([41, 143, 70]),
                            pos(textbox.pos),
                            origin("center")
                            ])
                    };
                    if (plantCount == 4 && lockerCount <1){
                        add([
                            text("Sort of like putting a piece of decoration in your Sim's house and watching their happiness meter go up.", { 
                                size: 32, 
                                width: 800,
                                }),
                            color([41, 143, 70]),
                            pos(textbox.pos),
                            origin("center")
                            ])
                    };
                    // Attempt: if you've triggered the teacher locker dialog 
                    if (plantCount == 5 || lockerCount >= 4){
                        add([
                            text("I suppose that if a quiet moment in a locker won't help, a green plant can surely soothe your teachers.", { 
                                size: 32, 
                                width: 800,
                                }),
                            color([41, 143, 70]),
                            pos(textbox.pos),
                            origin("center")
                            ])
                    };
                    if (plantCount >= 6 && lockerCount != 4){
                        add([
                            text("Nature sure is precious", { 
                                size: 32, 
                                width: 800,
                                }),
                            color([41, 143, 70]),
                            pos(textbox.pos),
                            origin("center"),
                            ])
                    };
                    // Kate avatar:
                    const avatar = add([
                    sprite("KATE"),
                    scale(1),
                    origin("center"),
                    pos(portrait.pos),
                    ])           
                }
            })
        });

        






});


// Initialize game 
go("corridor")