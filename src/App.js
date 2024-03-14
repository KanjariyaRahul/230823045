import Icon_text from './Icon_text';
import hart from './love.png';
import comments from './chat-box.png';
import share from './share.png';


function App() {
  return (
    // <div style={{display: "flex" , gap: 60}}>
    // <Icon_text icon = {hart} text="Like"/>
    // <Icon_text icon = {comments} text="Comments"/>
    // <Icon_text icon = {share} text="Share"/>
    // </div>
    

    <div style={{ display: 'flex', gap: '60px' }}>
      <Icon_text path="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.1 4.9 2 8.5 2c1.74 0 3.41.81 4.5 2.09C14.09 2.81 15.76 2 17.5 2 21.1 2 24 5.1 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" text="Like" />
      <Icon_text path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3h4v-2h-4v2zm0-4h4V7h-4v7z" text="Comments" />
      <Icon_text path="M21 11.5l-2-2V7a2 2 0 0 0-2-2h-4V3l-2-2-2 2v2H7a2 2 0 0 0-2 2v2.5l-2 2 2 2V17a2 2 0 0 0 2 2h4v2l2 2 2-2v-2h4a2 2 0 0 0 2-2v-3.5l2-2-2-2z" text="Share" />
    </div>    
     
  );
}

export default App;




