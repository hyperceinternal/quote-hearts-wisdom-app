
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.27a37fa73bb2466d88cc621ab72e4612',
  appName: 'quote-hearts-wisdom-app',
  webDir: 'dist',
  server: {
    url: 'https://27a37fa7-3bb2-466d-88cc-621ab72e4612.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    // AdMob configuration with test ad IDs
    // Replace these with your real ad IDs before publishing to production
    AdMob: {
      appIdAndroid: 'ca-app-pub-3940256099942544~3347511713', // Test app ID
      appIdIOS: 'ca-app-pub-3940256099942544~1458002511', // Test app ID
      bannerAdIdAndroid: 'ca-app-pub-3940256099942544/6300978111', // Test banner ID
      bannerAdIdIOS: 'ca-app-pub-3940256099942544/2934735716', // Test banner ID
      interstitialAdIdAndroid: 'ca-app-pub-3940256099942544/1033173712', // Test interstitial ID
      interstitialAdIdIOS: 'ca-app-pub-3940256099942544/4411468910', // Test interstitial ID
      nativeAdIdAndroid: 'ca-app-pub-3940256099942544/2247696110', // Test native ID
      nativeAdIdIOS: 'ca-app-pub-3940256099942544/3986624511' // Test native ID
    }
  }
};

export default config;
