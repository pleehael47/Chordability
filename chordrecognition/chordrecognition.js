
document.addEventListener('DOMContentLoaded', function() {
    
    let main_menu_button = document.getElementById("main-menu-button");  
    let answer_buttons = document.getElementsByClassName("answer");
    let chord_photo = document.getElementById('chord_photo')
    let score = document.getElementById("header-score")

    //variable that documents users correct and total answers
    let total_correct = 0;
    let total_attempted = 0;

    //hashmap that holds a number to a corresponding chord photo
    let chord_images = {
        1:'chordphotos/amajor_chord.png',
        2:'chordphotos/aminor_chord.png',
        3:'chordphotos/cmajor_chord.png',
        4:'chordphotos/dmajor_chord.png',
        5:'chordphotos/emajor_chord.png',
        6:'chordphotos/eminor_chord.png',
        7:'chordphotos/fmajor_chord.png',
        8:'chordphotos/gmajor_chord.png'
    }

    //Apply update score and randomize photos for each button 
    for(let i = 0; i <answer_buttons.length; i++){
        answer_buttons[i].addEventListener('click', function(){
            updateScore(answer_buttons[i], chord_photo,score)
            randomizePhotos()   
        })
    }

    //Buttons that lead from main menu to each modes and vice versa
    main_menu_button.addEventListener('click', function() {
        navigateToNewPage("..", "index")
    })

    function updateScore(answer_button, chord_photo, score){
        if(answer_button.dataset.number === chord_photo.dataset.number){
            total_attempted += 1
            total_correct += 1;
            score.textContent = "Score: " + total_correct + "/" + total_attempted;
        } else{
            total_attempted += 1
            score.textContent = "Score: " + total_correct + "/" + total_attempted;
        }
    }
    
    //randomizePhotos function randomizes the shown chord photo after the user gueses it
    function randomizePhotos(){
        let key_array = Object.keys(chord_images)
        let random_index = Math.floor(Math.random() * key_array.length)
        let random_key = key_array[random_index]
        let chord_photo = document.getElementById('chord_photo')
        chord_photo.src = chord_images[random_key]
        chord_photo.dataset.number = random_key
    }

    //navigateToNewPage function navigates users to page they want to visit
    function navigateToNewPage(folderName, fileName) {
        window.location.href = folderName + "/" + fileName + '.html'
    }
});


