import React from 'react';
import {DataEntryForm} from './DataEntryForm'
export const MainPage=(props) =>{
    return (
      <div>
        <h1>Welcome, {props.username}!</h1>
        <DataEntryForm onDataEntry={props.onDataEntry} />
      </div>
    );
  }