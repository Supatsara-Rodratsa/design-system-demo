import { Component, Element, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { ColorPrimary, ColorSuccess, FontHeading1 } from '../../design-tokens/js/variables.js';
 
const ariaAttributes = [
  'aria-role'
];

@Component({
  tag: 'hs-header',
  styleUrl: 'hs-header.css',
  // shadow: true,
  scoped: true
})
export class HsHeader {

  @Element()
  hostElement: HTMLElement;

  @Prop({ reflect: true })
  level: 1 | 2 | 3 | 4 | 5 | 6;

  @Prop({ reflect: true, attribute: "textAlignment" })
  textAlignment: 'left' | 'right' | 'center' = null;

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
    const tagStyle = css `
      color: ${this.level === 1 ? ColorPrimary : ColorSuccess};
      font-size: ${this.level === 1 ? `${FontHeading1.fontSize}px` : undefined};
    `; 
    
    return (
      // Better to use this approach
      <Tag role="heading" className={tagStyle}>
        <slot></slot>
      </Tag>

      // <Tag {...this.headerAriaAttributes} className={this.textAlignment ? `align-${this.textAlignment}` : null}>
      // <slot></slot>
      // </Tag>
    );
  }
}
