
addTweets(); 

$(document).on('turbolinks:load', function() {
  
  console.log('score')
  jcarouselControlls();
  scrollBottom();
  submitNewMessage();
  
  // uncomment below to initiate polling for tweets
  // setInterval(addTweets, 5000);
  
});



function scrollBottom(){
  chatBox = $('#chatbox');
  chatBox.scrollTop(chatBox.prop("scrollHeight"));
}

function jcarouselControlls() {
  $('.jcarousel').jcarousel({
    animation: 'fast',
    wrap: 'circular'
  });
  $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
}

function addTweets(){
    var curr_concert = window.location.pathname.match(/concerts\/(\d*)/)[1];
    fetch(`/concerts/${curr_concert}/shared_experiences/tweet_feed`)
    .then((response) => (response.json()))
    .then((json)=>(json.forEach((obj)=>postMessage(obj))))    
}

function postMessage(json) {
  if (document.querySelector("[name='" + json.twitterID + "']") === null) {
    console.log(json.twitterID)
    let tweet_area = document.querySelector('#tweets');
    let new_tweet = document.createElement('div');
    new_tweet.classList.add('list-group-item')
    new_tweet.innerHTML = json.message;
    console.log(json.twitterID)
    new_tweet.setAttribute('name', json.twitterID);
    tweet_area.prepend(new_tweet);
  }
}

function submitNewMessage(){
  $('[data-textarea="message"]').keydown(
    function(event) {
      if (event.keyCode == 13) {
          $('[data-send="message"]').click();
          event.preventDefault();
          // return false;
     }
  });
}

function scrollBottom(){
  console.log($('test'))
  chatBox = $('#chatbox');
  chatBox.scrollTop(chatBox.prop("scrollHeight"));
}

