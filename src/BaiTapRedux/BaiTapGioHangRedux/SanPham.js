import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sanPham} = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={sanPham.hinhAnh} width="200px" height="300px" alt={sanPham.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title text-center">{sanPham.tenSP}</h4>
                    <p className="card-text text-center">{sanPham.giaBan.toLocaleString()}</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-success">Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
