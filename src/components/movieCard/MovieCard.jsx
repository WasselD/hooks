import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// FIX: was importing FilterByRate (a filter input) and using it as a display
// component — that crashes because FilterByRate expects searchRate + setSearchRate.
// StarDisplay is a separate read-only component that just shows the rating.
import StarDisplay from '../StarDisplay/StarDisplay';
import './movieCard.css';

function MovieCard({ movie }) {
  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src={movie.posterUrl}
        alt={`${movie.title} poster`}
        className="movie-card-img"
      />
      <Card.Body className="movie-card-body">
        <Card.Title className="movie-card-title">{movie.title}</Card.Title>
        <Card.Text className="movie-card-desc">{movie.description}</Card.Text>

        <StarDisplay rate={Number(movie.rate)} />

        <Button
          variant="outline-dark"
          size="sm"
          className="movie-card-btn"
          href={movie.trailer}
          target="_blank"
          rel="noreferrer"
        >
          Watch trailer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;