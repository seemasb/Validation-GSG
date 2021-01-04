import './Right.css';
import social from '../imgs/social.png';
import Form from '../Form/Form';
import or from '../imgs/or.png';

export default function Right(props) {
  const { setPage } = props;
  return (
    <div className="Right">
      <span className="span1">Join the game!</span>
      <span className="span2">Go inside the best gamers social network!</span>
      <img src={social} className="social"></img>
      <img src={or}></img>
      <Form setPage={setPage} />
    </div>
  );
}
