import logo from './logo.svg';

import Form from './form/Form';

import './App.scss';
import '../styles/global.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Form />
            </header>
        </div>
    );
}

export default App;
