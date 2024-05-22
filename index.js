document.addEventListener('DOMContentLoaded', function() {
    //Buttons that lead from main menu to each modes and vice versa
    const cr_button = document.getElementById("cr_button");
    const ct_button2 = document.getElementById("ct_button2");

    cr_button.addEventListener('click', function() {
        navigateToNewPage("chordrecognition", "chordrecognition")
    })

    ct_button2.addEventListener('click', function() {
        window.location.href = "website/home.html"
    })
   
});

function navigateToNewPage(folderName, fileName) {
    window.location.href = "../" + folderName + "/" + fileName + '.html'
}

