import React, { Component } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { headerStyles } from '../../../../../../uploadPage/Styles/headerStyles'
import { connect } from 'react-redux';
import { setBasicPrice, setSpecificDimensionInfo, setGetAdvancedPrice, setExtendedServicePrice, setAfterMasterUploadEditModal, setIsOpenFileCheckModal, addUploadedFiles, setUploadedFile1, setUploadedFile2 } from '../../../../../../redux/RegularOrderSlice';
import { DefaultPostAPICall } from '../../../../../API/DefaultPostAPICall';
import { DefaultGetAPICall } from '../../../../../API/DefaultGetAPICall';

const mapStateToProps = (state) => ({
    basicPrice: state.RegularOrder.basicPrice,
    circulationId: state.RegularOrder.circulationId,
    printSeries: state.RegularOrder.printSeries,
    printSpeed: state.RegularOrder.printSpeed,
    printSideTypes: state.RegularOrder.printSideTypes,
    successfulMasterUploadRespone: state.RegularOrder.successfulMasterUploadRespone,
    filePublicURL: state.RegularOrder.filePublicURL,
    extendedServicePrice: state.RegularOrder.extendedServicePrice,
    afterMasterUploadEditModal: state.RegularOrder.afterMasterUploadEditModal,
    isOpenFileCheckModal: state.RegularOrder.isOpenFileCheckModal,
    getAdvancedPrice: state.RegularOrder.getAdvancedPrice,
    uploadedFiles: state.RegularOrder.uploadedFiles,
    selectedUploadPanelId: state.RegularOrder.selectedUploadPanelId,
    uploadedFile1: state.RegularOrder.uploadedFile1,
});
const mapDispatchToProps = { setBasicPrice, setSpecificDimensionInfo, setAfterMasterUploadEditModal, setExtendedServicePrice, setIsOpenFileCheckModal, setGetAdvancedPrice, addUploadedFiles, setUploadedFile1, setUploadedFile2 };

class PriceTable extends Component {

    constructor() {
        super();
        this.state = { selectedSize: {} }
    }

    activeCSS = { color: 'green' }
    resultDataMap = () => {
        return this.props.basicPrice && this.props.basicPrice.map((item) =>
            <tr>
                <td style={item.isSelected ? this.activeCSS : null} className='border border-dark px-2 py-1'>A6 تراکتی ( 14.5 × 10 ) cm ({item.width}×{item.height} میلیمتر)</td>
                <td style={item.isSelected ? this.activeCSS : null} className='border border-dark px-2 py-1'>{item.basePrice} تومان (بدون احتساب مالیات)</td>
            </tr>
        )
    }
    componentDidMount() {
        DefaultPostAPICall("/api/fa-IR-IRT/Order/SharedSheetOrder/GetBasicPrice?", {
            "productId": this.props.circulationId,
            "series": this.props.printSeries,
            "turnaroundType": this.props.printSpeed,
            "twoSidePrintingType": this.props.printSideTypes,
            "currentFileId": this.props.successfulMasterUploadRespone[0].id,
        }).then((response) => {
            this.props.setBasicPrice(response);
        });
    }
    componentDidUpdate(prevState, prevProps) {
        if (this.props.basicPrice !== prevProps.basicPrice) {
            const filtered = this.props.basicPrice.filter((item) => item.isSelected);
            if (filtered) {
                DefaultGetAPICall('/api/fa/Order/SharedSheetOrder/SpecificDimensionInfo?', `&productId=${this.props.circulationId}&latWidth=${filtered[0]?.width}&latHeight=${filtered[0]?.height}&fileWidth=${this.props.filePublicURL.width}&fileHeight=${this.props.filePublicURL.width}`)
                    .then((response) => {
                        this.props.setSpecificDimensionInfo(response);
                    });
            }
        }
    }
    sendDraftHandler = () => {
        DefaultPostAPICall("/api/fa/Order/SharedSheetOrder/GetAdvancedPrice?", {
            "productId": this.props.circulationId,
            "turnaroundType": this.props.printSpeed,
            "twoSidePrintingType": this.props.printSideTypes,
            "series": this.props.printSeries,
            "currentFileId": this.props.successfulMasterUploadRespone.id,
            "extendedServices": {
                "filters": [],
                "roundedCorner": false,
                "customFoldLineDto": null,
                "gripperEdge": false,
                "handleType": null
            }
        }).then((response) => {
            this.props.setGetAdvancedPrice(response);
        });
        DefaultPostAPICall("/api/fa/Order/SharedSheetOrder/ExtendedServicePrice?", {
            "filters": [],
            "roundedCorner": false,
            "customFoldLineDto": null,
            "gripperEdge": false,
            "handleType": null
        }).then((response) => {
            this.props.setExtendedServicePrice(response);
            if (this.props.selectedUploadPanelId === 1) {
                this.props.setUploadedFile1(this.props.successfulMasterUploadRespone[0])
            } else {
                this.props.setUploadedFile2(this.props.successfulMasterUploadRespone[0])
            }
        });
    }

    exitHandler = () => {
        this.props.setAfterMasterUploadEditModal(false);
        this.props.setIsOpenFileCheckModal(false);
    }
    render() {
        return (
            <>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='col-7'>فایل چاپی چهار رنگ</div>
                    <div className='col-2'><HelpIcon /></div>
                </div>
                <div className='mt-3'>ابعاد موجود</div>
                <div className='mt-1'>
                    <table className='entire-table border w-100' data-bs-toggle="collapse">
                        <thead className='cBG-3'>
                            <tr>
                                <th className='border border-dark p-2'>ابعاد (میلیمتر)</th>
                                <th className='border border-dark p-2'>قیمت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.resultDataMap()}
                        </tbody>
                    </table>
                </div>
                <div className='cStyle-8 row justify-content-end ms-3'>
                    <div className='col-3 mx-3'>
                        <Button onClick={this.sendDraftHandler} variant="outlined" startIcon={<CloudUploadIcon sx={headerStyles.createAndUpload.containedButtonIcon} />}
                            sx={headerStyles.saveDraft.containedButton}>ذخیره</Button>
                    </div>
                    <div className='col-3 mx-3'>
                        <Button onClick={this.exitHandler} variant="outlined" startIcon={<CloudUploadIcon sx={headerStyles.createAndUpload.containedButtonIcon} />}
                            sx={headerStyles.saveDraft.containedButton2}>انصراف</Button>
                    </div>
                </div>
            </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PriceTable);