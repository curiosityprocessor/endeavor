import './style/sample.css';
import Header from './components/Header';
import Gnb from './components/Gnb';
import Contents from './components/Contents';


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
      <Contents />
      <p>deal of the day</p>
      <p>keyword</p>
    </div>
  );
}

export default App;
