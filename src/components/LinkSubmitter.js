import React, { useState } from 'react';


const LinkSubmitter = () => {
    const [link, setLink] = useState('');

    const handleChange = (event) => {
        setLink(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch('http//localhost:8000/api/web_scraper/submit-link/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ link: link })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('hit error condition');
            console.error('Error:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="linkInput">Enter Link:</label>
            <input
                type="text"
                id="linkInput"
                value={link}
                onChange={handleChange}
                placeholder="Paste your link here"
            />
            <button type="submit">Submit</button>
        </form>
    );
}


export default LinkSubmitter;