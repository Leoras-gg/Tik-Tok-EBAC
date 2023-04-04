import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>@{ name }</h3>
        <p>{ description }</p>
        <div className="videoFooterMusic">
          <MusicNoteIcon className='videoFooterIcon'/>
          <div className="videoFooterMusicText">
          <p>{ music }</p>
          </div>
          
        </div>
      </div>
      <img 
      className="videoFooterRecord"
      alt="Imagem de um vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
