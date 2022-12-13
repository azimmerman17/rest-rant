const React = require('react')
const Default = require('./layouts/default')

function Show({place}) {
    return (
        <Default>
            <main>
                <div className='col-lg-12 my-5'>
                    <div className='row'>
                        <div className='col'>
                            <img className='fullSize' src={place.pic} alt={place.name}/>
                        </div>
                        <div className='col mb-4'>
                            <h2 className='text-center fs-1'>{place.name}</h2>
                            <div className='mb-4'>
                                <h3 className='text-center'>Ratings</h3>
                                <p className='text-center'>No Ratings</p>
                            </div>
                            <div className='mb-4'>
                                <h3 className='text-center'>Description</h3>
                                <h5 className='text-center'>{place.showEstablished()}</h5>
                                <p className='text-center'>Serving: {place.cuisines}</p>
                            </div>
                            <div className='d-flex flex-row-reverse'>
                                <form method='POST' action={`/places/${place._id}?_method=DELETE`}>
                                    <button className='btn btn-danger bi bi-trash' type='submit'></button>
                                </form>
                                <a href={`/places/${place._id}/edit`} className='btn btn-warning mx-1 bi bi-pencil-square'></a>
                            </div>
                        </div> 
                    </div>
                </div> 
                <hr/> 
                <div>
                    <h3 className='mb-2'>Comments</h3>
                    <p>No Comments</p>
                </div>
            </main>
        </Default>
    )
}

module.exports = Show