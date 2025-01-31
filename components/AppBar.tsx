import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AppBar = (props: {content?: string | undefined, children?: React.ReactNode}) => {

  return (
    <Appbar.Header statusBarHeight={40} style={styles.appbar}>
      <Appbar.Content 
        title={props.content || "Default Title"} 
        titleStyle={{color: '#333333'}}/>
      {props.children}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#E2F6F1',
  },
});

export default AppBar;