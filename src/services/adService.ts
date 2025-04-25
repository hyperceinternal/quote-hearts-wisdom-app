
/**
 * AdMob Service for managing ads in the application
 */

// Test Ad IDs - Replace with your actual ad unit IDs in production
const BANNER_AD_ID = {
  android: 'ca-app-pub-3940256099942544/6300978111', // Android test banner ID
  ios: 'ca-app-pub-3940256099942544/2934735716', // iOS test banner ID
};

const INTERSTITIAL_AD_ID = {
  android: 'ca-app-pub-3940256099942544/1033173712', // Android test interstitial ID
  ios: 'ca-app-pub-3940256099942544/4411468910', // iOS test interstitial ID
};

const NATIVE_AD_ID = {
  android: 'ca-app-pub-3940256099942544/2247696110', // Android test native advanced ID
  ios: 'ca-app-pub-3940256099942544/3986624511', // iOS test native advanced ID
};

// Track if interstitial ad is ready to show
let interstitialLoaded = false;

// When using Capacitor plugins, we'll need to check if running in a mobile environment
const isMobileDevice = () => {
  return (
    typeof window !== 'undefined' &&
    window.navigator &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    )
  );
};

/**
 * Initialize AdMob
 */
export const initializeAdMob = async () => {
  if (!isMobileDevice()) {
    console.log('Not a mobile device, skipping AdMob initialization');
    return;
  }
  
  try {
    // Here we would normally use the AdMob plugin
    console.log('AdMob initialized');
    
    // For development purposes, we'll just log actions
    // When the actual plugin is working, this would be replaced with the actual implementation
  } catch (error) {
    console.error('Error initializing AdMob:', error);
  }
};

/**
 * Show a banner ad
 */
export const showBannerAd = async () => {
  if (!isMobileDevice()) {
    console.log('Not showing banner ad on non-mobile device');
    return;
  }
  
  try {
    // Here we would use the AdMob plugin to show a banner
    console.log('Banner ad shown');
  } catch (error) {
    console.error('Error showing banner ad:', error);
  }
};

/**
 * Hide the banner ad
 */
export const hideBannerAd = async () => {
  if (!isMobileDevice()) return;
  
  try {
    // Here we would use the AdMob plugin to hide the banner
    console.log('Banner ad hidden');
  } catch (error) {
    console.error('Error hiding banner ad:', error);
  }
};

/**
 * Prepare an interstitial ad
 */
export const prepareInterstitialAd = async () => {
  if (!isMobileDevice()) return;
  
  try {
    // Here we would use the AdMob plugin to prepare an interstitial
    console.log('Interstitial ad prepared');
    interstitialLoaded = true;
  } catch (error) {
    console.error('Error preparing interstitial ad:', error);
    interstitialLoaded = false;
  }
};

/**
 * Show an interstitial ad
 */
export const showInterstitialAd = async () => {
  if (!isMobileDevice()) {
    console.log('Not showing interstitial ad on non-mobile device');
    return;
  }
  
  if (!interstitialLoaded) {
    await prepareInterstitialAd();
  }
  
  try {
    // Here we would use the AdMob plugin to show the interstitial
    console.log('Interstitial ad shown');
    interstitialLoaded = false;
    // Prepare the next interstitial
    prepareInterstitialAd();
  } catch (error) {
    console.error('Error showing interstitial ad:', error);
  }
};

/**
 * Show a native advanced ad
 */
export const showNativeAd = async () => {
  if (!isMobileDevice()) {
    console.log('Not showing native ad on non-mobile device');
    return;
  }
  
  try {
    // Here we would use the AdMob plugin to show a native ad
    console.log('Native ad shown');
  } catch (error) {
    console.error('Error showing native ad:', error);
  }
};

// Get the correct ad ID based on platform
export const getAdId = (type: 'banner' | 'interstitial' | 'native') => {
  const platform = getPlatform();
  
  switch (type) {
    case 'banner':
      return BANNER_AD_ID[platform];
    case 'interstitial':
      return INTERSTITIAL_AD_ID[platform];
    case 'native':
      return NATIVE_AD_ID[platform];
    default:
      return '';
  }
};

// Helper to determine platform
const getPlatform = (): 'android' | 'ios' => {
  if (typeof window !== 'undefined' && window.navigator) {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/android/i.test(userAgent)) {
      return 'android';
    }
    if (/iphone|ipad|ipod/i.test(userAgent)) {
      return 'ios';
    }
  }
  // Default to Android if we can't determine
  return 'android';
};
