# Query Table

包含查询条件输入框，操作按钮，数据显示table

## 属性：
### fields
定义查询条件
一个包含2个array的arry，第一个array定义常用查询条件，第二个array定义扩展查询条件

| prop | type | desc |
| ---- | ---- | ---- |
| id | String | 接口中对应的字段 |
| type | String | 查询条件控件的类型：Input/Select |
| label | String | 输入框的label |
| defaultValue | any | 缺省值 |
| required | boolean | 是否必输 |
| colSpan | number or object| 该输入框对应的col span，默认为 ```{ sm: { span: 24 }, md: { span: 24 / COLUMNS_NUMBER } }``` |
| onChange | function | onChange回调 |
| render | function | 自定义组件渲染，如不包含在常用类型中的组件，要使用这个方法渲染 |

### query
点击查询时的回调函数，需要返回一个Promise对象
function (queryParams): Promise

### loadOnMount
是否在组件didMount以后就调用查询接口
boolean

###columns
定义table的列，同antd的table的columns
