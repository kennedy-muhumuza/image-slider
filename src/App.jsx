import "./App.css";
import { ImageSlider } from "./image-slider/ImageSlider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImageSlider />
    </>
  );
}

export default App;
