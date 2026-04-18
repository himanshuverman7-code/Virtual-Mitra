import ImageKit, { toFile } from '@imagekit/nodejs';
import { config } from './env.config.js';

const imageKitClient = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
});

export default imageKitClient