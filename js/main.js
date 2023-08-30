import './utils.js';
import {renderGallery} from './gallery.js';
import {createGallery} from './data.js';

const pictureGallery = createGallery(25);

renderGallery(pictureGallery);
