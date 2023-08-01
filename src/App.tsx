import "./css/main.scss";
import { Banner } from "./Banner";
import { DetailsBlock } from "./DetailsBlock";
import { PlacesContainer } from "./PlacesContainer";
import { Footer } from "./Footer";


const App: React.FC = () => {
  return (
    <div className="App">
      <Banner/>
      <DetailsBlock title="Stories of Adventure" image="https://picsum.photos/200/200?random=1"/>
      <PlacesContainer/>
      <DetailsBlock title="Popular Adventures" image="https://picsum.photos/200/200?random=2"/>
      <Footer/>
    </div>
  );
};

export default App;
