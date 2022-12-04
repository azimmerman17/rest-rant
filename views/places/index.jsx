const React =require('react')
const Default = require('../default')

function Index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className='col-sm-6'>
                <h2 className='text-center'>{place.name}</h2>
                <p className='text-center'>{place.cuisines}</p>
                <img src={place.pic} alt={place.name}/>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Default>
            <main>
                <h1>Places to Rant or Rave about</h1>
                <div className='row'>
                {placesFormatted}
                </div>
            </main>
        </Default>
    )
}

module.exports = Index