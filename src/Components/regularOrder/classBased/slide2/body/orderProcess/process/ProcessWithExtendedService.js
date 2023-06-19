import React, { Component } from 'react';
import { headerStyles } from '../../../../../../uploadPage/Styles/headerStyles';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import TaskIcon from '@mui/icons-material/Task';
import { connect } from 'react-redux';
import '../../../../../arrowBreadCrumb/style.css';
import '../../../../../arrowBreadCrumb/demo.css';
import { setExtendedServiceSlide } from '../../../../../../redux/RegularOrderSlice';

const mapStateToProps = (state) => ({
    extendedServiceSlide: state.RegularOrder.extendedServiceSlide,
});
const mapDispatchToProps = { setExtendedServiceSlide };

class ProcessWithExtendedService extends Component {

    activeCSS = {
        backgroundColor: 'black',
        color: 'white'
    }

    render() {
        return (
            <div className='row rounded mx-0 cBorder-3'>
                <div style={this.props.extendedServiceSlide === 1 ? this.activeCSS : null} className='col-4 d-flex justify-content-center align-items-center cStyle-5 cBorder-3'>
                    <div className='w-auto h5 mb-0'>
                        <InsertDriveFileIcon fontSize='medium' />
                        انتخاب فایل
                    </div>
                </div>
                <div style={this.props.extendedServiceSlide === 2 ? this.activeCSS : null} className='col-4 d-flex justify-content-center align-items-center cStyle-5 cBorder-3'>
                    <div className='w-auto h5 mb-0'>
                        <MiscellaneousServicesIcon fontSize='medium' />
                        افزودن خدمات
                    </div>
                </div>
                <div style={this.props.extendedServiceSlide === 3 ? this.activeCSS : null} className='col-4 d-flex justify-content-center align-items-center cStyle-5 cBorder-3'>
                    <div className='w-auto h5 mb-0'>
                        <TaskIcon fontSize='medium' />
                        تایید جزئیات سفارش
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProcessWithExtendedService);