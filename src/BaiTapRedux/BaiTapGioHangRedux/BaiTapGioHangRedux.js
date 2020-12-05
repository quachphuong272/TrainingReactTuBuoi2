import React, { Component } from 'react'
import GioHang from './GioHang'
import DanhSachSanPham from './DanhSachSanPham'

export default class BaiTapGioHangRedux extends Component {
    render() {
        return (
            <div>
                <GioHang/>
                <DanhSachSanPham/>
            </div>
        )
    }
}
