import './LeftSec.css';
import whitelogo from '../imgs/whitelogo.png';
import quotes from '../imgs/quotes.png';
import vec from '../imgs/vec.png';

export default function LeftSec() {
  return (
    <div className="LeftSec">
      <img src={whitelogo} className="whitelogo"></img>
      <div className="quote quote2 ">
        <img src={quotes}></img>
        <p className="quotep1 whiteq">
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
        <p className="quotep2 whiteq">Hideo Kojima</p>
      </div>
      <img src={vec} className="vec"></img>
    </div>
  );
}
