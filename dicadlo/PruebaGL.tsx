import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { GLView } from 'expo-gl';

export default function PruebaGL() {
  const [estado, setEstado] = useState('DiCADlo - Prueba nueva');
  return (
    <View style={{ flex: 1 }}>
      <Text style={{color: 'white'}}>{estado}</Text>
      <GLView
        style={{ flex: 1 }}
        onContextCreate={(gl) => {
          setEstado('OpenGL OK: ' + gl.drawingBufferWidth + ' x ' + gl.drawingBufferHeight);
        }}
      />
    </View>
  );
}
