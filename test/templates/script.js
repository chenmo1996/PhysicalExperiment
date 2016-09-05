//to get a SerializeJson method
(function($) {
    $.fn.serializeJson = function() {
        var serializeObj = {};
        $(this.serializeArray()).each(function() {
            serializeObj[this.name] = this.value;
        });
        // console.log(serializeObj);
        return JSON.stringify(serializeObj);
    };
})(jQuery);
// $(".page").on('pagechange', function(event) {
//     event.preventDefault();
//     $(this).find('ul[data-role="listview"]').listview('refresh');
//     /* Act on the event */
// });
$(document).bind('pageinit', function() {
    // $('#myListview').listview('refresh');
    $("form").on("submit", function(event) {
        var me = this;
        // console.log(me);
        event.preventDefault();
        // console.log($(this).serializeJson());
        // var _data = $(this).serializeJson();
        // console.log(_data);
        // console.log(typeof _data);
        // var html = "";
        // JSON.parse(_data, function(k, v) {
        //     /* body... */
        //     if (k === '') return v;
        //     // console.log(k);
        //     // console.log(v);
        //     // var li = '<li class="ui-field-contain"><label>' + k + ':</label><input type="text" name=' + k + ' value=' + v + '></li>';
        //     // console.log(li);
        //     var li = '<li class="ui-field-contain ui-li-static ui-body-inherit"><label>' + k + ':</label><div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="text" name=' + k + ' value=' + v + '></div></li>';


        //     html += li;
        //     return false;
        // });
        // var $answersList = $(me).parent().find('.answersList')
        // $(html).appendTo($answersList);
        // $answersList.listview('refresh');



        $.post('/api/v1/experiment/7', _data, function(data) {
            /*optional stuff to do after success */
            // console.log(data);
            // console.log(textStatus);
            var html = "";
            var dataJson = JSON.stringify(data);
            JSON.parse(dataJson, function(k, v) {
                /* body... */
                // console.log(k);
                // console.log(v);
                if (k === '') return v;
                var li = '<li class="ui-field-contain ui-li-static ui-body-inherit"><label>' + k + ':</label><div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="text" name=' + k + ' value=' + v + '></div></li>';
                html += li;
                return false;
            });
            var $answersList = $(me).parent(".page").find('.answersList')
            $(html).appendTo($answersList);
            $answersList.listview('refresh');
        }, 'json');
    });
    $("form input.generate").on('click', function(event) {
        event.preventDefault();
        // var me = this;
        // console.log(me);
        /* Act on the event */
        // console.log("thanks");
        $.get('/api/v1/experiment/7', function(data) {
            /*optional stuff to do after success */
            var html = "";
            // var dataJson = JSON.stringify(data);
            // console.log(dataJson);
            // JSON.parse(dataJson, function(k, v) {
            //     if (k === '') return v;
            //     console.log(typeof(v));
            //     var li = '<li class="ui-field-contain ui-li-static ui-body-inherit"><label>' + k + ':</label><div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="text" name=' + k + ' value=' + v + '></div></li>';
            //     html += li;
            //     return false;
            // });
            // 
            $.each(data, function(key, val) {
                /* iterate through array or object */
                // console.log(typeof(data[key]));
                $.each(data[key], function(index, val) {
                    /* iterate through array or object */
                    // console.log(typeof(data[key][index]));
                    // console.log(data[key][index].toFixed(2));
                    data[key][index] = data[key][index].toFixed(2);
                });
                // console.log(key);
                // console.log(data[key].join());
                var v = data[key].join();
                var li = '<li class="ui-field-contain ui-li-static ui-body-inherit"><label>' + key + ':</label><div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="text" name=' + key + ' value=' + v + '></div></li>';
            });

            var $answersList = $("#exp7").find('.answersList');
            console.log($answersList);
            $(html).appendTo($answersList);
            $answersList.listview('refresh');
        });
    });

});
// $(document).ajaxError(function(event, jqxhr, settings, thrownError) {
//     // if (settings.url == "ajax/missing.html") {
//     //     $("div.log").text("Triggered ajaxError handler.");
//     // }
//     alert("hello");
// });

//$.post('http://119.29.201.34:8888/api/v1/experiment/7', function(data) {
/*optional stuff to do after success */

// });