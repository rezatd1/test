import { createSlice } from "@reduxjs/toolkit";

const selectedItemSlice = createSlice({
  name: "SelectedItem",
  initialState: {
    selectedTreeObject: {},
    selectedPanelObject: {},
    selectedCreateNum: '',
    treeAllItems: [],
    panelAllItems: [],
    checkedFileItems: [],
    itemFileManagerView: 1,
  },
  reducers: {
    getSelectedTreeItem(state, action) {
      state.selectedTreeObject = action.payload;
    },
    getSelectedPanel(state, action) {
      state.selectedPanelObject = action.payload;
    },
    getSelectedCreateNum(state, action) {
      state.selectedCreateNum = action.payload;
    },
    getTreeAllItem(state, action) {
      state.treeAllItems = action.payload;
    },
    getPanelAllItem(state, action) {
      state.panelAllItems = action.payload;
    },
    getItemFileManagerView(state, action) {
      state.itemFileManagerView = action.payload;
    },
    getCheckedFileItems(state, action) {
      state.checkedFileItems = action.payload;
    }
  },
});


const { actions, reducer } = selectedItemSlice;
export const { getSelectedTreeItem, getSelectedPanel, getSelectedCreateNum, getTreeAllItem, getPanelAllItem, getItemFileManagerView, getCheckedFileItems } = actions;
export default reducer;