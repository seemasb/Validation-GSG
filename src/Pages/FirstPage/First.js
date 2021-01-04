import './First.css';
import Left from '../../Components/Left/Left';
import Right from '../../Components/Right/Right';

export default function First(props) {
  const { setPage } = props;
  return (
    <div className="First">
      <Left />
      <Right setPage={setPage} />
    </div>
  );
}
