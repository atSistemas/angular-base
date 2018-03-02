import { Location } from '@angular/common'
import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { StoreModuleImport } from 'base/imports'

import { expect } from 'chai'
import { spy } from 'sinon'

import { CalculatorActions } from '../../../actions'
import { ButtonComponent } from '../../button/button.component'
import { ButtonPannelComponent } from '../buttonPannel.component'

describe('Calculator / Components', () => {
  let component: ButtonPannelComponent
  let fixture: ComponentFixture<ButtonPannelComponent>
  let de: DebugElement
  let el: HTMLElement
  let store: Store<any>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPannelComponent, ButtonComponent],
      imports: [StoreModuleImport],
      providers: [CalculatorActions]
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonPannelComponent)
    component = fixture.componentInstance
    de = fixture.debugElement
    el = fixture.nativeElement

    store = de.injector.get(Store)
  })

  afterEach(() => {
    getTestBed().resetTestingModule()
  })

  describe('Calculator: component: buttonPannel', () => {
    describe('layout', () => {
      it('should have 19 buttons', () => {
        expect(el.querySelectorAll('button')).to.have.lengthOf(19)
      })
    })

    describe('behaviour', () => {
      it('should dispatch an action on button click', () => {
        const spyDispatch = spy(store, 'dispatch')
        const buttons = de.queryAll(By.css('button'))
        buttons.forEach((button) => {
          button.triggerEventHandler('click', {})
          expect(spyDispatch.called).to.equal(true)
          spyDispatch.reset()
        })
      })
    })
  })
})
