import {Link, Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <div>
        <header>
            <Link to="/">Currency Calculator</Link>
            <Link to="Currency_Rates">Currency Rates</Link>
        </header>
        <Outlet />
        </div>
    )
} 

export default Layout