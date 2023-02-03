// let intro = document.querySelector('.intro');
// let score = document.querySelector('.score');
// let quit_button = document.querySelector('.quit');
// let intro_button = document.querySelector('.intro-button');
// let match = document.querySelector('.match');
// intro_button.addEventListener('click', function () {
//     console.log('clicked');
//     intro.style.display = "none";
//     quit_button.style.display = "block";
//     match.style.display = "block";
//     score.style.display = 'flex';
// });


function game() {
    let computer_score = document.querySelector('.computer-score p');
    let player_score = document.querySelector('.player-score p');
    let intro = document.querySelector('.intro');
    let score = document.querySelector('.score');
    let quit = document.querySelector('.quit ');
    let intro_button = document.querySelector('.intro-button');
    let match = document.querySelector('.match');
    
    let p_score = 0, c_score = 0;

// document.getElementById("myImageId").src="newSource.png";
    

    intro_button.addEventListener('click', function () { // transition start
        intro.classList.add('fade-out');
        match.classList.add('fade-in');
        score.classList.add('fade-in');
        quit.classList.add('fade-in');
        startgame(); // starting game
    });

    function startgame() {
        let quit_button = document.querySelector('.quit button');
        quit_button.addEventListener('click', function () {
            console.log('quit');
            match.classList.remove('fade-in');
            score.classList.remove('fade-in');
            quit.classList.remove('fade-in');
            intro.classList.remove('fade-out');
            computer_score.textContent = 0;
            player_score.textContent = 0;
            p_score = 0;
            c_score = 0;

        });


        let p_img = document.querySelector('.p-img');
        let c_img = document.querySelector('.c-img');
        
        let player = '';
        let comp = '';
        let comp_options = ['rock', 'paper', 'scissor'];// comp-choices
        let options = document.querySelectorAll(".options button");
        options.forEach(option => {
            option.addEventListener('click', function () {
                // console.log(this.textContent);
                player = this.textContent; // user choice
                // console.log(player);
                // console.log(typeof player);
                comp = comp_options[Math.floor(Math.random() * 3)];//comp - input
                console.log(`computer: ${comp}  player: ${player}`);
                
                p_img.src = `./assets/${player}.png`;
                c_img.src = `./assets/${comp}.png`;
                // p_img.setAttribute('src', `./assets/${player}.png`);
                // c_img.setAttribute('src', `./assets/${comp}.png`);






                compare_winner(player, comp);// checking winner
            })
        });
        
        
    }



    function compare_winner(player, computer) {
        // console.log('hi');
        let winner_content = document.querySelector('.winner');
        
        if (player === computer) {
            winner_content.textContent = 'Tie';
        }
        else if (player === 'rock') {
            if (computer === 'paper') {
                winner_content.textContent = 'Computer Won';
                c_score++;
            } else {
                winner_content.textContent = 'Player Won';
                p_score++;
            }
        } else if (player === 'paper') {
            if (computer === 'rock') {
                winner_content.textContent = 'Player Won';
                p_score++;
            } else {
                winner_content.textContent = 'Computer Won';
                c_score++;
            }
        } else if (player === 'scissor') {
            if (computer === 'rock') {
                winner_content.textContent = 'Computer Won';
                c_score++;
            } else {
                winner_content.textContent = 'Player Won';
                p_score++;
            }
        }

        // document.getElementsByClassName("left-img").src = `assets/${player}.png`;
        // document.getElementsByClassName("right-img").src = `assets/${computer}.png`;

        computer_score.textContent = c_score;
        player_score.textContent = p_score;
        // console.log(winner_content.textContent);
    };







    
}
game();//calling the first func