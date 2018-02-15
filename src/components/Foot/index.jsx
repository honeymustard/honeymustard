import React from 'react';
import { Link } from 'react-router-dom';

import './foot.scss';

const Foot = (props) => (
  <footer className="foot grid-row">
    <div className="col">
      <section>
        <h3>INFO</h3>
        <p>
          Copyright © 2018<br />
          <Link to="/">Honeymustard.org</Link>
        </p>
      </section>
    </div>

    <div className="col">
      <section>
        <h3>CONTACT ME</h3>
        <p>
          Send me some post<br />
          <a href="mailto:post@honeymustard.org">post@honeymustard.org</a>
        </p>
      </section>
    </div>

    <div className="col">
      <section>
        <h3>LINKS</h3>
        <p>Visit me elsewhere</p>
      </section>
    </div>
  </footer>
);

export default Foot;
