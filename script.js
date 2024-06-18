document.getElementById('startButton').addEventListener('click', () => {
    // Hide the start button and show the form
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('formContainer').style.display = 'block';

    // Request full-screen mode
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
        document.documentElement.msRequestFullscreen();
    }
});

document.getElementById('googleForm').addEventListener('load', () => {
    // Attach event to exit full screen when form is submitted
    document.getElementById('googleForm').contentWindow.addEventListener('submit', () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    });
});
