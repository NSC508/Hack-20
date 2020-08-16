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
    }

    addNewMessage = (event) => {
        this.setState((prevState) => {
            return { messages: [...prevState.messages, event.message] };
        });
    };

    render() {
        return (
            <div>
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
                <div class="panel panel-primary" id="result_panel">
                    <div class="panel-heading"><h3 class="panel-title">Individual Messages</h3>
                    </div>
                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item"><strong>James Brown</strong>
                            </li>
                            <li class="list-group-item"><strong>Tyler Jones</strong>
                            </li>
                            <li class="list-group-item"><strong>Kobe Bryant</strong>
                            </li>
                            <li class="list-group-item"><strong>Lebron James</strong>
                            </li>
                            <li class="list-group-item"><strong>Karman Singh</strong>
                            </li>
                            <li class="list-group-item"><strong>Grace Hopper</strong>
                            </li>
                            <li class="list-group-item"><strong>David Menenberg</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
                <div class="panel panel-primary" id="result_panel">
                    <div class="panel-heading"><h3 class="panel-title">Group Messages</h3>
                    </div>
                    <div class="panel-body">
                        <ul class="list-group">
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