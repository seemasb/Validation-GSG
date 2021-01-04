import './RightSec.css';
import FormSec from '../FormSec/FormSec';
import line from '../imgs/line.png';

export default function RightSec(props) {
  const { setPage } = props;
  const changepage = () => {
    setPage(true);
  };
  return (
    <div className="RightSec">
      <div className="back span2" onClick={changepage}>
        <span className="arrow">{'<'}</span>
        <span>Back</span>
      </div>
      <span className="span1 sec">Register Individual Account!</span>
      <span className="span2 sec2">
        For the purpose of gamers regulation, your<br></br> details are
        required.
      </span>
      <img src={line} className="line"></img>
      <FormSec />
    </div>
  );
}
