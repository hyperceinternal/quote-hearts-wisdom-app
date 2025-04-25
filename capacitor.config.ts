
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
    // Configuration for AdMob will go here when the plugin is working
    // For example:
    /*
    "AdMob": {
      "appIdAndroid": "ca-app-pub-3940256099942544~3347511713",
      "appIdIOS": "ca-app-pub-3940256099942544~1458002511"
    }
    */
  }
};

export default config;
