import React from 'react';


const ContactList = ({contacts}) => {
    if(!contacts || !contacts.length) {
        return <div data-testid="no-contacts">No contacts</div>
    }

    return (
        <ul>
            {
                contacts.map(({name, id}) => (
                <li key={id} data-testid="contact-name">
                    {name}
                </li>
                ))
            }
        </ul>
    )
};

export default ContactList;
