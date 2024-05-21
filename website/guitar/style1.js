// List of chord progressions

const chordProgressions = [
{
    progression: ["G", "C", "Em", "D"],
    songs: [
        { title: "Hey Jude", artist: "The Beatles", link: "https://youtu.be/mQER0A0ej0M?si=qw1O-5nXiRVvikTV" },
        { title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", link: "https://youtu.be/-p8GXZcdrIk?si=n0tcLpjax0f8AIOy" },
        { title: "Free Fallin'", artist: "Tom Petty", link: "https://youtu.be/T3phscjgc_A?si=KyGGWiACX7-KZN-E" }
    ]
},
{
    progression: ["C", "G", "Am", "F"],
    songs: [
        { title: "Let It Be", artist: "The Beatles", link: "https://www.youtube.com/watch?v=QDYfEBY9NM4" },
        { title: "No Woman, No Cry", artist: "Bob Marley", link: "https://youtu.be/IT8XvzIfi4U?si=hnzKdfxsrinT3CXm" },
        { title: "I'm Yours", artist: "Jason Mraz", link: "https://www.youtube.com/watch?v=EkHTsc9PU2A" }
    ]
},
{
    progression: ["G", "D", "Em", "C"],
    songs: [
        { title: "Good Riddance", artist: "Green Day", link: "https://youtu.be/CnQ8N1KacJc?si=2Uj0rFKf77dhXzIV" },
        { title: "Sweet Child O' Mine", artist: "Guns N' Roses", link: "https://youtu.be/N9GqZlyCMdU?si=En1iJ6CbK6JFAgJz" },
        { title: "Can You Feel the Love Tonight", artist: "Elton John", link: "https://youtu.be/Ja5aE7rl2p8?si=rdNstQ7Fu0WaWcw0" }
    ]
},
{
    progression: ["Am", "F", "C", "G"],
    songs: [
        { title: "Rolling in the Deep", artist: "Adele", link: "https://www.youtube.com/watch?v=rYEDA3JcQqw" },
        { title: "Hello", artist: "Adele", link: "https://youtu.be/be12BC5pQLE?si=neNB8d0Ce3oBI_or" },
        { title: "Someone Like You", artist: "Adele", link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" }
    ]
},
{
    progression: ["E", "A", "B", "E"],
    songs: [
        { title: "Hound Dog", artist: "Elvis Presley", link: "https://youtu.be/-eHJ12Vhpyc?si=XZ9mYu9XS2NYSs06" },
        { title: "Johnny B. Goode", artist: "Chuck Berry", link: "https://youtu.be/Uf4rxCB4lys?si=FJ5KyAHFEnDABi3X" },
        { title: "La Bamba", artist: "Ritchie Valens", link: "https://youtu.be/Coy8Hoa1DNw?si=iF2fi-aznXAST3q2" }
    ]
},
{
    progression: ["Dm", "G", "C", "A"],
    songs: [
        { title: "Hotel California", artist: "Eagles", link: "https://youtu.be/BciS5krYL80?si=hXZ3mq27VJ1-X7S4" },
        { title: "Can't Help Falling in Love", artist: "Elvis Presley", link: "https://www.youtube.com/watch?v=vGJTaP6anOU" },
        { title: "Dust in the Wind", artist: "Kansas", link: "https://www.youtube.com/watch?v=tH2w6Oxx0kQ" }
    ]
},
{
    progression: ["A", "D", "E", "A"],
    songs: [
        { title: "Three Little Birds", artist: "Bob Marley", link: "https://youtu.be/zaGUr6wzyT8?si=dpSXR0kAGZId3aaF" },
        { title: "Jambalaya (On the Bayou)", artist: "Hank Williams", link: "https://youtu.be/xnKOVPXhlnE?si=UMLiGlN7_BwsMX66" },
        { title: "Brown Eyed Girl", artist: "Van Morrison", link: "https://www.youtube.com/watch?v=UfmkgQRmmeE" }
    ]
},
{
    progression: ["Em", "C", "G", "D"],
    songs: [
        { title: "Wonderwall", artist: "Oasis", link: "https://www.youtube.com/watch?v=6hzrDeceEKc" },
        { title: "Let Her Go", artist: "Passenger", link: "https://www.youtube.com/watch?v=RBumgq5yVrA" },
        { title: "The Night We Met", artist: "Lord Huron", link: "https://www.youtube.com/watch?v=KtlgYxa6BMU" }
    ]
}
];

// Get references to the HTML elements
const chordProgressionElement = document.getElementById('chord-progression');
const chordImagesElement = document.getElementById('chord-images');
const chordImagesElement2 = document.getElementById('chord-images2');
const songListElement = document.getElementById('song-list');
const nextButton = document.getElementById('next-button');
const mainmenu = document.getElementById('next-button2');

// Function to show a random chord progression
function showRandomChordProgression() {
    const randomIndex = Math.floor(Math.random() * chordProgressions.length);
    chordProgressionElement.textContent = chordProgressions[randomIndex];
    const progression = chordProgressions[randomIndex];

    // Display the chord progression as text
    chordProgressionElement.textContent = progression.progression.join(" - ");
    
    // Clear previous images
    chordImagesElement.innerHTML = '';
    songListElement.innerHTML = '';
    
    // Display the images for each chord in the progression
    progression.progression.forEach(chord => {
        const img = document.createElement('img');
        img.src = `${chord}.png`;
        img.alt = chord;
        chordImagesElement.appendChild(img);
    });
    chordImagesElement2.innerHTML = '';
    
    // Display the images for each chord in the progression
    progression.progression.forEach(chord => {
        const img = document.createElement('img');
        img.src = `${chord}.jpg`;
        img.alt = chord;
        chordImagesElement2.appendChild(img);
    });

    const ul = document.createElement('ul');
    progression.songs.forEach(song => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = song.link;
        a.textContent = `${song.title} by ${song.artist}`;
        a.target = '_blank'; // Open in new tab
        li.appendChild(a);
        ul.appendChild(li);
    });
    songListElement.appendChild(ul);

}

function mainm(){
    window.location.href = "../home.html";
}
chordProgressionElement.textContent = "Click \"Next Progression\" to begin!";
// Event listener for the button
nextButton.addEventListener('click', showRandomChordProgression);
mainmenu.addEventListener('click', mainm );


