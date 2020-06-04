import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import TestEvents from './Example2';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);


it('should increment counter', () => {
   const { getByTestId } = render(<TestEvents/>);
   fireEvent.click(getByTestId('button-up'));
   expect(getByTestId('counter')).toHaveTextContent("1");
});

it('should decrement counter', () => {
    const { getByTestId } = render(<TestEvents/>);
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent("-1");
});
