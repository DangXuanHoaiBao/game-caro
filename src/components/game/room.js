import React from 'react';
import {Table, Badge} from 'react-bootstrap';

const io = require('socket.io-client');

class Room extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            socket: null,
            playerList: []
        }
    }

    componentWillMount(){
        const socket = io('http://localhost:3001/');
        this.setState({ socket });
    }

    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('res'));
        const {socket} = this.state;
        socket.emit('add-player', user.username);
    }

    checkUserExist(user1, user2){
        if(user1 === user2){
            return true;
        }
        return false;
    }

    render(){
        
        const {socket} = this.state;
        let {playerList} = this.state;
        const yourSelf = JSON.parse(localStorage.getItem('res'));
        socket.on('list-player', data => {
            playerList = data;
            this.setState({playerList});
        });

        return(
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <h2>
                        <Badge variant="dark">Danh Sách Người Chơi</Badge>
                    </h2>
                </div>
                <div className="row justify-content-md-center mt-2">
                    <div className="col-md-9 ">
                        <Table striped bordered hover size="sm" variant="dark">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>User Name</th>
                                </tr>
                            </thead>
                            {playerList.map((item, i)=>{
                                return [
                                    <tbody key={i}>
                                        {!this.checkUserExist(item.username, yourSelf.username) &&
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{item.username}</td>
                                            </tr>
                                        }
                                    </tbody>
                                ]
                            })}
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Room;