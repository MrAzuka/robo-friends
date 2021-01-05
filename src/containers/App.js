import React, {Component} from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchbar: ''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {this.setState({robots : users})})
    }
    onSearchChange = (events) =>{
        this.setState({searchbar: events.target.value})
        
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchbar.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return (
                    <div className="loader">
                        <h1 className='load grow'>LOADING</h1>
   
                    </div>
               )
        }else
        {return (
            <div>
                <Header/>
                <SearchBox searchchange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={ filteredRobots }/>
                </Scroll>
            </div>
        )}
    }
} 


export default App;