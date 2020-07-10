var jsonData =
            [{ "id": 1, "first_name": "Lissy", "last_name": "Catlin", "email": "lcatlin0@eventbrite.com", "gender": "Female" },
            { "id": 2, "first_name": "Cam", "last_name": "Oaks", "email": "coaks1@fc2.com", "gender": "Female" },
            { "id": 3, "first_name": "Isidore", "last_name": "Broadhurst", "email": "ibroadhurst2@youku.com", "gender": "Male" },
            { "id": 4, "first_name": "Tanny", "last_name": "Messitt", "email": "tmessitt3@de.vu", "gender": "Male" },
            { "id": 5, "first_name": "Nettie", "last_name": "Rackstraw", "email": "nrackstraw4@dropbox.com", "gender": "Female" },
            { "id": 6, "first_name": "Avril", "last_name": "Palfree", "email": "apalfree5@engadget.com", "gender": "Female" },
            { "id": 7, "first_name": "Gertie", "last_name": "Campanelli", "email": "gcampanelli6@goodreads.com", "gender": "Female" },
            { "id": 8, "first_name": "Filberte", "last_name": "Conti", "email": "fconti7@mysql.com", "gender": "Male" },
            { "id": 9, "first_name": "Homerus", "last_name": "Preto", "email": "hpreto8@about.com", "gender": "Male" },
            { "id": 10, "first_name": "Fredia", "last_name": "Greber", "email": "fgreber9@behance.net", "gender": "Female" },
            { "id": 11, "first_name": "Bird", "last_name": "Ratlee", "email": "bratleea@flavors.me", "gender": "Female" },
            { "id": 12, "first_name": "Halie", "last_name": "Tupp", "email": "htuppb@yahoo.com", "gender": "Female" },
            { "id": 13, "first_name": "Cherry", "last_name": "Reckless", "email": "crecklessc@cpanel.net", "gender": "Female" },
            { "id": 14, "first_name": "Karole", "last_name": "Redborn", "email": "kredbornd@amazon.co.jp", "gender": "Female" },
            { "id": 15, "first_name": "Honor", "last_name": "Waple", "email": "hwaplee@harvard.edu", "gender": "Female" }];

var titles = ['id', 'first_name', 'last_name', 'email', 'gender'];
    
$(document).ready(function() {
    var $table = $('<table />').attr('border', '1');
    var $tr = $('<tr />');
    titles.forEach(function(o){
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);
    // 데이터 영역.
    jsonData.forEach(function(o) {
        $tr = $('<tr />').mouseenter(mouseenterFunc)
        .mouseleave(mouseleaveFunc);
        titles.forEach(function(f) {
            $tr.append($('<td />').text(o[f]));
        })
        $tr.append($('<button>Click</button>').click(clickFunc));

        $table.append($tr);
    });
    $('#show').append($table.append($tr));
})
function mouseenterFunc() {
    $(this).css('background','yellow');
}
function mouseleaveFunc() {
    $(this).css('background','');
}
function clickFunc() {
    $(this).parent().hide();
}