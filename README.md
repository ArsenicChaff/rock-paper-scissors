# rock-paper-scissors
Assignment through the Odin Project to create from scratch a rock paper scissors web-based game

Psuedocode;
Nest all functions inside of a single start game command
    Start game command will run a while loop to control the number of rounds played, and the conditions to win those rounds
        while the game round is less than or equal to 5;
            max rounds played = 5

            game ends if one player reaches 3 points

            run round function command
            ask user for an input, give user 5 tries to input correct value.
                if user input fails 
                    terminate
                end if
                generate computer input
                check userInput against computerInput and update point values
                print point values

            terminate if user input is false.

            run check for a winner function command
                if round count reached,
                    checks for a winner
                end if

                checks for max points reached (3)
                returns
            return to the top of the loop
        end of loop
        reset userInput value
        reset temporary game counter numbers
    end code