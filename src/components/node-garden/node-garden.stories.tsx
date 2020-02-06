import React from 'react';
import { storiesOf } from '@storybook/react';
import { NodeGarden } from './node-garden';
import '../../pages/index.scss';

storiesOf('NodeGarden', module).add('default', () => <NodeGarden />);
