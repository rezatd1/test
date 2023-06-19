import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSelectedPanel, getSelectedTreeItem } from '../../../../redux/SelectedItemSlice';
import FolderIcon from '@mui/icons-material/Folder';

export default function ItemTableView() {
    const dispatch = useDispatch();
    const CSSActiveStyle = {
        backgroundColor: '#d9d9d9',
        border: '1px solid #A6A6A6'
    }
    const wantedPanelAllItems = useSelector((state) => state.SelectedItem.panelAllItems);
    const wantedSelectedPanelItem = useSelector((state) => state.SelectedItem.selectedPanelObject);


    return (
        <div className='w-100 h6'>
            <table className=' row'>
                <thead>
                    <tr className='col-12 row'>
                        <th className='border p-1 d-flex justify-content-center col-3'><span>نام</span></th>
                        <th className='border p-1 d-flex justify-content-center col-3'><span>نوع فایل</span></th>
                        <th className='border p-1 d-flex justify-content-center col-3'><span>حجم</span></th>
                        <th className='border p-1 d-flex justify-content-center col-3'><span>ابعاد</span></th>
                    </tr>
                </thead>
                <tbody>
                    {wantedPanelAllItems.map((item) =>
                        item.isFolder ? (
                            <tr key={item.key} style={item == wantedSelectedPanelItem ? CSSActiveStyle : null} onClick={()=> dispatch(getSelectedPanel(item))} onDoubleClick={()=> dispatch(getSelectedTreeItem(item))} className='col-12 row p-2 rounded custom-bg-3'>
                                <td className='d-flex justify-content-start col-3'><span className='text-truncate'><FolderIcon sx={{marginLeft: "0.5rem"}} />{item.name}</span></td>
                                <td className='d-flex justify-content-center col-3'><span>پوشه</span></td>

                            </tr>
                        ) : (
                            <tr key={item.key} style={item == wantedSelectedPanelItem ? CSSActiveStyle : null} onClick={()=> dispatch(getSelectedPanel(item))} onDoubleClick={()=> dispatch(getSelectedTreeItem(item))} className='col-12 row p-2 rounded custom-bg-3'>
                                <td className='d-flex justify-content-center col-3'><span className='text-truncate'>{item.name}</span></td>
                                <td className='d-flex justify-content-center col-3'><span>{(item.name.includes(".pdf") ? ("PDF") : ("JPG"))}</span></td>
                                <td className='d-flex justify-content-center col-3'><span>{Math.ceil(item.volume / 1048553)} مگابایت</span></td>
                                <td className='d-flex justify-content-center col-3'><span>{item.height}x{item.width} میلیمتر</span></td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}
