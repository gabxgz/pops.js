var Popup = function ( anchorId, width, height ) {
    if (document.getElementById(anchor)){
        this.anchorId = anchorId;
        this.width = width;
        this.height = height;
        this.url = document.getElementById(anchorId).href;
        this.element = document.getElementById(anchorId);
    } else {
        return false;
    }
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
    if (document.getElementById(this.anchor)) {
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
    } else {
        return false;
    }
};

//Check URL for particular parameter
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}