$(document).ready(function(){
    /*Галерея*/
    $('#small a').click(function(eventObject){  //выбираем объект (маленькие картинки) и событие клик по ним в котором прописываем анонимную функцию с укзанием объекта события
        if($('#big img').attr('src') != $(this).attr('href')){  //(Задача-2)проверяем если атрибут src не равен атрибуту href то выполнять действие, если равен то нет     
        $('#big img').hide().attr('src',$(this).attr('href'));  //выбираем объект (большая картинка), прячем ее и меняем атрибут ссылки на ссылку большой картики, соответсвующей маленькой
        $('#big img').load(function(){      //пишем что новую картинку показать только когда она полностью загрузится
            $(this).fadeIn(1000);           //показать ее плавно за 2 сек
        });
        }
        eventObject.preventDefault();
    });
    //(Задача-1)
    /*$('#switchGalery').toggle(function() { //в свойствах css галерею мы изначально скрыли прописав #gallery свойство display: none;
        $('#gallery').slideDown(1000);     //при щелчеке на переключатель выводим галерею    
    }, function() {
        $('#gallery').slideUp(1000);        //при щелчеке на переключатель прячем галерею                 
    });
    //(Задача-3)
    $('#small a img').click(function(){
        $('#small a img').fadeTo(1000,1); //растуманивание всех картинок
        $(this).fadeTo(1000,0.6); //затуманиваем(увеличение прозрачности) текущую картинку/миниатурю по которой был клик
    });*/
    /*Галерея*/
    
    /*Проверка правильности ввода email*/
    var myRev = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    var myEmail = $('#email').blur();
    myEmail.focus(function(){
        if ($(this).val() == 'Пример: you@site.ru') {
            $(this).val('');
        }            
    });
    myEmail.blur(function(){
        var userEmail = $(this).val();
        if (userEmail == '') {
            $(this).val('Пример: you@site.ru').css('border','1px solid #cccccc');
        }
        else if (userEmail.search(myRev) == -1) {
            $(this).css('border','1px solid #cc0000');
        }
        else {
            $(this).css('border','1px solid #00cc00');
        }
    });
    /*Проверка правильности ввода email*/
    
    /*Блокировка кнопки отправки формы*/
    $('#my_button').click(function(eventObject){
        var myDate = $('#date');
        if(myDate.val() == '') {
            myDate.css('background-color','#cc0000').effect('pulsate', 3000).effect('shake', 2000, function(){
                myDate.css('background-color','#ffffff')
            });
        }        
        $(this).attr('disabled','disabled');
        $(this).attr('value', 'Отправляю...');
        eventObject.preventDefault();
    });
    /*Блокировка кнопки отправки формы*/
    
    /*Календарик*/
    $( "#date" ).datepicker({
      changeMonth: true,
      changeYear: true
    });    
    /*Календарик*/
    
    /*Русификация календаря*/
    $.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3C;Пред',
		nextText: 'След&#x3E;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
    /*Русификация календаря*/
    
    /*Слайдер*/
    $( "#slider-range" ).slider({
      range: true,
      min: 10,
      max: 5000,
      values: [ 500, 2000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] + " км" );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) + " км" );
    /*Слайдер*/
    
    /*Диалоговое окно*/
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#help" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
    /*Диалоговое окно*/
    
    /*Работа кнопок*/
    $( "input[type=submit], a:not[srs*=gal], button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
    /*Работа кнопок*/
    
    /*Вкладки - виджет Tabs */
    $( "#tabs" ).tabs();
    /*Вкладки - виджет Tabs */
    
    /*Виджет - Аккордеон вкладки*/
    $( "#accordion" ).accordion({
        collapsible: true
    });
    /*Виджет - Аккордеон вкладки*/
    
    /*Виджет - Прогрессбар*/
    $( "#progressbar" ).progressbar({
      value: 0
    });
    
    $('#opros :radio').change(function(){
        var checkedRadio = $('#opros :radio:checked').size(); //количество выделенных на данный момент радио кнопок (для нас это количество ответов в опросе претендента)
        $( "#progressbar" ).progressbar({
        value: checkedRadio * 20
        });
        var questionQuont = $('#opros div[id*=radio]').size(); //количество вопросов
        $('#answerCount').text('Дано ответов ' + checkedRadio + ' из ' + questionQuont);
    });
    
    //2-й вариант
    $('#opros').load(function() {    
    var chRadio = $('#opros :radio:checked').size();
    $("#progressbar").progressbar({
			value: chRadio * 20
		});
    var questCount = $('#opros div[id*=radio]').size();    
     $('#aswerCount').text('Дано ответов ' + chRadio + ' из ' + questCount);   
        
    });
    
    //Дополнительно для анимации с процентами
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );
    
    /*Виджет - Прогрессбар*/
    
    /*Виджет Автозаполнение*/
    var availableTags = [
      "Винницкая область",
      "Волынская область",
      "Днепропетровская область",
      "Донецкая область",
      "Житомирская область",
      "Закарпатская область",
      "Запорожская область",
      "Ивано-Франковская область",
      "Киевская область",
      "Кировоградская область",
      "Луганская область",
      "Львовская область",
      "Николаевская область",
      "Одесская область",
      "Полтавская область",
      "Ровненская область",
      "Сумская область",
      "Тернопольская область",
      "Харьковская область",
      "Херсонская область",
      "Хмельницкая область",
      "Черкасская область",
      "Черниговская область",
      "Черновицкая область",
      "Крым - Автономная Республика"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    /*Виджет Автозаполнение*/
    
    //Интерактивные элементы
    
    /*Эффект перетаскивания - Draggable*/
    $('#gallery').draggable();
    $('#forheader').draggable({axis: 'y'});
    
    //Эффект перетаскивания шлемов в корзину
    $('div[id*=helmet]').draggable({
        containment: "#bound",
        revert: "invalid",
        helper: "clone",
        cursor: "move"
        });
        
    //Корзина с эффектом - droppable (прием перетаскиваемых элементов в себя)
    var helmetsCount = 0;
    var summa = 0;
    
    $( "#mycart" ).droppable({                  //сделали нашу корзину объектом, который умеет принимать другие объекты
        activeClass: "highlight",               //даем корзине класс css в котором прописываем свойства для момента активности перетаскивания
        accept: "#forHelmets div[id*=helmet]",  //разрешение на перетаскивание только указанных элементов находящихся на "полке" магазина
        drop: function( event, ui ) {           //принимает элемент
            helmetsCount++;
            if(helmetsCount > 0) {$('#myclear').show(2000);} //при добавлении в корзину товара выводим текст с количеством товаром и их ценой
            $('#helmetsCount strong').text(helmetsCount);    // вывод количества шлемов в корзине в тексте
            var helmet = $(ui.draggable);           //определяем элемент принимаемый элемент
            summa = summa + parseInt(helmet.attr('title')); //числовой вариант стоимости шлемов
            $('#helmetsSumm strong').text(summa);       // вывод стоимости шлемов в корзине в тексте
            helmet.fadeOut(500, function(){         //прячем элемент(шлем) в том месте где он был раньше
                $(this).appendTo('#mycart').fadeIn(1000).find('img').animate({
                    'width':'120',
                    'height':'107'
                },2000);  //после того как он спрятан вырезать и вставить в другой блок (корзину) и показать
            });
        }
    });
    
    //Делаем блок forHelmets тоже приемником, для реализации воврата товара из корзины
    $('#forHelmets').droppable({
        activeClass: "highlight",            //даем "полке" класс css в котором прописываем свойства для момента активности перетаскивания
        accept: "#mycart div[id*=helmet]",   //разрешение на перетаскивание назад на "полку" только элементов находящихся в "корзине"
        drop: function( event, ui ) {
            helmetsCount--;
            if(helmetsCount == 0) {$('#myclear').hide(2000);} //при пустой корзине прячем текст с количеством товаром и их ценой
            $('#helmetsCount strong').text(helmetsCount);     //вывод текста количества шлемов в корзине
            var helmet2 = $(ui.draggable);
            summa = summa - parseInt(helmet2.attr('title')); //числовой вариант стоимости шлемов
            $('#helmetsSumm strong').text(summa);          // вывод стоимости шлемов в корзине в тексте 
            helmet2.fadeOut(500, function(){         
                $(this).appendTo('#forHelmets').fadeIn(1000).find('img').animate({
                    'width':'180',
                    'height':'160'
                },2000);  
            });
        }
    });
    
    /*Эффект перетаскивания - Draggable*/
    
    /*Эффект сортировки - Sortable*/
    $( "#sortable" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable" ).disableSelection();
    /*Эффект сортировки - Sortable*/
    
    /*Эффект сортировки - Selectable*/
    $( "#selectable" ).selectable();
    /*Эффект сортировки - Selectable*/
    
    /*Эффект изменения размера - Resizable*/
    $( "#mytextarea" ).resizable({
      maxHeight: 300,
      maxWidth: 380,
      minHeight: 150,
      minWidth: 380
    });
    /*Эффект изменения размера - Resizable*/
    
    /*Изучение эффектов*/   
    
    $('#formHide').toggle(function(){
        $('#my_form').hide('bounce', 1500);
    }, function(){
        $('#my_form').show('explode', 2000);
    });
    
    /*-Toggle-
    $('#formHide').click(function(){
        $('#my_form').toggle('explode');
    })
    */    
    
    $('#switchGalery').toggle(function(){
        $('#gallery').show('drop', 1000);
    }, function(){
        $('#gallery').hide('highlight', 1500);
    });
    
    $('#formColor').toggle(function() {
        $('#bigform > fieldset').animate({
            'backgroundColor' : '#CDDDC8'
        }, 3000);		        
    },
    function() {
        $('#bigform > fieldset').animate({
            'backgroundColor' : '#e7e7f0'
        }, 3000);
    });
    
    //Zoom In и Out - две правых кнопочки
    $('#zoomIn').click(function(){
        $('#tabs p').addClass('forP', 1000);
        $(this).hide('explode');
        $('#zoomOut').show('drop', 2000);
    });
    
    $('#zoomOut').click(function(){
        $('#tabs p').removeClass('forP', 1000);
        $(this).hide('explode');
        $('#zoomIn').show('drop', 2000);
    });
    
    //Zoom In/Out - левая кнопочка переключатель (аналог действий двух кнопок In и Out справа)
    $('#zoom').click(function(){
        $('#tabs p').toggleClass('forP', 1500);
        $(this).effect('pulsate', 2500);
        $('#zoomOut, #zoomIn').effect('shake', 1000);
    });
    
    //Переключение классов по клику
    $('#switch').toggle(function(){
        $('#tabs p').switchClass('forP2', 'forP1', 1000);
    }, function() {
        $('#tabs p').switchClass('forP1', 'forP2', 1000);
    });
    
    
    //megaMenu
    //On Hover Over
    function megaHoverOver(){
        $(this).find(".sub").stop().fadeTo('fast', 1).show(); //Find sub and fade it in
        (function($) {
            //Function to calculate total width of all ul's
            jQuery.fn.calcSubWidth = function() {
                rowWidth = 0;
                //Calculate row
                $(this).find("ul").each(function() { //for each ul...
                    rowWidth += $(this).width(); //Add each ul's width together
                });
            };
        })(jQuery); 
    
        if ( $(this).find(".row").length > 0 ) { //If row exists...
    
            var biggestRow = 0;	
    
            $(this).find(".row").each(function() {	//for each row...
                $(this).calcSubWidth(); //Call function to calculate width of all ul's
                //Find biggest row
                if(rowWidth > biggestRow) {
                    biggestRow = rowWidth;
                }
            });
    
            $(this).find(".sub").css({'width' :biggestRow}); //Set width
            $(this).find(".row:last").css({'margin':'0'});  //Kill last row's margin
    
        } else { //If row does not exist... 
    
            $(this).calcSubWidth();  //Call function to calculate width of all ul's
            $(this).find(".sub").css({'width' : rowWidth}); //Set Width
    
        }
    }
    //On Hover Out
    function megaHoverOut(){
      $(this).find(".sub").stop().fadeTo('fast', 0, function() { //Fade to 0 opactiy
          $(this).hide();  //after fading, hide it
      });
    }
    
    //Set custom configurations
    var config = {
        sensitivity: 2, //number = sensetivity threshold (must be 1 or higher)
        interval: 100, //number = milliseconds for onMouseOver polling interval
        over: megaHoverOver, //function = onMouseOver callback (REQUIRED)
        timeout: 500, // number = milliseconds delay before onMouseOut
        out: megaHoverOut // function = onMouseOut callback (REQUIRED)
    };
    
    $("ul#topnav li .sub").css({'opacity':'0'}); //Fade sub nav to 0 opacity on default
    $("ul#topnav li").hoverIntent(config);             //Trigger Hover intent with custom configuration
    
}); //Конец ready