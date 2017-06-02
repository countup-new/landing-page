$( document ).ready(function() {
  showFaq();
  showTerms();
  showPrivacy();
  toggleFaqAnswer();
  closeOverlay();
  escapeCloseOverlay();
  showPHContent();
});

function mixTrackUp() {
    mixpanel.track('PHGETSTARTEDTOP');
}

function mixTrackDown() {
    mixpanel.track('PHGETSTARTEDBOTTOM');
}

function turnOffBodyScrolling() {
  $('body').css('overflow', 'hidden');
}

function turnOnBodyScrolling() {
  $('body').css('overflow', 'auto');
}

function showFaq() {
  $('.faq').on('click', function(e) {
    e.preventDefault();
    turnOffBodyScrolling();

    $('.overlay').removeClass('hidden');
    $('.faq-container').removeClass('hidden').addClass('shown');
  });
}

function showTerms() {
  $('.terms').on('click', function(e) {
    e.preventDefault();
    turnOffBodyScrolling();

    $('.overlay').removeClass('hidden');
    $('.terms-container').removeClass('hidden').addClass('shown');
  });
}

function showPrivacy() {
  $('.privacy').on('click', function(e) {
    e.preventDefault();
    turnOffBodyScrolling();

    $('.overlay').removeClass('hidden');
    $('.privacy-container').removeClass('hidden').addClass('shown');
  });
}

function toggleFaqAnswer() {
  $('.faq-question').on('click', function() {
    $(this).find('.faq-answer').toggleClass('hidden', 1000);
  });
}

function hideOverlay() {
  $('.overlay').find('.shown').addClass('hidden').removeClass('shown');
  $('.overlay').addClass('hidden');

  turnOnBodyScrolling();
}

function closeOverlay() {
  $('.close-overlay').on('click', function() {
    hideOverlay();
  })
}

function escapeCloseOverlay() {
  $(document).keyup(function(e) {
     if (e.keyCode == 27) {
       hideOverlay();
    }
  });
}

function showPHContent() {
  var uri = new URI(window.location);
  console.log(uri.search(true).ref == 'producthunt');
  if (uri.search(true).ref === "producthunt") {
    $(".landing-page").css("height" , "950px");
    $("#get-started-content").css("display" , "none");
    $("#intro-content-ph").css("display" , "block");
    $("#intro-content-detail-ph").css("display" , "block");
    $("#monthly-price-99").addClass("strike");
    $("#monthly-price-199").addClass("strike");
    $("#monthly-price-499").addClass("strike");
    $("#monthly-price-ph-99").css("display" , "block");
    $("#monthly-price-ph-199").css("display" , "block");
    $("#monthly-price-ph-499").css("display" , "block");
      $("#intro-content-detail-ph-getstarted").css("display" , "block");
      $(".non_ph_content").css("display" , "none");

      $("#arrowContent").css("display" , "none");
      mixpanel.track("PHLANDED");

  } else {
    $(".ph_content").css("display" , "none");

      $("#getStartedUpLink").css("display" , "none");
  }
}
