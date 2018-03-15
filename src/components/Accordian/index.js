/* jshint esversion: 6 */
import React, { Component } from 'react';
import { APP_NAME } from '../../config';

import { Accordion, Icon, Segment } from 'semantic-ui-react';

export default class InfoAccordian extends Component {
  constructor() {
    super();
    this.state = { activeIndex: 0 };
  }

 handleClick(e, titleProps) {
   const { index } = titleProps;
   const { activeIndex } = this.state.activeIndex;
   const newIndex = activeIndex === index ? -1 : index;

   this.setState({ activeIndex: newIndex });
 }

render() {
    const { activeIndex } = this.state.activeIndex;
      return(
        <Segment inverted>
          <Accordion inverted>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What is {APP_NAME}?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium risus quis pulvinar tempor. Nulla quis dapibus eros. Cras id nisl aliquam, pulvinar sem sed, vulputate sapien. Quisque at metus ut augue interdum molestie. Sed mollis congue massa in varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Duis viverra eros nec quam pulvinar, scelerisque commodo orci feugiat. Phasellus ornare urna vel eleifend eleifend. Sed orci dolor, scelerisque eget augue ut, finibus ultricies nunc. {' '} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ultricies velit. Nullam venenatis efficitur auctor. Suspendisse pharetra libero vitae risus sagittis, in volutpat enim viverra.
            </p>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How do i start controlling my home?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium risus quis pulvinar tempor. Nulla quis dapibus eros. Cras id nisl aliquam, pulvinar sem sed, vulputate sapien. Quisque at metus ut augue interdum molestie. Sed mollis congue massa in varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Duis viverra eros nec quam pulvinar, scelerisque commodo orci feugiat. Phasellus ornare urna vel eleifend eleifend. Sed orci dolor, scelerisque eget augue ut, finibus ultricies nunc. {' '} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ultricies velit. Nullam venenatis efficitur auctor. Suspendisse pharetra libero vitae risus sagittis, in volutpat enim viverra.
          </p>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How do you acquire a dog?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium risus quis pulvinar tempor. Nulla quis dapibus eros. Cras id nisl aliquam, pulvinar sem sed, vulputate sapien. Quisque at metus ut augue interdum molestie. Sed mollis congue massa in varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Duis viverra eros nec quam pulvinar, scelerisque commodo orci feugiat. Phasellus ornare urna vel eleifend eleifend. Sed orci dolor, scelerisque eget augue ut, finibus ultricies nunc. {' '} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ultricies velit. Nullam venenatis efficitur auctor. Suspendisse pharetra libero vitae risus sagittis, in volutpat enim viverra.
          </p>
          </Accordion.Content>
        </Accordion>
        </Segment>
      );
  }
}
