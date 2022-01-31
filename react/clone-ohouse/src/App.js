import './style/sample.css';
import Banners from './components/Banners';
import Header from './components/Header';


const sampleBanners = [
    {
        id: 1,
        imageUrl: "../images/1.jpg",
        linkUrl: "/exhibitions/1"
    },
    {
        id: 2,
        imageUrl: "../images/2.jpg",
        linkUrl: "/exhibitions/2"
    },
    {
        id: 3,
        imageUrl: "../images/3.jpg",
        linkUrl: "/exhibitions/3"
    },
];

const App = () => {
  return (
    <div>
      <Header />
      <p>gnb</p>
      <Banners banners={sampleBanners}/>
      <p>category</p>
      <p>deal of the day</p>
      <p>keyword</p>
    </div>
  );
}

export default App;
