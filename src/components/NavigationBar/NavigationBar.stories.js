import React from 'react';
import { storiesOf } from '@storybook/react';

import NavigationBar from './index';

const stories = storiesOf('Navigation Bar', module);

stories.add('Navigation', () => <NavigationBar />)