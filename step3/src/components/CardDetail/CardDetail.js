import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

class CardDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }

    componentDidMount() {
        this.getCardDetail();
    }

    async getCardDetail() {
        const { match } = this.props;
        const response = await axios.get(`https://reqres.in/api/users/${match.params.id}`);
        this.setState({
            detail: response.data.data
        });
    }

    render() {
        const { detail } = this.state;
        return (
            <article className="wrapper">
                <h1>{`Details for ${detail.first_name}`}</h1>
                <div className="detail">
                    <img src={detail.avatar} alt="avatar" className="image" />
                    <section className="emailPart">
                        <h2 className="overflow">{`${detail.first_name} ${detail.last_name}`}</h2>
                        <p className="overflow">{detail.email}</p>
                    </section>
                </div>
            </article>
        );
    }
}

CardDetail.propTypes = {
    match: PropTypes.object.isRequired
}

export default CardDetail;