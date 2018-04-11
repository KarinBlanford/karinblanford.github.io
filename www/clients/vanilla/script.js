function iconClickHandler(id) {
  console.log("I'm clicking this element: ", id);
  // $(".icon-container").removeClass("selected");
  // var curr = document.getElementById(id);
  // curr.classList.add('selected');
  var innerContent = toTitleCase(replaceAll(id, '-', ' '));
  document.getElementById('exampleModalLongTitle').innerText = innerContent;
  // document.getElementById('center-content-span').innerHTML= innerContent.replace(' ', '</br>');
}

function addClassToIcon(id) {
  console.log("I'm clicking this element: ", id);
  $(".icon-container").removeClass("selected");
  var curr = document.getElementById(id);
  curr.classList.add('selected');
  var replacedClassName = replaceAll(id, '_highlighted', '');
  var innerContent = toTitleCase(replaceAll(replacedClassName, '-', ' '));
  console.log("This is the content of the center-content-span: ", document.getElementById('center-content-span'));
  document.getElementById('center-content-span_highlighted').innerHTML= innerContent.replace(' ', '</br>');
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
