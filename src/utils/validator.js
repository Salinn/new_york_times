import * as patterns from './types/patternTypes';
import moment from 'moment';

const defaultReturn = { isError: false, errorMessage: '' };
let returnValue;

export const validator = ({ value, pattern }) => {
    //Resets field if no input in field
    if(value.length === 0) return { isError: null, errorMessage: '' };

    switch (pattern) {
        case patterns.DATE:
            return date({ value });
        default: {
            return defaultReturn;
        }
    }
};

// const isToLong = ({ value, max, fieldName }) => {
//     return (value.length > max) ?
//         { isError: true, errorMessage: `The ${fieldName} is too long.` } : defaultReturn;
// };
//
// const isToShort = ({ value, min, fieldName }) => {
//     return (value.length < min) ?
//         { isError: true, errorMessage: `The ${fieldName} is too short.` } : defaultReturn;
// };
//
// const isOnlyNumbers = ({ value }) => {
//     const numbersOnlyRegex = /^\d+$/;
//
//     return (!value.match(numbersOnlyRegex)) ?
//         { isError: true, errorMessage: 'Please use numbers only.' } : defaultReturn;
// };

const isFutureDate = ({ value }) => {
    const currentValue = moment(value);
    const future = moment().startOf('day').add(1,'d').format('YYYYMMDD');

    return (currentValue.isAfter(future)) ?
        { isError: true, errorMessage: 'Please choose a date not in the future.' } : defaultReturn
};

const isWithinAWeek = ({ value }) => {
    const currentValue = moment(value);
    const sevenDaysAgo = moment().subtract(7,'d').startOf('day').format('YYYYMMDD');

    return (currentValue.isBefore(sevenDaysAgo)) ?
        { isError: true, errorMessage: 'Please choose a date within the last week.' } : defaultReturn
};

const date = ({ value }) => {
    returnValue = isFutureDate({ value });
    if(returnValue.isError) return returnValue;

    return isWithinAWeek({ value })
};

export const validationColor = (isError) => {

    if (isError) {
        return 'danger';
    } else if (isError === false) {
        return 'success';
    } else {
        return null;
    }
};