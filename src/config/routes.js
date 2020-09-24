import Quotes from '../views/Quotes.js';
import Home from '../views/Home.js';

const routes = [
    {
        view: Quotes,
        path: '/selected-quotes',
        linkText: 'Selected Quotes'
    },
    {
        view: Home,
        path: '/',
        linkText: 'EZP'
    }
];

export default routes;
