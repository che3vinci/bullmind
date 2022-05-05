import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const obj = require('@svgdotjs/svg.js');
console.log('x');
const SVG = (arg: any) => {
  return obj.SVG(arg);
};

Object.assign(SVG, obj);

(global as any).SVG = obj.SVG;
(global as any).SVGMatrix = (SVG as any).Matrix;
(global as any).CSS = {};

