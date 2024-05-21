document.addEventListener('DOMContentLoaded', function() {
    //Buttons that lead from main menu to each modes and vice versa
    const cr_button = document.getElementById("cr_button");
    const ct_button = document.getElementById("ct_button");

    cr_button.addEventListener('click', function() {
        navigateToNewPage("chordrecognition", "chordrecognition")
    })

    ct_button.addEventListener('click', function() {
        navigateToNewPage('chordtransition', "chordtransition")
    })
   
});

function navigateToNewPage(folderName, fileName) {
    window.location.href = "../" + folderName + "/" + fileName + '.html'
}

