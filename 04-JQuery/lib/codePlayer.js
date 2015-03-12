function toggleTab(tabId) {
    $(tabId).toggle();
    var visibility = $(tabId).css('visibility');
    console.log('visibility is ', visibility);
}

$(document).ready(function() {
    $('.codePlayerOption').click(function() {
        $(this).toggleClass();
        var tabId = $(this).html().toLowerCase();
        toggleTab('#' + tabId + 'Tab');
    });

    /*$('#cssButton').click(function() {
        $(this).toggleClass('clicked');
        toggleTab('#cssTab');
    });

    $('#jsButton').click(function() {
        $(this).toggleClass('clicked');
        toggleTab('#jsTab');
    });

    $('#resultButton').click(function() {
        $(this).toggleClass('clicked');
        toggleTab('#resultTab');
    });*/

});
