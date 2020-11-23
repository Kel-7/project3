import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CInputGroupText,
    CRow
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const inputTransaksiForm = () => {
    return(
    <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Input Barang
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>ID Transaksi</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="email" id="username3" name="username3" autoComplete="name"/>
                    <CInputGroupAppend>
                      <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                    </CInputGroupAppend>
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>Nama Barang</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="email" id="email3" name="email3" autoComplete="username"/>
                    <CInputGroupAppend>
                      <CInputGroupText><CIcon name="cil-envelope-closed" /></CInputGroupText>
                    </CInputGroupAppend>
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup className="form-actions">
                  <CButton type="submit" size="sm" color="primary">Submit</CButton>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
    </CRow>
    )
}

export default inputTransaksiForm