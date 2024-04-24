import React from 'react';
import { CardHoverEffectDemo } from '../(main)/(routes)/events/page';


export default function Form() {
    // Define a functional component instead of a class component
    const MainComponent = () => {
        return (
            <div className="main">
                {/* Render the InnerForm component */}
                <InnerForm />
            </div>
        );
    };

    // Define the InnerForm component
    const InnerForm = () => {
        return (
            <div>
                <div>
                    
                </div>
               <CardHoverEffectDemo></CardHoverEffectDemo>
            
            </div>
        );
    };

    // Return the MainComponent
    return <MainComponent />;
}
