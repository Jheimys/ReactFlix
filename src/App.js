import RoutesApp from "./routes";

//react - toastfy
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <RoutesApp />
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;

// chave da Api : 46351781a58dd45b6ed0c086acbcb999
// https://api.themoviedb.org/3/movie/550?api_key=46351781a58dd45b6ed0c086acbcb999&language=pt-BR
// https://api.themoviedb.org/3/movie/now_playing?api_key=46351781a58dd45b6ed0c086acbcb999&language=pt-BR