(function($){
	$.fn.popup = function(w,h){
		var Popup = function ( element, width, height ) {
			this.element = element;
			this.anchorId = element.attr('id');
			this.width = width;
			this.height = height;
			this.url = element.attr('href');
		}

		// Popup function
		Popup.prototype.pop = function () {
			var LeftPosition = (screen.width) ? (screen.width-this.width)/2 : 0,
				TopPosition = (screen.height) ? (screen.height-this.height)/2 : 0,
				settings = 'height=' + this.height + ',width=' + this.width + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=false' + ',resizable';

			window.open(this.url,"",settings);
		};

		// Initialize Popup
		Popup.prototype.init = function(){
			var that = this,
				urlParameter = this.getParameterByName('pop');

			// Bind popup to click event
			this.element.bind( 'click', function(event){
				event.preventDefault();
				that.pop();
			});

			// Popup onload if set to true
			if ( urlParameter === this.anchorId ){
				that.pop();
			}
		};

		// Check URL for particular parameter
		Popup.prototype.getParameterByName = function (name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		};

		this.each(function(){
			var popup = new Popup($(this), w, h);			
			popup.init();
		});
		
		return this;
	};
}(jQuery));