import Box from "../../boxable/box";

export  interface ILayoutable {
    /**
     * 布局对齐所需的Box。一般为bcbox
     */
    getLayoutBox(): Box;

    /**
     * @param:editingBox :一般是mbox,总之是用户看到的最外层的box。
     *
     */
    setLayoutBox(box: Box): void;
}
