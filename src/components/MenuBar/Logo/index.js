import React from 'react';
import { APP_NAME } from '../../../config';

import './logoCss.css';

const Logo = () => {
    return (
        <div className = "logo">
           <p>{APP_NAME}</p>
        </div>
    );
}

export default Logo;