const ACTIONS = {
  ADD: { label: '新增', icon: 'plus' },
  MODIFY: {
    label: '修改', minSelect: 1, maxSelect: 1, icon: '',
  },
  REMOVE: { label: '删除', minSelect: 1, icon: 'close' },
  VIEW_DETAIL: { label: '查看详情', minSelect: 1, maxSelect: 1 },
}

export default ACTIONS
