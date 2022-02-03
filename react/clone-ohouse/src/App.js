import './style/sample.css';
import Banners from './components/Banners';
import Header from './components/Header';
import Gnb from './components/Gnb';
import Categories from './components/Categories';


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
      <Gnb />
      <Banners banners={sampleBanners}/>
      <Categories />
      <p>deal of the day</p>
      <p>keyword</p>
    </div>
  );
}

export default App;
