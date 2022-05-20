import React from 'react';
import Product from '../Products/Product/Product';
// https://b-ok.global/     { Book website }
const books = [
    {
        id: 1,
        name: "The Queen of Nothing (The Folk of the Air #3)",
        img: "https://covers.zlibcdn2.com/covers299/books/86/da/8e/86da8e946d91058716de83bb1d469273.jpg",
        book: "https://drive.google.com/file/d/1WDvvLMaO3VEAcWe17eaklloWcOoAg3OO/view?usp=sharing"
    },
    {
        id: 2,
        name: "Responsive Web Design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques",
        img: "https://covers.zlibcdn2.com/covers299/books/bf/38/81/bf3881984efc9b87954f91e00bdcb9a3.jpg",
        book: "https://b-ok.global/ireader/5517597"
    },
    {
        id: 3,
        name: "C++ Primer, 5th Edition",
        img: "https://covers.zlibcdn2.com/covers299/books/7d/62/91/7d6291e23903fa6b6ba13b0f45afe380.jpg",
        book: "https://b-ok.global/ireader/2733889"
    },
    {
        id: 4,
        name: "Beginning Programming with Python for Dummies",
        img: "https://covers.zlibcdn2.com/covers299/books/55/c3/65/55c3657e9f1670e8251e31c24e0f4334.jpg",
        book: "https://b-ok.global/ireader/3601991"
    },
    {
        id: 5,
        name: "Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython",
        img: "https://covers.zlibcdn2.com/covers299/books/a3/ad/6e/a3ad6e6b2504b95ec39a6c57d465ba5d.jpg",
        book: "https://b-ok.global/ireader/3367370"
    },
    {
        id: 6,
        name: "Full Stack Testing (Second Early Release)",
        img: "https://covers.zlibcdn2.com/covers299/books/a9/77/20/a97720a12d5c74a30a3a6c66c3f825f6.jpg",
        book: "https://b-ok.global/ireader/18293607"
    },
    {
        id: 7,
        name: "HTML and CSS: Design and Build Websites",
        img: "https://covers.zlibcdn2.com/covers299/books/f2/f2/31/f2f231b39e648d7db773fe8c02e87132.jpg",
        book: "https://b-ok.global/ireader/1304587"
    },
    {
        id: 8,
        name: "Learning PHP, MySQL & JavaScript - With jQuery, CSS & HTML5",
        img: "https://covers.zlibcdn2.com/covers299/books/7d/5b/67/7d5b67e3287c146dc546d4248dcccbdf.jpg",
        book: "https://b-ok.global/ireader/3647373"
    },
    {
        id: 9,
        name: "Communicating data with Tableau : [designing, developing, and delivering data visualizations; covers Tableau version 8.1]",
        img: "https://covers.zlibcdn2.com/covers299/books/e6/e1/c2/e6e1c2d3ecb3cce0628caa34c94921e3.jpg",
        book: "https://b-ok.global/ireader/3426964"
    },
    {
        id: 10,
        name: "Python Machine Learning: Machine Learning and Deep Learning with Python, scikit-learn, and TensorFlow",
        img: "https://covers.zlibcdn2.com/covers299/books/96/89/ca/9689ca71655d051b9b9c87b7e2be28c1.jpg",
        book: "https://b-ok.global/ireader/2827254"
    }
]
const Library = () => {
    return (
        <div>
            <div className='container mx-auto px-4 md:px-0 py-20'>
                {/* Products */}
                <div className='text-center pb-8'>
                    <h1 className='text-2xl uppercase font-semibold'>Library</h1>
                    <div className='w-10 h-0.5 bg-blue-600 mx-auto ' />
                    <h5 className='text-base'>Read books of your choice and increase your knowledge</h5>
                </div>
                <div className='w-full  px-4'>
                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4'>

                        {
                            books.map(book => <Product key={book.id} book={book} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Library;