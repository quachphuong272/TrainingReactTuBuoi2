import React, { Component } from 'react'
import ProductList from './ProductList'

export default class PropsWithEvent extends Component {
    render() {
        return (
            <div className ="container">
                <div className="text-right">
                    <button data-toggle="modal" data-target="#modelId" className ="btn btn-primary">Giỏ hàng</button>
                </div>
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <ProductList/>
            </div>
        )
    }
}
