import React from 'react';
import './App.css';

class DisplayMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      classNameQ: "btn btn-outline-success btn-lg drum-pad",
      classNameW: "btn btn-outline-success btn-lg drum-pad",
      classNameE: "btn btn-outline-success btn-lg drum-pad",
      classNameA: "btn btn-outline-success btn-lg drum-pad",
      classNameS: "btn btn-outline-success btn-lg drum-pad",
      classNameD: "btn btn-outline-success btn-lg drum-pad",
      classNameZ: "btn btn-outline-success btn-lg drum-pad",
      classNameX: "btn btn-outline-success btn-lg drum-pad",
      classNameC: "btn btn-outline-success btn-lg drum-pad",
      text: []
    };
    // this.textAnimalS = this.textAnimalS.bind(this);
    // this.Q = React.createRef();
  }
  
  playPauseQ() {
    this.Q.loop = true;
  if(this.Q.paused) {
    this.setState({classNameQ: "btn btn-outline-danger btn-lg drum-pad", text: this.state.text.concat('Puppy Bark')});
    this.Q.play();
    // this.Q.load();
  } else {
    this.Q.pause();
    this.setState({classNameQ: "btn btn-outline-success btn-lg drum-pad"});
    let indexTextQ = this.state.text.indexOf('Puppy Bark');
    this.state.text.splice(indexTextQ, 1);
  }
}
  playPauseW() {
    this.W.loop = true;
  if(this.W.paused) {
    this.setState({classNameW: "btn btn-outline-danger btn-lg drum-pad", text: this.state.text.concat('Woosh')});
    this.W.play();
  } else {
    this.W.pause();
    this.setState({classNameW: "btn btn-outline-success btn-lg drum-pad"});
    let indexTextW = this.state.text.indexOf('Woosh');
    text: this.state.text.splice(indexTextW, 1)
  }
}
  playPauseE() {
    this.E.loop = true;
  if(this.E.paused) {
    this.setState({classNameE: "btn btn-outline-danger btn-lg drum-pad", text: this.state.text.concat('Bunyi Katak')});
    this.E.play();
  } else {
    this.E.pause();
    this.setState({classNameE: "btn btn-outline-success btn-lg drum-pad"});
    let indexTextE = this.state.text.indexOf('Bunyi Katak');
    this.state.text.splice(indexTextE, 1);
  }
}
  playPauseA() {
    this.A.loop = true;
  if(this.A.paused) {
    this.setState({classNameA: "btn btn-outline-danger btn-lg drum-pad", text: this.state.text.concat('Kucing')});
    this.A.play();
  } else {
    this.A.pause();
    this.setState({classNameA: "btn btn-outline-success btn-lg drum-pad"});
    let indexTextA = this.state.text.indexOf('Kucing');
    this.state.text.splice(indexTextA, 1);
  }
}
  playPauseS() {
    this.S.loop = true;
  if(this.S.paused) {
    this.setState({classNameS: "btn btn-outline-danger btn-lg drum-pad", text: this.state.text.concat('rakun')});
    this.S.play();
  } else {
    this.S.pause();
    this.setState({classNameS: "btn btn-outline-success btn-lg drum-pad"});
    let indexTextS = this.state.text.indexOf('rakun');
    this.state.text.splice(indexTextS, 1);
  }
}
  playPauseD() {
    this.D.loop = true;
  if(this.D.paused) {
    this.setState({classNameD: "btn btn-outline-danger btn-lg drum-pad", text: this.state.text.concat('Ketawa Burung Kookaburra')});
    this.D.play();
  } else {
    this.D.pause();
    this.setState({classNameD: "btn btn-outline-success btn-lg drum-pad"});
    let indexTextD = this.state.text.indexOf('Ketawa Burung Kookaburra');
    this.state.text.splice(indexTextD, 1);
  }
}
  playPauseZ() {
    this.Z.loop = true;
  if(this.Z.paused) {
    this.setState({classNameZ: "btn btn-outline-danger btn-lg drum-pad", text: this.state.text.concat('T-Rex')});
    this.Z.play();
  } else {
    this.Z.pause();
    this.setState({classNameZ: "btn btn-outline-success btn-lg drum-pad"});
    let indexTextZ = this.state.text.indexOf('T-Rex');
    this.state.text.splice(indexTextZ, 1);
  }
}
  playPauseX() {
    this.X.loop = true;
  if(this.X.paused) {
    this.setState({classNameX: "btn btn-outline-danger btn-lg drum-pad", text: this.state.text.concat('Sapi')});
    this.X.play();
  } else {
    this.X.pause();
    this.setState({classNameX: "btn btn-outline-success btn-lg drum-pad"});
    let indexTextX = this.state.text.indexOf('Sapi');
    this.state.text.splice(indexTextX, 1);
  }
}
  playPauseC() {
    this.C.loop = true;
  if(this.C.paused) {
    this.setState({classNameC: "btn btn-outline-danger btn-lg drum-pad", text: this.state.text.concat('Burung Peacock')});
    this.C.play();
  } else {
    this.C.pause();
    this.setState({classNameC: "btn btn-outline-success btn-lg drum-pad"});
    let indexTextC = this.state.text.indexOf('Burung Peacock');
    this.state.text.splice(indexTextC, 1);
  }
}
  
//   textAnimalS() {  
          
// //     if(this.Q.played){
//       const propsText = this.state.text;
//       propsText.push("OK");
//       return propsText.map((x, idx) => <li key={idx}>{x}</li>);
//     // }
//   }; 
  
  render() {
    let styleButtone = {
      fontSize: '2em',
      width: '2em'
    };
    let styleContain = {
      width: '290px'
    };
    
    document.onkeydown = (e) => {
      e = e || window.event;
      switch(e.keyCode) {
        case 81:
          this.playPauseQ();
          break;
        case 87:
          this.playPauseW();
          break;
        case 69:
          this.playPauseE();
          break;
        case 65:
          this.playPauseA();
          break;
        case 83:
          this.playPauseS();
          break;
        case 68:
          this.playPauseD();
          break;
        case 90:
          this.playPauseZ();
          break;
        case 88:
          this.playPauseX();
          break;
        case 67:
          this.playPauseC();
          break;
      }
    };
    
   return (
     <div className="container" id="conDisplay">
        <div className="row justify-content-center">
     
       <div className="container" id="padDisplay" style={styleContain}>
         <div className="row">
          <div className="col">
            <button type="button" className={this.state.classNameQ} onClick={this.playPauseQ.bind(this)} id="Q-drum" style={styleButtone}>Q
            <audio id="Q" className="clip"  ref={Q => {
              this.Q = Q;
            }} src="http://soundbible.com/grab.php?id=2136&type=mp3"></audio> {/* Puppy Bark */}
            </button> 
          </div>
           <div className="col">
            <button type="button" id="W-drum" onClick={this.playPauseW.bind(this)} className={this.state.classNameW} style={styleButtone}>W 
             <audio id="W" className="clip"  ref={W => {
              this.W = W;
            }} src="http://soundbible.com/grab.php?id=2068&type=mp3"></audio> {/* Woosh Sound */}
             </button> 
          </div>
           <div className="col">
            <button type="button" id="E-drum" onClick={this.playPauseE.bind(this)} className={this.state.classNameE} style={styleButtone}>E 
             <audio id="E" className="clip"  ref={E => {
              this.E = E;
            }} src="http://soundbible.com/grab.php?id=2033&type=mp3"></audio> {/* Bunyi Katak */}
             </button> 
          </div>
         </div>

         <div className="row">
          <div className="col">
            <button type="button" id="A-drum" className={this.state.classNameA} onClick={this.playPauseA.bind(this)} style={styleButtone}>A
            <audio id="A" className="clip"  ref={A => {
              this.A = A;
            }} src="http://soundbible.com/grab.php?id=1954&type=mp3"></audio> {/* Kucing */}
            </button> 
          </div>
           <div className="col">
            <button type="button" id="S-drum" onClick={this.playPauseS.bind(this)} className={this.state.classNameS} style={styleButtone}>S 
             <audio id="S" className="clip"  ref={S => {
              this.S = S;
            }} src="http://soundbible.com/grab.php?id=1853&type=mp3"></audio> {/* rakun */}
             </button> 
          </div>
           <div className="col">
            <button type="button" id="D-drum" onClick={this.playPauseD.bind(this)} className={this.state.classNameD} style={styleButtone}>D 
             <audio id="D" className="clip"  ref={D => {
              this.D = D;
            }} src="http://soundbible.com/grab.php?id=1786&type=mp3"></audio> {/* Ketawa Burung Kookaburra */}
             </button> 
          </div>
         </div>

         <div className="row">
          <div className="col">
            <button type="button" id="Z-drum" className={this.state.classNameZ} onClick={this.playPauseZ.bind(this)} style={styleButtone}>Z
            <audio id="Z" className="clip"  ref={Z => {
              this.Z = Z;
            }} src="http://soundbible.com/grab.php?id=1782&type=mp3"></audio> {/* T-Rex */}
            </button> 
          </div>
           <div className="col">
            <button type="button" id="X-drum" onClick={this.playPauseX.bind(this)} className={this.state.classNameX} style={styleButtone}>X 
             <audio id="X" className="clip"  ref={X => {
              this.X = X;
            }} src="http://soundbible.com/grab.php?id=1703&type=mp3"></audio> {/* Sapi */}
             </button> 
          </div>
           <div className="col">
            <button type="button" id="C-drum" onClick={this.playPauseC.bind(this)} className={this.state.classNameC} style={styleButtone}>C 
             <audio id="C" className="clip"  ref={C => {
              this.C = C;
            }} src="http://soundbible.com/grab.php?id=1443&type=mp3"></audio> {/* Burung Peacock */}
             </button> 
          </div>
         </div>
       </div>

       <div id="display" className="container" style={styleContain}>
          <div className="row">
            <div className="col-12">
              <div><ul>{this.state.text.map((x, idx) => <li key={idx}>{x}</li>)}</ul></div>
            </div>
          </div>  
       </div>
       </div>
     </div>
   ) 
  }
}

class AnimalSound extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <wrapper id="drum-machine">
        <div className="container" id="disCon">
          <h1>Animal Sound</h1>
          <DisplayMachine />
        </div>
      </wrapper>
    )
  }
}

export default AnimalSound;