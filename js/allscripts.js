$(document).ready(function(){
    /*�������*/
    $('#small a').click(function(eventObject){  //�������� ������ (��������� ��������) � ������� ���� �� ��� � ������� ����������� ��������� ������� � �������� ������� �������
        if($('#big img').attr('src') != $(this).attr('href')){  //(������-2)��������� ���� ������� src �� ����� �������� href �� ��������� ��������, ���� ����� �� ���     
        $('#big img').hide().attr('src',$(this).attr('href'));  //�������� ������ (������� ��������), ������ �� � ������ ������� ������ �� ������ ������� �������, �������������� ���������
        $('#big img').load(function(){      //����� ��� ����� �������� �������� ������ ����� ��� ��������� ����������
            $(this).fadeIn(1000);           //�������� �� ������ �� 2 ���
        });
        }
        eventObject.preventDefault();
    });
    //(������-1)
    /*$('#switchGalery').toggle(function() { //� ��������� css ������� �� ���������� ������ �������� #gallery �������� display: none;
        $('#gallery').slideDown(1000);     //��� ������� �� ������������� ������� �������    
    }, function() {
        $('#gallery').slideUp(1000);        //��� ������� �� ������������� ������ �������                 
    });
    //(������-3)
    $('#small a img').click(function(){
        $('#small a img').fadeTo(1000,1); //�������������� ���� ��������
        $(this).fadeTo(1000,0.6); //������������(���������� ������������) ������� ��������/��������� �� ������� ��� ����
    });*/
    /*�������*/
    
    /*�������� ������������ ����� email*/
    var myRev = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    var myEmail = $('#email').blur();
    myEmail.focus(function(){
        if ($(this).val() == '������: you@site.ru') {
            $(this).val('');
        }            
    });
    myEmail.blur(function(){
        var userEmail = $(this).val();
        if (userEmail == '') {
            $(this).val('������: you@site.ru').css('border','1px solid #cccccc');
        }
        else if (userEmail.search(myRev) == -1) {
            $(this).css('border','1px solid #cc0000');
        }
        else {
            $(this).css('border','1px solid #00cc00');
        }
    });
    /*�������� ������������ ����� email*/
    
    /*���������� ������ �������� �����*/
    $('#my_button').click(function(eventObject){
        var myDate = $('#date');
        if(myDate.val() == '') {
            myDate.css('background-color','#cc0000').effect('pulsate', 3000).effect('shake', 2000, function(){
                myDate.css('background-color','#ffffff')
            });
        }        
        $(this).attr('disabled','disabled');
        $(this).attr('value', '���������...');
        eventObject.preventDefault();
    });
    /*���������� ������ �������� �����*/
    
    /*����������*/
    $( "#date" ).datepicker({
      changeMonth: true,
      changeYear: true
    });    
    /*����������*/
    
    /*����������� ���������*/
    $.datepicker.regional['ru'] = {
		closeText: '�������',
		prevText: '&#x3C;����',
		nextText: '����&#x3E;',
		currentText: '�������',
		monthNames: ['������','�������','����','������','���','����',
		'����','������','��������','�������','������','�������'],
		monthNamesShort: ['���','���','���','���','���','���',
		'���','���','���','���','���','���'],
		dayNames: ['�����������','�����������','�������','�����','�������','�������','�������'],
		dayNamesShort: ['���','���','���','���','���','���','���'],
		dayNamesMin: ['��','��','��','��','��','��','��'],
		weekHeader: '���',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
    /*����������� ���������*/
    
    /*�������*/
    $( "#slider-range" ).slider({
      range: true,
      min: 10,
      max: 5000,
      values: [ 500, 2000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] + " ��" );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) + " ��" );
    /*�������*/
    
    /*���������� ����*/
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
    /*���������� ����*/
    
    /*������ ������*/
    $( "input[type=submit], a:not[srs*=gal], button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
    /*������ ������*/
    
    /*������� - ������ Tabs */
    $( "#tabs" ).tabs();
    /*������� - ������ Tabs */
    
    /*������ - ��������� �������*/
    $( "#accordion" ).accordion({
        collapsible: true
    });
    /*������ - ��������� �������*/
    
    /*������ - �����������*/
    $( "#progressbar" ).progressbar({
      value: 0
    });
    
    $('#opros :radio').change(function(){
        var checkedRadio = $('#opros :radio:checked').size(); //���������� ���������� �� ������ ������ ����� ������ (��� ��� ��� ���������� ������� � ������ �����������)
        $( "#progressbar" ).progressbar({
        value: checkedRadio * 20
        });
        var questionQuont = $('#opros div[id*=radio]').size(); //���������� ��������
        $('#answerCount').text('���� ������� ' + checkedRadio + ' �� ' + questionQuont);
    });
    
    //2-� �������
    $('#opros').load(function() {    
    var chRadio = $('#opros :radio:checked').size();
    $("#progressbar").progressbar({
			value: chRadio * 20
		});
    var questCount = $('#opros div[id*=radio]').size();    
     $('#aswerCount').text('���� ������� ' + chRadio + ' �� ' + questCount);   
        
    });
    
    //������������� ��� �������� � ����������
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
    
    /*������ - �����������*/
    
    /*������ ��������������*/
    var availableTags = [
      "��������� �������",
      "��������� �������",
      "���������������� �������",
      "�������� �������",
      "����������� �������",
      "������������ �������",
      "����������� �������",
      "�����-����������� �������",
      "�������� �������",
      "�������������� �������",
      "��������� �������",
      "��������� �������",
      "������������ �������",
      "�������� �������",
      "���������� �������",
      "���������� �������",
      "������� �������",
      "������������� �������",
      "����������� �������",
      "���������� �������",
      "����������� �������",
      "���������� �������",
      "������������ �������",
      "����������� �������",
      "���� - ���������� ����������"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    /*������ ��������������*/
    
    //������������� ��������
    
    /*������ �������������� - Draggable*/
    $('#gallery').draggable();
    $('#forheader').draggable({axis: 'y'});
    
    //������ �������������� ������ � �������
    $('div[id*=helmet]').draggable({
        containment: "#bound",
        revert: "invalid",
        helper: "clone",
        cursor: "move"
        });
        
    //������� � �������� - droppable (����� ��������������� ��������� � ����)
    var helmetsCount = 0;
    var summa = 0;
    
    $( "#mycart" ).droppable({                  //������� ���� ������� ��������, ������� ����� ��������� ������ �������
        activeClass: "highlight",               //���� ������� ����� css � ������� ����������� �������� ��� ������� ���������� ��������������
        accept: "#forHelmets div[id*=helmet]",  //���������� �� �������������� ������ ��������� ��������� ����������� �� "�����" ��������
        drop: function( event, ui ) {           //��������� �������
            helmetsCount++;
            if(helmetsCount > 0) {$('#myclear').show(2000);} //��� ���������� � ������� ������ ������� ����� � ����������� ������� � �� �����
            $('#helmetsCount strong').text(helmetsCount);    // ����� ���������� ������ � ������� � ������
            var helmet = $(ui.draggable);           //���������� ������� ����������� �������
            summa = summa + parseInt(helmet.attr('title')); //�������� ������� ��������� ������
            $('#helmetsSumm strong').text(summa);       // ����� ��������� ������ � ������� � ������
            helmet.fadeOut(500, function(){         //������ �������(����) � ��� ����� ��� �� ��� ������
                $(this).appendTo('#mycart').fadeIn(1000).find('img').animate({
                    'width':'120',
                    'height':'107'
                },2000);  //����� ���� ��� �� ������� �������� � �������� � ������ ���� (�������) � ��������
            });
        }
    });
    
    //������ ���� forHelmets ���� ����������, ��� ���������� ������� ������ �� �������
    $('#forHelmets').droppable({
        activeClass: "highlight",            //���� "�����" ����� css � ������� ����������� �������� ��� ������� ���������� ��������������
        accept: "#mycart div[id*=helmet]",   //���������� �� �������������� ����� �� "�����" ������ ��������� ����������� � "�������"
        drop: function( event, ui ) {
            helmetsCount--;
            if(helmetsCount == 0) {$('#myclear').hide(2000);} //��� ������ ������� ������ ����� � ����������� ������� � �� �����
            $('#helmetsCount strong').text(helmetsCount);     //����� ������ ���������� ������ � �������
            var helmet2 = $(ui.draggable);
            summa = summa - parseInt(helmet2.attr('title')); //�������� ������� ��������� ������
            $('#helmetsSumm strong').text(summa);          // ����� ��������� ������ � ������� � ������ 
            helmet2.fadeOut(500, function(){         
                $(this).appendTo('#forHelmets').fadeIn(1000).find('img').animate({
                    'width':'180',
                    'height':'160'
                },2000);  
            });
        }
    });
    
    /*������ �������������� - Draggable*/
    
    /*������ ���������� - Sortable*/
    $( "#sortable" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable" ).disableSelection();
    /*������ ���������� - Sortable*/
    
    /*������ ���������� - Selectable*/
    $( "#selectable" ).selectable();
    /*������ ���������� - Selectable*/
    
    /*������ ��������� ������� - Resizable*/
    $( "#mytextarea" ).resizable({
      maxHeight: 300,
      maxWidth: 380,
      minHeight: 150,
      minWidth: 380
    });
    /*������ ��������� ������� - Resizable*/
    
    /*�������� ��������*/   
    
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
    
    //Zoom In � Out - ��� ������ ��������
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
    
    //Zoom In/Out - ����� �������� ������������� (������ �������� ���� ������ In � Out ������)
    $('#zoom').click(function(){
        $('#tabs p').toggleClass('forP', 1500);
        $(this).effect('pulsate', 2500);
        $('#zoomOut, #zoomIn').effect('shake', 1000);
    });
    
    //������������ ������� �� �����
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
    
}); //����� ready