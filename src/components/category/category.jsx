import './category.scss';

function Category(props) {
    const { name, imageUrl = '/images/no-image.png' } = props;

    return (
        <div
            className="category"
            style={{
                backgroundImage: `url(${ process.env.PUBLIC_URL + imageUrl })`
            }}
        >
            <div className="category-body">
                <h3>{ name }</h3>
                <p>Shop now</p>
            </div>
        </div>
    );
}

export default Category;
