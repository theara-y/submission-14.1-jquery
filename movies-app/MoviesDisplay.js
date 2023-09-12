export default class MoviesDisplay {
    constructor() {
        this.tBody = $('tbody');
    }

    render([...movies]) {
        this.tBody.html('');
        for(let i = 0; i < movies.length; i++) {
            const {title, rating} = movies[i];
            this.tBody.append(this.createRow(i, title, rating));
        }
    }

    createRow(id, title, rating) {
        return $(`
        <tr data-id=${id} class="movie">
            <td>${title}</td>
            <td>${rating}</td>
            <td class="delete">Delete</td>
        </tr>`);
    }
}