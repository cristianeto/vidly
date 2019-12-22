import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    count: getMovies().length,
    movies: getMovies()
  };
  handleDelete = movie => {
    // console.info(movie);
    const newMovies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
      movies: newMovies
    });
  };
  render() {
    const { lenght: count } = this.state.movies;
    if (count === 0)
      return <p className="row m-3">There are no movies in the database!</p>;
    return (
      <React.Fragment>
        <p className="row m-3">
          Showing {this.state.movies.length} movies from the database
        </p>
        <table className="table mt-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, i) => (
              <tr key={movie._id}>
                <th scope="row">{i + 1}</th>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
