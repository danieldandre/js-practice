const movies = [
    { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
    { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: true },
    { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
    { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 2002, streaming: true },
    { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2005, streaming: false },
    { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2015, streaming: false },
    { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: true },
    { title: 'The Last Jedi', director: 'Ryan Johnson', yearReleased: 2017, streaming: false },
    { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: false },
]

function GetTitles(author: string): string[];
function GetTitles(streaming: boolean): string[];
function GetTitles(director: string, streaming: boolean): string[];

function GetTitles(param1: string | boolean, param2?: boolean): string[] {
    if (typeof param1 == 'string' && param2 == null) {
        return movies.filter((movie) => movie.director === param1).map((movie) => movie.title);
    } else if (typeof param1 == 'boolean' && typeof param2 == null) {
        return movies.filter((movie) => movie.streaming === param2).map((movie) => movie.title);
    } else if (typeof param1 == 'string' && typeof param2 == 'boolean') {
        return movies.filter((movie) => movie.director == param1 && movie.streaming == param2).map((movie) => movie.title);
    } else {
        return [];
    }
}

// const testGetTitles1 = GetTitles("George Lucas");
// console.log(testGetTitles1);
// const testGetTitles2 = GetTitles(true);
// console.log(testGetTitles2);
// const testGetTitles3 = GetTitles("George Lucas", true);
// console.log(testGetTitles3);

type FilterFunction = (movie: { title: string; director: string; yearReleased: number; streaming: boolean }) => boolean;
function filterMovies(movies: { title: string; director: string; yearReleased: number; streaming: boolean }[], filter: FilterFunction): { title: string; director: string; yearReleased: number; streaming: boolean }[] {
    return movies.filter(filter);
}

const test1 = filterMovies(movies, (movie) => movie.title.includes("a"));
const test2 = filterMovies(movies, (movie) => movie.yearReleased == 2015);

// console.log(test1);
// console.log(test2);

///--EX 2 ----//

interface Movie {
    title: string;
    director: string;
    yearReleased: number;
    streaming: boolean;
}

const rawMovies = [
    { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
    { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: true },
    { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
    { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 2002, streaming: true },
    { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2005, streaming: false },
    { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2015, streaming: false },
    { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: true },
    { title: 'The Last Jedi', director: 'Ryan Johnson', yearReleased: 2017, streaming: false },
    { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: false },
]

const movies2: Movie[] = rawMovies as Movie[];

function GetAllMovies(): { movies2: Movie[] } {
    return { movies2 };
}

function GetReviewTitle(movie_title: string): { review: string; score: number } {
    const possibleReviews = [
        "good",
        "bad",
        "mid"
    ];

    const randomReview: string = possibleReviews[Math.floor(Math.random() * 3)];
    const randomScore: number = Math.floor(Math.random() * 9) + 1;

    return {
        review: randomReview,
        score: randomScore
    }
}

function PrintMovieInfo(title?: string, director?: string, yearReleased?: number, streaming?: boolean): void {
    const filter_movies = movies2.filter(movie => {
        let control = true;

        if (typeof title === "string" && title !== "" || title === null) {
            control = control && title === movie.title;
        }
        if (typeof director === "string" && director !== "" || director === null) {
            control = control && director === movie.director;
        }
        if (typeof yearReleased === "number" || yearReleased === null) {
            control = control && yearReleased === movie.yearReleased;
        }
        if (typeof streaming === "boolean" || streaming === null) {
            control = control && streaming === movie.streaming;
        }
        return control;
    });
    console.log(filter_movies);
}

PrintMovieInfo("", "George Lucas");