const React = require('react')
const Default = require('./layouts/default')

function Edit_Form({ place, index }) {
    return (
    <Default>
            <main>
                <form method='POST' action={`/places/${index}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='name'>Restaurant Name<sup>*</sup></label>
                        <input 
                            className='form-control' 
                            id='name' 
                            name='name' 
                            type='text'
                            defaultValue={place.name}
                            required/>
                    </div> 
                    <div className='form-group'>
                        <label htmlFor='pic'>Restaurant Picture</label>
                        <input 
                            className='form-control' 
                            id='pic' 
                            name='pic' 
                            type='text'
                            defaultValue={place.pic}/>
                    </div> 
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines<sup>*</sup></label>
                        <input 
                            className='form-control' 
                            id='cuisines' 
                            name='cuisines' 
                            type='text'
                            defaultValue={place.cuisines}
                            required/>
                    </div> 
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input 
                            className='form-control' 
                            id='city' 
                            name='city' 
                            type='text'
                            defaultValue={place.city}/>
                            
                    </div> 
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input 
                            className='form-control' 
                            id='state' 
                            name='state' 
                            type='text'
                            defaultValue={place.state}/>
                    </div> 
                    <input 
                        className='btn btn-primary'
                        type='submit' 
                        value='Save Place'/>
                </form>
            </main>
        </Default>
    )
}

module.exports = Edit_Form