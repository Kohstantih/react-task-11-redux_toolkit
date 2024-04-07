export type TActiveFIlmState = {
    isActive: boolean,
    film: {
        Title: string,
        Year: string
        Runtime: string,
        Genre: string,
        Director: string,
        Actors: string,
        Poster: string,
        imdbRating: string,
    } | null,
    isLoading: boolean,
    error: string | null
}
