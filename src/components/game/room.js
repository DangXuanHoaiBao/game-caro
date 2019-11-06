import React from 'react';
import {Table, Badge} from 'react-bootstrap';
import history from '../../helpers/history';

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
        const user = JSON.parse(localStorage.getItem('res'));
        const socket = io('https://api-passport-jwt.herokuapp.com/');
        this.setState({ socket });
        socket.emit('client-register-player', user.username);
    }

    componentDidMount(){
        const {socket} = this.state;
        let {playerList} = this.state;

        socket.on('server-send-list-player', data => {
            playerList = data;
            console.log(playerList);
            this.setState({playerList});
        });

        socket.on('server-send-request', data=>{
            alert(data + " mời bạn cùng chơi!")
        });
    }

    // eslint-disable-next-line class-methods-use-this
    onSelectedRow(item){
        const {socket} = this.state;
        socket.emit('client-choose-player', item);
        history.push('/online-game');
    }

    // eslint-disable-next-line class-methods-use-this
    checkUserExist(user1, user2){
        if(user1 === user2){
            return true;
        }
        return false;
    }

    render(){
        const yourSelf = JSON.parse(localStorage.getItem('res'));
        const {playerList} = this.state;

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
                                    <tbody key={item.id}>
                                        {!this.checkUserExist(item.username, yourSelf.username) &&
                                            <tr onClick={this.onSelectedRow.bind(this, item)}>
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