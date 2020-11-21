import { shallow } from 'enzyme';
import IndexPage from '../pages/index';
describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = shallow(<IndexPage />);
      expect(wrap.find('h1').text()).toBe('Hola mundo');
    });
  });
});
