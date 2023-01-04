import { useAppDispatch } from 'hooks';
import { getAllCategories } from 'store/question.store';
import LandingPage from 'pages/landing-page';

function App() {
  const dispatch = useAppDispatch();

  dispatch(getAllCategories());

  return (
    <div className="bg-black-dark">
      <LandingPage />
    </div>
  );
}

export default App;
