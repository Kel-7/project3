import React from 'react';
import {
    CButton,
    CCard,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'

import listProdukDummy from './dataDummy/listProdukDummy';

const fields = ['no', 'No Transaksi', 'Nama Produk']

const listProduk = () => {
    return(
    <div className="animated fadeIn">
      <CRow className="d-flex justify-content-between">
        <CCol>
          <CCard>
            <CCardHeader>
              List Produk
            </CCardHeader>
            <CDataTable
              items={listProdukDummy}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <div className="row mx-md-n5">
                        <CButton className="m-2" color="success">Edit</CButton>
                        <CButton className="m-2" color="danger">Delete</CButton>
                      </div>
                    </td>
                  )
              }}
            />
          </CCard>
        </CCol>
      </CRow>
    </div>
    )
}


export default listProduk