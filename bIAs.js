// Créer une instance de kaboom
kaboom({
    background: [0, 0, 0],
    width: 1200,
    height: 800,
});

layers([
	"game",
	"ui",
    "game"]),

///////////// ASSETS /////////////

loadRoot("assets/")

loadSprite("classRoom1","classroom.jpeg")

loadBean("bean")

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
        go("introduction");
    });
});

///////////// SCENE TWO: Introduction /////////////
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
        [ "bean", "Good morning class." ],
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
        // Teacher introduces CATE:
        [ "bean", "I'll be introducing you to one today." ],

        [ "bean", "She's called CATE. Her name is short for 'Computer Assisted Teaching Engagement" ], // Can't remember what we settled for lmao

        [ "bean", "Her job is to help schools find the very best teachers to teach you kids, and suggest who she thinks will be the most suitable applicant for the job." ],
        [ "bean", "Naturally, our headmaster has taken an interest in her and what she can do. I'm sure you've all heard by now that the school is looking for a new science teacher." ],
        [ "bean", "What better time to call on CATE to help us find a great new teacher for you all?" ],
        [ "bean", "We don't want to leaver her with the final say on who will be hired to teach you, however." ],
        [ "bean", "After all, the staff and I are committed to offering you only the highest standard of teaching, and just like you or me, she can still make mistakes!" ],
        [ "bean", "That's where you kids come in!" ],
        [ "bean", "Today, one of you will be chosen to spend some time with CATE and get to know her so that you can see and how she works." ],
        [ "bean", "AIs need to collect information to learn from before they can offer informed suggestions." ],

        [ "bean", "For this reason, whoever will be chosen to spend some time with CATE will accompany her on her data-collecting journey!" ], // WHOMever???? Information or data collecting jounney?

        [ "bean", "Since our headmaster wants our new hiree to integrate comfortably in our school, CATE will be gathering her information from successful past applicants. In other words, she'll get to know other teachers and find out about their hiring experience." ], // Can you even say 'hiree'???

        [ "bean", "Their background, their work experience, their personnal opinions and insights..." ],

        [ "bean", "She'll even look at their CVs!" ], // CV or résumés?

        [ "bean", "Once she's gathered all the information she needs, she'll be able to tell us who she thinks is the best candidate for the science teaching opening." ],
        [ "bean", "The student who will be accompanying CATE will have to learn alongside her, and have the chance to offer their own input on who they think is best suited." ],
        [ "bean", "This way, we can compare CATE's assessment to that of a student's!" ],
        [ "bean", "I wonder if they'll be very different." ],

        [ "bean", "I've got a bowl here with all of your names written on different slips of paper." ],
        [ "bean", "I'll pick one at random, and the lucky winner will be chosen to be CATE's guide!" ],
        [ "bean", "All right! One... " ],
        [ "bean", "Two..." ],
        [ "bean", "Three..." ],
        [ "bean", "..." ],

        // Make constant to allow the student to put their name in at the start of the game?
        [ "bean", "Golum!" ],
        [ "bean", "You will be CATE's companion!" ],
        [ "bean", "Take her around to talk to some teachers and gather information about them and understand what it is about them that helped them successfully get a teaching position here." ],
        [ "bean", "Their je-ne-sais-quoi if you will." ],
        [ "bean", "Take your time!" ],
        [ "bean", "Once you and CATE have collected all of the information that you need to make your informed decision, come back here and we'll see what she suggests..." ],
        [ "bean", "And if you agree with her!" ],
        // END SCENE 

    ];

    let curDialog = 0

    // Text
    const txt = add([
	text("", { 
        size: 32, 
        width: width() - 230,
        // Need to add smth for the font colour:
        styles: {color: rgb(0,0,0 ), },
        // Also pretty sure we can add padding either here on on the text box to keep the text within the textbox.
        }),
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
        curDialog = (curDialog + 1) % dialogs.length
        // Adding a delay between hitting space bar and the text showing up:
        wait(0.3,() => {
        updateDialog()})
        // Looking at how to get the typing effect for the text?
        //setTimeout("type()", 5000)  
              
    });

    // Update the on screen sprite & text
    function updateDialog() {

	const [ char, dialog ] = dialogs[curDialog]

	// Use a new sprite component to replace the old one
	//avatar.use(sprite(char))
	// Update the dialog text
	txt.text = dialog

    }

    updateDialog()

    })

///////////// SCENE TWO: CORRIDOR /////////////

// Exit scene one: player is standing outside the door of their classroom.
// CATE will then interact with the player (introduce herself, maybe explain once more that she needs to listen in on convos with teacher to gather her data, explain that she'll cross reference each teacher to determine/pintpoint what it is that made them successful (non-recurring terms, male-oriented language, gender etc.))






// Initialize game 
go("introduction")