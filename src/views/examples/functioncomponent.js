import React from "react";

const FunctionComponent = (props) => {
    console.log('>>>props from FunctionComponent: ', props);
    let {arrJobs} =  props
    return(
        <>
            <div> hello function component</div>
            <div className="job-list">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>{index + 1}: {item.title} - {item.salary} $</div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FunctionComponent;