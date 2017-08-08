;(function ( $, window, document, undefined ) {
    $.widget("ao.eventStatus", {
        options: {

        },

        _create : function() {
            var self = this;

            self.element.addClass( "my-widget" );

            self.element.bind( "myEventStart", function( e ) {
                console.log("event start");
            });

            self.element.bind( "myEventEnd", function( e ) {
                console.log("event end");
            });

            self.element.click(function () {
                alert('task #147');
            });
        },

        destroy: function(){
            console.log('destroy');
            $.Widget.prototype.destroy.apply( this, arguments );
        }
    });
})( jQuery, window , document );