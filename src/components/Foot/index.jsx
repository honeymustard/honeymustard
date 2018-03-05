import React from 'react';
import { Link } from 'react-router-dom';

import './foot.scss';

const Foot = (props) => (
  <footer className="foot">
    <div className="foot-row grid-row">
      <div className="foot-col">
        <section>
          <h3>Info</h3>
          <p>
            Copyright © 2018<br />
            <Link to="/">Honeymustard.org</Link>
          </p>
        </section>
      </div>

      <div className="foot-col">
        <section>
          <h3>Contact</h3>
          <p>
            Send me some post<br />
            <a href="mailto:post@honeymustard.org">post@honeymustard.org</a>
          </p>
        </section>
      </div>

      <div className="foot-col">
        <section>
          <h3>Sourcecode</h3>
          <p>You can find all of my public projects on <a href="https://github.com/honeymustard">github.com!</a>
          </p>
        </section>
      </div>
    </div>
  </footer>
);

export default Foot;
