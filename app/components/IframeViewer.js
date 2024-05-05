"use client"
import PropTypes from 'prop-types';
import styles from "@/app/page.module.css"


export default function IFrameViever({src}) {

    IFrameViever.propTypes = {
        src: PropTypes.string.isRequired,
    }

    return( 
        <iframe 
        // src="https://drive.google.com/file/d/1idQPlX3VKanj_9xHR1MJJktuJ0rJPzIH/preview"
        src={src}
        style={{width:'100vw', height: '96vh'}} 
        width="640" height="480" 
        ></iframe>
    )

}