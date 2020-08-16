import React from 'react';
import ReactDOM from 'react-dom';
import { Chat } from '@progress/kendo-react-conversational-ui';
import * as marked from 'marked';
import "./ChatBox.css";

function MessageTemplate(props) {
    let message = props.item;
    let parser = marked.setOptions({});
    let parsedMessage = parser.parse(message.text);
    let htmlToinsert = { __html: parsedMessage };
    return (
        <div className="k-bubble">
            <div dangerouslySetInnerHTML={htmlToinsert} />
        </div>
    );
}

export class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.user = {
            id: 1
        };
        this.bot = {
            id: 0
        };
        this.state = {
            messages: [{
                author: this.bot,
                text: '**Messages**'
            }]
        };

        //this.handleClick = this.handleClick.bind(this);
        //this.addMessages = this.addMessages.bind(this);
    }

    addNewMessage = (event) => {
        this.setState((prevState) => {
            return { messages: [...prevState.messages, event.message] };
        });
    };

    handleClick = (prevState) => {
        console.log('this is:', this);
        this.setState({
            messages: prevState.messages
        })
    };

    addMessage(messages) {
        let title = this.state.messages + 'James Brown';
        this.setState({title});
    }

    render() {
        return (
            <div>
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
                <div class="panel panel-primary" id="result_panel">
                    <div class="panel-heading"><h3 class="panel-title">Individual Messages</h3>
                    </div>
                    <div class="panel-body">
                    
                        <ul class="list-group">
                            <button onClick={() => this.handleClick()}>
                                James Brown
                            </button>
                            
                            <button onClick={() => this.handleClick()}>
                                Tyler Jones
                            </button>

                            <button onClick={() => this.handleClick()}>
                                Kobe Bryant
                            </button>

                            <button onClick={() => this.handleClick()}>
                                Lebron James
                            </button>
                            <button onClick={() => this.handleClick()}>
                                Karman Singh
                            </button>
                            <button onClick={() => this.handleClick()}>
                                Grace Hopper
                            </button>
                            <button onClick={() => this.handleClick()}>
                                David Menenberg
                            </button>
    
                        </ul>
                    </div>
                </div>
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
                <div class="panel panel-primary" id="result_panel">
                    <div class="panel-heading"><h3 class="panel-title">Group Messages</h3>
                    </div>
                    <div class="panel-body">
                        <ul class="list-group">
                        <button onClick={() => this.handleClick()}>
                            CSE 332: Data Structures
                            </button>
                            <button onClick={() => this.handleClick()}>
                                Hack 20 Team
                            </button>
                            <button onClick={() => this.handleClick()}>
                                Research Group
                            </button>
                            <button onClick={() => this.handleClick()}>
                                CSE 446: Machine Learning
                            </button>
                            <button onClick={() => this.handleClick()}>
                                Dorm Study Buddies
                            </button>
                            <button onClick={() => this.handleClick()}>
                                Ardi Fan Girls
                            </button>
                            

                            <li class="list-group-item"><strong>CSE 332: Data Structures</strong>
                            </li>
                            <li class="list-group-item"><strong>Hack 20 Team</strong>
                            </li>
                            <li class="list-group-item"><strong>Research Group</strong>
                            </li>
                            <li class="list-group-item"><strong>CSE 446: Machine Learning</strong>
                            </li>
                            <li class="list-group-item"><strong>Dorm Study Buddies</strong>
                            </li>
                            <li class="list-group-item"><strong>Ardi Fan Girls</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="center">
                    <Chat user={this.user}
                        messages={this.state.messages}
                        onMessageSend={this.addNewMessage}
                        width={400}
                        messageTemplate={MessageTemplate}>
                    </Chat>
                </div>
            </div>
        );
    }
}