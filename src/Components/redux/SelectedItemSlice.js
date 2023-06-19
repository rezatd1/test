import { createSlice } from "@reduxjs/toolkit";

const selectedItemSlice = createSlice({
  name: "SelectedItem",
  initialState: {
    selectedTreeObject: {},
    selectedPanelObject: {},
    selectedCreateNum: 0,
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

export const { getSelectedTreeItem, getSelectedPanel, getSelectedCreateNum, getTreeAllItem, getPanelAllItem, getItemFileManagerView, getCheckedFileItems } = selectedItemSlice.actions;
export default selectedItemSlice;