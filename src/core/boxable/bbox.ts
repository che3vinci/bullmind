import Box from "./box";

interface BBoxable {
  set bbox(box:Box);
  set curBox(box:Box);
  set mbox(box:Box);

  get curBox():Box;
  get mbox():Box;
  get bbox():Box
}
