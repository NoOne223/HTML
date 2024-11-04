// emotions.js

const emotions = {
    happy: [
        "Thật vui khi thấy bạn vui vẻ, hãy tiếp tục giữ vững tinh thần nhé!",
        "Có vẻ như ai đó cần mở một buổi tiệc nhỏ rồi!",
        "Hạnh phúc có thể rất đơn giản, nhưng để có được hạnh phúc thì không hề đơn giản! Hãy trân trọng nó nhé!",
    ],
    sad: [
        "Hôm nay có vẻ không ổn, hãy thư giãn và nghỉ ngơi một chút!",
        "Có vẻ như bạn đang gặp khó khăn, hãy cố gắng lên nhé!",
        "Trong thế giới rộng lớn này rồi sẽ có người cứu bạn thoát khỏi những điều xấu, bạn cũng hãy cứu trái tim bạn thoát khỏi những tiêu cực nhé!",
        "Ai làm bạn buồn? Có cần tôi giáo huấn người đó giúp bạn không?",
    ],
    angry: [
        "Mọi chuyện sẽ ổn thôi, hãy cố gắng kiềm chế cảm xúc nhé!",
        "Không có cơn giận nào là không có lí do nhưng nếu giải quyết vấn đề trong cơn giận thì không phải là điều khôn ngoan!",
        "Tức giận là điều bình thường nhưng kiểm soát được cơn giận mới là phi thường!",
    ],
    tired: [    
        "Cố gắng thư giãn và phục hồi năng lượng nhé!",
        "Hôm nay chắc hẳn là một ngày vất vả, bạn đúng là một chiến binh thực thụ hãy nghỉ ngơi để ngày mai tiếp tục chinh phục giấc mơ nhé!",
        "Mệt mỏi sẽ được xua tan bằng cách tắm rửa sạch sẽ, ăn một bữa ăn ngon và ngủ thật sớm! Điều này sẽ giúp cải thiện tinh thần hơn là việc ngủ ngay, không tắm và bỏ bữa!",

    ],
    inlove: [
        "Chúc mừng bạn đã tìm thấy niềm vui trong tình yêu!",
        "Thật hạnh phúc khi có ai đó đặc biệt bên cạnh bạn!",
        "Tình yêu thật đẹp đúng không?",
        "Chúc bạn sớm chinh phục được người ấy nhé!",
        "Ái chà chà! Người bạn của chúng ta nay đã biết yêu rồi sao? Hãy tỉnh táo và luôn chính trực trong tình yêu bạn nhé!",
    ]
};

// Hàm chọn ngẫu nhiên 1 câu trong mảng câu của từng cảm xúc
function getRandomEmotionAdvice(emotion) {
    const messages = emotions[emotion];
    return messages[Math.floor(Math.random() * messages.length)];
}
