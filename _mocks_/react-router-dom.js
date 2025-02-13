// __mocks__/react-router-dom.js
const reactRouterDom = jest.createMockFromModule('react-router-dom');

reactRouterDom.BrowserRouter = ({ children }) => <div>{children}</div>;
reactRouterDom.useNavigate = jest.fn();

module.exports = reactRouterDom;
