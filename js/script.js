var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val(); //pobieranie wartosci z inputa od uzytkownika
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) { //resp parametr JSON ktory przesyla do niej metoda ajax 
    countriesList.empty();
    resp.forEach(function(item) {
        var flag = "https://restcountries.eu/data/" + item.alpha3Code.toLowerCase() + ".svg";
        $('<img id="flag" src=' + flag + '>').appendTo(countriesList);
        $('<h1 id="name">').text(item.name).appendTo(countriesList);
        $('<p id="capital">').text('Capitol: ' + item.capital).appendTo(countriesList);
        $('<p id="currencies">').text('Currencies: ' + item.currencies).appendTo(countriesList);
        $('<p id="languages">').text('Languages: ' + item.languages).appendTo(countriesList);

    });
}