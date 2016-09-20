import <%= name %> from './';

describe('Component', () => {
  describe('<%= name %> component', () => {

    it('Should exist', () => {

      const component = mount(<<%= name %>  name="<%= name %>"/>);
      expect(component.props().name).to.equal("<%= name %>");

    });
    
  });
});
