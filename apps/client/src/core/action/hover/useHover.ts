import { useCommit } from '@c3/hooks';
import { useCallback } from 'react';

export const useHover = (id: string) => {
  const commit = useCommit();
  return {
    onMouseOver: useCallback(() => {
      commit('mouseover', {
        id: id,
      });
    }, [commit, id]),
    onMouseOut: useCallback(() => {
      commit('mouseout', {
        id: id,
      });
    }, [commit, id]),
  };
};
