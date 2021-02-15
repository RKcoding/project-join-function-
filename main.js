function getParagraph1() {
  var inputs = [];
  for (var i = 1; i < 6; i++) {
    inputs.push(document.getElementById("paragraph1_input_box_" + i).value);
  }
  inputs.join(". ");
  document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}

function getParagraph2() {
  var inputs2 = [];
  for (var i = 1; i < 6; i++) {
    inputs2.push(document.getElementById("paragraph2_input_box_" + i).value);
  }
  inputs2.join(". ");
  document.getElementById("showParagraph2").innerHTML = inputs2.join(". ");
}