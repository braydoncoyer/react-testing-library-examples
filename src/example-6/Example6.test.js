import React from 'react';
import {render, cleanup, fireEvent, waitForElement} from '@testing-library/react';
import ContactList from './Example6';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('should render no contacts when there are no contacts', () => {
    const {getByTestId} = render(<ContactList />);
    expect(getByTestId('no-contacts')).toHaveTextContent('No contacts');
});

it('should render contacts', () => {
    const fakeContacts = [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Braydon'}
    ];
    const { getAllByTestId } = render(<ContactList contacts={fakeContacts}/>);
    const contactNames = getAllByTestId('contact-name').map(li => li.textContent);

    const fakeContactNames = fakeContacts.map(contact => contact.name);
    expect(contactNames).toEqual(fakeContactNames);

});
