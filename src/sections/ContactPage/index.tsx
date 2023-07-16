/*
 * Owner: Rishabh Anand
 * Desc: Sections - Contact Page
 */

import { memo } from "react";

/* Components */
import Heading from "components/Heading";

function ContactPage() {
  return (
    <section id="contact_me">
      <Heading heading="Contact Me" />
    </section>
  );
}

export default memo(ContactPage);
