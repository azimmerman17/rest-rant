const React = require('react')

function Default(html) {
    return (
        <html>
            <head>
                <title> REST-RANT</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"></link>   
                <link rel='stylesheet' href='/css/style.css'/>
            </head>
            <body>
            <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>    
                        </li>                        
                        <li>
                            <a href='/places'>Restaurants</a>    
                        </li>                        
                        <li>
                            <a href='/places/new'>Add Restaurant</a>    
                        </li>    
                    </ul>
                </nav>
                <header>
                    <h1>Places to Rant and Rave About</h1>
                </header>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default