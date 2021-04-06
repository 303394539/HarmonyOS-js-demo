import router from '@system.router';
import device from '@system.device';

export default {
  data: {
    title: "",
    isPhone: false,
    isTablet: false,
    isWearable: false,
    isTv: false,
  },
  onInit() {
    this.title = this.$t('strings.world');
    device.getInfo({
      success: (data) => {
        this.isPhone = data.deviceType === 'phone';
        this.isTablet = data.deviceType === 'tablet';
        this.isWearable = data.deviceType === 'wearable';
        this.isTv = data.deviceType === 'tv';
      }
    });
  },
  onPushPhone() {
    router.push({
      uri: 'pages/phone/phone',
    });
  },
  onPushTablet() {
    router.push({
      uri: 'pages/tablet/tablet',
    });
  },
  onPushWearable() {
    router.push({
      uri: 'pages/wearable/wearable',
    });
  },
  onPushTv() {
    router.push({
      uri: 'pages/tv/tv',
    });
  },
}
