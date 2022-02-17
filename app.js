
//To Mark the li as completed

$('ul').on('click', 'li', function () {

    $(this).toggleClass('completed');
});

// Delete li When clicked on span

$('ul').on('click', 'span', function (event) {

    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();  //  to prevent event bubling....
});
// Add new Todo  in the Todo list  

$('#inp').keypress(function (event) {
    if (event.which === 13) {
        const TodoText = $(this).val();

        if(TodoText.trim().length === 0){
            $('#inp').css('boder','3px solid red');
            $('h1').css('boder','red');
            return;

        }



        const li = `<li><span><i class="fas fa-trash-alt"></i></span> ${TodoText}</li>`
        $('#list').append(li);
        $(this).val("");
    }
});

$('#plus').click(function () {
    $('#inp').fadeToggle(500);
});