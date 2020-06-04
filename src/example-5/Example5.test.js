import React from 'react';
import {Router} from 'react-router-dom';
import {render, cleanup, fireEvent, waitForElement} from '@testing-library/react';
import axiosMock from 'axios';
import TestAxios from './Example5';
import "@testing-library/jest-dom/extend-expect";

jest.mock('axios');

it('should display loading text', () => {
    const {getByTestId} = render(<TestAxios/>)
    expect(getByTestId('loading-text')).toHaveTextContent('Loading...');
});

it('should load and display the data', async () => {
    const url = '/greeting';
    const { getByTestId } = render(<TestAxios url={url} />);

    axiosMock.get.mockResolvedValueOnce({
        data: {
            greeting: 'Hello, World'
        }
    });

    fireEvent.click(getByTestId('button'));

    const greetingData = await waitForElement(() => getByTestId('data'));

    expect(greetingData).toHaveTextContent('Hello, World');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
});
