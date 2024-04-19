import reactimg from "../../assets/react-core-concepts.png";
import './Header.css';
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactimg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* the curly barces are for dynamic values/ concepts  */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}