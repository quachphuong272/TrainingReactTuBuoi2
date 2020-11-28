import React, { Component } from 'react'

export default class ProductRCC extends Component {
    render() {
        // let {maSP, tenSP, giaBan, hinhAnh} = this.props.sanPham;
        let {sanPham} = this.props;
        return (
            <div>
                <div className="card text-dark">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>
            </div>
        )
    }
}
