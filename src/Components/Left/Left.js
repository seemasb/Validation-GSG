import './Left.css';
import Group from '../imgs/Group.png';
import quotes from '../imgs/quotes.png';
import joy from '../imgs/joy.png';

export default function Left() {
  return (
    <div className="Left">
      <img src={Group} className="logo"></img>
      <div className="quote">
        <img src={quotes}></img>
        <p className="quotep1">
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
        <p className="quotep2">Hideo Kojima</p>
      </div>
      <img src={joy} className="joy"></img>
    </div>
  );
}
