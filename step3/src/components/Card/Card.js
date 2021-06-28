import React from 'react';
import PropTypes from 'prop-types';
import { MdPerson as PersonIcon, MdInfoOutline as InfoIcon } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Card(props) {
    const { avatarUrl, firstName, lastName, id } = props;
    return (
        <article className="card">
            <header className="heading">
                <img src={avatarUrl} alt="avatar" className="avatar" />
                    <nav>
                        <Link to={`/detail/${id}`} className="row link">
                            <InfoIcon />
                            See details
                        </Link>
                    </nav>
            </header>
            <h2>{`${firstName} ${lastName}`}</h2>
            <div className="row oval">
                <PersonIcon />
                <div className="identification">{`ID: ${id}`}</div>
            </div>
        </article>
    );
}

Card.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Card;