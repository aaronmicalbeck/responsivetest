console.log('Hello My name is Aaron Beck');
console.log('Thank you for moving me forward in the interview process.');
console.log('I look forward to you reviewing my code.');
console.log(':)');

$(document).ready(function() {
    console.log( "jQuery -- ready!" );

// ON CLICK, Card class border style is changed

    $(".card").click(function() {
        console.log(this);
        $(this).attr("style", "border: solid 3.5px greenyellow;");
    });

});