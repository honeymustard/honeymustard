import React from 'react';
import API from 'api';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import EducationItem from 'components/Items/EducationItem';

import 'components/App/lists.scss';

class EducationPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    new API().get('education')
      .then(data => this.setState({items: data}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Layout>
        <section className="column-1">
          <Archive items={this.state.items} component={EducationItem} />
        </section>

        <section className="column-2">
          <h2>Education</h2>

          <p>A list of topics that were covered during my time at University
          where I studied Computer Science.
          </p>

          <ul className="list-regular">
            <li className="list-item">
              <h4 className="list-title">Computer organization</h4>
              <p>Operating systems, Memory, I/O, Multitasking, History.</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Computer architecture</h4>
              <p>Binary, Machine code, Assembly, Linking, Compilation.</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Computer algorithms</h4>
              <p>Sorting, Traversal, Complexity (Big-O notation), Graph theory.</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Computer logic</h4>
              <p>Gates, Clocks, Adders, Flip-flops, K-maps.</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Computer programming.</h4>
              <p>Java, C, ASM, Standard ML, Prolog, Scheme, Python, Shell</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Computer networks</h4>
              <p>TCP/IP, Socket programming, Routing, OSI-model, Flow control.</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Computer linguistics</h4>
              <p>Context-free grammars, Regular expressions.</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Discrete mathematics</h4>
              <p>Set theory, Function theory, First-order logic, Combinatorics.</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Abstract data types</h4>
              <p>Stacks, Queues, Sets, Lists, Trees, Heaps, Hash maps, Hash tables.</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Automata theory</h4>
              <p>Finite state machines, Turing machines, Push-down automata.</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Logic</h4>
              <p>Boolean algebra, Complexity theory (NP), Lambda calculus.</p>
            </li>
            <li className="list-item">
              <h4 className="list-title">Russian</h4>
              <p>Grammar, Language usage.</p>
            </li>
          </ul>
        </section>
      </Layout>
    );
  }
}

export default EducationPage;
