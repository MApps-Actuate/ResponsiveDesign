$(function() {
    $( "#spendParameter" ).slider({
        range: true,
        min: 0,
        max: 45000,
        values: [ 1000, 30000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#spendParameter" ).slider( "values", 0 ) +
        " - $" + $( "#spendParameter" ).slider( "values", 1 ) );

    $("select").multiselect();

});
