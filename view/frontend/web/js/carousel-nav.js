define(['jquery','Hprasetyou_SlickMagento/libs/slick/slick'], function($,slick){
    'use strict';

    return function(config, element){
      if(config.nextButton){
        $(element).find(config.nextButton).click(e=>{
          console.log(config.nextButton);
          e.preventDefault()
          $(config.target).slick('slickNext')
        })
      }
      if(config.prevButton){
        $(element).find(config.prevButton).click(e=>{
          e.preventDefault()
          $(config.target).slick('slickPrev')
        })
      }


    }
  }
)
