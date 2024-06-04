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
          source={require('@/assets/images/spfc.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">SPFC</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText type="subtitle">São Paulo Futebol Clube</ThemedText>      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Mundial de Clubes</ThemedText>
        <ThemedText type="defaultSemiBold">
                3 títulos – 1992, 1993 e 2005
          </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Libertadores da América</ThemedText>
        <ThemedText>
                3 títulos – 1992, 1993 e 2005
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Copa Sul-Americana</ThemedText>
        <ThemedText>
                1 título – 2012
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Recopa Sul-Americana</ThemedText>
        <ThemedText>
                2 títulos – 1993 e 1994
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Copa Conmebol</ThemedText>
        <ThemedText>
                1 título – 1994
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Campeonato Brasileiro</ThemedText>
        <ThemedText>
                6 títulos – 1977, 1986, 1991, 2006, 2007 e 2008
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Copa do Brasil</ThemedText>
        <ThemedText>
                1 título: 2023
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Supercopa do Brasil</ThemedText>
        <ThemedText>
                1 título: 2024
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Torneio Rio-São Paulo</ThemedText>
        <ThemedText>
                1 título: 2001
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Campeonato Paulista</ThemedText>
        <ThemedText>
            22 títulos – 1931, 1943, 1945, 1946, 1948, 1949, 1953, 1957, 1970, 1971, 1975, 1980, 1981, 1985, 1987, 1989, 1991, 1992, 1998, 2000, 2005 e 2021
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
