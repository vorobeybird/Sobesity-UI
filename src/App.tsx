import {Header} from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header isLoggedIn={true}></Header>
      <h1 className="text-3xl font-bold underline">Sobecity</h1>
    </div>
  );
}

export default App;
