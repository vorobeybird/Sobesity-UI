import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@/App';
import '@/localization/i18next';
import { store } from '@/store';

import '@/index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Suspense fallback="Loading...">
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </StrictMode>,
);
