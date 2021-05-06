import React from 'react';
import uniqueId from 'lodash.uniqueid'
import { instructionsList } from '../constants';

const Instructions = ({ list = instructionsList }) =>
    list && list.map((l) => (
        <p key={uniqueId('instruction_')}>{l}</p>
    ));

export default Instructions;
