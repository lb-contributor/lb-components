import { TableAction } from './ActionButton'
type ACTIONS_DEF = {
  [index: string]: TableAction
}
export const ACTIONS: ACTIONS_DEF = {
  'ADD': {
    label: '新增',
    icon: 'plus',
    key: 'add',
  },
  MODIFY: {
    label: '修改',
    minSelect: 1,
    maxSelect: 1,
    icon: 'edit',
    key: 'modify',
  },
  REMOVE: {
    label: '删除',
    minSelect: 1,
    icon: 'close',
    confirm: true,
    message: '确认要删除这些记录？',
    key: 'remove',
  },
  VIEW_DETAIL: {
    label: '查看',
    minSelect: 1,
    maxSelect: 1,
    icon: 'info-circle-o',
    key: 'view',
  },
}
