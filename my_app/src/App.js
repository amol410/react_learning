import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/*  */}
    <Navbar title="TextUtils" aboutText="about"/>
    <div className="container"><TextForm heading='Enter Your Text Here'/></div>
    
    </>
  );
}

export default App;
