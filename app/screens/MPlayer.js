import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SoundPlayer from 'react-native-sound-player';

const MPlayer = () => {
  const [isPlaying, setPlaying] = useState(false);
  const player = SoundPlayer;

  useEffect(() => {
    player.loadUrl(
      'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3'
    );
  }, [player]);

  return (
    <View style={styles.container}>
      <Text>Working</Text>

      <View style={styles.playerContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
            setPlaying(!isPlaying);
          }}
        >
          <Text>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  playerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default MPlayer;
