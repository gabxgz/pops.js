var Popup = function ( anchorId, width, height ) {
    
    this.anchorId = anchorId;
    this.width = width;
    this.height = height;
    this.url = document.getElementById(anchorId).href;
    this.element = document.getElementById(anchorId);
        
};

// Popup function
Popup.prototype.pop = function () {

    var LeftPosition = (screen.width) ? (screen.width-this.width)/2 : 0;
    var TopPosition = (screen.height) ? (screen.height-this.height)/2 : 0;
    var settings = 'height=' + this.height + ',width=' + this.width + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=false' + ',resizable';
    window.open(this.url,"",settings);

};

// Initialize Popup
Popup.prototype.init = function(){
    
    var that = this;
    //
    var urlParameter = getParameterByName('pop');
    
    // Bind popup to click event    
    this.element.onclick = function(event){
        event.preventDefault();
        that.pop();
    };
    
    // Popup onload if set to true
    if ( urlParameter === this.anchorId ){
        that.pop();
    }
    
};

//Check URL for particular parameter
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
