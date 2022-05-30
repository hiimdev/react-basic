import logo from './logo.svg';

import MyComponent from './form/MyComponent';

import './App.scss';
import '../styles/global.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <MyComponent />
            </header>
        </div>
    );
}

export default App;
