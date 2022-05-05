import { useCommit } from '@c3/hooks';
import { useCallback } from 'react';

export const useDrag = (id: string) => {
  const commit = useCommit();
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      commit('dragStart', {
        id: id,
        data: [e],
      });
    },
    [id, commit]
  );
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      commit('drag', {
        id: id,
        data: [e],
      });
    },
    [commit, id]
  );
  const onMouseUp = useCallback(
    (e: React.MouseEvent) => {
      commit('dragEnd', {
        id: id,
        data: [e],
      });
    },
    [commit, id]
  );
  return { onMouseDown, onMouseMove, onMouseUp };
};
