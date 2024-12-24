
function refreshWindow() {
    window.location.reload();
}

function toggleFullscreen() {
    let windowElement = document.getElementById('window');
    if (!document.fullscreenElement) {
        if (windowElement.requestFullscreen) {
            windowElement.requestFullscreen();
        } else if (windowElement.mozRequestFullScreen) { // Firefox
            windowElement.mozRequestFullScreen();
        } else if (windowElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
            windowElement.webkitRequestFullscreen();
        } else if (windowElement.msRequestFullscreen) { // IE/Edge
            windowElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
}
