import React from 'react'
import { useSelector } from 'react-redux';

export default function FolderItemTableView() {
    const wantedPanelAllItems = useSelector((state) => state.SelectedItem.panelAllItems);

    return (
        <div className='w-100'>
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
                        <tr key={item.key} className='col-12 row mt-2'>
                            <td className='d-flex justify-content-center col-3'><span>{item.name}</span></td>
                            <td className='d-flex justify-content-center col-3'><span>پوشه</span></td>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
