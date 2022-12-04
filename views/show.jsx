const React = require('react')
const Default = require('./layouts/default')

function Show({place}) {
    return (
        <Default>
            <main>
                <h2 className='text-center'>{place.name}</h2>
                <p className='img-credit'>{place.cuisines}</p>
                <img src={place.pic} alt={place.name}/>
                <p className='img-credit'>
                    Located in {place.city}, {place.state}
                </p>
            </main>
        </Default>
    )
}

module.exports = Show