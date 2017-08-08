;(function ($) {
    if (!$.myNamespace) {
        $.myNamespace = {};
    }

    $.myNamespace.thirdPlugin = function (el, myFunctionParam, options) {
        var base = this;

        base.$el = $(el);
        base.el = el;

        base.$el.data("myNamespace.myPluginName", base);

        base.init = function () {
            base.myFunctionParam = myFunctionParam;

            base.options = $.extend({},
                $.myNamespace.thirdPlugin.defaultOptions, options);

            base.$el.css({
                color: 'yellow',
                border: '2px solid yellow',
                backgroundColor: 'rgb(60, 60, 60)',
                padding: '5px'
            });

            base.$el.click(function () {
                    base.functionName();
                }
            );
        };

        base.functionName = function (paramaters) {
            alert('task #146');
        };

        base.init();
    };

    $.myNamespace.thirdPlugin.defaultOptions = {
        myDefaultValue: ""
    };

    $.fn.mynamespace_thirdPlugin = function
        (myFunctionParam, options) {
        return this.each(function () {
            (new $.myNamespace.thirdPlugin(this,
                myFunctionParam, options));
        });
    };
})(jQuery);