/**
 * Created by ntimobedyeboah on 4/16/17.
 */
import React, { Component } from 'react';

class UserProfile extends Component {
    render() {
        const image96x96 = 'http://placehold.it/96x96';
        const time = '1 Jan 2016';

        return (
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img alt="" src={image96x96} />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="subtitle is-6">John Smith <br />
                        <small>{time}</small>
                    </p>

                </div>
            </div>
        );
    }
}

export default UserProfile;