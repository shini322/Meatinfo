if ( $(window).width() < 1025 ){

// Раскрытие полного текста при клике

var size = 350,
    descContent= $('.description-company__desc'),
    newsContent = descContent.text(),
    readMore = $('.description-company__read-more');
    
if(newsContent.length > size){
    descContent.text(newsContent.slice(0, size) + '...');
    readMore.click(function(){
        if(readMore.hasClass('description-company__read-more--hidden')){
            descContent.text(newsContent.slice(0, size) + '...');
        } else {
            descContent.text(newsContent);
            
        }
        $(this).toggleClass('description-company__read-more--hidden')
    });
}

var btn = $('.button-up');  
$(window).scroll(function() {     
  if ($(window).scrollTop() > 300) {
     btn.addClass('show');
   } else {
     btn.removeClass('show');
   }
 });
 btn.on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({scrollTop:0}, '300');
 });



}




if ( $(window).width() < 769 ){

    // Объявление слайдера 

    var $slider = $('.info-gallery__slider');

    if ($slider.length) {
      var currentSlide;
      var slidesCount;
      var sliderCounter = document.createElement('div');
      sliderCounter.classList.add('slider__counter');
      
      var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + '/' +slidesCount)
      };
    
      $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
      });
    
      $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });

    
      $slider.slick({
          arrows: false,
          fade: true,
      });
    }

}


//Функции смены кнопки компании 

let company = $('.company');
let companyButton = $('.company__button');

if(company.hasClass('company--worker')){
    company.each(function () {
        $(this).find(companyButton).attr('disabled', true).addClass('company__button--worker'); 
    });
} else {
    companyButton.click(function () {
        $(this).toggleClass('company__button--request');
     });
}



var checkbox = $('.inaccuracy-form__input');
var button = $('#check');

if(checkbox.is(':checked')){  
  button.prop('disabled', false);
}else{  
  button.prop('disabled', true);
}

checkbox.on('change', function(){
 if(checkbox.is(':checked')){  
  button.prop('disabled', false);
}else{  
  button.prop('disabled', true);
} 
});



$(function () {
    if ( $(window).width() < 550 ){
        $("#rateYo").rateYo({
            starWidth: "30px",
          spacing: "5px",
          numStars: 5,
          normalFill: "#BDBDBD",
          "starSvg": '<svg width="14" height="14" viewBox="0 0 30 28"  xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M28.7131 9.8596L19.9233 8.58214L15.994 0.616237C15.8866 0.398135 15.7101 0.221576 15.492 0.114257C14.945 -0.155774 14.2803 0.0692515 14.0068 0.616237L10.0775 8.58214L1.28767 9.8596C1.04533 9.89422 0.823768 10.0085 0.654133 10.1816C0.449054 10.3923 0.336046 10.6759 0.339941 10.97C0.343836 11.264 0.464315 11.5445 0.674905 11.7498L7.03448 17.9501L5.532 26.7054C5.49676 26.909 5.5193 27.1185 5.59705 27.31C5.67481 27.5015 5.80466 27.6674 5.9719 27.7889C6.13914 27.9103 6.33706 27.9825 6.54323 27.9972C6.74939 28.0119 6.95556 27.9685 7.13833 27.872L15.0004 23.7385L22.8624 27.872C23.0771 27.9863 23.3263 28.0244 23.5652 27.9828C24.1676 27.879 24.5726 27.3077 24.4688 26.7054L22.9663 17.9501L29.3259 11.7498C29.499 11.5802 29.6132 11.3586 29.6478 11.1163C29.7413 10.5104 29.3189 9.94961 28.7131 9.8596Z"/>' +
                    '</svg>'
          
        });
    } else {
        $("#rateYo").rateYo({
            starWidth: "14px",
          spacing: "5px",
          numStars: 5,
          normalFill: "#BDBDBD",
          "starSvg": '<svg width="14" height="14" viewBox="0 0 30 28"  xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M28.7131 9.8596L19.9233 8.58214L15.994 0.616237C15.8866 0.398135 15.7101 0.221576 15.492 0.114257C14.945 -0.155774 14.2803 0.0692515 14.0068 0.616237L10.0775 8.58214L1.28767 9.8596C1.04533 9.89422 0.823768 10.0085 0.654133 10.1816C0.449054 10.3923 0.336046 10.6759 0.339941 10.97C0.343836 11.264 0.464315 11.5445 0.674905 11.7498L7.03448 17.9501L5.532 26.7054C5.49676 26.909 5.5193 27.1185 5.59705 27.31C5.67481 27.5015 5.80466 27.6674 5.9719 27.7889C6.13914 27.9103 6.33706 27.9825 6.54323 27.9972C6.74939 28.0119 6.95556 27.9685 7.13833 27.872L15.0004 23.7385L22.8624 27.872C23.0771 27.9863 23.3263 28.0244 23.5652 27.9828C24.1676 27.879 24.5726 27.3077 24.4688 26.7054L22.9663 17.9501L29.3259 11.7498C29.499 11.5802 29.6132 11.3586 29.6478 11.1163C29.7413 10.5104 29.3189 9.94961 28.7131 9.8596Z"/>' +
                    '</svg>'
          
        });
    }
 
    $(".comment__assessment-stars").rateYo({
        starWidth: "14px",
      readOnly: true,  
      rating : 3.5,
      spacing: "5px",
      numStars: 5,
      normalFill: "#BDBDBD",
      "starSvg": '<svg width="14" height="14" viewBox="0 0 30 28"  xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M28.7131 9.8596L19.9233 8.58214L15.994 0.616237C15.8866 0.398135 15.7101 0.221576 15.492 0.114257C14.945 -0.155774 14.2803 0.0692515 14.0068 0.616237L10.0775 8.58214L1.28767 9.8596C1.04533 9.89422 0.823768 10.0085 0.654133 10.1816C0.449054 10.3923 0.336046 10.6759 0.339941 10.97C0.343836 11.264 0.464315 11.5445 0.674905 11.7498L7.03448 17.9501L5.532 26.7054C5.49676 26.909 5.5193 27.1185 5.59705 27.31C5.67481 27.5015 5.80466 27.6674 5.9719 27.7889C6.13914 27.9103 6.33706 27.9825 6.54323 27.9972C6.74939 28.0119 6.95556 27.9685 7.13833 27.872L15.0004 23.7385L22.8624 27.872C23.0771 27.9863 23.3263 28.0244 23.5652 27.9828C24.1676 27.879 24.5726 27.3077 24.4688 26.7054L22.9663 17.9501L29.3259 11.7498C29.499 11.5802 29.6132 11.3586 29.6478 11.1163C29.7413 10.5104 29.3189 9.94961 28.7131 9.8596Z"/>' +
                '</svg>'
      
    });
    
  });

  let starSvg = $('.comment-item__assessment-stars');
  let commentButton = $('.comment-item__submit-link');  
  let errorValidator= $('.comment__error')

  starSvg.click(function(){
    commentButton.prop('disabled', false);
  });

  commentButton.click(function(){
      if(commentButton.prop('disabled', true)){
          errorValidator.text('Для оставления отзывов со дня регистрации на портале должно пройти не менее 30 дней');

      }
  });




if (window.File && window.FileList && window.FileReader) {
    $("#files").on("change", function(e) {
      var files = e.target.files,
        filesLength = files.length;
      for (var i = 0; i < filesLength; i++) {
        var f = files[i]
        var fileReader = new FileReader();
        fileReader.onload = (function(e) {
          var file = e.target;
          $("<span class=\"comment-item__form-upload-image-block\">" +
            "<img class=\"comment-item__form-upload-image\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
            "<br/><span class=\"comment-item__form-upload-remove\"></span>" +
            "</span>").insertAfter("#files");
          $(".comment-item__form-upload-remove").click(function(){
            $(this).parent(".comment-item__form-upload-image-block").remove();
          });
          
        });
        fileReader.readAsDataURL(f);
      }
    });
  } else {
    alert("Your browser doesn't support to File API")
  }




$(".company__link-comment").on("click",  function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 400);
});


$('.comment-item__form').validate({ 

    messages: {
        
        time: {
        required: "Для оставления отзывов со дня регистрации на портале должно пройти не менее 30 дней",
        },
        profile: {
        required: "Для оставления отзывов заполните информацию о себе в профиле",
        },
        assessment: {
            required: "Поставьте оценку компании",
            
        },
        month: {
            required: "Вы можете оставить один отзыв / оценку для одной компании один раз в месяц",
        },

        worker: {
            required: "Сотрудники не могут оставлять отзывы о своей компании, но могут отвечать на них",
        },
        
        
        },
    


});


    