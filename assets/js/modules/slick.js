const ELEMENT_SELECTOR = {
    slider:'.slider',
  };
  
  export default function slider() {
      $(document).ready(function () {
          $(ELEMENT_SELECTOR.slider).slick({
              mobileFirst: true,
              infinite: true,
              slidesToShow: 2,
              arrows: false,
              dots: false,
              variableWidth: true,
              responsive: [
                  {
                      breakpoint: 1240,
                      settings: {
                          dots: true
                      }
                  },
              ],
          });
      });
  }

