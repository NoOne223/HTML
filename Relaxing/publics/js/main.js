$(document).ready(function(){
  // Xử lý khi người dùng chọn cảm xúc
  $(".emotion-select").on('click', function() {
    $(".emotion-select").removeClass("active");
    $(this).addClass("active");
    const emotion = $(this).data("emotion");
    const advice = getRandomEmotionAdvice(emotion);
    $(".emotion-advise").text(advice);
  });

  //Thay đổi banner
  const videoSources = [
    './assets/video/banner-vid-1.mp4',
    './assets/video/banner-vid-2.mp4',
    './assets/video/banner-vid-3.mp4',
    './assets/video/banner-vid-4.mp4',
    './assets/video/banner-vid-5.mp4',
    './assets/video/banner-vid-6.mp4',
    // Thêm các video khác nếu cần
  ];
  $('.change-theme').click(function() {
    // Chọn ngẫu nhiên một video từ danh sách
    const randomVideo = videoSources[Math.floor(Math.random() * videoSources.length)];
    // Thay đổi src của video
    $('.banner-video source').attr('src', randomVideo);
    // Nạp lại và phát video mới
    $('.banner-video')[0].load();
    $('.banner-video')[0].play();
  });

  //Hiện câu chào theo thời gian thực
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 17) {
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
      $(".play-music").find("i").removeClass("fa-pause").addClass("fa-play");
    } else if (currentAudio === musicAudio && !podcastAudio.paused) {
      podcastAudio.pause();
      $(".play-podcast").find("i").removeClass("fa-pause").addClass("fa-play");
    }
  }
  // Thêm sự kiện 'play' cho mỗi audio để dừng audio còn lại
  $(podcastAudio).on("play", function() {
    stopOtherAudio(podcastAudio);
    // Cập nhật nút play cho podcast
    $(".play-podcast").find("i").removeClass("fa-play").addClass("fa-pause");
  });
  $(musicAudio).on("play", function() {
    stopOtherAudio(musicAudio);
    // Cập nhật nút play cho music
    $(".play-music").find("i").removeClass("fa-play").addClass("fa-pause");
  });
  // Sự kiện cho nút Play
  $(".play").on("click", function() {
    const audio = $(this).closest(".modal").find("audio")[0];
    const isPodcast = $(this).hasClass("play-podcast");
    // Dừng các audio khác trước khi phát
    stopOtherAudio(audio);
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

  //Chọn danh sách
  const firstItemText = $('.dropdown-list .list-item').first().text();
  $('.dropdown-btn span').text(firstItemText);
  $('.dropdown-btn').on('click', function(){
    $('.dropdown-btn i').toggleClass('rotate');
    $('.dropdown-list').slideToggle('5000');
  });
   // Cập nhật text của nút khi nhấn vào mục danh sách
  $('.list-item').click(function() {
    const selectedText = $(this).text();
    $('.dropdown-btn span').text(selectedText);
    $('.dropdown-list').slideUp('5000');
    $('.dropdown-btn i').removeClass('rotate');
  });
})