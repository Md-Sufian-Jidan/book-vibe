import React from 'react';

const BSection = ({ book }) => {
    return (
        <div >
            <div className='border p-5'>
                <img className="mx-auto" src={book?.img} alt="" />
                <h3 className='text-center my-3 font-bold text-2xl'>{book?.book_name}</h3>
            </div>
        </div>
    );
};

export default BSection;