// List of chord progressions

const chordProgressions = [
    {
        progression: ["C", "E7", "Am", "D7"],
        songs: [
            { title: "Blue Suede Shoes", artist: "Elvis Presley", link: "https://youtu.be/HeXnFx7aPOE?si=HYG0f_mBSNLnjdms" },
            { title: "I Walk the Line", artist: "Johnny Cash", link: "https://www.youtube.com/watch?v=KHF9itPLUo4" },
            { title: "Imagine", artist: "John Lennon", link: "https://youtu.be/bNnFFKv_NyI?si=DBeMF69IHKAZejtR&t=7" }
        ]
    },
    {
        progression: ["F#m", "D", "A", "E"],
        songs: [
            { title: "Shallow", artist: "Lady Gaga & Bradley Cooper", link: "https://www.youtube.com/watch?v=bo_efYhYU2A" },
            { title: "Back to Black", artist: "Amy Winehouse", link: "https://www.youtube.com/watch?v=TJAfLE39ZZ8" },
            { title: "Time After Time", artist: "Cyndi Lauper", link: "https://youtu.be/F1mqrCTFoz4?si=skkFPXLorr1DF-IT" }
        ]
    },
    {
        progression: ["C#m", "A", "E", "B"],
        songs: [
            { title: "Counting Stars", artist: "OneRepublic", link: "https://youtu.be/mgT0N3tMP74?si=jHpXzhFOdXBDdK9B" },
            { title: "Hallelujah", artist: "Jeff Buckley", link: "https://www.youtube.com/watch?v=y8AWFf7EAc4" },
            { title: "Best Part", artist: "Daniel Caesar ft. H.E.R.", link: "https://youtu.be/vBy7FaapGRo?si=zQss7Eg5GTnBvKXy" }
        ]
    },
    {
        progression: ["Fm", "C#", "G#", "D#"],
        songs: [
            { title: "Fix You", artist: "Coldplay", link: "https://www.youtube.com/watch?v=k4V3Mo61fJM" },
            { title: "All of Me", artist: "John Legend", link: "https://www.youtube.com/watch?v=450p7goxZqg" },
            { title: "Someone You Loved", artist: "Lewis Capaldi", link: "https://www.youtube.com/watch?v=zABLecsR5UE" }
        ]
    },
    {
        progression: ["Em", "C", "Am", "B7"],
        songs: [
            { title: "Wish You Were Here", artist: "Pink Floyd", link: "https://www.youtube.com/watch?v=IXdNnw99-Ic" },
            { title: "Yesterday", artist: "The Beatles", link: "https://youtu.be/NrgmdOz227I?si=3l03XEOCq48QnDUi" },
            { title: "Knocking on Heaven's Door", artist: "Bob Dylan", link: "https://youtu.be/rm9coqlk8fY?si=e8SVk3qtKM6UH7qz" }
        ]
    },
    {
        progression: ["Am", "C", "E7"],
        songs: [
            { title: "House of the Rising Sun", artist: "The Animals", link: "https://youtu.be/s_Kecv6eJNM?si=Lg0oOBJu9nOExFAn" },
            { title: "Every Breath You Take", artist: "The Police", link: "https://www.youtube.com/watch?v=OMOGaugKpzs" },
            { title: "Stand by Me", artist: "Ben E. King", link: "https://www.youtube.com/watch?v=hwZNL7QVJjE" }
        ]
    },
    {
        progression: ["G", "Cadd9", "Dsus4"],
        songs: [
            { title: "Patience", artist: "Guns N' Roses", link: "https://www.youtube.com/watch?v=ErvgV4P6Fzc" },
            { title: "Wonderwall", artist: "Oasis", link: "https://www.youtube.com/watch?v=6hzrDeceEKc" },
            { title: "The Scientist", artist: "Coldplay", link: "https://www.youtube.com/watch?v=RB-RcX5DS5A" }
        ]
    },
    {
        progression: ["Bm", "G", "D", "A"],
        songs: [
            { title: "Use Somebody", artist: "Kings of Leon", link: "https://www.youtube.com/watch?v=gnhXHvRoUd0" }, 
            { title: "With or Without You", artist: "U2", link: "https://youtu.be/ujNeHIo7oTE?si=O256FU-yJ-5s3OVm" },
            { title: "Hey Soul Sister", artist: "Train", link: "https://www.youtube.com/watch?v=kVpv8-5XWOI" }
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
        img.src = img.src.replace("#", "sharp");
        img.alt = chord;
        chordImagesElement.appendChild(img);
    });
    chordImagesElement2.innerHTML = '';
    
    // Display the images for each chord in the progression
    progression.progression.forEach(chord => {
        const img = document.createElement('img');
        img.src = `${chord}.jpg`;
        img.src = img.src.replace("#", "sharp");
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
