import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Cards from './components/Cards';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  let children = [
    {
      id:1,
      title: 'Child1',
      btnTitle: 'Link1',
      img: 'https://images.news18.com/ibnlive/uploads/2021/11/baby-boy-16372988583x2.jpg?impolicy=website&width=510&height=356'
    },
    {
      id:2,
      title: 'Child2',
      btnTitle: 'Link2',
      img: 'https://www.baby-chick.com/wp-content/uploads/2020/09/Sweet-newborn-baby-sleeps-in-a-basket.-Beautiful-newborn-boy-with-bear-toy.-1133563556_2125x1416-1024x683.jpeg'
    },
    {
      id:3,
      title: 'Child3',
      btnTitle: 'Link3',
      img: 'https://cdn.cdnparenting.com/articles/2020/09/17213003/765918223.webp'
    },
    {
      id:4,
      title: 'Child4',
      btnTitle: 'Link4',
      img: 'https://thumbor.granitemedia.com/unique-boy-names/3gonvdyRP14vwUvkQ2ttOjqbvNY=/800x600/filters:format(webp):quality(80)/granite-web-prod/18/d7/18d7967d217d4c7dafcd6c75d15112cc.jpeg'
    },
    {
      id:5,
      title: 'Child5',
      btnTitle: 'Link5',
      img: 'https://nicee.cc/wp-content/uploads/2017/06/2692.jpg'
    },
    {
      id:6,
      title: 'Child6',
      btnTitle: 'Link6',
      img: 'https://nicee.cc/wp-content/uploads/2017/06/2692-7.jpg'
    },
  ]
  return (
    <>
    <Header/>
    <Slider/>
    <div className='mt-5 p-5 d-flex flex-wrap'>
      {
        children.map((child,index) => {
          return (
            <Cards key={child.id} title={child.title} btnTitle={child.btnTitle} img={child.img}/>
          )
        })
      }
    </div>
    <Counter/>
    <Footer/>
    </>
  );
}

export default App;
