import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './addMovies.css';

function AddMovie({ addFilm }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [trailer, setTrailer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addFilm({
      id: Math.random(),
      title,
      description,
      rate: Number(rate),
      posterUrl,
      trailer,
    });

    handleClose();
    setTitle('');
    setDescription('');
    setRate('');
    setPosterUrl('');
    setTrailer('');
  };

  return (
    <>
      <Button className="add-movie-btn" variant="dark" onClick={handleShow}>
        + Add movie
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body className="add-movie-modal-body">
            <Form.Group className="mb-3" controlId="formMovieName">
              <Form.Label>Title *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMovieDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Short description…"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMovieRate">
              <Form.Label>Rating (1–5)</Form.Label>
              <Form.Control
                type="number"
                min={1}
                max={5}
                placeholder="e.g. 4"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPosterUrl">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://…"
                value={posterUrl}
                onChange={(e) => setPosterUrl(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTrailerUrl">
              <Form.Label>Trailer URL (YouTube embed)</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://www.youtube.com/embed/…"
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="dark" type="submit">
              Add movie
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddMovie;