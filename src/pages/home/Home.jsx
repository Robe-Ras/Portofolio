import './home.css';

const Home = () => 
<div className='hero'>
  <div className="ruby-container float1" style={{ '--random-x1': `${Math.random() * 20 - 10}px`, '--random-y1': `${Math.random() * 20 - 10}px` }}>
    <h2 className="Name1 floatName1" style={{ '--random-xName1': `${Math.random() * 20 - 10}px`, '--random-yName1': `${Math.random() * 20 - 10}px` }}>RUBY</h2>
    <img src="/src/assets/images/ruby.gif" alt="Ruby GIF" className="ruby-gif floatGif1" style={{ '--random-xGif1': `${Math.random() * 20 - 10}px`, '--random-yGif1': `${Math.random() * 20 - 10}px` }} />
  </div>
  <div className="ror-container float2" style={{ '--random-x2': `${Math.random() * 20 - 10}px`, '--random-y2': `${Math.random() * 20 - 10}px` }}>
  <h2 className="Name2 floatName2" style={{ '--random-xName2': `${Math.random() * 20 - 10}px`, '--random-yName2': `${Math.random() * 20 - 10}px` }}>RAILS</h2>
  <img src="/src/assets/images/ror.gif" alt="RORGIF" className="ror-gif floatGif2" style={{ '--random-xGif2': `${Math.random() * 20 - 10}px`, '--random-yGif2': `${Math.random() * 20 - 10}px` }} />
  </div>
  <div className="js-container float3" style={{ '--random-x3': `${Math.random() * 20 - 10}px`, '--random-y3': `${Math.random() * 20 - 10}px` }}>
    <h2 className="Name3 floatName3" style={{ '--random-xName3': `${Math.random() * 20 - 10}px`, '--random-yName3': `${Math.random() * 20 - 10}px` }}>JAVASCRIPT</h2>
    <img src="/src/assets/images/js.gif" alt="JS GIF" className="js-gif floatGif3" style={{ '--random-xGif3': `${Math.random() * 20 - 10}px`, '--random-yGif3': `${Math.random() * 20 - 10}px` }} />
  </div>
  <div  className="react-container float4" style={{ '--random-x4': `${Math.random() * 20 - 10}px`, '--random-y4': `${Math.random() * 20 - 10}px` }}>
    <h2 className="Name4 floatName4" style={{ '--random-xName4': `${Math.random() * 20 - 10}px`, '--random-yName4': `${Math.random() * 20 - 10}px` }}>REACT</h2>
    <img src="/src/assets/images/react.gif" alt="REACT GIF" className="react-gif floatGif4" style={{ '--random-xGif4': `${Math.random() * 20 - 10}px`, '--random-yGif4': `${Math.random() * 20 - 10}px` }} />
  </div>
</div>;
export default Home;
