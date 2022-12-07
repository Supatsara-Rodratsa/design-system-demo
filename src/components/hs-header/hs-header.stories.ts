/**
 * This is a Storybook component Section. Frist you will want to create 
 * the default sidebar faceted menu entry below.
 */
export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Header',
  argTypes: {
    text: {
      description: 'Transcluded text to be injected in the component slot',
      defaultValue: 'Submit',
    },
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
      description: 'The header level',
    },
    textAlignment: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
      description: 'Text alignment'
    },
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <hs-header level="${args.level}" textAlignment="${args.textAlignment}">
    ${args.text}
  </hs-header>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Header1 = Template.bind({});
Header1.args = {
  text: 'This is header 1',
  level: 1,
  textAlignment: 'left',
};

export const Header2 = Template.bind({});
Header2.args = {
  text: 'This is header 2',
  level: 2,
  textAlignment: 'left',
};

