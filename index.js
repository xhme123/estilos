$(document).ready(function() {

    $('.episode-page__servers-list a:first').parent().addClass('is-active').show();
    var firstTabNumber = $('.episode-page__servers-list a:first').attr('href').substring(4);

    $('#video_player').html(tabsArray[firstTabNumber]);

    $('.episode-page__servers-list a').on('click', function(e) {
        e.preventDefault();

        $('.episode-page__servers-list li').removeClass('is-active');
        $(this).parent().addClass('is-active');

        var activeTabNumber = $(this).attr('href').substring(4);
        $('#video_player').html(tabsArray[activeTabNumber]);
        console.log("activetab val: " + activeTabNumber);
    });

    $(".showModal").click(function() {
        $(".modal").addClass("is-active");
    });

    $(".delete, .modal-background").click(function() {
        $(".modal").removeClass("is-active");
    });
});