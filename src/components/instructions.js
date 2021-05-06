import React from 'react';
import uniqueId from 'lodash.uniqueid'
import { instructionsList, logo } from '../constants';

const InstructionsList = ({ list = [''] }) =>
    list && list.map((line) => (
        <p key={uniqueId('instruction_')}>
            {line}
        </p>
    ));

const Instructions = () => (
    <div className="instruction">
        <img src={logo} alt="42-marvin" className="logo" />
        <InstructionsList list={instructionsList} />
    </div>
);

export default Instructions;
