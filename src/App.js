import './App.css';

import categories from './data/categories';
import Category from './components/category/category';


function App() {
    return (
        <div className="App">
            <header>
                <h1>
                    90<sup>s</sup>210&#8199;
                    <span>Beverly Hills Fashion</span>
                </h1>
            </header>

            <main>
                { categories.map(category => 
                    <Category { ...category } />
                ) }
            </main>
        </div>
    );
}

export default App;
