import React from 'react';
import uniqueId from 'lodash.uniqueid'
import { instructionsList } from '../constants';

const InstructionsList = ({ list = [''] }) =>
    list && list.map((line) => (
        <p key={uniqueId('instruction_')}>
            {line}
        </p>
    ));

const Instructions = () => (
    <div className="instruction">
        <InstructionsList list={instructionsList} />
    </div>
);

export default Instructions;
