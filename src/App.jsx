import { pageContentByPath } from './data/pageContent.js';
import { routes } from './data/routes.js';
import Home from './pages/Home.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';

export default function App() {
  const path = window.location.pathname;

  if (path === routes.home) {
    return <Home />;
  }

  const page = pageContentByPath[path] || pageContentByPath.default;
  return <PlaceholderPage {...page} />;
}
