import * as React from 'react';
import { Appbar } from 'react-native-paper';


const AppBar = (props: {content?: string | undefined, children?: React.ReactNode}) => {

  return (
    <Appbar.Header statusBarHeight={40} style={{backgroundColor: "#E2F6F1"}}>
      <Appbar.Content title={props.content} />
      {props.children}
    </Appbar.Header>
  );
};

export default AppBar;