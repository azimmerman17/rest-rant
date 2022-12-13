const React = require('react')
const Default = require('./layouts/default')

function Edit_Form({ place }) {
    return (
        <Default>
        <main>
            <form method='POST' action={`/places/${place._id}?_method=PUT`}>
                <div className='row mb-2'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='name'>Restaurant Name<sup>*</sup></label>
                        <input 
                            className='form-control' 
                            id='name' name='name' 
                            type='text'
                            defaultValue={place.name}
                            required/>
                    </div> 
                    <div className='form-group col-sm-6'>
                        <label htmlFor='pic'>Restaurant Picture</label>
                        <input 
                            className='form-control' 
                            id='pic' 
                            name='pic' 
                            type='text'
                            defaultValue={place.pic}/>
                    </div> 
                </div>
                <div className='row mb-2'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='city'>City</label>
                        <input 
                            className='form-control' 
                            id='city' 
                            name='city' 
                            type='text'
                            defaultValue={place.city}/>
                    </div> 
                    <div className='form-group col-sm-6'>
                        <label htmlFor='state'>State</label>
                        <input 
                            className='form-control' 
                            id='state' 
                            name='state' 
                            type='text'
                            defaultValue={place.state}/>
                    </div> 
                </div>
                <div className='row mb-2'>
                <div className="form-group col-sm-6">
                    <label htmlFor="founded">Founded Year</label>
                    <input 
                        className="form-control" 
                        id="founded" 
                        name="founded"
                        defaultValue={place.founded} />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='cuisines'>Cuisines<sup>*</sup></label>
                        <input 
                            className='form-control' 
                            id='cuisines' 
                            name='cuisines' 
                            type='text'
                            defaultValue={place.cuisines}
                            required/>
                    </div> 
                </div>               
                <input className='btn btn-primary' type='submit' value='Edit Place'/>
            </form>
        </main>
        </Default>
    )
}
module.exports = Edit_Form