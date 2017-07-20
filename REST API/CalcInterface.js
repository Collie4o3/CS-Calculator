var CalcInterface = {
    num1:'',
    num2:'',
    operation: "=",

    init: function() {

        CalcInterface.events();
    },
    
    events: function () {
        $('body')
            .on('click', '.number', function() {
                CalcInterface.num2 += $(this).attr('data-value');
                
                console.log( 'CalcInterface.num1', CalcInterface.num2 );
            })
            // Remove Image Clicked
            .on('click', '.operation', function(){
                CalcInterface.compute();
                CalcInterface.operation = $(this).attr('data-value');
            })
    },

    compute: function () {

    }

};