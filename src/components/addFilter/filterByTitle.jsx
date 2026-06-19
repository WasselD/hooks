import Form from 'react-bootstrap/Form';
import './filterByTitle.css';

const FilterByTitle = ({ searchTitle, setSearchTitle }) => {
  return (
    <Form.Control
      className="filter-title-input"
      type="text"
      placeholder="Search by title…"
      value={searchTitle}
      onChange={(e) => setSearchTitle(e.target.value)}
    />
  );
};

export default FilterByTitle;