import * as React from 'react';
import { Appbar } from 'react-native-paper';


const AppBar = (props: {content?: string | undefined, children?: React.ReactNode}) => {

  return (
    <Appbar.Header>
      <Appbar.Content title={props.content} />
      {props.children}
    </Appbar.Header>
  );
};

export default AppBar;