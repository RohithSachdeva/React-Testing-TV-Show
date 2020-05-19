import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import * as rtl from '@testing-library/react';

test('Renders without error', ()=>{
    render(<App/>)
})

describe('App', () => {
    let wrapper;

    afterEach(rtl.cleanup);
    beforeEach(() => {
        wrapper = rtl.render(<App />);
    });
    it('will display name from API data', async () => {
        const testText = await wrapper.findByText('Select a season');
        expect(testText).toBeInTheDocument();
        expect(testText).toBeVisible();
    });
});




//https://testing-library.com/docs/react-testing-library/setup

//https://react-testing-examples.com/

//A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.

// Select a season