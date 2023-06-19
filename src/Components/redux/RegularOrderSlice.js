import { createSlice } from "@reduxjs/toolkit";

const RegularOrderSlice = createSlice({
  name: "RegularOrder",
  initialState: {
    productInfo: {},
    circulationId: 7738,
    customerQuantityInput: 1000,
    printSeries: 1,
    printOptions: {},
    printSpeed: 1,
    printSideTypes: 1,
    printingProcessTime: [],
    basicPrice: [],
    productSpecialDetail: {},
    orderSlide: 1,
    extendedServiceSlide: 1,
    fileStepperSlide: 0,
    customerUploadedFile: 0,
    isOpenFileCheckModal: 0,
    selectedUploadPanelId: 0,
    successfulMasterUploadRespone: [],
    afterMasterUploadEditModal: false,
    filePublicURL: {},
    draftImg1: '',
    draftImg2: '',
    thumbnailImg1: '',
    thumbnailImg2: '',
    specificDimensionInfo: {},
    getAdvancedPrice: {},
    extendedServicePrice: {},
    uploadedFile1: {},
    uploadedFile2: {},
    advancedPrice: {},
    uploadSectionSlide: 1,
    finalOrder: {},
  },
  reducers: {
    setProductInfo(state, action) {
      state.productInfo = action.payload;
    },
    setCirculationId(state, action) {
      state.circulationId = action.payload;
    },
    setCustomerQuantityInput(state, action) {
      state.customerQuantityInput = action.payload;
    },
    setPrintSeries(state, action) {
      state.printSeries = action.payload;
    },
    setPrintOptions(state, action) {
      state.printOptions = action.payload;
    },
    setPrintSpeed(state, action) {
      state.printSpeed = action.payload;
    },
    setPrintSideTypes(state, action) {
      state.printSideTypes = action.payload;
    },
    setPrintingProcessTime(state, action) {
      state.printingProcessTime = action.payload;
    },
    setBasicPrice(state, action) {
      state.basicPrice = action.payload;
    },
    setProductSpecialDetail(state, action) {
      state.productSpecialDetail = action.payload;
    },
    setOrderSlide(state, action) {
      state.orderSlide = action.payload;
    },
    setExtendedServiceSlide(state, action) {
      state.extendedServiceSlide = action.payload;
    },
    setFileStepperSlide(state, action) {
      state.fileStepperSlide = action.payload;
    },
    setCustomerUploadedFile(state, action) {
      state.customerUploadedFile = action.payload;
    },
    setIsOpenFileCheckModal(state, action) {
      state.isOpenFileCheckModal = action.payload;
    },
    setSelectedUploadPanelId(state, action) {
      state.selectedUploadPanelId = action.payload;
    },
    setSuccessfulMasterUploadRespone(state, action) {
      state.successfulMasterUploadRespone = action.payload;
    },
    setAfterMasterUploadEditModal(state, action) {
      state.afterMasterUploadEditModal = action.payload;
    },
    setFilePublicURL(state, action) {
      state.filePublicURL = action.payload;
    },
    setDraftImg1(state, action) {
      state.draftImg1 = action.payload;
    },
    setDraftImg2(state, action) {
      state.draftImg2 = action.payload;
    },
    setThumbnailImg1(state, action) {
      state.thumbnailImg1 = action.payload;
    },
    setThumbnailImg2(state, action) {
      state.thumbnailImg2 = action.payload;
    },
    setSpecificDimensionInfo(state, action) {
      state.specificDimensionInfo = action.payload;
    },
    setGetAdvancedPrice(state, action) {
      state.getAdvancedPrice = action.payload;
    },
    setExtendedServicePrice(state, action) {
      state.extendedServicePrice = action.payload;
    },
    addUploadedFiles(state, action) {
      state.uploadedFiles.push(action.payload);
    },
    setUploadedFile1(state, action) {
      state.uploadedFile1 = action.payload;
    },
    setUploadedFile2(state, action) {
      state.uploadedFile2 = action.payload;
    },
    setAdvancedPrice(state, action) {
      state.advancedPrice = action.payload;
    },
    setUploadSectionSlide(state, action) {
      state.uploadSectionSlide = action.payload;
    },
    setFinalOrder(state,action) {
      state.finalOrder = action.payload;
    },
  },
});

export const { setProductInfo, setCirculationId, setCustomerQuantityInput,
  setPrintSeries, setPrintOptions, setPrintSpeed, setPrintSideTypes,
  setPrintingProcessTime, setBasicPrice, setProductSpecialDetail,
  setOrderSlide, setExtendedServiceSlide, setFileStepperSlide,
  setCustomerUploadedFile, setIsOpenFileCheckModal, setSelectedUploadPanelId,
  setSuccessfulMasterUploadRespone, setAfterMasterUploadEditModal,
  setFilePublicURL, setDraftImg1, setDraftImg2, setThumbnailImg1, setThumbnailImg2, setSpecificDimensionInfo,
  setGetAdvancedPrice, setExtendedServicePrice, addUploadedFiles, setUploadedItem1, setUploadedItem2,
  setUploadedFile1, setUploadedFile2, setAdvancedPrice, setUploadSectionSlide,setFinalOrder } = RegularOrderSlice.actions;
export default RegularOrderSlice;