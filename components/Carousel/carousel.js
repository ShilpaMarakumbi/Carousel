import React from 'react'
import { View, ScrollView, Image, Text } from 'react-native'
import { styles } from './styles'

export const Carousel = (props: any) => {

  const { items, style } = props;
  const itemsPerInterval = props.itemsPerInterval === undefined
    ? 1
    : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const getInterval = (offset: any) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  }
  const getwidth = () => {
     return itemsPerInterval * 104;
    }

  const renderImages = () => {
    return items.map((item) => {
        return (
            <Image
                 style={styles.image}
                 source={{uri: item}}
                 key = {item}
                 resizeMode={'cover'} // cover or contain its upto you view look
            />
    );
 });
  }

  return (
<View style={{ ...styles.container, width:getwidth()  }}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView }}
        showsHorizontalScrollIndicator={false}
        onScroll={data => {
            setWidth(data.nativeEvent.contentSize.width);
            setInterval(getInterval(data.nativeEvent.contentOffset.x));
         }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
      {renderImages()}
      </ScrollView>
    </View>
  )
}

export default Carousel;