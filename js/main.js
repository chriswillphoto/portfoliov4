

$('.tag').on('click', function() {
  $(".selected").removeClass('selected')
  $('.not-selected').removeClass('not-selected')
  $(this).parent().removeClass('hover').addClass('selected')
  $(this).parent().siblings(":not(.tagline)").addClass('not-selected hover')
})

$('.close').on('click', function() {
  $(".not-selected").removeClass("not-selected")
  $(this).parent().removeClass('selected').addClass('hover')
})
