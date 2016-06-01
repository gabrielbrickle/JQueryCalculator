$('input').on('click', function(event){
  event.preventDefault();
  console.log('this: ', this);
  var numOfClicked = $(this).val();
  $('#answer').append(numOfClicked); ///append allows u to add to element more than just numOfClicked
})



$('#C').on('click', function(event){
  event.preventDefault();
  $('#answer').text('0');
})

$('#equals').on('click', function(event){
  event.preventDefault();
  var sum = eval($('#answer').text());
  $('#answer').text(sum);
})
