function scena(game, nameScena)
{
    var newScena = []
   
    switch (nameScena)
    {
        //
        //Hlavne menu
        case "Instruction":
            newScena = instructionScreen(game)
            game.nodes = newScena
            break;
        case "mainScreen":
            newScena = mainScreen(game)
            game.nodes = newScena
            break;
        //end
        //

        //
        //Levels-Screen
        case "1level":
            level1(game)
            break;
        case "2level":
            level2(game)
            break
        case "3level":
            level3(game)
            break
    }
}