$(window).defaultPluginName({element: $('#1')});

$('#2').widgetname({color: 'rgb(245, 245, 245)'});
// $('#2').widgetname('destroy');
// $('#2').widgetname('methodA');

$('#3').mynamespace_thirdPlugin();

$('#4').eventStatus();
$(".my-widget").trigger("myEventStart");
$(".my-widget").trigger("myEventEnd");
$('#4').eventStatus('destroy');


$('.wrapper').plugin5({taskNumber: 148});
var instance = $('.wrapper').data('plugin5');
$('#5').click(function () {
    instance.myMethod('Task #');
});
