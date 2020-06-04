import React from 'react';
import {Router} from 'react-router-dom';
import {render, cleanup, fireEvent, waitForElement} from '@testing-library/react';
import TestRouter from './Example4';
import {createMemoryHistory} from 'history';
import "@testing-library/jest-dom/extend-expect";

const renderWithRouter = (component) => {
    const history = createMemoryHistory();
    return {
        ...render(
            <Router history={history}>
                {component}
            </Router>
        )
    }
};

it('should render the home page', () => {
    const { getByTestId, container } = renderWithRouter(<TestRouter/>);
    const navbar = getByTestId('navbar');
    const homeLink = getByTestId('home-link');

    expect(container.innerHTML).toMatch('Home page');
    expect(navbar).toContainElement(homeLink);
});

it('should navigate to the about page', () => {
    const { getByTestId, container } = renderWithRouter(<TestRouter/>);

    fireEvent.click(getByTestId('about-link'));

    expect(container.innerHTML).toMatch('About page');

});

it('should navigate to the contact page with the correct params', () => {
    const { getByTestId, container } = renderWithRouter(<TestRouter/>);

    fireEvent.click(getByTestId('contact-link'));

    expect(container.innerHTML).toMatch('John Doe');
});
