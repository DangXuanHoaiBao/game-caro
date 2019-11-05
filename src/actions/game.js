const handleClick = i => ({
   type: 'HANDLE_CLICK',
   i
});

const randomClick = () => ({
   type: 'RANDOM_CLICK'
});

function clickAction(i){
   return dispatch => {
      dispatch(handleClick(i));
      dispatch(randomClick());
   }
}

const jumpTo = step => ({
   type: 'JUMPTO',
   step
});

const previousClick = () => ({
   type: 'PREVIOUS_CLICK'
});

const nextClick = () => ({
   type: 'NEXT_CLICK'
});

const gameActions = {
   clickAction,
   jumpTo,
   previousClick,
   nextClick

}

export default gameActions;
