import React, {memo, useState} from 'react';

const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const onChangeHandler = (e) => {
      setValue(e.target.value);
    };

    const onPressEnterHandler = (e) => {
        if(e.code === 'Enter'  && value.trim() !== '') {
            onSubmit(value)
            setValue('');
        }
    }

    return (
        <input type="text" 
        value={value} 
        onChange={onChangeHandler}
        onKeyUpCapture={onPressEnterHandler}
        />
    );
};

export default memo(Form);