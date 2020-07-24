import React, { useState } from 'react';

const SongForm = ({addSong}) => {
    const [title, setTitle] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }

    return (
        <div>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <button onClick={submitHandler}>Add a Song</button>
        </div>
    )
};

export default SongForm;