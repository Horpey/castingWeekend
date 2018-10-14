// Load the IFrame Player API code asynchronously.
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		function onYouTubeIframeAPIReady() {
			$('.youtube-video').inViewAutoplay({
				autohide: 1,
				modestbranding: 1,
				mute: 1,
				rel: 0,
				showinfo: 0,
				quality: 'hd720'
			}, );
		}