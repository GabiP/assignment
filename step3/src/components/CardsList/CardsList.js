import React, { Component } from 'react';
import Card from "../Card/Card";
import axios from 'axios';

class CardsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        this.getCards();
    }

    async getCards() {
        const response = await axios.get("https://reqres.in/api/users");
        this.setState({
            cards: response.data.data
        });
    }

    render() {
        const { cards } = this.state;
        return (
            <div className="wrapper">
                <h1 className="mainHeading">Users</h1>
                <div className="cards">
                    {cards.length ? cards.map(card => (
                        <Card
                            key={card.id}
                            avatarUrl={card.avatar}
                            firstName={card.first_name}
                            lastName={card.last_name}
                            id={card.id}
                        />
                    )) : 'Waiting'}
                </div>
            </div>
        );
    }
}

export default CardsList;