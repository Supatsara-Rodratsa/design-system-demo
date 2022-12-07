import { Component, Element, h, Prop } from '@stencil/core';

const ariaAttributes = [
  'aria-role'
];

@Component({
  tag: 'hs-header',
  styleUrl: 'hs-header.css',
  shadow: true,
})
export class HsHeader {

  @Element()
  hostElement: HTMLElement;

  @Prop({ reflect: true })
  level: 1 | 2 | 3 | 4 | 5 | 6 = 1;

  @Prop({ reflect: true, attribute: "textAlignment" })
  textAlignment: 'left' | 'right' | 'center' = 'left';

  headerAriaAttributes = {};

  componentWillLoad() {
    if (this.level < 1 || this.level > 6) {
      throw new Error('HsHeader: the level property must between 1 and 6');
    }

    for (let index = 0; index < ariaAttributes.length; index++) {
      const attributeName = ariaAttributes[index];
      const attributeValue = this.hostElement.getAttribute(attributeName) || null;

      if (attributeValue) {
        this.headerAriaAttributes[attributeName] = attributeValue;
        this.hostElement.removeAttribute(attributeName);
      }
    }
  }

  render() {
    const Tag = `h${this.level}`;
    
    return (
      // Better to use this approach
      <Tag role="heading" className={this.textAlignment ? `align-${this.textAlignment}` : null}>
        <slot></slot>
      </Tag>

      // <Tag {...this.headerAriaAttributes} className={this.textAlignment ? `align-${this.textAlignment}` : null}>
      // <slot></slot>
      // </Tag>
    );
  }
}
