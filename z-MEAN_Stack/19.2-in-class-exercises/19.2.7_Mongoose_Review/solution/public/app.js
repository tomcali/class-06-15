function getScrap() {
  $.getJSON("/getScrap", function(data) {
    $("input").val(data.title);
    $("textarea").val(data.body);
    $("form").attr("data-id", data._id);

    if (data) {
      $("#wrapper").append("<button id=\"deleter\" data-id=\"" + data._id + "\">Delete</button>");
    }
  });
}

$("form").submit(function(event) {
  var selected = $(this);
  if ($("form").attr("data-id")) {
    event.preventDefault();
    console.log("updating");
    $.ajax({
      type: "POST",
      url: "/update/" + selected.attr("data-id"),
      dataType: "json",
      data: {
        title: $("input").val(),
        body: $("textarea").val(),
        lastUpdate: Date.now()
      },
      success: function(data) {
        alert("Update Saved!");
      }

    });
  }
});

$(document).on("click", "#deleter", function() {
  var selected = $(this);
  $.ajax({
    type: "GET",
    url: "/delete/" + selected.attr("data-id"),
    success: function(data) {
      alert("Deleted");
      $("input").val("");
      $("textarea").val("");
      $("form").removeAttr("data-id");
      $("#deleter").remove();
    }

  });
});


getScrap();
