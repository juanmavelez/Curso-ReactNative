import React from 'react'
import { PhotoCardWithQuery } from '../container/photoCardWithQuery'
import { Layout } from '../components/layout'

export const Detail = ({ detailId }) => (
  <Layout title={`Fotografia ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
