import { connect } from 'react-redux';
import App from '../components/App';

export default connect(state => ({
  stage: state.stage,
}))(App);
