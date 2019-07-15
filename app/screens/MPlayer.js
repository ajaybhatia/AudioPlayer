import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SoundPlayer from 'react-native-sound-player';

const MPlayer = () => {
  const [isPlaying, setPlaying] = useState(false);
  let player = SoundPlayer;

  useEffect(() => {
    player.loadUrl(
      'http://www.panacherock.com/downloads/mp3/01_Afterlife.mp3'
    );

    () => {
      player = null;
    }
  }, [player]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music Player</Text>

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
          <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32
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
