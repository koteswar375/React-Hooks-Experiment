import React, {useState} from 'react';
import SongForm from './SongForm';

const SongsList = (props) => {
    const [songs, setSongs] = useState([
        {title:'Despatico', id: 1},
        {title:'All the way down', id: 2},
        {title:'Let it go', id: 3}
    ])

    const addSong = (title) => {
        setSongs((prev)=>[...prev, {title, id: Math.floor(Math.random()*1000)}])
    }

    return (
        <div>
            <ul>
    {songs.map(song => <li key={song.id}>{song.title}</li>)}
            </ul>
            <SongForm addSong = {addSong}/>
        </div>
    )
}


export default SongsList;