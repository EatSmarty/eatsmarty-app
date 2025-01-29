import * as React from 'react';
import { Appbar } from 'react-native-paper';


const AppBar = (props: {content?: string | undefined}) => {

  return (
    <Appbar.Header>
      <Appbar.Content title={props.content} />
    </Appbar.Header>
  );
};

export default AppBar;