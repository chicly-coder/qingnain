var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoplay : 500,
        effect: 'fade'
    });
    $(function(){
    	$('.click').click(function(){
    		$('.show').toggle()
    	})
    })
    $(document).ready(function(e) {
        $(".tab li").click(function(){
			$(".tab li").eq($(this).index()).addClass("activ").siblings().removeClass("activ");
			$(".tabCon div").hide().eq($(this).index()).show();
		})
    });