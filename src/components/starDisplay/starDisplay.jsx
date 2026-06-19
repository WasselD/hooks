import { Rate } from 'antd';

function StarDisplay({ rate }) {
  return (
    <Rate
      value={Number(rate)}
      disabled
      style={{ fontSize: '14px' }}
    />
  );
}

export default StarDisplay;