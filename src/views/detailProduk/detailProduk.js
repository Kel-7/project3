import React from 'react'
import {
    CCard,
    CCardBody,
    CCardFooter,
    CMedia,
    CMediaBody,
    CButton,
    CCol
  } from  '@coreui/react'

const detailProduk = () => {
    return(
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
              <CMedia>
                <img src="https://cf.shopee.co.id/file/a70a840fef182f38e4ed546c241eb878" height="200" width="150"/>
                <CMediaBody>
                    <h5 className="mt-0">Teh Sari Wangi</h5>
                </CMediaBody>
              </CMedia>  
            </CCardBody>
            <CCardFooter>
              <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <CButton block color="success">More</CButton>
              </CCol>
            </CCardFooter>
          </CCard>
        </CCol>
    )
}

export default detailProduk