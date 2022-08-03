import { useCommit } from '@c3/hooks';
import { useCallback } from 'react';

export const useResize = (id: string) => {
  const commit = useCommit();
  const resize = useCallback(
    (dx: number, dy: number) => {
      commit('resize', { id: id, data: [dx, dy] });
    },
    [commit, id]
  );
  return resize;
};
