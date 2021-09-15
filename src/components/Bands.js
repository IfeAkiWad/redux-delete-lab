import React from 'react'
import Band from './Band'

// render a list of bands provided by props
const Bands = (props) => {
    const getBands = props.bands.map((band) => <Band key={band.id} {...band}/>)
    return (
        <div>
            {getBands}
        </div>
    )
}
export default Bands