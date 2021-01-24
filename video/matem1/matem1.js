
function vidik() {
  var list = document.querySelectorAll(`li`)
    var videoPlayer = videojs('video_1')

    for (var item of list) {
      item.addEventListener("click", function (event) {
        var classNomi = event.target.className
        if (classNomi == "1dars list-group-item") {
          videoPlayer.src([
            {type: "video/mp4", src: "62kasr.mp4"},
          ])
        }
        if (classNomi == "2dars list-group-item") {
          videoPlayer.src([
            {type: "video/mp4", src: "63kasr.mp4"},
          ])
        }
        if (classNomi == "3dars list-group-item") {
          videoPlayer.src([
            {type: "video/mp4", src: "52oxirgiraq.mp4"},
          ])
        }
      })
    }
  }
