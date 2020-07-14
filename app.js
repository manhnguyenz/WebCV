$(function () {
    $('.bl').click(function (e) { 
        e.preventDefault();
        $('.bl').removeClass('active');
        $(this).addClass('active');


        console.log( $(this).data('loc'));
         $(this).data('loc');
         // // jqdataget  lấy data

         var loc= $(this).data('loc');

         $('li.chialayer').each(function (index, element) {
             // element == this , duyệt phần tử.
            //  jqeachelement

             if ($(this).hasClass(loc)) {
                 $(this).show(400);
                //  jqshow , show(thoi gian)
             } else {
                 $(this).hide(400);
                //  jqhide         
             }
             $(this).hasClass(loc);
            //  Kiểm tra thẻ này có class 'loc' hay ko     
         });     
    });  
});


