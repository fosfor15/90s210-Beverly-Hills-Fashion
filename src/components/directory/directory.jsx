import Category from '../category/category';
import categories from '../../data/categories';

import './directory.scss';


function Directory() {
    return (
        <main>
            { categories.map(({ id, ...category }) => 
                <Category
                    key={ id }
                    { ...category }
                />
            ) }
        </main>
    );
}

export default Directory;

