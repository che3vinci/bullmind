import { List } from '@c3/utils';
import { immerable } from 'immer';
(List as any)[immerable] = true;

export { List };
