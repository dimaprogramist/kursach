// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
$('.title').text('Новый текст')

$('#changeColor').on('click', function () {
    $('title').css({'color' : 'red'})
})

$('#addText').on('click', function () {
    $('.text-center').append('<p>Новая строка</p>')
})

$(document).on('click', '.nav-link[data-page="catalog"]', function (e) {
    e.preventDefault();
    ShowCatalogPage();
})

const ShowCatalogPage = () => {
    $('main').html(
        '<p>Страница каталога</p>
        <div id="catalog_grid"></div>'
    )
    SearchCatalog();
}

const SearchCatalog = () => {
    $.ajax({
    url: 'api/catalog',
    method: 'GET'
    }).done(function (data) {
        console.log(data)
    $.each(data, function () {
        $('#catalog_grid')
            .append(`<p>${{ this.name } - ${this description} - ${this.price}</p >`)
    })
    })
}
// Write your JavaScript code.
