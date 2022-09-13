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

    // Adding the dialogue/text box at the bottom of the screen:
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

    const dialogs = [
        [ "bean", "hi my buttefly" ],
        [ "bean", "i love u" ],
        [ "bean", "you love me? pretty baby" ],
        [ "bean", "mark is a stupid" ],
        [ "bean", "he did not know how to take care of you..." ],
        [ "mark", "you don't know me ..." ],
        [ "bean", "what! mark???" ],
        [ "mark", "oh...hi " ],
    ];

    let curDialog = 0

    // Text
    const txt = add([
	text("", { size: 32, width: width() - 230 }),
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
        updateDialog()
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




// Initialize game 
go("introduction")