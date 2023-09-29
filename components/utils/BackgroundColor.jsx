import React, {useState, useEffect} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';

const BackgroundColor = ({children}) => {
  const [orientation, setOrientation] = useState('portrait');
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    setOrientation(width < height ? 'portrait' : 'landscape');
  }, [width, height]);

  const backgroundColor = orientation === 'portrait' ? 'green' : 'blue';

  return <View style={{...styles.container, backgroundColor}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BackgroundColor;
