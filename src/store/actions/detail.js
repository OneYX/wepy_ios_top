/**
 * Created by ztadmin on 2018/1/16.
 */
import {REQUEST_APP_DETAIL} from '../types/detail'
import {createAction} from 'redux-actions'
import {requestData} from '../../common/util'

export const requestAppDetail = createAction(REQUEST_APP_DETAIL, (appId, country) => {
  return new Promise((resolve, reject) => {
    requestData('https://itunes.apple.com/lookup?id=' + appId + '&country=' + country, function (data) {
      resolve(data.results[0])
    }, function (error) {
      reject(error)
    })
  })
})
