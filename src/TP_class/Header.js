export default class Header{
    constructor(props){
        this.props=props
      
    }
    render(){
        <ul>
            <li>abdelghafour ikbaiss</li>
            <li>hamza {this.props.name}</li>
        </ul>
    }
}
