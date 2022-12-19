const React = require('react')
const Default = require('./layouts/default')

function Show({place}) {
    let comments = (
        <p className='inactive'>No Comments</p>
    )
    let rating = (
        <p className='inactive'>No Ratings</p>
    )
    if (place.comments.length) {
        let sumRatings = place.comments.reduce((total, c) => {
            return total + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h4 className='text-center'>
                {stars} Stars
            </h4>
        )
        comments = place.comments.map(c => {
            return (              
                <div className='border col-sm-4'>
                    <h4 className='rant'>{c.rant ? 'Rant 😡' : 'Rave 😀'}</h4>
                    <h5>{c.content}</h5>
                    <h5>
                        <strong>- {c.author}</strong>
                    </h5>
                    <h5>Rating: {c.stars}</h5>
                    <form method='POST' action={`/places/${place._id}/comment/${c._id}?_method=DELETE`}>
                        <button className='btn btn-danger bi bi-trash' type='submit'></button>
                    </form>
                </div>

            )
        })
    }
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
                                <p className='text-center'>{rating}</p>
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
                    <div className='row'>
                        {comments}
                    </div>
                </div>
                <hr/>
                <div>
                    <h3 className='mb-2'>Add comments</h3>
                    <form method='POST' action={`/places/${place._id}/comment`}>
                        <div className='row mb-2'>
                            <div className='form-group'>
                                <label htmlFor='content'>Comments</label>
                                <input 
                                    className='form-control' 
                                    id='content' 
                                    name='content' 
                                    type='text'/>
                            </div> 
                        </div>
                        <div className='row mb-2 align-baseline'>
                            <div className='form-group col-sm-3'>
                                <label htmlFor='author'>Author</label>
                                <input 
                                    className='form-control' 
                                    id='author' 
                                    name='author' 
                                    type='text'/>
                            </div> 
                            <div className="form-group col-sm-3">
                                <label htmlFor="stars">Star Rating</label>
                                <input 
                                    className="form-range" 
                                    type='range'
                                    id="stars" 
                                    name="stars" 
                                    min={0}
                                    max={5}
                                    step={0.5}
                                    required
                                    />
                            </div>
                            <div className="form-group col-sm-3">
                                <label htmlFor="rant">Rant?</label>
                                <input 
                                    type="checkbox" 
                                    name='rant'
                                    id='rant'
                                    />
                            </div>
                            <div className="form-group col-sm-3 text-end">
                                <input className='btn btn-primary' type='submit' value='Submit'/>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </Default>
    )
}

module.exports = Show