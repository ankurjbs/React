import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandaomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescription[getRandaomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build.
      </p>
    </header>
  );
}
