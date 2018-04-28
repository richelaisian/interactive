

  var currentTags = [];

  $( ".tag-type button" ).on('click', function() {
    console.log(currentTags);

    //get text from button
    var buttonText = $(this).text();

    //replace spaces with dashes
    var buttonTag = buttonText.replace(/ /g, "-");

    //add highlight class to all items with the relevant tag
    //(now properly formated) or remove it if it has been unselected
    if ($(this).hasClass('selected-tag')) {
      var index = currentTags.indexOf(buttonTag);
        console.log(index);
      currentTags.splice(index, 1);
        console.log(currentTags);
    } else {
      currentTags.push(buttonTag);
      console.log(currentTags);
    }

    //toggles class on the button to show if it is selected
    $(this).toggleClass('selected-tag');

    $('.item').removeClass('highlight');

    var currentTagsString = currentTags.toString();
    console.log(currentTagsString);

    var currentTagsString = currentTagsString.replace(/,/g, " ");
    console.log(currentTagsString);

    $('div[rel*="'+currentTagsString+'"]').addClass('highlight');

  });

  $('#tag-toggle').on('click', function() {
    $('#tag-container').slideToggle();

    $(this).toggleClass('open-toggle');
  });
  //
  // when you click a filter, add that that tag to a list. check each item for both. highlight only those. when you hit a button again, remove that from list.
