$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

       // code to be implemented
       //strike through items
        $(function(){
            $(document).on("click",".done-todo",function(){
              $(this).closest('li').toggleClass('checked');
            });
        });

        // filters
        $( '#filters li a' ).click(function() { 
            var attrib = $(this).attr('data-filter');
            $('#filters li a').removeClass('selected');
            $(this).addClass('selected');

            if(attrib == 'all') {
                $('ol li').show();        
            }
            if(attrib == 'active') {
                $('ol li').show();        
                $('ol li.checked').hide();
            }
            if(attrib == 'complete') {
                $('ol li').hide();        
                $('ol li.checked').show();
            }
            return false;
        });//end filters

        $('ol').on('dblclick', 'li', function () {
            $(this).attr('contentEditable', 'true').focus()
            .keypress(function (event) {
                var keycode = (event.keyCode
                    ? event.keyCode
                    : event.which);
                    if (keycode == '13') {
                        event.target.blur();
                        $(this).attr('contenteditable', 'false');
                    }
            });

         });//end dblclck

        function getInput(){
            return $('input[name=ListItem]').val();
        }

        //add item via button
        $('#button').click(function(){
           $('ol').append(`<li id='${generateUUID()}' class=''>
            <input name='done-todo' type='checkbox' class='done-todo'><span> ${getInput()} </span></li>`);
                $(this).val('');
        });

        //add item via keyboard
        $('input[name=ListItem]').keypress(function(e){
                if(e.which == 13){
                    e.preventDefault();
                    $('ol').append(`<li id='${generateUUID()}' class=''>
                <input name='done-todo' type='checkbox' class='done-todo'><span> ${getInput()} </span></li>`);
                    $(this).val('');
                }
        });


});//end todo.js