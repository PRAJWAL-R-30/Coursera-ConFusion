import React from 'react';
import RenderCard from './RenderCard';

const homeComponent = props => {
    return (
        <div className='container'>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.dish} 
                        isLoading={props.dishesLoading} 
                        errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.promotion} 
                        isLoading={props.dishesLoading} 
                        errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.leader} 
                        isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
                </div>
            </div>
        </div>
    );
}

export default homeComponent;