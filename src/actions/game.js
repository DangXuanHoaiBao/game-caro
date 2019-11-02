

export const handleClick = i => ({
    type: 'HANDLE_CLICK',
    i
});

export const jumpTo = step => ({
   type: 'JUMPTO',
   step
});

export const previousClick = () => ({
   type: 'PREVIOUS_CLICK'
});

export const nextClick = () => ({
   type: 'NEXT_CLICK'
});

