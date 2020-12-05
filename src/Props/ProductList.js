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

    // Định nghĩa sự kiện xóa sản phẩm tại nơi chứa state giỏ hàng
    deleteItem = (maSP) => {
        // tạo ra 1 giỏ hàng mới giống giá trị giỏ hàng cũ
        let gioHangCapNhat = [... this.state.cart];
        // xử lý xóa trên giỏ hàng mới
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);
        if (index !== -1)
        {
            gioHangCapNhat.splice(index,1);
        }
        // gán lại giỏ hãng cũ bằng giỏ hàng mới
        this.setState({
            cart:gioHangCapNhat
        })
    }

    // Định nghĩa hàm thay đổi số lượng tại nơi chứa state số lượng ( số lượng nằm trong cart[] )
    tangGiamSoLuong = (maSP, soLuong) => {
        let gioHangCapNhat = [...this.state.cart];

        // Tìm trong giỏ hàng có sản phẩm == với sản phẩm được click + hoặc -
        let spGioHang = gioHangCapNhat.find(spGH => spGH.maSP === maSP);
        // tìm thấy sp trong giỏ hàng
        if(spGioHang)
        {
            spGioHang.soLuong += soLuong;
        }
        // cập nhật lại giỏ hàng
        this.setState({cart:gioHangCapNhat});

    }

    render() {
        const { productDetail, cart } = this.state;
        

        return (
            <div className="container">
                <Modal cart={cart} deleteItem={this.deleteItem} tangGiamSoLuong={this.tangGiamSoLuong}/>
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
