import { getTestBed, TestBed } from '@angular/core/testing'
import { Headers, HttpModule, RequestOptions } from '@angular/http'
import { expect } from 'chai'

import { BaseService } from '../base.service'

describe('services', () => {

  describe('base service', () => {
    let service: BaseService

    const mockHeader = new Headers({
      'Content-Type': 'application/json'
    })

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpModule ],
        providers: [ BaseService ]
      })

      service = TestBed.get(BaseService)
    })

    afterEach(() => {
      getTestBed().resetTestingModule()
    })

    it('should have json headers ', () => {
      expect(service.headers).to.deep.equal(mockHeader)
    })

    it('should create options from json headers', () => {
      const expectedRequestOptions = new RequestOptions({
        headers: mockHeader,
        withCredentials: true
      })
      expect(service.options).to.deep.equal(expectedRequestOptions)
    })
  })
})
