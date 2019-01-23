// Containers
import HeroesList from '../containers/HeroesList/HeroesList';
import MoreDetails from '../containers/MoreDetails/MoreDetails';

const routerComponents = [
    {
        'route': '/',
        'component': HeroesList
    },
    {
        'route': '/more-details',
        'component': MoreDetails
    }
];

export default routerComponents;