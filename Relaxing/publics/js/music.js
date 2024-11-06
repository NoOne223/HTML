// music.js
import playlists from './musiclist.js'; // Import danh sách phát từ musiclist.js

const $audioElement = $("#Music")[0];
const $titleElement = $(".title");
const $dropdownList = $(".dropdown-list");

let currentPlaylist = [];
let currentSongIndex = 0;

// Hàm để tải danh sách các playlist vào dropdown
export function loadPlaylists() {
    $.each(playlists, function (listName) {
        const $listItem = $('<li>', {
            class: 'list-item',
            text: listName,
            click: function () {
                selectPlaylist(listName);
            }
        });
        $dropdownList.append($listItem);
    });
}

// Hàm chọn playlist và phát bài hát đầu tiên
export function selectPlaylist(listName) {
    currentPlaylist = playlists[listName];
    currentSongIndex = 0;
    playSong(currentSongIndex);
}

// Hàm phát bài hát và cập nhật tiêu đề
function playSong(index) {
    const selectedSong = currentPlaylist[index];
    $audioElement.src = selectedSong.src;
    $titleElement.text(selectedSong.title);
    $audioElement.play();
}

// Sự kiện khi bài hát kết thúc, chuyển sang bài tiếp theo nếu có
$audioElement.addEventListener('ended', function () {
    currentSongIndex++;
    if (currentSongIndex < currentPlaylist.length) {
        playSong(currentSongIndex);
    } else {
        currentSongIndex = 0; // Nếu hết danh sách phát, có thể tự động quay lại bài đầu tiên hoặc dừng
    }
});

// Gọi hàm loadPlaylists để tải danh sách phát
loadPlaylists();
