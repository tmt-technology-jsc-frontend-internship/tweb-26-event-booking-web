import "slick-carousel"

function setPaddingLeftBar() {
  const screenWidth = window.innerWidth;
  const dynamicPadding = Math.ceil((screenWidth - 1280) / 2);
  const leftBar = document.querySelectorAll(".left-bar");
  leftBar.forEach((e)=>{
    if (dynamicPadding > 320) {
      e.style.paddingRight = `${320}px`;
    }
    else if (dynamicPadding > 0) {
      e.style.paddingRight = `${dynamicPadding}px`;
    }
    else if (screenWidth > 834) {
      e.style.paddingRight = `${0.14*screenWidth}px`;
    }
    else {
      e.style.paddingRight = `${0.23 * screenWidth}px`;
    }
  })
}

function setPaddingRightBar() {
  const screenWidth = window.innerWidth;
  const dynamicPadding = Math.ceil((screenWidth - 1280) / 2);
  const rightBar = document.querySelectorAll(".right-bar");
  rightBar.forEach((e)=>{
    if (dynamicPadding > 320) {
      e.style.paddingLeft = `${320}px`;
    }
    else if (dynamicPadding > 0) {
      e.style.paddingLeft = `${dynamicPadding}px`;
    }
    else if (screenWidth > 834) {
      e.style.paddingLeft = `${0.14*screenWidth}px`;
    }
    else {
      e.style.paddingLeft = `${0.23 * screenWidth}px`;
    }
  })
}

function setPaddingTopTicketForm(){
  let t = 77;
  if(window.innerWidth >= 834) t = 72;
  let img = document.querySelector('.dj-img').parentNode.parentNode;
  let outerContainer = img.parentNode.parentNode;
  let tmp = (img.offsetHeight) - t;
  outerContainer.style.paddingTop = `${tmp}px`;
}

let time = 52; // hours
let totalSecond = time * 3600; //seconds

let countdown = setInterval(function(){
  if(totalSecond == 0){
    clearInterval(countdown);
  }
  else{
    let tmp = totalSecond;
    let second = tmp % 60;
    tmp = Math.floor(tmp / 60);
    let minute = tmp % 60;
    tmp = Math.floor(tmp / 60);
    let hour = tmp % 24;
    let day = Math.floor(tmp / 24);
    totalSecond--;
  
    if(second < 10) second = '0' + second;
    if(minute < 10) minute = '0' + minute;
    if(hour < 10) hour = '0' + hour;
    if(day < 10) day = '0' + day;
  
    $('#dayEvent').text(day);
    $('#hourEvent').text(hour);
    $('#minuteEvent').text(minute);
    $('#secondEvent').text(second);
  }
}, 1000)

$(document).ready(function(){
    $('.slider-banner').slick({
      slideToShow: 1,
      lazyLoad: 'ondemand',
      slidesToScroll: 1,
      initialSlide: 0,
      infinite:false,
      mobileFirst: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots:true,
      prevArrow: $('.slick-banner-prev'),
      nextArrow: $('.slick-banner-next'),
      responsive: [
        {
          breakpoint: 413,
          setting: {
            arrows: false,
          }
        },
      ]
    })

    setPaddingLeftBar();
    setPaddingRightBar();
    setPaddingTopTicketForm();
  })

$(window).resize(function(){
  setPaddingLeftBar();
  setPaddingRightBar();
  setPaddingTopTicketForm();
})




  