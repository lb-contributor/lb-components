import { Component } from 'react';
declare class QueryTable extends Component {
    constructor(props: any);
    refresh(): void;
    query(dataToBeSent: any): any;
    fieldsQueryRegister(func: any): void;
    render(): JSX.Element;
}
export default QueryTable;
