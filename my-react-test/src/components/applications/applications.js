import React from 'react';

function Applications() {
    return (
        <>
        <h1>Job Application</h1>
        <h2>Section 1</h2>
        <p>All the fields are mandatory</p>
        <div data-testid="custom-element">Custom HTML element</div>
        <span title="close">X</span>
        <form>
            <div>
                <label htmlFor='name'>
                    Name
                </label>
                <input type="text" id="name" placeholder='fullName' value="deekshitha" onChange={()=>{}}></input>
            </div>
            <div>
                <label htmlFor='bio'>
                    Bio
                </label>
                <input type="text" id="bio"></input>
            </div>
            <div>
                <label>Job location</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="US" aria-selected={true}>United states</option>
                    <option value="UK"aria-selected={false}>United kingdom</option>
                    <option value="CA"aria-selected={false}>Canada</option>
                    <option value="IN" aria-selected={false}>India</option>
                    <option value="AU"aria-selected={false}>Australia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" />I agree to the terms and conditions
                </label>
            </div>
            <button>submit</button>
        </form>
        </>
    );
}

export default Applications;