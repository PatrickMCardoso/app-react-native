import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/iftm.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem Vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText type="subtitle">Eu sou o Patrick.</ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Etapa 1:</ThemedText>
        <ThemedText type="defaultSemiBold">
              Primeiro App concluído.
          </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">E agora?</ThemedText>
        <ThemedText>
          Vamos aprender um pouco sobre a estrutura de arquivos.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    top: 15,
  },
});
