import React from 'react';

import FAQPane from './FAQ';
import { Tab, Image } from 'semantic-ui-react';

const panes = [  
  {
    menuItem: { key: 'FAQ', icon: 'question circle', content: 'FAQ' },
    render: () => <FAQPane />,
  },
  {
    menuItem: { key: 'Contact', icon: 'talk', content: 'Contact us' },

    render: () =>
    <Tab.Pane>
      <Image src='/assets/images/HDCyberSmartLogo.png' size='medium' centered />

    </Tab.Pane>,
  },
]

const HelpTabs = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default HelpTabs
