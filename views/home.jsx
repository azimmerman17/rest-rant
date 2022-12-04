const React = require('react')
const Default = require('./layouts/default')

function Home() {
    return (
        <Default>
            <main>
                <img src='./images/restaurat-bar-photo.jpg' alt='restaurant bar'/>
                <div className='img-credit'>
                    <small>Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></small>
                </div>
                <a href='./places'>
                    <button className='btn btn-primary'>Places Page</button>
                </a>
            </main>
        </Default>
    )
}

module.exports = Home