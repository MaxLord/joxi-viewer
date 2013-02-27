/**
 * Created by Max Zhuravlev
 * Date: 2/27/13
 * Time: 5:28 PM
 */

$(document).ready(function(){
    console.log('ready');

    var X,Y

    $(document).mousemove(function(event){
        X=event.pageX
        Y=event.pageY
    })

    var div = document.createElement('div')
    div.id='joxidivid'
    document.body.appendChild(div)
    $('#joxidivid').css({'width':'400px','display':'none','text-align':'left','font-size':'13px','position':'absolute',
        'border': 'solid 1px gray','padding': '3px','background-color':'white','z-index':'9999'})


    $(document).keydown(function(event){

        // f7 qnits/manager/joxi
        if(event.keyCode == 118){
            $('#joxidivid').css({'top':Y,'left':X})
            var selection = window.getSelection().toString()
            if(selection && selection.length>3){
                $('#joxidivid').empty();

                if(selection.indexOf('joxi.ru')>=0){
                    $.ajax({
                        type: 'POST',
                        //url: ("http://joxi.ru/UdAtUdg5CbCldBeZoLY"), crossDomain: true, cache: false }).done(function( html ) {
                        url: (selection),
                        crossDomain: true,
                        cache: false
                    }).done(
                        function( html ) {
                            joxy=$(html); // превращаем html в объект
                            href_full='http://joxi.ru'+joxy.find('a.toPhotoZoom').attr('href');
                            $('#joxidivid').append("<img src='"+href_full+"'/>");
                            console.log(href_full);
                        }
                    );
                }

                $('#joxidivid').show();
            } else{
                $('#joxidivid').hide();
            }
        }
    })

});