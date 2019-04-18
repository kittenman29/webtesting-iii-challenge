import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
    it('matches snapshot', () => {
        const domTree = renderer.create(<Dashboard />).toJSON();

        expect(domTree).toMatchSnapshot();
    })
})