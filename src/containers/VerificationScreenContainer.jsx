import { connect } from 'react-redux';
import { goToNextStage } from '../store/actions';
import VerificationScreen from '../components/VerificationScreen';

export default connect(state => ({
}), {
    reset: goToNextStage,
})(VerificationScreen);