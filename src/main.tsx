import { h, render } from 'preact';
import Router, { Route } from 'preact-router';
import { MainView } from './views/MainView';

export const Main = () => (
    <Router>
        <Route default component={MainView} />
    </Router>
);

render(<MainView />, document.getElementById('app') as HTMLElement);
