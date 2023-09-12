export default class Movies {
    constructor() {
        this.movies = [];
    }

    get() {
        return this.movies;
    }

    add(title, rating) {
        this.movies.push(new Movie(title, rating));
    }

    delete(index) {
        this.movies = this.movies
            .slice(0, index)
            .concat(
                this.movies.slice(index + 1)
            );
    }

    sort(property, sortOrder) {
        this.movies.sort((movie1, movie2) => {
            return movie1.compareTo(movie2, property, sortOrder);
        });
    }
}

class Movie {
    constructor(title, rating) {
        this.title = title;
        this.rating = rating;
    }

    compareTo(otherMovie, property, sortOrder = "asc") {
        if(this[property] < otherMovie[property])
            return sortOrder === "asc" ? -1 : 1;
        else if(this[property] > otherMovie[property])
            return sortOrder === "asc" ? 1 : -1;
        return 0;
    }
}