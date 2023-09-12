import Movies from './Movies.js';
import MoviesDisplay from './MoviesDisplay.js';

const movies = new Movies();
const moviesDisplay = new MoviesDisplay();

$('button#submit').on('click', function(event) {
    event.preventDefault();
    console.log('submitted');

    const title = $('form input').eq(0).val();
    const rating = $('form input').eq(1).val();
    if(!title || !rating)
        return;
    else if(title.length < 2)
        return;

    movies.add(title, rating);
    moviesDisplay.render(movies.get());
});

$('th').on('click', function(event) {
    const property = $(this).text().toLowerCase();

    if($(this).data('sort-order') === 'asc') {
        $(this).data('sort-order', 'desc');
    }
    else {
        $(this).data('sort-order', 'asc');
    }
    
    movies.sort(property, $(this).data('sort-order'));
    moviesDisplay.render(movies.get());
});

$('tbody').on('click', 'td.delete', function(event) {
    let dataId = $(this).parent().attr('data-id');
    movies.delete(Number(dataId));
    moviesDisplay.render(movies.get());
});