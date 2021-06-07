import { Fragment } from 'react';
import { useScript } from './hooks/useScript';
import Navbar from './components/layouts/navbar';
import Sidebar from './components/layouts/sidebar';
import UseRouter from './useRouter';
import Footer from './components/layouts/footer';
// General CSS Files
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// Template CSS
import './assets/css/style.css';
import './assets/css/components.css';
// General Scripts
window.jQuery = window.$ = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.bundle.js');
require('bootstrap/dist/js/bootstrap.min.js');

function App() {

    useScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js', 'NiceScroll');
    useScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js', 'MomentScript');
    useScript('../assets/js/stisla.js', 'Stisla');
    useScript('../assets/js/scripts.js', 'Scripts');
    useScript('../assets/js/custom.js', 'CustomScript');

    return ( <
        Fragment >
        <
        div className = "App"
        id = "app" >
        <
        main className = "main-wrapper" >
        <
        Navbar / >
        <
        Sidebar / >
        <
        UseRouter / >
        <
        Footer / >
        <
        /main> <
        /div> <
        /Fragment>
    );
}

export default App;