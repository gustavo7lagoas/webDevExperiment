function toggleTab(tabId) {
    $(tabId).toggle();
    // Use jquery toggle
    var visibility = $(tabId).css('visibility');
    console.log('visibility is ', visibility);
}

function drawTabs() {
    var totalDisplayedTabs
        , calculatedWidth;
    totalDisplayedTabs = $('.tab').filter(function(tab) {
        return $(this).css('display') !== 'none';
    }).length;
    calculatedWidth = 100 / totalDisplayedTabs;
    $('.tab').css("width", calculatedWidth + "%");
}

function runCode() {
    var css = '<style>' + $('#cssCode').val() + '</style> ';
    var html = $('#htmlCode').val();
    console.log(html);
    $('iframe').contents().find('html').html(css + html);
    //This is dangerous so remove it if you are going to put it online
    if($('#jsCode').val()) {
        document.getElementById('iframe').contentWindow.eval($('#jsCode').val());
    }
}

$(document).ready(function() {
    $('.codePlayerOption').click(function() {
        $(this).toggleClass();
        var tabId = $(this).html().toLowerCase();
        $('#' + tabId + 'Tab').toggle();
        drawTabs();
    });

    $('#btnRun').click(function() {
        runCode();
    });

    // Use jquery filter to return all displayed divs
    // Get the number of displayed divs
    // Calculate de size and apply to
    // Box sizing attribute : border-box


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
