// import Box from '../boxable/box';
// import { AxisType } from '../common/constants/consts';
// import { abs } from '../common/math';
// import { IContainerable } from '../containerable';
// import XBError from '../error/error';
// import { Idable } from '../id/idable';
// import Model from '../models/model/model';
// import Point from '../point/point';
// import Transform from './transform';
// /**
//  * 累积的计算后最终的transform.
//  *
//  * @param relativeTo: 不会计算relativeTo容器上的transform
//  */
// export function accumulatedTransform(
//   model: IContainerable,
//   relativeTo: IContainerable
// ): Transform {
//   if (!relativeTo || model === relativeTo) {
//     throw new XBError('failed:relativeTo is undefined');
//   }
//   const originModel = model;

//   // 收集transform
//   const transforms: Transform[] = [];
//   let errModel;
//   try {
//     do {
//       transforms.push(model.transform);
//       errModel = model;
//       model = model.parent;
//     } while (model.id !== relativeTo.id); // @fatal: @TODO: 好像会带来多个SVG实例(是eval带来的吗？) 所以此处用id来判断svg是否相等
//   } catch (e) {
//   //   errorWeblog(
//   //     'accumulatedTransform failed',
//   //     e.message,
//   //     `currErrModel:${(errModel as any).id}`
//   //   );
//   //   console.warn(
//   //     `orignalModel=${originModel.id},currErrModel:${
//   //       (errModel as any).id
//   //     }`,
//   //     relativeTo,
//   //     e
//   //   );
//   // }

//   // 计算累计的transform
//   return transforms
//     .reverse()
//     .reduce((preResult: Transform, curElement: Transform) => {
//       return preResult.transform(curElement);
//     }, new Transform());
// }

// /***
//  * 求outestPoint在toRelativeTo容器下坐标。包括当前层的坐标
//  * @param {Point} outestPoint
//  * @param {Model} belongToModel
//  * @param {IContainerable} toRelativeTo
//  * @returns {Point}
//  */

// export function outest2RelativePoint(
//   outestPoint: Point,
//   belongToModel: Model,
//   toRelativeTo: IContainerable
// ): Point {
//   const basePoint = relatvie2BasePoint(
//     outestPoint,
//     getSvgRootCtn(),
//     belongToModel
//   );
//   return base2RelativePoint_N(basePoint, belongToModel, toRelativeTo);
// }

// /**
//  * 计算相对relativeTo容器的坐标
//  * @param belongedToModel:该点所属于的元素。可能是group也可能是普通图形.
//  * - 必须要属于某一个元素。
//  * @param basePoint:求point的原始坐标
//  * @param relativeTo: 相对于relativeTo的坐标。不会计算relativeTo容器的translate信息
//  * - 不可能为undefined
//  * @return: 相对坐标（完全新建的point)
//  *
//  *
//  **/

// export function base2RelativePoint_N(
//   basePoint: Point,
//   belongedToModel: Model,
//   relativeTo: IContainerable
// ): Point {
//   if (!relativeTo) {
//     throw new XBError('failed:relativeTo is undefined');
//   }
//   const transform = accumulatedTransform(belongedToModel, relativeTo);
//   return basePoint.clone().transform_N(transform);
// }

// /**
//  * 通过relativePoint来获得basePoint
//  * @param relpoint: parent为relativeTo时的坐标
//  * @param originModel:点所在的元素。
//  * @param relativeTo:
//  */
// export function relatvie2BasePoint(
//   relpoint: Point,
//   relativeTo: IContainerable,
//   originModel: Model
// ): Point {
//   if (!relativeTo || !originModel) {
//     throw new XBError('failed:arugment is undefined');
//   }
//   return relpoint
//     .clone()
//     .transform_N(accumulatedTransform(originModel, relativeTo).invert());
// }

// (window as any).relatvie2BasePoint = relatvie2BasePoint;
// (window as any).base2RelativePoint = base2RelativePoint_N;

// export function base2OutestPoint(
//   basePoint: Point,
//   belongedToModel: Model
// ) {
//   return base2RelativePoint_N(basePoint, belongedToModel, getSvgRootCtn());
// }

// export function outestPoint2Base(relpoint: Point, belongedToModel: Model) {
//   return relatvie2BasePoint(relpoint, getSvgRootCtn(), belongedToModel);
// }

// /**
//  * belongedToModel 加上自己位移信息得到的点
//  *
//  * parent: connector所属于的container
//  * @param outmostPoint:全局坐标下的点
//  * @param belongedToModel:该点所在model
//  *
//  * @return:
//  * - 该点在parent下的坐标。其实就是belongedToModel加上自己的translate即可。
//  */
// export function outestPoint2Current(
//   outmostPoint: Point,
//   belongedToModel: Model
// ): Point {
//   const originPoint = relatvie2BasePoint(
//     outmostPoint,
//     getSvgRootCtn(),
//     belongedToModel
//   );
//   return base2RelativePoint_N(
//     originPoint,
//     belongedToModel,
//     belongedToModel.parent
//   );
// }

// /**
//  * 屏幕上的同一个点，在不同容器下的basePoint不同。
//  * 此函数用于转换这些点
//  * @param basePoint:base point
//  * @param from:
//  * @param to:
//  * @returns :在to model下的basePoint
//  */
// export function switchBasePoint(
//   basePoint: Point,
//   from: Model,
//   to: Model
// ): Point {
//   if (from === to) {
//     return basePoint;
//   }
//   const commonAncestor = directCommonAncestor(from, to);
//   const relPoint = base2RelativePoint_N(basePoint, from, commonAncestor);
//   return relatvie2BasePoint(relPoint, commonAncestor, to);
// }

// /**
//  * 只转换x或者y的坐标值
//  *  type:需要转换的是X还是Y轴
//  */
// export function base2RelativeAxis(
//   type: AxisType,
//   value: number,
//   belongedToModel: Model,
//   relativeTo: IContainerable
// ): number {
//   if (!relativeTo) {
//     throw new XBError('failed:relativeTo is undefined');
//   }
//   const point = new Point(0, 0);
//   if (type === AxisType.X) {
//     point.x = value;
//   } else {
//     point.y = value;
//   }
//   const newPoint = base2RelativePoint_N(
//     point,
//     belongedToModel,
//     relativeTo
//   );
//   return type === AxisType.X ? newPoint.x : newPoint.y;
// }

// export function base2OutestAxis(
//   type: AxisType,
//   value: number,
//   belongedToModel: Model
// ): number {
//   return base2RelativeAxis(type, value, belongedToModel, getSvgRootCtn());
// }

// /**
//  * @Warning
//  * 如果有旋转和放大，这个运算可能并不正确
//  */
// export function relative2BaseBox(
//   box: Box,
//   relativeTo: IContainerable,
//   originModel: Model
// ): Box {
//   // if(!eval('originModel instanceof BoxModel') || ! originModel.isOnlyTranslate()) {
//   //     throw new Error('[relative2BaseBox]:Not Support')
//   // }
//   const leftTop = relatvie2BasePoint(
//     box.leftTop_N,
//     relativeTo,
//     originModel
//   );
//   const rightBottom = relatvie2BasePoint(
//     box.rightBottom_N,
//     relativeTo,
//     originModel
//   );
//   return Box.makeFromCornerPoint(
//     leftTop.x,
//     leftTop.y,
//     rightBottom.x,
//     rightBottom.y
//   );
// }

// /**
//  * 把最外层的box转变为bbox。
//  *
//  * @Warning
//  * 如果有旋转和放大，这个运算可能并不正确
//  */

// export function mbox2bbox(mbox: Box, model: Model): Box {
//   // if(!eval('model instanceof BoxModel') || ! model.isOnlyTranslate()) {
//   //     throw new Error(`[mbox2bbox]:Not Support.${model.toReadableTransformString()}`)
//   // }

//   return relative2BaseBox(mbox, getSvgRootCtn(), model);
// }

// /**
//  * 把最外层的box转变为bbox。
//  *
//  * @Warning
//  * 如果有旋转和放大，这个运算可能并不正确
//  */
// export function bbox2mbox(bbox: Box, model: Model) {
//   const transform = accumulatedTransform(model, getSvgRootCtn());
//   return bbox.clone().transform_N(transform);
// }

// /**
//  * mbox:相对于document而非viewport计算的大小
//  * - HTML元素(比如quill,tablecell)需要使用该函数
//  */
// export function getMboxOfElement(
//   ele: Element,
//   relativeToDocument: boolean = true
// ) {
//   if (!ele) {
//     throw new Error('element is not existed');
//   }

//   const clientRect = ele.getBoundingClientRect();

//   // @todo:roundN这里会不会导致死循环?
//   const box: Box = Box.makeFromClientRect(clientRect).round_N();

//   if (relativeToDocument) {
//     box.left += window.scrollX;
//     box.top += window.scrollY;
//   }
//   return box;
// }

// /**
//  * 将model的curbox设置为box。 通过scale来实现。允许一定误差值
//  * 默认情况下，认为box和老的curBox是居中对齐的(所以才只进行发达)
//  * @param {Box} box:model的新的curBox的大小。
//  * @param {Model} model
//  * @param {number} PRECISION 精度
//  *
//  * @注意：
//  * 如果scale的step设置过大，可能导致死循环(不停的放大和缩小)。所以这里的处理方式并不严谨。
//  */
// export function setCurBoxTo(
//   box: Box,
//   model: Model,
//   PRECISION: number = 3
// ) {
//   // 处理宽度
//   if (abs(box.width - model.curBox_N.width) > PRECISION) {
//     if (box.width > model.curBox_N.width) {
//       let width = 0;
//       do {
//         const center = model.bbox.center_N;
//         width = model.scale(1.01, 1, center.x, center.y).curBox_N.width;
//       } while (width < box.width);
//     } else {
//       let width = 0;
//       do {
//         const center = model.bbox.center_N;
//         width = model.scale(0.99, 1, center.x, center.y).curBox_N.width;
//       } while (width > box.width);
//     }
//   }

//   // 处理高度
//   if (abs(box.height - model.curBox_N.height) > PRECISION) {
//     if (box.height > model.curBox_N.height) {
//       let height = 0;
//       do {
//         const center = model.bbox.center_N;
//         height = model.scale(1, 1.01, center.x, center.y).curBox_N.height;
//       } while (height < box.height);
//     } else {
//       let height = 0;
//       do {
//         const center = model.bbox.center_N;
//         height = model.scale(1, 0.99, center.x, center.y).curBox_N.height;
//       } while (height > box.height);
//     }
//   }
// }
