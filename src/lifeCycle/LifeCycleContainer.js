import React from 'react'; 

class LifeCycleContainer extends React.Component{

    constructor(props){
        console.log('1. constructor()');
        super(props);
        this.state = {
            name: 'Julian',
        }
    }

    componentDidMount(){
        console.log('3. componentDidMount()');

        this.timeoutId = setTimeout(()=>{
            this.setState({
                name: 'Harry',
            })
        }, 3000)
        
    }

    componentDidUpdate(prevProps, prevState){

        console.log('5. componentDidUpdate()');

        console.log({
            prevProps: prevProps,
            prevState: prevState
        });
        

        console.log({
            props: this.props,
            state: this.state
        });
        
    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount');

        // Clean Process in Cache
        clearTimeout(this.timeoutId);
    }

    render(){

        console.log('2/4. render()');
        
        return(
        <h1>Hello {this.state.name}</h1>
        )
    }
}

export default LifeCycleContainer;