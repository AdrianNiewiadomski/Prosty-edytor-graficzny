function inicjuj(){
    var html = '';
    var nr=0;

    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            nr = 10*i+j+1;
            html += '<div class="pole">' +nr+ '</div>';

            if(j==9)
                html += '<div style="clear: both;"></div>';
        }
    }
    document.getElementById('plansza').innerHTML = html;
}
