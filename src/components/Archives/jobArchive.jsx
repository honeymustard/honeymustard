import React from 'react';
import { Layout } from 'components/Layouts';

/**
 * Jobs listing page.
 */
class JobArchive extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch('/api/jobs', {
            Accept: 'application/json',
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({items: data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        let items = this.state.items;
        return (
            <Layout>
                {items ? (
                    <ul className="list">
                        {items.map(item => {
                            return (
                                <li key={item._id}>
                                    <h3>{item.company}</h3>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p>No jobs at this time</p>
                )}
            </Layout>
        );
    }
}

export default JobArchive;
