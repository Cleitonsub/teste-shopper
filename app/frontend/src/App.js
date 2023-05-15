import './App.css';
import FileUploader from './components/FileUploader';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <div className="Upload">
        <FileUploader />
        <Products />
      </div>
    </div>
  );
}

export default App;
