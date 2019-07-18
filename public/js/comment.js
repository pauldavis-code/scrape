$("#submitComment").on("click", function() {
  let song = $(this).attr("data-song")
  let commentSend = {
    song: song,
    user: $("#user").val().trim(),
    comment: $("#comment").val().trim()
  }

  $.ajax({
    method: "POST",
    url: "/api/" + song,
    data: commentSend
  })
    .then(function(res) {
      $("#user").val("")
      $("#comment").val("")
      location.reload()
    })

});