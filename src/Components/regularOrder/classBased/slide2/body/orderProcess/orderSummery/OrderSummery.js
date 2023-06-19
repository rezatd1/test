import React, { Component } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import { headerStyles } from '../../../../../../uploadPage/Styles/headerStyles';
import { connect } from 'react-redux';
import { setIsOpenFileCheckModal, setUploadSectionSlide, setFinalOrder, setExtendedServiceSlide,setOrderSlide } from '../../../../../../redux/RegularOrderSlice';
import DoneIcon from '@mui/icons-material/Done';
import { DefaultPostAPICall } from '../../../../../API/DefaultPostAPICall';

const mapStateToProps = (state) => ({
    customerQuantityInput: state.RegularOrder.customerQuantityInput,
    advancedPrice: state.RegularOrder.advancedPrice,
    printSpeed: state.RegularOrder.printSpeed,
    printSideTypes: state.RegularOrder.printSideTypes,
    circulationId: state.RegularOrder.circulationId,
    printSeries: state.RegularOrder.printSeries,
    uploadedFile1: state.RegularOrder.uploadedFile1,
    uploadedFile2: state.RegularOrder.uploadedFile2,
});
const mapDispatchToProps = { setIsOpenFileCheckModal, setUploadSectionSlide, setFinalOrder, setExtendedServiceSlide,setOrderSlide };

class OrderSummery extends Component {

    constructor() {
        super();
        this.state = { expendedDetail: false }
    }

    saveDataHandler = () => {
        DefaultPostAPICall("/api/fa/Order/SharedSheetOrder/Save?", {
            "productId": this.props.circulationId,
            "turnaroundType": this.props.printSpeed,
            "twoSidePrintingType": this.props.printSideTypes,
            "series": this.props.printSeries,
            "masterFiles": [
                {
                    "id": this.props.uploadedFile1.id,
                    "fileName": this.props.uploadedFile1.name,
                    "sharedSheetOrderDetailUserFileType": 1
                },
                {
                    "id": this.props.uploadedFile2.id,
                    "fileName": this.props.uploadedFile2.name,
                    "sharedSheetOrderDetailUserFileType": 2
                }
            ],
            "filmFiles": [],
            "extendedServices": {
                "filters": [],
                "roundedCorner": false,
                "customFoldLineDto": null,
                "gripperEdge": false,
                "handleType": null
            },
            "uploadedFiles": [
                {
                    "id": this.props.uploadedFile1.id,
                    "name": this.props.uploadedFile1.name,
                },
                {
                    "id": this.props.uploadedFile2.id,
                    "name": this.props.uploadedFile2.name,
                }
            ]
        }).then((response) => {
            this.props.setFinalOrder(response);
            this.props.setOrderSlide(3);
        });
    }

    stepBackHandler = () => {
        this.props.setUploadSectionSlide(1)
        this.props.setExtendedServiceSlide(1);
    }

    render() {
        return (
            <div>
                <div className='d-flex justify-content-between pt-4 pb-3 px-3'>
                    <div className='h5'>بروشور گلاسه 135 گرم تا شده</div>
                    <div onClick={() => this.setState({ expendedDetail: !this.state.expendedDetail })} className='h6 text-danger'>نمایش بیشتر</div>
                </div>
                <div className='bg-danger mx-3 mb-3'>
                    <table className='w-100 px-4'>
                        {this.state.expendedDetail ?
                            <>
                                <tr>
                                    <td>سرعت چاپ</td>
                                    <td>{this.props.printSpeed === 1 ? 'معمولی' : 'فوری'}</td>
                                </tr>
                                <tr>
                                    <td>یکرو یا دورو</td>
                                    <td>{this.props.printSideTypes === 1 ? 'یکرو' : 'دورو'}</td>
                                </tr>
                            </>
                            : null}

                        <tr>
                            <td>تعداد</td>
                            <td>{this.props.customerQuantityInput}</td>
                        </tr>
                        <tr>
                            <td>ابعاد فایل</td>
                            <td>{this.props.advancedPrice.fileDimension}</td>
                        </tr>
                        <tr>
                            <td>قیمت</td>
                            <td> {this.props.advancedPrice.totalPrice} تومان</td>
                        </tr>
                    </table>
                </div>
                <div className='h5 mx-3 my-4'>مجموع قیمت (بدون احتساب مالیات بر ارزش افزوده) :
                    <span className='text-danger'>{this.props.advancedPrice.totalPriceAfterMultipleInQuantity} تومان </span>
                </div>
                <div className='d-flex justify-content-end'>
                    <div>
                        <Button onClick={this.stepBackHandler} variant="outlined" startIcon={<NavigateNextIcon sx={headerStyles.createAndUpload.containedButtonIcon} />}
                            sx={headerStyles.createAndUpload.createFolderModal.outlinedButton}>انتخاب فایل</Button>
                    </div>
                    <div className='ms-3 me-2 mb-4'>
                        <Button onClick={this.saveDataHandler} variant="outlined" endIcon={<DoneIcon sx={headerStyles.createAndUpload.containedButtonIcon2} />}
                            sx={headerStyles.createAndUpload.createFolderModal.containedButton}>مرحله بعدی</Button>
                    </div>
                </div>
            </div>

        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummery);