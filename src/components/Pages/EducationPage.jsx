import React from 'react';
import API from 'api';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import EducationItem from 'components/Items/EducationItem';
import Post from 'components/Post';
import List from 'components/Lists/List';
import * as APIService from 'services/APIService';

class EducationPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: []};

    this.items = [
      {
        title: "Computer organization",
        text: "Operating systems, Memory, I/O, Multitasking, History.",
      },
      {
        title: "Computer architecture",
        text: "Binary, Machine code, Assembly, Linking, Compilation.",
      },
      {
        title: "Computer algorithms",
        text: "Sorting, Traversal, Complexity (Big-O notation), Graph theory.",
      },
      {
        title: "Computer logic",
        text: "Gates, Clocks, Adders, Flip-flops, K-maps.",
      },
      {
        title: "Computer programming",
        text: "Java, C, ASM, Standard ML, Prolog, Scheme, Python, Shell",
      },
      {
        title: "Computer networks",
        text: "TCP/IP, Socket programming, Routing, OSI-model, Flow control.",
      },
      {
        title: "Computer linguistics",
        text: "Context-free grammars, Regular expressions.",
      },
      {
        title: "Discrete mathematics",
        text: "Set theory, Function theory, First-order logic, Combinatorics.",
      },
      {
        title: "Abstract data types",
        text: "Stacks, Queues, Sets, Lists, Trees, Heaps, Hash maps, Hash tables.",
      },
      {
        title: "Automata theory",
        text: "Finite state machines, Turing machines, Push-down automata.",
      },
      {
        title: "Logic",
        text: "Boolean algebra, Complexity theory (NP), Lambda calculus.",
      },
      {
        title: "Russian",
        text: "Grammar, Language usage.",
      },
    ];
  }

  render() {
    return (
      <APIService.Consumer>
        {api => (
          <Layout>
            <section className="column-1">
              <Archive api={api} postType="education" component={EducationItem} />
            </section>

            <section className="column-2">
              <Post id="5ab759bbd1c89310cb19c3f7" api={api} />
              <List items={this.items} />
            </section>
          </Layout>
        )}
      </APIService.Consumer>
    );
  }
}

export default EducationPage;
