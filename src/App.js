// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'; 
// import Textarea from './components/Textarea'; 
// import Textarea from './components/textarea'; 
import Textflied from './components/Textfleid'; 

function App() {
  return (
    <> 
    {/* // this is called fragment tag */}
    <Navbar title="aditya"/>
    {/* <Textarea headingtext="To convert text"/> */}
    <Textflied  headingtext="To convert text"/>
     <div className='container my-5'>
      <About/>
     </div>
    
    
    </>
  );
}

export default App;
