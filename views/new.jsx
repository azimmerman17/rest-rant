const React = require('react')
const Default = require('./layouts/default')

function New_Form() {
    return (
        <Default>
            <main>
                <form method='POST' action='/places'>
                    <div className='row mb-2'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Restaurant Name<sup>*</sup></label>
                            <input 
                                className='form-control' 
                                id='name' name='name' 
                                type='text'
                                required/>
                        </div> 
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Restaurant Picture</label>
                            <input 
                                className='form-control' 
                                id='pic' 
                                name='pic' 
                                type='text'/>
                        </div> 
                    </div>
                    <div className='row mb-2'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City</label>
                            <input 
                                className='form-control' 
                                id='city' 
                                name='city' 
                                type='text'/>
                        </div> 
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State</label>
                            <input 
                                className='form-control' 
                                id='state' 
                                name='state' 
                                type='text'/>
                        </div> 
                    </div>
                    <div className='row mb-2'>
                        <div className="form-group col-sm-6">
                            <label htmlfor="founded">Founded Year</label>
                            <input 
                                className="form-control" 
                                id="founded" 
                                name="founded" />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='cuisines'>Cuisines<sup>*</sup></label>
                            <input 
                                className='form-control' 
                                id='cuisines' 
                                name='cuisines' 
                                type='text'
                                required/>
                        </div>
                    </div>
                    <input className='btn btn-primary' type='submit' value='Add Place'/>
                </form>
            </main>
        </Default>
    )

}

module.exports = New_Form