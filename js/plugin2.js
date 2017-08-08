;(function ( $, window, document, undefined ) {

    $.widget( "namespace.widgetname" , {

        options: {
            someValue: null
        },

        _create: function () {
            this.element.css({
                backgroundColor: this.options.color,
                border: '2px solid rgb(120, 120, 120)',
                padding: '5px',
                color: 'rgb(50, 50, 50)'
            });

            this.element.click(function () {
                alert('task #145');
            });
        },

        destroy: function () {
            this.element.removeAttr('style');

            $.Widget.prototype.destroy.call(this);
        },

        methodB: function ( event ) {
            this._trigger('MethodA', event, {
                key: event
            });
            console.log('methodB');
        },

        methodA: function ( event ) {
            this._trigger('dataChanged', event, {
                key: event
            });
            console.log('MethodA');
        },

        _setOption: function ( key, value ) {
            switch (key) {
                case "someValue":
                    // this.options.someValue = doSomethingWith( value );
                    break;
                default:
                    //this.options[ key ] = value;
                    break;
            }

            $.Widget.prototype._setOption.apply( this, arguments );
        }
    });

})( jQuery, window, document );