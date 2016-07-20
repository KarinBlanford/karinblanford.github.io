var appendPolaroid = function() {
    var $div = $("<div>", {
        id: "foo",
        class: "a"
    });
    $div.click(function() {
        console.log("I was clicked")
    });
    $("#box").append($div);
}

var init = function() {
    console.log("Successfully initiated application");
}
