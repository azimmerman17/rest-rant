const React = require('react')
const Default = require('./layouts/default')

function Index({ places }) {
    let placesFormatted = places.map((place) => {
        return (
            <div className='col-sm-6'>
                <h2 className='text-center'>
                    <a href={`/places/${place._id}`}>
                        {place.name}
                    </a>
                </h2>
                <p className='img-credit'>{place.cuisines}</p>
                <img src={place.pic} alt={place.name}/>
                <p className='img-credit'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Default>
            <main>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Default>
    )
}

module.exports = Index