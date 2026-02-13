document.addEventListener('DOMContentLoaded', function () {
	jQuery(document.body).on('added_to_cart', function () {
		// Эмулируем клик по элементу с классом .header-cart-button в теге header
		jQuery('header .header-cart-button').trigger('click');
		
	});
	

	
});

// Видео воспроизведение по кнопке
(() => {
    "use strict";
    function videoPlay() {
        var btnsPlay = document.querySelectorAll(".video__play");
        if (btnsPlay) btnsPlay.forEach((function(btnPlay) {
            btnPlay.addEventListener("click", (function() {
                var parent = btnPlay.closest(".videos");
                var video = parent.querySelector(".descr__video video");
                if (true === video.paused) {
                    video.play();
                    btnPlay.classList.add("video__play_active");
                    video.controls = true;
                } else {
                    video.pause();
                    btnPlay.classList.remove("video__play_active");
                    video.controls = false;
                }
            }));
        }));
    }
    videoPlay();
})();
// 


var $=jQuery;
$(document).ready(function(){

	$('body').click(function(e){
		if($(e.target).hasClass('button'))
		{
			var id=$(e.target).attr('id');
			if(id=='place_order')
			{
			if(!CheckAgree())
			{
				e.stopPropagation();
				e.preventDefault();
			}
			}
		}
		
	});
})
function CheckAgree()
{
	if($('#agree').prop("checked")==false)
	{
		alert('Необходимо подтвердить согласие с Политикой конфиденциальности');
		f=0;
		return false;
	}
	if($('#agree2').prop("checked")==false)
	{
		f=0;
		alert('Необходимо подтвердить согласие с Политикой обработки персональных данных');
		return false;
	}	
if(f)
{	
	return true;
}
else
{
	return false;
}
}