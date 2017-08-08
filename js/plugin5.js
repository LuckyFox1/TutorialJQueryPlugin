var myObject = {
    init: function (options, elem) {
        this.options = $.extend({}, this.options, options);

        this.elem = elem;
        this.$elem = $(elem);

        this._build();

        return this;
    },
    options: {
        taskNumber: 0
    },
    _build: function () {
        this.$elem.append('<button id="5">Click</button>');
    },
    myMethod: function (msg) {
        alert(msg + this.options.taskNumber);
    }
};

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {
        }

        F.prototype = o;
        return new F();
    };
}

$.plugin = function (name, object) {
    $.fn[name] = function (options) {
        return this.each(function () {
            if (!$.data(this, name)) {
                $.data(this, name, Object.create(object).init(
                    options, this));
            }
        });
    };
};

// Пример использования:
// превращаем myObject в плагин
$.plugin('plugin5', myObject);

// и используем, как обычно
// $('#elem').myobj({name: "John"});
// var inst = $('#elem').data('myobj');
// inst.myMethod('I am a method');