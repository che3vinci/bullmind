// import Model from '../model';
import Box from './box';
// import { IContainerable } from '../container';

// /**
//  *
//  * @param {Array<Model>} elements
//  * @param {boolean} isHtml：如果是HTML元素采用getBoundingClient
//  * @return {Box}
//  */
// export function getMMbox(elements: Model[], isHtml: boolean = false): Box {
//   const allBox = elements.map((each: Model) => {
//     return isHtml ? getMboxOfElement(elementOfId(each.id)) : each.mbox;
//   });

//   return sumOfBox(allBox);
// }

// (window as any).getMMbox = getMMbox;
/**
 * 所有元素的curbox组成的大盒子
 */
// export function getMCbox(elements: Model[]): Box {
//   const allBox = elements.map((each: Model) => {
//     return each.curBox_N;
//   });
//   return sumOfBox(allBox);
// }

/**
 * 所有box合并起来之后的大盒子
 * @return {Box}
 */
export function sumOfBox(allBox: Box[]): Box {
  if (allBox.length <= 0) {
    return Box.makeEmptyBox();
  }

  const box = {
    left: allBox[0].left,
    top: allBox[0].top,
    right: allBox[0].right,
    bottom: allBox[0].bottom,
  };

  // 处理剩下的元素
  allBox.slice(1).forEach((each: Box) => {
    if (box.left > each.left) {
      box.left = each.left;
    }
    if (box.top > each.top) {
      box.top = each.top;
    }
    if (box.right < each.right) {
      box.right = each.right;
    }
    if (box.bottom < each.bottom) {
      box.bottom = each.bottom;
    }
  });
  return new Box(
    box.left,
    box.top,
    box.right - box.left,
    box.bottom - box.top
  );
}
