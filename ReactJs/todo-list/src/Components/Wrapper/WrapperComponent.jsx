import React from 'react';

function WrapperComponent({ children }) {
    return (
        <div className="list-container">
            {children}
        </div>
    );
}

export default WrapperComponent;
