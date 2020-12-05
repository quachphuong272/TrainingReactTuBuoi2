// File quản lý tất cả state của ứng dụng (Thay vì đặt tại component)

import {combineReducers, createStore} from 'redux';
import { GioHangReducer } from '../redux/GioHangReducer';


const rootReducer = combineReducers({
    // các state sau này import vào
    stateGioHang: GioHangReducer
    }
)

// tạo ra store chứa rootReducer ( xem như state tổng của ứng dụng )
export const store = createStore(rootReducer);
