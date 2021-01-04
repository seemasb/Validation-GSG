import './Second.css';
import LeftSec from '../../Components/LeftSec/LeftSec';
import RightSec from '../../Components/RightSec/RightSec';

export default function Second(props) {
  const { setPage } = props;
  return (
    <div className="Second">
      <LeftSec />
      <RightSec setPage={setPage} />
    </div>
  );
}
