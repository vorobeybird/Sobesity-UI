import { useAppDispatch } from 'hooks';
import { getAllCategories } from 'store/question.store';
import HomePage from 'pages/home-page';

function App() {
  const dispatch = useAppDispatch();

  dispatch(getAllCategories());

  return (
    <div className="bg-black-dark">
      <HomePage />
    </div>
  );
}

export default App;
