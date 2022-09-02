
import { Dna } from 'react-loader-spinner'

import styles from '../css/Loader.module.css'


export default function Loader(){
    
    return (  
        <div className={styles["Loader"]}>  
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div> 
    )
}