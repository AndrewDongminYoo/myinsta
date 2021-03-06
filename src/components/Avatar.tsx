import React from 'react';
import type { FC } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Colors } from 'react-native-paper';
import type { StyleProp, ImageStyle } from 'react-native';
import TouchableView from './TouchableView';
import type { TouchableViewProps} from './TouchableView'

export type AvatarProps = TouchableViewProps & {
  uri: string
  size: number
  imageStyle: StyleProp<ImageStyle>
}

const Avatar: FC<AvatarProps> = (props)=>{

  const {uri, size, imageStyle, ...touchableViewProps} = props;

  return (
    <TouchableView {...touchableViewProps}>
      <Image source={{uri}}
        style={[imageStyle, {
          width: size,
          height: size,
          borderRadius: size / 2
        }]}/>
    </TouchableView>
  )
}

export default Avatar;