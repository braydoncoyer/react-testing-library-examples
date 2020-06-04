import React from 'react';
import {render, cleanup} from '@testing-library/react';
import TestElements from './Example1';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe('Example 1 Tests for basic testing examples', () => {

    it('counter should equal 0', () => {
       const { getByTestId } = render(<TestElements/>);
       expect(getByTestId('counter')).toHaveTextContent(0);
    });

    it('Up button should be enabled', () => {
        const { getByTestId } = render(<TestElements/>);
        expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
    });

    it('Down button should be disabled', () => {
        const { getByTestId } = render(<TestElements/>);
        expect(getByTestId('button-down')).toBeDisabled();
    });


});
