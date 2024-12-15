$(document).ready(function() {
    $(".open-modal").click(function() {
        var targetModalId = $(this).data("target-modal"); // Lấy ID của modal cần mở
        var targetModal = $("#" + targetModalId); // Chọn modal theo ID

        targetModal.addClass("show");
        $(".layout").show();
        $('body').addClass('no-scroll');
    });

    $(".layout").click(function() {
        $(".modal").removeClass("show");
        $(".layout").hide();
        $('body').removeClass('no-scroll');
    });

});
