import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  decreaseCounter,
  increaseCounter,
  increaseValue,
  incrementAsync,
} from '../../redux/actions/counterActions';

const Counter = ({ dispatch, counter }) => {
  const [inputValue, setInputValue] = useState(0);

  const onIncrease = () => {
    dispatch(increaseCounter());
  };

  const onDecrease = () => {
    dispatch(decreaseCounter());
  };

  const onIncreaseValue = () => {
    dispatch(increaseValue(parseInt(inputValue)));
  };

  const onIncreaseValueAsync = () => {
    dispatch(incrementAsync(parseInt(inputValue)));
  };

  const onValueChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div>redux aware component</div>
      <div>
        <input onChange={onValueChange} value={inputValue} />
      </div>
      {counter}
      <button type='button' onClick={onIncrease}>
        +
      </button>
      <button type='button' onClick={onDecrease}>
        -
      </button>
      <button type='button' onClick={onIncreaseValue}>
        increase
      </button>
      <button type='button' onClick={onIncreaseValueAsync}>
        increase async
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = state => ({
  counter: state.counter.counter,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Counter);
