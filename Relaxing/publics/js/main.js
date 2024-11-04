$(document).ready(function(){
  // Xử lý khi người dùng chọn cảm xúc
  $(".emotion-select").on('click', function() {
    $(".emotion-select").removeClass("active");
    $(this).addClass("active");
    // Lấy giá trị cảm xúc từ thuộc tính data-emotion
    const emotion = $(this).data("emotion");
    // Lấy câu ngẫu nhiên và cập nhật vào phần tử `.emotion-advise`
    const advice = getRandomEmotionAdvice(emotion);
    $(".emotion-advise").text(advice);
  });

  //Hiện câu chào theo thời gian thực
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 16) {
    $("#morning").show();
    $("#afternoon").hide();
  } else {
    $("#morning").hide();
    $("#afternoon").show();
  }

  //Mở modal
  $('.open-modal').on('click', function() {
    var targetModalId = $(this).data('target-modal');
    $('#' + targetModalId).show();
    $('.layout').show();
  });
  $('.layout').on('click', function(event) {
    if ($(event.target).is('.layout')) {
        $('.modal').hide();
        $('.layout').hide();
    }
  });

  const podcastAudio = $("#Podcast")[0];
  const musicAudio = $("#Music")[0];

  // Hàm để tạm dừng audio còn lại khi một audio đang phát
  function stopOtherAudio(currentAudio) {
    if (currentAudio === podcastAudio && !musicAudio.paused) {
        musicAudio.pause();
    } else if (currentAudio === musicAudio && !podcastAudio.paused) {
        podcastAudio.pause();
    }
  }

  // Thêm sự kiện 'play' cho mỗi audio để dừng audio còn lại
  $(podcastAudio).on("play", function() {
    stopOtherAudio(podcastAudio);
  });
  $(musicAudio).on("play", function() {
    stopOtherAudio(musicAudio);
  });

  // Sự kiện cho nút Play
  $(".play").on("click", function() {
    const audio = $(this).closest(".modal").find("audio")[0];
    if (audio.paused) {
        audio.play();
        $(this).find("i").removeClass("fa-play").addClass("fa-pause");
    } else {
        audio.pause();
        $(this).find("i").removeClass("fa-pause").addClass("fa-play");
    }
  });

  // Sự kiện cho nút Forward (tua nhanh)
  $(".forward").on("click", function() {
    const audio = $(this).closest(".modal").find("audio")[0];
    audio.currentTime += 10; // Tua nhanh 10 giây
  });

  // Sự kiện cho nút Back (tua ngược)
  $(".back").on("click", function() {
    const audio = $(this).closest(".modal").find("audio")[0];
    audio.currentTime -= 10; // Tua ngược 10 giây
  });

  // Sự kiện cho nút Repeat (lặp lại)
  $(".repeat").on("click", function() {
    const audio = $(this).closest(".modal").find("audio")[0];
    audio.loop = !audio.loop;
    $(this).toggleClass("active"); // Đổi màu hoặc hiệu ứng cho biết đang ở chế độ lặp
  });

  // Cập nhật thanh seek bar khi audio phát
  $("audio").on("timeupdate", function() {
    const audio = this;
    const seekBar = $(this).closest(".modal").find(".audio-bar")[0];
    seekBar.value = (audio.currentTime / audio.duration) * 100;
  });

  // Cho phép kéo thanh seek bar để tua
  $(".audio-bar").on("input", function() {
    const audio = $(this).closest(".modal").find("audio")[0];
    audio.currentTime = (this.value / 100) * audio.duration;
  });
})