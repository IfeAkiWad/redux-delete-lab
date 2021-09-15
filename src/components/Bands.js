import React from 'react'
// render a list of bands provided by props
const Bands = (props) => {
    const getBands = props.bands.map((band, index) => <li key={index}>{band}</li>)
    return (
        <div>
            {getBands}
        </div>
    )
}
export default Bands