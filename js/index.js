document.addEventListener('click', function(e){
    e = e  || window.event;
    var target = e.target || e.srcElement;
    if (target.className == 'question') {
        // Check if target doesn't have class active
        if (target.classList.contains('active')) return; 
        // Remove the active class from all questions
        var questions = document.getElementsByClassName('question');
        for (var i = 0; i < questions.length; i++) {
            questions[i].classList.remove('active');
        }
        // Add the active class to the clicked question
        target.classList.add('active');    
    }
})