import './App.css';
import Content from './components/Content';
import Menubar from './components/Menubar';

function App() {
  return (
    <div className='flex'>
    <Menubar />
    <Content />
    </div>
  );
}

export default App;
