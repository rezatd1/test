import React, { Component } from 'react'
import { getSelectedPanel, getSelectedTreeItem } from '../../../../reduxClassBased/SelectedItemSlice';
import FolderIcon from '@mui/icons-material/Folder';
import { connect } from 'react-redux';

const CSSActiveStyle = {
    backgroundColor: '#d9d9d9',
    border: '1px solid #A6A6A6'
}

const mapStateToProps = (state) => ({ panelAllItems: state.SelectedItem.panelAllItems, panelSelectedItem: state.SelectedItem.panelAllItems });
const mapDispatchToProps = { getSelectedTreeItem, getSelectedPanel };
class ItemTableView extends Component {

    render() {
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
                        {this.props.panelAllItems.map((item) =>
                            item.isFolder ? (
                                <tr key={item.key} style={item == this.props.panelSelectedItem ? CSSActiveStyle : null} onClick={() => this.props.getSelectedPanel(item)} onDoubleClick={() => this.props.getSelectedTreeItem(item)} className='col-12 row p-2 rounded custom-bg-3'>
                                    <td className='d-flex justify-content-start col-3'><span className='text-truncate'><FolderIcon sx={{ marginLeft: "0.5rem" }} />{item.name}</span></td>
                                    <td className='d-flex justify-content-center col-3'><span>پوشه</span></td>

                                </tr>
                            ) : (
                                <tr key={item.key} style={item == this.props.panelSelectedItem ? CSSActiveStyle : null} onClick={() => this.props.getSelectedPanel(item)} onDoubleClick={() => this.props.getSelectedTreeItem(item)} className='col-12 row p-2 rounded custom-bg-3'>
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
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemTableView);
