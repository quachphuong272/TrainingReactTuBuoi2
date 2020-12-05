import React, { Component } from 'react'
import ProductListData from './data/ProductListData.json'
import Modal from './Modal';
import Product from './Product';

export default class ProductList extends Component {
    state = {
        productDetail: ProductListData[0],
        cart: [
            {
                "maSP": 1,
                "tenSP": "VinSmart Live",
                "giaBan": 5700000,
                "hinhAnh": "./img/vsphone.jpg",
                "soLuong": 1
            },
        ]
    };

    renderProductListHandle = () => {
        return ProductListData.map((product, index) => {
            return <Product
                onViewDetail={this.viewDetailHandle} onAddToCart={this.addToCart}
                prod={product}
                key={index} />
        });
    }

    viewDetailHandle = (product) => {
        this.setState({
            productDetail: product
        })
    }


    // Hàm thêm sản phẩm vào giỏ hàng
    addToCart = (product) => {
        const productUpdate = { ...product, soLuong: 1 }

        const index = this.state.cart.findIndex(product => product.maSP === productUpdate.maSP);

        this.setState({
            cart: [...this.state.cart, productUpdate]
        })

        if (index !== -1) {
            const newCart = [...this.state.cart];
            newCart[index].soLuong+=1;
            this.setState({
                cart: newCart,
            })
        }
        else {
            this.setState({
                cart: [...this.state.cart, productUpdate]
            })
        }
    }

    render() {
        const { productDetail, cart } = this.state;
        

        return (
            <div className="container">
                <Modal cart={cart} />
                <div className="row">
                    {this.renderProductListHandle()}
                </div>
                <div className="row">
                    <div className="col-6 text-center">
                        <h5>{productDetail.tenSP}</h5>
                        <img src={productDetail.hinhAnh} />
                    </div>
                    <div className="col-6">
                        <h5>Thông số kỹ thuật</h5>
                        <table className="table">
                            <tr>
                                <th>Màn hình</th>
                                <td>{productDetail.manHinh}</td>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{productDetail.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <td>{productDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <td>{productDetail.cameraSau}</td>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <td>{productDetail.ram}</td>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <td>{productDetail.rom}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
