// Créer une instance de kaboom
kaboom({
    background: [0, 0, 0],
    width: 1200,
    height: 800,
});

///////////// SCENE ONE: INTRODUCTIONS /////////////

scene("intro", () =>{
    add([
        text(`THIS IS THE MOST AWESOME GAME 
YOU'LL EVER GET TO PLAY, ENJOY`, {
            size: 48,
            font: "sink",
        }),
        pos (100, 350),
    ]);

    // Ajouter un évennement quand j'appuie sur une touche
    onKeyPress("space", () =>{
        go("dialogue");
    });
});

///////////// SCENE TWO: DIALOGUE /////////////
// Introduction to the first challange: choosing a teacher for your new school
scene("dialogue", () =>{
});

// Initialize game 
go("intro")