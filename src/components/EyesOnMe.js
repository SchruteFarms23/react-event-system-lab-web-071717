// Code EyesOnMe Component Here
// import React from 'react';

// export default class EyesOnMe extends React.Component{
//   onFocus = () => console.log('Good!')
//
//   onBlur = () => console.log('Hey! Eyes on me!')
//   render(){
//     return(
//       <button onFocus={this.onFocus} onBlur={this.onBlur}> Eyes here buddy </button>
//     );
//   }
// }

import React from 'react';

class EyesOnMe extends React.Component {

  Focus(){
    console.log('Good!')
  }

  Blur(){
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.Focus} onBlur={this.Blur}>
        Eyes on me, please!
      </button>
    )
  }
}

export default EyesOnMe;
