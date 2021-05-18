# SlickMagento
Magento 2 module to using slick https://kenwheeler.github.io/slick/ in magento block or page 

## Install
- Download this module
- create directory Hprasetyou under app/code on your magento 2 project
- move this module inside app/code/Hprasetyou
- this module path sould be < magento root >/app/code/Hprasetyou/SlickMagento
- run php bin/magento setup:upgrade

### Usage
Usage is pretty simple, just call data-mage-init='{"Hprasetyou_SlickMagento/js/carousel":{}}' where you want to init your slick carousel. You can pass slick option directly to the markup. Please refer this to see available options: https://kenwheeler.github.io/slick/#settings

    <div data-mage-init='{
    "Hprasetyou_SlickMagento/js/carousel": 
        {"infinite":false, "slidesToShow": 3,"responsive": [
        {
          "breakpoint": 480,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "centerMode": true
          }
        }]}}'>
         <img src="{{media url="pages/home/service/1.jpg"}}" alt="">
         <img src="{{media url="pages/home/service/2.jpg"}}" alt="">
    </div>
