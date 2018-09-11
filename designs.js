




//When clicking on the grid, change the color of the grid
$('#pixel_canvas').on('click','tr',function(event) {
  // Select color input
  let color = $('#colorPicker').val();
  //Change the background color
  $(event.target).css('background-color',color);
})

// When size is submitted by the user, call makeGrid()
$('form'). submit(function(){
  //empty table
  $('#pixel_canvas').empty();
  // Select size input
  let height = $('#input_height').val();
  let width = $('#input_width').val();
  // if (height > 100) {
  //   height = 100;
  // }
  // if (width > 100) {
  //   width = 100;
  // }
  //Build the canvas
  $(makeGrid(height,width));
  //No reload after clicking submit
  return false;
});

//Use for loop to make the grid
function makeGrid(height,width) {
  for (let r = 0; r < height; r++) {
    $('#pixel_canvas').prepend('<tr></tr>');
    for (let d = 0; d < width; d++) {
      $('tr').first().append('<td></td>')
    }
  }
};
