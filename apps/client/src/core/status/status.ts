export type ShapeStatus = {
  isSelected: boolean;
  isEditing: boolean;
  isHovered: boolean;
  isMaking: boolean;

  /*如下几种情况为true:
   * 1. 连线时的目标model
   * 2. dropModel的目标model
   */

  isActionTo: boolean;
};

export const DEAULT_SHAPE_STATUS: ShapeStatus = {
  isSelected: false,
  isEditing: false,
  isHovered: false,
  isMaking: false,
  isActionTo: false,
};
