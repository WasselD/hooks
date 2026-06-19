import { Rate, Flex } from 'antd';
import './filterByRate.css';

const ratingLabels = ['Terrible', 'Bad', 'Average', 'Good', 'Excellent'];

function FilterByRate({ searchRate, setSearchRate }) {
  return (
    <div className="filter-rate-wrapper">
      <span className="filter-rate-label">Rating:</span>
      <Flex align="center" gap={8}>
        <Rate
          value={searchRate}
          onChange={(value) => {
            setSearchRate(value === searchRate ? 0 : value);
          }}
        />
        {searchRate > 0 && (
          <span className="filter-rate-hint">{ratingLabels[searchRate - 1]}</span>
        )}
      </Flex>
    </div>
  );
}

export default FilterByRate;