import React , {Component} from 'react';
// import chrono from '../Helpers/assets/img/chrono.png'


export default class Chrono extends Component {
    static defaultProps = {
        title: '',
        onSave: () => {
        }
      }

    state = {
        minutes : 0,
        seconds : 0,
        miliseconds : 0,
        name: ''
    }

    start () {
        if(this.timer)
            return;

            this.timer = setInterval(() => {
                const { miliseconds, seconds, minutes} = this.state
    
                this.setState({ name : this.props.onPress, miliseconds : miliseconds + 1 })
    
                if(miliseconds === 99) 
                    this.setState({ name : this.props.onPress, miliseconds : 0 , seconds : seconds + 1 })
    
                if(seconds > 59)
                    this.setState({ name : this.props.onPress, seconds : 0, minutes : minutes + 1 })
            }, 10)
    }

    stop () {
        clearInterval(this.timer)
        this.timer = undefined;
    }

    restart () {
        this.setState({ name : '', miliseconds : 0, seconds : 0 , minutes : 0 })
        this.stop()
        window.location.reload()
    }



    zeroDisplay(value) {
        return value < 10 ? `0${value}` : value;
    }

    save () {
        const {
            minutes,
            seconds,
            miliseconds,
            name
        } = this.state

        this.props.onSave({
            minutes,
            seconds,
            miliseconds,
            name,
          })
    }


    render() {
        console.log(this.state.name)
        const {
            minutes,
            seconds,
            miliseconds
        } = this.state



        return (         
            <div className="App">
            <header className="App-header">
            
              <h1>TP : Chronomètre</h1>
      
              {/*<img src={chrono} alt="Logo" width={300} />*/}

              {this.zeroDisplay(minutes)}:{this.zeroDisplay(seconds)}:{this.zeroDisplay(miliseconds)}
            
            <span>
            <input 
                type='button'
                value='Start'
                onClick={() => this.start()}
              />
              {/* <button onClick={this.start.bind(this)}>Click me</button> */}
      
            <input 
                type='button'
                value='Stop'
                onClick={() => this.stop()}
              />
           
              <input 
                type='button'
                value='Reset'
                onClick={() => this.restart()}
              />
           

            <input 
                type='button'
                value='Save'
                onClick={() => this.save()}
              />
             </span>
             
            </header>
          </div>
        )
    }
}

// export function formatTime (time) {
//     return ('0' + time).slice(-2)
//   }